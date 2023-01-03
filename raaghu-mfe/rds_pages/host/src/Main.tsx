import React, { Suspense, useEffect, useState } from "react";
import { Route, useNavigate, Routes, Navigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
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
const MaintainanceCompo = React.lazy(() => import("Maintainance/Maintainance"));
const TenantCompo = React.lazy(() => import("Tenant/Tenant"));
const EditionCompo = React.lazy(() => import("Edition/Edition"));
const WebhookSubscriptionCompo = React.lazy(
	() => import("WebhookSubscription/WebhookSubscription")
);
const SettingsCompo = React.lazy(() => import("Settings/Settings"));
const VisualSettingsCompo = React.lazy(
	() => import("VisualSetting/VisualSetting")
);
const Main = () => {
	const [isAuth, setIsAuth] = useState(false);
	const navigate = useNavigate();
	let accessToken: string | undefined = undefined;

	useEffect(() => {
		const loginCredentials = localStorage.getItem("persist:root");
		if (loginCredentials != null) {
			let credentials = JSON.parse(loginCredentials);
			let parsedCredentials = JSON.parse(credentials.login);
			accessToken = parsedCredentials.accessToken;
		}

		// setIsAuth(true);
		if (accessToken) {
			setIsAuth(true);
			navigate("/dashboard");
		}
	}, [accessToken]);

	const forgotPasswordHandler: any = (isForgotPasswordClicked: boolean) => {
		if (isForgotPasswordClicked) {
			navigate("/forgot-password");
		}
	};

	// datas for changing language from dropdown on top-nav in dashboard

	const languageItems = [
		{
			label: "EN(US)",
			val: "en",
			icon: "us",
			iconWidth: "20px",
			iconHeight: "20px",
		},
		{
			label: "English(IND)",
			val: "en",
			icon: "in",
			iconWidth: "20px",
			iconHeight: "20px",
		},
		{
			label: "Français",
			val: "fr",
			icon: "fr",
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
			label: "Português (Brasil)",
			val: "pt-BR",
			icon: "br",
			iconWidth: "20px",
			iconHeight: "20px",
		},
		{
			label: "Türkçe",
			val: "tr",
			icon: "tr",
			iconWidth: "20px",
			iconHeight: "20px",
		},
		{
			label: "Italiano",
			val: "it",
			icon: "it",
			iconWidth: "20px",
			iconHeight: "20px",
		},
	];

	const { t } = useTranslation();

	// OnClickHandler for language change

	const onClickHandler = (e: any) => {
		i18n.changeLanguage(e.target.getAttribute("data-name"));
	};

	useEffect(() => {}, []);

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
			{isAuth && (
				<div className="d-flex flex-column flex-root">
					<div className="page d-flex flex-column flex-column-fluid">
						<div
							className="header align-items-stretch fixed-top"
							style={{ position: "fixed" }}
						>
							<RdsCompTopNavigation
								languageItems={languageItems}
								brandName="raaghu"
								onClick={onClickHandler}
								profileTitle="Host Admin"
								profileName="admin"
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
							style={{ position: "fixed", top: "4.4453rem" }}
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
									<Route path="/dashboard" element={<DashboardCompo />}></Route>
									<Route
										path="/maintainance"
										element={<MaintainanceCompo />}
									></Route>
									<Route
										path="/tenant"
										element={<TenantCompo></TenantCompo>}
									></Route>
									<Route
										path="/edition"
										element={<EditionCompo></EditionCompo>}
									></Route>

									<Route
										path="/settings"
										element={<SettingsCompo></SettingsCompo>}
									></Route>

									<Route
										path="/visual-setting"
										element={<VisualSettingsCompo></VisualSettingsCompo>}
									></Route>
									<Route
										path="/webhook-subscription"
										element={
											<WebhookSubscriptionCompo></WebhookSubscriptionCompo>
										}
									></Route>
								</Routes>
							</div>
						</div>
					</div>
				</div>
			)}
		</Suspense>
	);
};
export default Main;
