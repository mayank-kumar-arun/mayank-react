
import React from "react";
import RdsCompAdminDashboard from "./admin-dashboard/rds-comp-admin-dashboard";
import RdsCompLogin from "./login/rds-comp-login";

const App = () => {

    const loginHandler =(email?:string,password?:string)=>{
        console.log(email);
        console.log(password);
    }
    return (

    <div>
        <RdsCompLogin  onLogin={loginHandler}></RdsCompLogin>
        <RdsCompAdminDashboard></RdsCompAdminDashboard>
    </div>
    )
		

    };

export default App;
