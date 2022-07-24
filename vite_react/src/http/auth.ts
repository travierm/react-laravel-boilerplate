import axios from 'axios';

import httpClient from './client';

const routes = {
	LOGIN: '/api/auth/login',
	CREATE: '/api/auth/register'
}


export type UserAuthForm = {
	email: string,
	password: string
}

export type CreateUserResponse = {
	id: string;
	email: string;
	token: string;
};

type LoginResponse = {
	id: string,
	email: string,
	token: string
}

export async function sanctumCsrf() {
	return httpClient.get('/sanctum/csrf-cookie')
}

export async function loginUser(requestData: UserAuthForm): Promise<CreateUserResponse> {
	try {
		console.log('here')
		await sanctumCsrf()
		const { data } = await httpClient.post<CreateUserResponse>(routes.LOGIN, requestData)

		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			// 👇️ error: AxiosError<any, any>
		} else {
			console.log('unexpected error: ', error);

		}

		throw error
	}
}

export async function createUser(requestData: UserAuthForm): Promise<CreateUserResponse> {
	try {
		const { data } = await httpClient.post<CreateUserResponse>(routes.CREATE, requestData)

		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			console.log('error message: ', error.message);
			// 👇️ error: AxiosError<any, any>
		} else {
			console.log('unexpected error: ', error);

		}

		throw error
	}
}
