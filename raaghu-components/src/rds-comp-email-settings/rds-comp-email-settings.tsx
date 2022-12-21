import React from "react";
import { RdsButton, RdsInput, RdsLabel } from "../rds-elements";

export interface RdsEmailSettingsProps {
	emailSettings: any;
}

const RdsEmailSettings = (props: RdsEmailSettingsProps) => {
	return (
		<>
			<form>
				<div className="form-group row mb-3">
					<div className="col-sm-3 pt-1">
						<RdsLabel label="Current Email" class="control-label"></RdsLabel>
					</div>
					<div className="col-sm-9">
						<RdsInput
							placeholder="Email Address"
							customClasses="form-control"
							inputType="email"
							value={props.emailSettings.currentEmail}
						></RdsInput>
					</div>
				</div>

				<div className="form-group row mb-3">
					<div className="col-sm-3 pt-1">
						<RdsLabel label="New Email" class="control-label"></RdsLabel>
					</div>
					<div className="col-sm-9">
						<RdsInput
							placeholder="Email Address"
							customClasses="form-control"
							inputType="email"
							value={props.emailSettings.newEmail}
						></RdsInput>
					</div>
				</div>

				<div className="form-group row mb-5">
					<div className="col-sm-3 pt-1">
						<RdsLabel
							label="Confirm New Email"
							class="control-label"
						></RdsLabel>
					</div>
					<div className="col-sm-9">
						<RdsInput
							placeholder="Email Address"
							customClasses="form-control"
							inputType="email"
							value={props.emailSettings.confirmEmail}
						></RdsInput>
					</div>
				</div>

				<hr></hr>
				<div className="mt-5 d-flex justify-content-end">
					<div className="me-3">
						<RdsButton
							type="button"
							colorVariant="primary"
							label="Cancel"
							outlineButton={true}
							size="small"
						></RdsButton>
					</div>
					<div className="me-2">
						<RdsButton
							type="submit"
							colorVariant="primary"
							label="Save"
							size="small"
						></RdsButton>
					</div>
				</div>
			</form>
		</>
	);
};

export default RdsEmailSettings;
