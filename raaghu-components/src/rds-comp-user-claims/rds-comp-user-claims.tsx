import React from "react";
import { RdsInput, RdsLabel, RdsButton } from "../rds-elements";

export interface RdsCompUserClaimsProps {}

const RdsCompUserClaim = (props: RdsCompUserClaimsProps) => {
	return (
		<>
			<div className="tab-content">
				<form>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group mb-3">
								<RdsLabel label="Type" class="mb-1" size="14px"></RdsLabel>
								<RdsInput
									inputType="text"
									placeholder="Type"
									size="small"
								></RdsInput>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group mb-3">
								<RdsLabel label="Value" class="mb-1" size="14px"></RdsLabel>
								<RdsInput
									inputType="text"
									placeholder="Value"
									size="small"
								></RdsInput>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div className="footer-buttons fixed-bottom my-3">
				<div className="row">
					<div className="col-md-6 d-flex">
						<RdsButton
							 type="button"
							label="CANCEL"
							outlineButton={true}
							colorVariant="primary"
							class="me-2 ms-4"
							size="small"
						></RdsButton>
						<RdsButton
							type="button"
							label="NEXT"
							colorVariant="primary"
							class="save-btn"
							size="small"
						></RdsButton>
					</div>
				</div>
			</div>
		</>
	);
};

export default RdsCompUserClaim;
