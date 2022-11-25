import React from "react";
import { RdsCheckbox, RdsInput, RdsLabel } from "../rds-elements";

export interface RdsCompIdentityManagementProps {
	identityData: any;
}

const RdsCompIdentityManagement = (props: RdsCompIdentityManagementProps) => {
	return (
		<>
			<form>
				{/* Password Settings */}
				<div className="border-bottom text-muted fw-bold">
					<RdsLabel label="Pssword Settings"></RdsLabel>
				</div>
				<div className="row mt-4">
					<div className="col-md-6 sm-p-0">
						<div className="form-group mb-4">
							<RdsLabel
								size="14px"
								label="Required Length (Min)"
								className="form-label ms-1"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter Length"
								required={true}
							></RdsInput>
						</div>
					</div>
					<div className="col-md-6 sm-p-0">
						<div className="form-group mb-4">
							<RdsLabel
								size="14px"
								label="Required Special Characters (Min)"
								className="form-label ms-1"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter Number"
								required={true}
							></RdsInput>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mt-3">
						<RdsCheckbox
							label="Required Non Alpha Numeric Characters"
							checked={false}
						></RdsCheckbox>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mt-3">
						<RdsCheckbox
							label="Required Upper Case"
							checked={false}
						></RdsCheckbox>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mt-3">
						<RdsCheckbox
							label="Required Lower Case"
							checked={false}
						></RdsCheckbox>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mt-3">
						<RdsCheckbox label="Required Numbers" checked={false}></RdsCheckbox>
					</div>
				</div>
				{/* Lockout Settings */}
				<div className="border-bottom text-muted mt-4 fw-bold">
					<RdsLabel label="Lockout Settings"></RdsLabel>
				</div>
				<div className="row mt-4">
					<div className="col-md-6 sm-p-0">
						<div className="form-group mb-4">
							<RdsLabel
								size="14px"
								label="Lockout Duration (Seconds) "
								className="form-label ms-1"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter Length"
								required={true}
							></RdsInput>
						</div>
					</div>
					<div className="col-md-6 sm-p-0">
						<div className="form-group mb-4">
							<RdsLabel
								size="14px"
								label="Max Failed Access Attempts "
								className="form-label ms-1"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter Name"
								required={true}
							></RdsInput>
						</div>
					</div>
				</div>

				{/* Signin Settings */}
				<div className="border-bottom text-muted mt-3 fw-bold">
					<RdsLabel label="Signin Settings"></RdsLabel>
				</div>
				<div className="row">
					<div className="col-md-12 mt-3">
						<RdsCheckbox
							label="Required Upper Case"
							checked={false}
						></RdsCheckbox>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 mt-3">
						<RdsCheckbox
							label="Required Lower Case"
							checked={false}
						></RdsCheckbox>
					</div>
				</div>
			</form>
		</>
	);
};

export default RdsCompIdentityManagement;
