import { useRouter } from 'next/router';
import React from 'react';

import { LocalStorageDriver } from '../src/drivers/localStorageDriver';

type AuthUser = {
	id: number,
	name: string,
	email: string,
	token: string,
}

type AuthContextType = {
	user?: AuthUser;
	login: (user: AuthUser) => void;
	logout: () => void;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

type Props = {
	children: React.ReactNode
}

const localStorageDriver = new LocalStorageDriver();

// Wrap your app in this
export const AuthProvider: React.FC<Props> = ({ children }): JSX.Element => {
	const router = useRouter()
	const [user, setUser] = React.useState<AuthUser | undefined>(undefined);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	React.useEffect(() => {
		if (!user) {
			const storedUser = localStorageDriver.getJson('app_storage_user')

			if (storedUser) {
				setUser(storedUser)
			} else {
				router.push('/login')
			}
		}
	}, [])

	const login = (user: AuthUser) => {
		setIsLoading(true);
		setUser(user);
		setIsLoading(false);
	}

	const logout = () => {
		setUser(undefined);
		router.push('/login')
	}

	// Prevent re-renders unless wanted state changes
	const memoContext = React.useMemo(
		() => ({
			user,
			login,
			logout
		}),
		[user]
	);

	return (
		<AuthContext.Provider value={memoContext}>
			{!isLoading && children}
		</AuthContext.Provider>
	)
}


// Hook to use in each component
export const useAuth = (): AuthContextType => {
	return React.useContext(AuthContext);
}
