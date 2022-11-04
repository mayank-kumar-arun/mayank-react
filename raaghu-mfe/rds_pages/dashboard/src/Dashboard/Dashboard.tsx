import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";



const DashboardCompo = React.lazy(() => import("rds_components/RdsCompAdminDashboard"));

var version = process.env.BUILD_DATE;


const Dashboard = () => {
	const navigate =	useNavigate();
	const logout = ()=>{ 
	
		localStorage.removeItem("email");
		localStorage.removeItem("password");
		localStorage.removeItem("persist:root");
		// localStorage.removeItem("LoginCredential");
		
		navigate('/')
	}
	
return (
	<Suspense> 
		
		Latest Build Date:{version}
	<button className="btn btn-primary" onClick = {logout}>Log out</button>
		<DashboardCompo />				
	</Suspense>)
}

export default Dashboard;