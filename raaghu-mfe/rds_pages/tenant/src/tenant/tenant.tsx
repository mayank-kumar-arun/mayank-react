import React from "react";

const TenantListcompo = React.lazy(
	() => import("raaghu-components/RdsCompTenantList")
);

const Tenant = () => {
	return (
		<div>
			<TenantListcompo
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
			></TenantListcompo>
		</div>
	);
};

export default Tenant;
