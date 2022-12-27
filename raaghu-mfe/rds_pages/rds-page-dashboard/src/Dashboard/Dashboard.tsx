import React, { Suspense } from "react";

import { RdsCompAdminDashboard } from "../../../rds-components";

export interface DashboardProps {}

const Dashboard = (props: DashboardProps) => (
	<Suspense>
		<RdsCompAdminDashboard />
	</Suspense>
);

export default Dashboard;
