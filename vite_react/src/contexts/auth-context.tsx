/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { LocalStorageDriver } from '../drivers/local-storage-driver';
import { loginUser, UserAuthForm } from '../http/auth';

type RegisterUserRequest = {
	email: string,
	password: string
}

type AuthUser = {
	id: number,
	email: string,
	token: string,
}

const isAuthUser = (o: { [key: string]: string | number }): o is AuthUser => {
	return "email" in o && "id" in o && "token" in o;
}

type AuthContextType = {
	user?: AuthUser;
	logout: () => void;
	register: (user: RegisterUserRequest) => void;
	login: (email: string, password: string) => void;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

type Props = {
	children: React.ReactNode
}

const localStorageDriver = new LocalStorageDriver();

// Wrap your app in this
export const AuthProvider: React.FC<Props> = ({ children }): JSX.Element => {
	const navigate = useNavigate();

	const [user, setUser] = React.useState<AuthUser | undefined>(undefined);
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	React.useEffect(() => {
		if (!user) {
			// types are fun
			const parsedResult = localStorageDriver.getJson<AuthUser>('app_storage_user', isAuthUser)

			// No user was found in local storage
			if (parsedResult === null) {
				navigate('/login');
				return;
			}

			// Parsing the user from local storage had an issue
			if (parsedResult.hasError) {
				console.error("SOMETHING NO WORKY :'( computer is sad", parsedResult)
				return;
			}

			// Parsed the user successfully
			setUser(parsedResult.parsed)
		}
	}, [])

	const login = (email: string, password: string) => {
		setIsLoading(true);

		const user: UserAuthForm = {
			email,
			password
		}

		loginUser(user)
			.then((data) => {
				setUser({
					id: data.id,
					email: data.email,
					token: data.token
				})

				navigate('/');
			})
			.catch((err) => {
				setUser(undefined)

				throw err
			})

		setIsLoading(false);
	}

	const register = (user: RegisterUserRequest) => {
		// setUser(user);
		navigate('/login')
	}

	const logout = () => {
		setUser(undefined);
		navigate('/login')
	}

	// Prevent re-renders unless wanted state changes
	const memoContext = React.useMemo(
		() => ({
			user,
			login,
			register,
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
