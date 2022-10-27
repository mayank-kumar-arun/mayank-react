import React, { Suspense } from "react";


const DashboardCompo = React.lazy(() => import("rds_components/RdsCompAdminDashboard"));
const SideNavCompo = React.lazy(() => import("rds_components/RdsCompSideNavigation"));
const TopNavCompo = React.lazy(() => import("rds_components/RdsCompTopNavigation"));


const Dashboard = () => (
	<Suspense>
		<TopNavCompo></TopNavCompo>
		<SideNavCompo></SideNavCompo>
		<DashboardCompo />					
	</Suspense>
);

export default Dashboard;

