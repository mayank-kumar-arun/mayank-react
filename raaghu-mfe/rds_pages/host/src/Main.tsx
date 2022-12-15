import React, { Suspense, useEffect } from "react";
import { Route, useNavigate, Routes, Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../libs/state-management";
const DashboardCompo = React.lazy(() => import("Dashboard/Dashboard"));
const LoginCompo = React.lazy(() => import("Login/Login"));
const ForgotPasswordCompo = React.lazy(
	() => import("ForgotPassword/ForgotPassword")
);
const Main = () => {
	const navigate = useNavigate();
	var accessToken: string | undefined = undefined;

	useEffect(() => {
		const loginCredentials = localStorage.getItem("persist:root");
		if (loginCredentials != null) {
			var credentials = JSON.parse(loginCredentials);
			var parsedCredentials = JSON.parse(credentials.login);
			accessToken = parsedCredentials.accessToken;
		}
		if (accessToken) {
			navigate("/Dashboard");
		}
	}, [accessToken]);
	const forgotPasswordHandler: any = (isForgotPasswordClicked: boolean) => {
		if (isForgotPasswordClicked) {
			navigate("/forgot-password");
		}
	};

	return (
		<Suspense fallback="loading...">
			<Routes>
				<Route path="/Dashboard" element={<DashboardCompo />}></Route>
				<Route path="/" element={<LoginCompo />}></Route>
				<Route
					path="/forgot-password"
					element={<ForgotPasswordCompo />}
				></Route>
			</Routes>
		</Suspense>
	);
};
export default Main;
