import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { LocalStorageDriver } from '../src/drivers/localStorageDriver';

const localStorageDriver = new LocalStorageDriver();

interface AuthUser {
	id?: number,
	name?: string,
	token?: string,
	updateUser: () => {}
}

export function useAuth() {
	const router = useRouter()

	const updateUser = (user: AuthUser) => {
		setLocalStorage(user);
		setUser(() => ({
			id: user.id,
			name: user.name,
			token: user.token,
			updateUser
		} as any))
	}

	const setLocalStorage = (user: AuthUser) => {
		localStorageDriver.setJson('app_storage_user', user);
	}

	const getLocalStorage = () => {
		return localStorageDriver.getJson('app_storage_user')
	}

	const redirectIfNotAuthed = () => {
		useEffect(() => {
			if (user.token) return;


			router.push('/login')
		})
	}

	const [user, setUser] = React.useState({
		id: null,
		name: 'text',
		token: null,
		updateUser
	})

	useEffect(() => {
		if (!user.token) {
			const storedUser = getLocalStorage();

			if (storedUser) {
				updateUser(storedUser)
			}
		}
	})

	return { user, setUser, redirectIfNotAuthed }
}
