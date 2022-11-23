import { RdsCheckbox, RdsInput, RdsButton } from "../rds-elements";

export interface RdsCompTenantSettingsProps {
	isTenantInfoValid: boolean;
	tenantSettingInfo: any;
	showEditData?: boolean;
	passwordValidation?: boolean;
	onCancel?: React.EventHandler<any>;
}

const RdsCompTenantSettings = (props: RdsCompTenantSettingsProps) => {
	return (
		<div>
			<div className="tab-content py-4">
				<form>
					{props.showEditData && (
						<div className="row">
							<div className="col-md-12 sm-p-0">
								<div className="form-group mb-3">
									<RdsCheckbox
										label="Use Host Database"
										isSwitch
										checked={false}
									></RdsCheckbox>
								</div>
							</div>
						</div>
					)}
					<div className="row mb-3">
						<div className="col-md-6 sm-p-0">
							<div className="form-group mb-3">
								<RdsInput
									inputType="password"
									placeholder="Password"
									label="Password"
									name="password"
								></RdsInput>
							</div>
						</div>
						<div className="col-md-6 sm-p-0">
							<div className="form-group mb-3">
								<RdsInput
									inputType="password"
									placeholder="Confirm Password"
									label="Confirm Password"
									name="cpassword"
								></RdsInput>
							</div>
						</div>
					</div>
					<div className="row">
						{props.showEditData && (
							<div className="col-md-12 sm-p-0">
								<div className="form-group mb-3">
									<RdsCheckbox
										label="Set Random Password"
										isSwitch
										checked={false}
									></RdsCheckbox>
								</div>
							</div>
						)}
						{props.showEditData && (
							<div className="col-md-12 sm-p-0">
								<div className="form-group mb-3">
									<RdsCheckbox
										label="Should Change password on Next Login"
										checked={false}
									></RdsCheckbox>
								</div>
							</div>
						)}
						{props.showEditData && (
							<div className="col-md-12 sm-p-0">
								<div className="form-group mb-3">
									<RdsCheckbox
										label="Send Activation Email"
										checked={false}
									></RdsCheckbox>
								</div>
							</div>
						)}
						<div className="col-md-12 sm-p-0">
							<div className="form-group mb-3">
								<RdsCheckbox label={"Activate"} checked={false}></RdsCheckbox>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div className=" d-flex my-2">
				<RdsButton
					tooltipTitle={""}
					type={"button"}
					label="Cancel"
					databsdismiss="offcanvas"
					outlineButton
					colorVariant="primary"
					size="small"
				></RdsButton>
				<RdsButton
					tooltipTitle={""}
					type={"button"}
					label="Save"
					size="small"
					colorVariant="primary"
					class="ms-2"
				></RdsButton>
			</div>
		</div>
	);
};

export default RdsCompTenantSettings;
