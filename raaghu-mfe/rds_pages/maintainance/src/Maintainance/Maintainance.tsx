import React, { useState } from "react";
import { RdsCompWebsiteLog, RdsCompAlertPopup } from "../../../rds-components";

const Maintainance = () => {
	// const [isDeleteClicked, setIsDeleteClicked] = useState(false);
	// const AlertHandler = () => {
	//     setIsDeleteClicked(true);
	// }
	return (
		<div>
			<RdsCompWebsiteLog
				websiteLogData={[]}
				pagination={false}
				alignmentType={undefined}
				totalRecords={0}
				recordsPerPage={0}
			/>

			<RdsCompAlertPopup />
		</div>
	);
};

export default Maintainance;
