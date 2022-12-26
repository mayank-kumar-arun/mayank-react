import React, { Suspense, useEffect } from "react";
import { Route, useNavigate, Routes, Navigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../libs/state-management";
import {
	RdsCompSideNavigation,
	RdsCompTopNavigation,
} from "../../rds-components";
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
	const languageItems = [
		{
			label: "EN(US)",
			val: "us",
			icon: "us",
			iconWidth: "20px",
			iconHeight: "20px",
		},
		{
			label: "Deutsch",
			val: "de",
			icon: "de",
			iconWidth: "20px",
			iconHeight: "20px",
		},
		{
			label: "English(IND)",
			val: "in",
			icon: "in",
			iconWidth: "20px",
			iconHeight: "20px",
		},
		{
			label: "English (Default)",
			val: "us",
			icon: "us",
			iconWidth: "20px",
			iconHeight: "20px",
		},
	];
	return (
		<Suspense fallback="loading...">
			{!accessToken && (
				<Routes>
					<Route path="/" element={<LoginCompo />}></Route>
					<Route
						path="/forgot-password"
						element={<ForgotPasswordCompo />}
					></Route>
				</Routes>
			)}
			<div className="d-flex flex-column flex-root">
				<div className="page d-flex flex-column flex-column-fluid">
					<div className="header align-items-stretch">
						<RdsCompTopNavigation
							languageItems={languageItems}
							brandName="raaghu"
						></RdsCompTopNavigation>
					</div>
					<div
						className="
        d-flex
        flex-column-fluid
        align-items-stretch
        container-fluid
        px-0
        main-body"
					>
						<div className="aside" id="aside">
							<div className="mx-2">
								<RdsCompSideNavigation></RdsCompSideNavigation>
								{/* <rds-side-nav [isPageWrapper]="true" [activeMenu]="activeMenu" [isLightMode]="isLightMode" 
														(collapsedState)="onCollapse($event)" [collapseRequired]="collapseRequired" [sidenavItems]="getSideNavItems()"
														(emitPath)="redirectPath($event)" (selectedMode)="toggleBetweenMode($event)"></rds-side-nav> */}
							</div>
						</div>
						<div
							className="wrapper d-flex flex-column flex-row-fluid rds-scrollable-wrapper pt-3 px-sm-0 px-lg-3 "
							id="FixedHeaderOverFlow"
						>
							<Routes>
								<Route path="/Dashboard" element={<DashboardCompo />}></Route>
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</Suspense>
	);
};
export default Main;
