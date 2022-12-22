import React from "react";
import {RdsCompTenantList} from "../../../rds-components"


const Tenant = () => {
	return (
		<div>
			<RdsCompTenantList
				tenantHeaders={[
					{
						displayName: "Tenant",
						key: "tenantInfoTemplate",
						dataType: "html",
						dataLength: 30,
						sortable: true,
						required: true,
						filterable: true,
					},
					{
						displayName: "Edition",
						key: "editionTemplate",
						dataType: "html",
						dataLength: 30,
						sortable: true,
						required: true,
						filterable: true,
					},
					{
						displayName: "Status",
						key: "statusTemplate",
						dataType: "html",
						dataLength: 30,
						sortable: true,
						required: true,
						filterable: true,
					},
					{
						displayName: "Subscription End Date",
						key: "subscriptionEndDateUtc",
						dataType: "html",
						dataLength: 30,
						sortable: true,
						required: true,
						filterable: true,
					},
				]}
				tableData={[]}
				editionList={[]}
			></RdsCompTenantList>
		</div>
	);
};

export default Tenant;
