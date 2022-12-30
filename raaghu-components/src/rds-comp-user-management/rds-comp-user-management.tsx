import React from "react";
import { RdsCheckbox } from "../rds-elements";
export interface RdsCompUserManagementProps {
  Usermanagementsettings: any;
}
const RdsCompUserManagement = (props: RdsCompUserManagementProps) => {
  return (
    <>
      <div className="fw-normal">
      <RdsCheckbox
            isDisabled={false}
            label="Email Confirmation Required For Login."
            checked={false}
            withlabel={true}
            isSwitch={false}
          />
      <RdsCheckbox
            isDisabled={false}
            label="Phone Number Verification Enabled (Via SMS)."
            checked={false}
            withlabel={true}
            isSwitch={false}
          />
      <RdsCheckbox
            isDisabled={false}
            label="Use Security Image Question (Captcha) On Login."
            checked={false}
            withlabel={true}
            isSwitch={false}
          />
      <label className="mt-3">Cookie Consent</label>
      <RdsCheckbox
            isDisabled={false}
            label="Cookie Consent Enabled"
            checked={false}
            withlabel={true}
            isSwitch={false}
          />
      <label className="mt-3">Session Timeout Control</label>
      <RdsCheckbox
            isDisabled={false}
            label="Session Time Out Control Enabled"
            checked={false}
            withlabel={true}
            isSwitch={false}
          />
      <label className="mt-3">Profile</label>
      <RdsCheckbox
            isDisabled={false}
            label="Allow Using to use Gravatar Profile Picture"
            checked={false}
            withlabel={true}
            isSwitch={false}
          />
      </div>
    </>
  );
};
export default RdsCompUserManagement;
