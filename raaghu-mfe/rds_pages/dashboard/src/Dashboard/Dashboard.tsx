import React, { Suspense } from "react";


const DashboardCompo = React.lazy(() => import("rds_components/RdsCompAdminDashboard"));

var version = process.env.BUILD_DATE;

const Dashboard = () => (
	<Suspense>
		Latest Build Date:{version}
		<DashboardCompo />					
	</Suspense>
);

export default Dashboard;