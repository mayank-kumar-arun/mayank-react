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
	label: "French",
	val: "fr",
	icon: "us",
	iconWidth: "20px",
	iconHeight: "20px",
},]

const Dashboard = (props: DashboardProps) => {

	// const { i18n } = useTranslation();

	useEffect(() => {
		// if (localStorage.getItem("i18nextLng")?.length > 2) {
		// 	i18next.changeLanguage("en");
		//   }
	}, []);

	const onClickHandler=(e:any)=>{
		console.log(e.target.getAttribute('data-name'));
		// i18next.changeLanguage("fr");
		// i18next.changeLanguage(languageCode);

		i18n.changeLanguage(e.target.getAttribute('data-name'));
		// if (typeof i18n.changeLanguage === 'function') {
		// 	console.log("changeLanguage is a function")
		//   } else {
		// 	console.log("changeLanguage is not a function")
		//   }
		// console.log("Dashboard");
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
