import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export interface AuthGuardProps {
	children: ReactNode;
}

export const AuthGuard = (props: AuthGuardProps) => {
	const [isAuth, setIsAuth] = useState(false);
	let accessToken: string | undefined = undefined;

	useEffect(() => {
		const loginCredentials = localStorage.getItem("persist:root");
		if (loginCredentials != null) {
			let credentials = JSON.parse(loginCredentials);
			let parsedCredentials = JSON.parse(credentials.login);
			accessToken = parsedCredentials.accessToken;
		}
		if (accessToken == undefined) {
			<Navigate to="/login" replace />;
		}
		if (accessToken) {
			
			<Navigate to="/dashboard" replace />;
		}
	}, [accessToken]);

	return <>{props.children}</>;
};

export default AuthGuard;
