import { AxiosResponse } from 'axios';

import http from './axios';

export function getUser() {
	return http.get('/api/user')
}

export function loginUser(email: string, password: string) {
	return http.get('/sanctum/csrf-cookie').then(() => {
		return http.post('/api/auth/login', {
			email,
			password
		})
	})
}

export function registerUser(name: string, email: string, password: string): Promise<AxiosResponse> {
	return http.post('/api/auth/register', {
		email,
		name,
		password
	})
}
