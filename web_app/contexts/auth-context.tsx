// src/context/auth-context.js
import React from 'react';

export type AuthUser = {
	id: number,
	name: string,
	email: string,
	token: string,
}

export type AuthContext = {
	user?: AuthUser;
	isLoggedIn: boolean
}

export const authContext = React.createContext<AuthContext>({} as AuthContext);

type Props = {
	children: React.ReactNode
}
export const AuthProvider: React.FC<Props> = ({ children }) => {
	// const auth = useAuth();

	const [authContextDefault, setUser] = React.useState({
		user: undefined,
		isLoggedIn: false
	})

	return (
		<authContext.Provider value={authContextDefault}>
			{children}
		</authContext.Provider>
	)
}
