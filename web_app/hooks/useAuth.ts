import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { authContext } from '../contexts/auth-context';
import { LocalStorageDriver } from '../src/drivers/localStorageDriver';

const localStorageDriver = new LocalStorageDriver();


export function useAuth(checkAuth = true) {
	const router = useRouter()
	var contextData = React.useContext(authContext);

	console.log(contextData);


	const updateUser = () => {
		//localStorageDriver.set('app_storage_token', user.token)
		//localStorageDriver.setJson('app_storage_user', user);


	}

	// if (!user.token) {
	// 	const storedUser = localStorageDriver.getJson('app_storage_user')

	// 	if (storedUser) {
	// 		updateUser(storedUser)
	// 	}

	// 	if (checkAuth) {
	// 		router.push('/login')
	// 	}
	// }

	const logout = () => {
		// localStorageDriver.clear()
		// updateUser({
		// 	isLoggedIn: false
		// })

		router.push('/login')
	}

	return { authContext, updateUser, logout }
}
