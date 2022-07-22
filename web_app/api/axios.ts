import axios from 'axios';

import { LocalStorageDriver } from '../src/drivers/localStorageDriver';

const localStorageDriver = new LocalStorageDriver
const http = axios.create({
	withCredentials: true,
	baseURL: process.env.NEXT_PUBLIC_API_URL,
})

http.interceptors.request.use(
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

http.interceptors.response.use(
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

export default http;
