import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import {
	RdsCompAdminDashboard,
	RdsCompTopNavigation,
	RdsCompSideNavigation,
} from "../../../rds-components";

export interface DashboardProps {}

const languageItems = [ {
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
},]

const Dashboard = (props: DashboardProps) => (

	<Suspense>
		<RdsCompTopNavigation
			languageItems={languageItems}
		></RdsCompTopNavigation>
		<div style={{ display: "flex" }}>
			<RdsCompSideNavigation></RdsCompSideNavigation>
			<RdsCompAdminDashboard />
		</div>
	</Suspense>
);

export default Dashboard;
