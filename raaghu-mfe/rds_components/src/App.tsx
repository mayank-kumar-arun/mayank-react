
import React from "react";
import RdsCompAdminDashboard from "./admin-dashboard/rds-comp-admin-dashboard";
import RdsCompForgotPassword from "./forgot-password/rds-comp-forgot-password";
import RdsCompLogin from "./login/rds-comp-login";
import RdsCompSideNavigation from "./side-navigation/rds-comp-side-navigation";
import RdsCompTopNavigation from "./top-navigation/rds-comp-top-navigation";
import RdsCompWebsiteLog from "./website-log/rds-comp-website-log";
import RdsCompAlertPopup from "./alert-popup/rds-comp-alert-popup";
const App = () => {
    const loginHandler =(email?:string,password?:string)=>{
        console.log(email);
        console.log(password);
    }
    const ForgotPassword = (email?:string) =>{
        console.log(email)
    }
    const forgotPasswordHandler = (isForgotPasswordClicked?: boolean) => {
        
    }
    return (
    <div>
        <RdsCompLogin  onLogin={loginHandler} onForgotPassword = {forgotPasswordHandler}></RdsCompLogin>
        <RdsCompAdminDashboard></RdsCompAdminDashboard>
        <RdsCompSideNavigation></RdsCompSideNavigation>
        <RdsCompTopNavigation></RdsCompTopNavigation>
        <RdsCompForgotPassword onForgotPassword={ForgotPassword}></RdsCompForgotPassword>
        <RdsCompWebsiteLog></RdsCompWebsiteLog>
        <RdsCompAlertPopup/>
    </div>
    )
    };
export default App;
