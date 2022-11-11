import React from "react";
import RdsCompAdminDashboard from "./admin-dashboard/rds-comp-admin-dashboard";
import RdsCompForgotPassword from "./forgot-password/rds-comp-forgot-password";
import RdsCompLogin from "./login/rds-comp-login";
import RdsCompOrganizationTree from "./organization-tree/rds-comp-organization-tree";
import RdsCompSideNavigation from "./side-navigation/rds-comp-side-navigation";
import RdsCompTopNavigation from "./top-navigation/rds-comp-top-navigation";
import RdsCompWebsiteLog from "./website-log/rds-comp-website-log";
import RdsCompAlertPopup from "./alert-popup/rds-comp-alert-popup";
const App = () => {
  const loginHandler = (email?: string, password?: string) => {
    console.log(email);
    console.log(password);
  };
  return (
    <div>
      <RdsCompLogin onLogin={loginHandler}></RdsCompLogin>
      <RdsCompAdminDashboard></RdsCompAdminDashboard>
      <RdsCompSideNavigation></RdsCompSideNavigation>
      <RdsCompTopNavigation></RdsCompTopNavigation>
      <RdsCompForgotPassword></RdsCompForgotPassword>
      <RdsCompWebsiteLog></RdsCompWebsiteLog>
      <RdsCompAlertPopup />
      <RdsCompOrganizationTree></RdsCompOrganizationTree>
    </div>
  );
};
export default App;
