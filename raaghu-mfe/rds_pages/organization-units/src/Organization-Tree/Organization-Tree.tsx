import React from "react";

const RdsCompOrganizationTree = React.lazy(
	() => import("raaghu-components/RdsCompOrganizationTree")
);
const OrganizationTree = () => {
	return (
		<div>
			<RdsCompOrganizationTree></RdsCompOrganizationTree>
		</div>
	);
};

export default OrganizationTree;
