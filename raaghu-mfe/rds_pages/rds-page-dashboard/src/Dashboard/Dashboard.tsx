import React, { Suspense, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import i18n from "i18next";



import {
	RdsCompAdminDashboard,
	RdsCompTopNavigation,
	RdsCompSideNavigation,
} from "../../../rds-components";

export interface DashboardProps {}

const languageItems = [ {
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
]

const Dashboard = (props: DashboardProps) => {

	useEffect(() => {
	}, []);

	const onClickHandler=(e:any)=>{
		console.log(e.target.getAttribute('data-name'));
		i18n.changeLanguage(e.target.getAttribute('data-name'));
	}


	return (
		<Suspense>
			<RdsCompTopNavigation
				languageItems={languageItems}
				onClick={onClickHandler}
			></RdsCompTopNavigation>
			<div style={{ display: "flex" }}>
				<RdsCompSideNavigation></RdsCompSideNavigation>
				<RdsCompAdminDashboard />
			</div>
		</Suspense>
	);
}

export default Dashboard;
