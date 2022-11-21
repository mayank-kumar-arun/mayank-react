import React from "react";
import {
  RdsCheckbox,
  RdsLabel,
  RdsCounter,
  RdsInput,
} from "../../../../raaghu-elements/src";
export interface RdsCompSecurityProps {
  requireDigit: boolean;
  requireLowercase: boolean;
  requireAlphaNumeric: boolean;
  requireUppercase: boolean;
  requiredLength: number;
  userLockout: boolean;
  maxFailedAccessAttemptsBeforeLockout: number;
  defaultAccountLockoutSeconds: boolean;
  twoFactorLogin: boolean;
  loginPerUser: boolean;
}
const RdsCompSecurity = (props: RdsCompSecurityProps) => {
  return (
    <div>
      <div>
        <form>
            <div className="fw-medium mb-3">
              <RdsLabel label="Password Complexity" bold={true} />
            </div>

            <div className="form-group mb-3 fw-normal">
              <RdsCheckbox
                label="Use Default Settings"
                checked={false}
                isDisabled={false}
                isSwitch={false}
                withLabel={true}
              />
            </div>

            <div
              className="form-group mb-3 fw-normal "
              style={{ paddingLeft: 20 }}
            >
              <RdsCheckbox
                label="Require Digit"
                checked={props.requireDigit}
                isSwitch={false}
                withLabel={true}
                name="requireDigit"
              />
            </div>

            <div
              className="form-group mb-3 fw-normal"
              style={{ paddingLeft: 20 }}
            >
              <RdsCheckbox
                label="Require Lowercase"
                checked={props.requireLowercase}
                isSwitch={false}
                withLabel={true}
              />
            </div>

            <div
              className="form-group mb-3 fw-normal text-muted"
              style={{ paddingLeft: 20 }}
            >
              <RdsCheckbox
                label="Require Non-Alphanumeric"
                checked={props.requireAlphaNumeric}
                isSwitch={false}
                withLabel={true}
              />
            </div>

            <div
              className="form-group mb-3 fw-normal text-muted"
              style={{ paddingLeft: 20 }}
            >
              <RdsCheckbox
                label="Require Uppercase"
                checked={props.requireUppercase}
                isSwitch={false}
                withLabel={true}
              />
            </div>

            <div className="form-group mb-5" style={{ paddingLeft: 20 }}>
              <RdsCounter
                counterValue={props.requiredLength}
                colorVariant="primary"
                min={0}
                max={26}
                width={124}
              />
            </div>

            <div className="form-group mb-3">
              <div className="fw-medium form-label">
                <RdsLabel label="User Lock Out" />
              </div>
              <div className="fw-normal">
                <RdsCheckbox
                  label="Enable User Account Locking On Failed Login Attempts"
                  checked={props.userLockout}
                  isDisabled={false}
                  isSwitch={false}
                  withLabel={true}
                />
              </div>
            </div>

            <div className="form-group mb-3">
              <RdsCounter
                counterValue={props.maxFailedAccessAttemptsBeforeLockout}
                position="top"
                colorVariant="primary"
                min={0}
                max={26}
                width={124}
              />
            </div>

            <div className="form-group mb-4">
              <div className="form-label mb-1">
                <RdsLabel label="Account Locking Duration (As seconds)" />
              </div>
              <div className="col-md-4 col-lg-3">
                <RdsInput size="medium" inputType="text" placeholder="300 sec" />
              </div>
            </div>

            <div className="form-group mb-4">
              <div className="form-label fw-medium">
                <RdsLabel label="Two Factor Login" />
              </div>
              <div className="fw-normal text-muted">
                <RdsCheckbox
                  label="Enable Two Factor User Login"
                  checked={props.twoFactorLogin}
                  isDisabled={false}
                  isSwitch={false}
                  withLabel={true}
                />
              </div>
            </div>

            <div className="form-group mb-3">
              <div className="form-label fw-medium mb-1">
                <RdsLabel label="Only One Concurrent Login Per User"></RdsLabel>
              </div>

              <div className="fw-normal text-muted">
                <RdsCheckbox
                  label="Disable Concurrent Login For A User. If A User Logins With A Second Device, The First Session Is Automatically Closed."
                  checked={props.loginPerUser}
                  isDisabled={false}
                  isSwitch={false}
                  withLabel={true}
                />
              </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default RdsCompSecurity;
