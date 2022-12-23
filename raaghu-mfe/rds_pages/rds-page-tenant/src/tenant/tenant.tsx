import React from "react";
import { RdsCompTenantList } from "../../../rds-components";

const Tenant = () => {
	return (
		<div>
			<RdsCompTenantList
				tableHeaders={[
					{
						displayName: "Tenant",
						key: "tenantInfoTemplate",
						datatype: "html",
						dataLength: 30,
						sortable: true,
						required: true,
					},
					{
						displayName: "Edition",
						key: "editionTemplate",
						datatype: "html",
						dataLength: 30,
						sortable: true,
						required: true,
					},
					{
						displayName: "Status",
						key: "statusTemplate",
						datatype: "html",
						dataLength: 30,
						sortable: true,
						required: true,
					},
					{
						displayName: "Subscription End Date",
						key: "subscriptionEndDateUtc",
						datatype: "html",
						dataLength: 30,
						sortable: true,
						required: true,
					},
				]}
				tableData={[]}
			></RdsCompTenantList>
		</div>
	);
};

export default Tenant;
