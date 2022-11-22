import React from "react";
import {
	RdsLabel,
	RdsCheckbox,
	RdsSelectList,
} from "../../../../raaghu-elements/src";
export interface RdsCompTenantManagementProps {
	settingsTenantEditionList: any[];
	allowSelfRegistration: boolean;
	useCaptchaOnRegistration: boolean;
	isNewRegisteredTenantActiveByDefault: boolean;
}
const RdsCompTenantManagement = (props: RdsCompTenantManagementProps) => {
	return (
		<div>
			<ul className="list-unstyled pt-4">
				<div className="mb-3 fw-medium">
					<RdsLabel label="Form-Based Registration" />
				</div>
				<div className="form-group mb-2">
					<RdsCheckbox
						isDisabled={false}
						label="Allow Tenants To Register To The System"
						checked={props.allowSelfRegistration}
						withLabel={true}
						isSwitch={false}
					/>
					<h6 className="text-muted pt-2">
						If You Disable This, Tenants Will Only Be Added By Admin Using
						Tenant Management Page.
					</h6>
				</div>
				<div className="mt-4">
					<RdsLabel label="New Registered Tenants Are Active By Default" />
				</div>
				<div className="form-group mb-1 mt-2">
					<RdsCheckbox
						isDisabled={false}
						label="Allow Tenants To Register To The System"
						checked={props.isNewRegisteredTenantActiveByDefault}
						withLabel={true}
						isSwitch={false}
					/>

					<h6 className="text-muted pt-2">
						If You Disable This, New Tenants Will Not Be Active (And Can Not
						Login) Until Admin Manually Activates The Account.
					</h6>
				</div>

				<div className="form-group mb-2 mt-4">
					<RdsCheckbox
						isDisabled={false}
						label="Use Security Image Question (Captcha) On Registration."
						checked={props.useCaptchaOnRegistration}
						withLabel={true}
						isSwitch={false}
					/>
				</div>

				<div className="row">
					<div className="col-md-5">
						<div className="form-group mb-2 mt-4">
							<RdsSelectList
								label="Edition"
								selectItems={props.settingsTenantEditionList}
							/>
						</div>
					</div>
				</div>
			</ul>
		</div>
	);
};
export default RdsCompTenantManagement;
