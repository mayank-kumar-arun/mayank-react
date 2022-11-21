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
									<RdsCheckbox label="Use Host Database" isSwitch></RdsCheckbox>
									{/* <rds-checkbox [disabled]="false" [label]="translate.instant('Use Host Database')"
                             (onChange)="getCheckboxValue($event,'host')" [withLabel]="true"
                             [checked]="tenantSettingsInfo.useHostDatabase" [switch]="false" [inline]="false"
                             [id]="'useHostDatabase'" ></rds-checkbox>                            */}
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
								{/* <rds-input [inputType]="'password'" [iconCursor]="'pointer'" [icon]="'eye'" [iconOpacity]="'0.7'" [iconHeight]="'18px'"
                                    [iconWidth]="'18px'" [label]="translate.instant('Password')" [(ngModel)]="tenantSettingsInfo.password" [labelPosition]="'top'" name="password"
                                    required #newpswd="ngModel" [placeholder]="translate.instant('Password')" [isRequired]="passwordValidation" required>
                                </rds-input> */}
								{/* <div className="form-control-feedback" *ngIf="newpswd.errors&&(newpswd.dirty||newpswd.touched)&& passwordValidation">
                                <span className="text-danger" *ngIf="newpswd.errors.required">{{"Password is required"|translate}}</span>
                            </div> */}
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
								{/* <rds-input [inputType]="'password'" [iconCursor]="'pointer'" [icon]="'eye'" [iconHeight]="'18px'"
                             [iconWidth]="'18px'" [iconOpacity]="'0.7'" [label]="translate.instant('Confirm Password')" [labelPosition]="'top'"
                             [placeholder]="translate.instant('Confirm Password')" #confirmpswd="ngModel" (keyup)="confirmPasswordValidation()"
                             [(ngModel)]="tenantSettingsInfo.confirmPassword" [isRequired]="passwordValidation" name="cpassword" required>
                         </rds-input> */}
								{/* <div className="form-control-feedback" *ngIf="confirmpswd.errors&&(confirmpswd.dirty||confirmpswd.touched)&&passwordValidation">
                             <span className="text-danger" *ngIf="confirmpswd.errors.required">{{"Confirm Password is required"|translate}}</span>
                         </div> */}
							</div>
						</div>
						{/* <div className="col-12 sm-p-0">
                     <span className="text-danger" *ngIf="isPasswordMismatch"><small>{{"Password mismatch found"|translate}}</small></span>
                 </div> */}
					</div>
					<div className="row">
						{props.showEditData && (
							<div className="col-md-12 sm-p-0">
								<div className="form-group mb-3">
									<RdsCheckbox
										label="Set Random Password"
										isSwitch
									></RdsCheckbox>
									{/* <rds-checkbox [disabled]="false" [label]="translate.instant('Set Random Password')" [withLabel]="true"
                             (onChange)="getCheckboxValue($event,'ramdomPassword')"
                             [checked]="tenantSettingsInfo.setRandomPassword" [switch]="false" [inline]="false"
                             [id]="'setRandomPassword'"></rds-checkbox> */}
								</div>
							</div>
						)}
						{props.showEditData && (
							<div className="col-md-12 sm-p-0">
								<div className="form-group mb-3">
									<RdsCheckbox label="Should Change password on Next Login"></RdsCheckbox>
									{/* <rds-checkbox [disabled]="false" [label]="translate.instant('Should Change Password On Next Login')"
                             [checked]="tenantSettingsInfo.changePasswordOnNextLogin" [withLabel]="true" [switch]="false"
                             [inline]="false" [id]="'changePasswordOnNextLogin'"
                             (onChange)="getCheckboxValue($event,'changePassword')">
                         </rds-checkbox> */}
								</div>
							</div>
						)}
						{props.showEditData && (
							<div className="col-md-12 sm-p-0">
								<div className="form-group mb-3">
									<RdsCheckbox label="Send Activation Email"></RdsCheckbox>
									{/* <rds-checkbox [disabled]="false" [checked]="tenantSettingsInfo.sendActivationEmail"
                             [label]="translate.instant('Send Activation Email')" (onChange)="getCheckboxValue($event,'sendEmail')"
                             [withLabel]="true" [switch]="false" [inline]="false" [id]="'sendActivationEmail'">
                         </rds-checkbox> */}
								</div>
							</div>
						)}
						<div className="col-md-12 sm-p-0">
							<div className="form-group mb-3">
								<RdsCheckbox label={"Activate"}></RdsCheckbox>
								{/* <rds-checkbox [disabled]="false" [label]="translate.instant('Activate')" [checked]="tenantSettingsInfo.isActive"
                             [(ngModel)]="tenantSettingsInfo.isActive" name="isActive" [withLabel]="true" [switch]="false"
                             [inline]="false" [id]="'active'"></rds-checkbox> */}
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

				{/* <rds-button [label]="translate.instant('Cancel')" [outlineButton]="true" [colorVariant]="'primary'" [size]="'small'" (click)="onCancelSetting()"
                data-bs-dismiss="offcanvas">
            </rds-button> */}
				<RdsButton
					tooltipTitle={""}
					type={"button"}
					label="Save"
					size="small"
					colorVariant="primary"
					class="ms-2"
				></RdsButton>
				{/* <rds-button [label]="translate.instant('Save')" [size]="'small'"
                [disabled]="!tenantSettingsForm.valid||isPasswordMismatch||!isTenantInfoValid" class="ms-2"
                [colorVariant]="'primary'" (click)="next(tenantSettingsForm)">
            </rds-button> */}
			</div>
		</div>
	);
};

export default RdsCompTenantSettings;
