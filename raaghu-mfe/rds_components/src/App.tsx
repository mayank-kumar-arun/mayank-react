
import React from "react";
import RdsCompAdminDashboard from "./admin-dashboard/rds-comp-admin-dashboard";
import RdsCompLogin from "./login/rds-comp-login";
import RdsCompSideNavigation from "./side-navigation/rds-comp-side-navigation";
import RdsCompTopNavigation from "./top-navigation/rds-comp-top-navigation";

const App = () => {

    const loginHandler =(email?:string,password?:string)=>{
        console.log(email);
        console.log(password);
    }
    return (

    <div>
        <RdsCompLogin  onLogin={loginHandler}></RdsCompLogin>
        <RdsCompAdminDashboard></RdsCompAdminDashboard>
        <RdsCompSideNavigation></RdsCompSideNavigation>
        <RdsCompTopNavigation></RdsCompTopNavigation>
    </div>
    )
		

    };

export default App;
