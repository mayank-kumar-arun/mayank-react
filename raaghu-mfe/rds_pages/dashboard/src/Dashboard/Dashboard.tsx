import React, { Suspense } from "react";


const DashboardCompo = React.lazy(() => import("rds_components/RdsCompAdminDashboard"));
const SideNavCompo = React.lazy(() => import("rds_components/RdsCompSideNavigation"));
const TopNavCompo = React.lazy(() => import("rds_components/RdsCompTopNavigation"));


const Dashboard = () => (
	<Suspense>
		<TopNavCompo ></TopNavCompo>
		<div style={{display:"flex"}}>
		<SideNavCompo></SideNavCompo>
		<DashboardCompo />					

		</div>
	</Suspense>
);

export default Dashboard;

