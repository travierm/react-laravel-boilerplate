import axios from 'axios';

import { LocalStorageDriver } from '../drivers/local-storage-driver';

const localStorageDriver = new LocalStorageDriver
const httpClient = axios.create({
	withCredentials: true,
	baseURL: import.meta.env.VITE_API_URL,
})

httpClient.interceptors.request.use(
	function (config: any) {

		const token = localStorageDriver.get('app_storage_token')
		if (token != null) {
			config.headers.Authorization = `Bearer ${token}`
		}

		return config
	},
	function (error: any) {
		return Promise.reject(error.response)
	}
)

httpClient.interceptors.response.use(
	(response: any) => {
		return response
	},
	function (error: any) {
		if (error.response.status === 401) {
			// do logout
		}
		return Promise.reject(error.response)
	}
)

export default httpClient;
