import React from "react";
import { RdsInput, RdsLabel, RdsButton } from "../rds-elements";

export interface RdsCompSecretsProps {}

const RdsCompSecrets = (props: RdsCompSecretsProps) => {
	return (
		<>
			<div className="secrets">
				<div>
					<div className="row">
						<div className="col-md-5 mb-3 form-group">
							<RdsLabel
								size="14px"
								label="Type"
								class="form-label"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter Type"
								required={true}
							></RdsInput>
						</div>
						<div className="col-md-4 mb-3 form-group">
							<RdsLabel
								size="14px"
								label="Value"
								class="form-label"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter Value"
								required={true}
							></RdsInput>
						</div>
						<div className="col-md-3 mb-3 form-group">
							<RdsLabel
								size="14px"
								label="Expiration"
								class="form-label"
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter a value"
								required={true}
							></RdsInput>
						</div>
					</div>
					<div className="mb-3 form-group">
						<RdsLabel
							size="14px"
							label="Description"
							class="form-label"
							children={<span style={{ color: "red" }}>*</span>}
						></RdsLabel>
						<RdsInput
							size="small"
							inputType="text"
							isDisabled={false}
							readonly={false}
							placeholder="Enter Type"
							required={true}
						></RdsInput>
					</div>
					<div className="mt-3 mb-3">
						<RdsButton
							size="small"
							tooltip={true}
							tooltipPlacement="top"
							tooltipTitle="Add Data"
							colorVariant="primary"
							label="ADD"
							type="button"
						></RdsButton>
					</div>
				</div>
				<div className="footer fixed-bottom ms-3 mb-3">
					<div className="d-flex">
						<div className="m-2">
							<RdsButton
								size="small"
								outlineButton={true}
								tooltip={true}
								tooltipPlacement="top"
								tooltipTitle="Cancel"
								colorVariant="primary"
								label="CANCEL"
								data-bs-dismiss="offcanvas"
								type="button"
							></RdsButton>
						</div>
						<div className="m-2">
							<RdsButton
								size="small"
								outlineButton={false}
								tooltip={true}
								tooltipPlacement="top"
								tooltipTitle="Create Data"
								colorVariant="primary"
								label="Create"
								data-bs-dismiss="offcanvas"
								type="button"
							></RdsButton>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default RdsCompSecrets;
