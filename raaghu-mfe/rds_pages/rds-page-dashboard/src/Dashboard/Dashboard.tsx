import React, { Suspense } from "react";

import { RdsCompAdminDashboard } from "../../../rds-components";
// To view for separetly Dashboard page please uncomment the below link
// import "../../../../raaghu-themes/themes/default.scss";

export interface DashboardProps {}

const Dashboard = (props: DashboardProps) => (
	<Suspense>
		<RdsCompAdminDashboard />
	</Suspense>
);

export default Dashboard;
