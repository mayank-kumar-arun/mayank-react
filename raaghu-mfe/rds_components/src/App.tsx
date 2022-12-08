import React from "react";
import RdsCompAdminDashboard from "./rds-comp-admin-dashboard/rds-comp-admin-dashboard";
import RdsCompForgotPassword from "./rds-comp-forgot-password/rds-comp-forgot-password";
import RdsCompLogin from "./rds-comp-login/rds-comp-login";
import RdsCompOrganizationTree from "./rds-comp-organization-tree/rds-organization-parent";
import RdsCompSideNavigation from "./rds-comp-side-navigation/rds-comp-side-navigation";
import RdsCompTenantList from "./rds-comp-tenant-list/rds-comp-tenant-list";
import RdsCompTopNavigation from "./rds-comp-top-navigation/rds-comp-top-navigation";
import RdsCompWebsiteLog from "./rds-comp-website-log/rds-comp-website-log";
import RdsCompAlertPopup from "./rds-comp-alert-popup/rds-comp-alert-popup";
import RdsCompUserManagement from "./rds-comp-user-management/rds-comp-user-management";
import RdsCompOtherSettings from "./rds-comp-other-settings/rds-comp-other-settings";
const App = () => {
	const loginHandler = (email?: string, password?: string) => {
		console.log(email);
		console.log(password);
	};
	const ForgotPassword = (email?: string) => {
		console.log(email);
	};
	const forgotPasswordHandler = (isForgotPasswordClicked?: boolean) => {};
	return (
		<div>
			<RdsCompLogin
				onLogin={loginHandler}
				onForgotPassword={forgotPasswordHandler}
			></RdsCompLogin>
			<RdsCompAdminDashboard></RdsCompAdminDashboard>
			<RdsCompSideNavigation></RdsCompSideNavigation>
			<RdsCompTopNavigation></RdsCompTopNavigation>
			<RdsCompTenantList
				tableHeaders={[]}
				actions={[]}
				tableData={[]}
				pagination={false}
				onActionSelection={() => {}}
				onNewTenantClick={() => {}}
				onSortSelection={() => {}}
			></RdsCompTenantList>
			<RdsCompForgotPassword
				onForgotPassword={ForgotPassword}
			></RdsCompForgotPassword>
			<RdsCompWebsiteLog
				websiteLogData={[]}
				pagination={false}
				alignmentType={undefined}
				totalRecords={0}
				recordsPerPage={0}
			></RdsCompWebsiteLog>
			<RdsCompAlertPopup />
			<RdsCompOrganizationTree
				organizationTreeData={[{ name: "rtyj" }]}
			></RdsCompOrganizationTree>
			<RdsCompUserManagement
				Usermanagementsettings={undefined}
			></RdsCompUserManagement>
			<RdsCompOtherSettings></RdsCompOtherSettings>
		</div>
	);
};
export default App;
