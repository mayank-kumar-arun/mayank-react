import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import {RdsCompAdminDashboard , RdsCompTopNavigation , RdsCompSideNavigation} from "../../../rds-components"

export interface DashboardProps {}

const Dashboard = (props: DashboardProps) => (
	<Suspense>
		<RdsCompTopNavigation></RdsCompTopNavigation>
		<div style={{ display: "flex" }}>
			<RdsCompSideNavigation></RdsCompSideNavigation>
			<RdsCompAdminDashboard />
		</div>
	</Suspense>
);

export default Dashboard;
