import {
  RdsInput,
  RdsSelectList,
  RdsCheckbox,
  RdsDatePicker,
  RdsButton,
} from "../rds-elements";
import { useState } from "react";
import img from "./edit-pic.png";
import "./rds-comp-tenant-information.scss";
export interface RdsCompTenantInformationProps {
  editionList: any[];
  tenantData?: any[];
  // showEmail?: boolean;
  tenantInfo: React.EventHandler<any>;
  onCancel?: React.EventHandler<any>;
}

const RdsCompTenantInformation = (props: RdsCompTenantInformationProps) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [enteredTenancyName, setEnteredTenancyName] = useState("");
  const [isTenancyNameTouched, setIsTenancyNameTouched] = useState(false);
  const tenancyNameInputIsEmptyAndTouched =
    isTenancyNameTouched && enteredTenancyName.trim() === "";
  const [enteredTenantName, setEnteredTenantName] = useState("");
  const [isTenantNameTouched, setIsTenantNameTouched] = useState(false);
  const tenantNameInputIsEmptyAndTouched =
    isTenantNameTouched && enteredTenantName.trim() === "";
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const enteredEmailIsEmpty = enteredEmail.trim() === "";
  let enteredEmailIsInvalid =
    !emailRegex.test(enteredEmail) && !enteredEmailIsEmpty;
  const EmailInputIsEmptyAndTouched = isEmailTouched && enteredEmailIsEmpty;
  const next = (event: any) => {
    if (!event || event.invalid) {
      return;
    }
    props.tenantInfo({ tenant: props.tenantData, next: true });
  };
  return (
    <div>
      <div className="tab-content py-4">
        <form>
          <div className="row align-items-center">
            <div className="col-md-3 text-center cursor-pointer sm-p-0">
              <img src={img} />

              <input type="file" accept="image/*" style={{ display: "none" }} />
            </div>
            <div className="col-md-9 sm-p-0">
              <div className="form-group mb-3">
                <RdsInput
                  inputType="text"
                  redAsteriskPresent={true}
                  label="Tenancy Name"
                  name="tenancy_name"
                  id="tenancy_name"
                  placeholder="Tenancy Name"
                  onBlur={() => setIsTenancyNameTouched(true)}
                  onChange={(e) => setEnteredTenancyName(e.target.value)}
                ></RdsInput>
                {tenancyNameInputIsEmptyAndTouched && (
                  <span className="red-color-error">
                    Tenancy Name must not be empty
                  </span>
                )}
                <div className="form-control-feedback"></div>
              </div>
              <div className="form-group mb-3">
                <RdsInput
                  redAsteriskPresent={true}
                  inputType="text"
                  label="Tenant Name"
                  name="tenant_name"
                  id="tenant_name"
                  placeholder="TenantName"
                  onBlur={() => setIsTenantNameTouched(true)}
                  onChange={(e) => setEnteredTenantName(e.target.value)}
                ></RdsInput>
                {tenantNameInputIsEmptyAndTouched && (
                  <span className="red-color-error">
                    Tenant Name must not be empty
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 sm-p-0">
              <div className="form-group mb-3">
                <RdsInput
                  redAsteriskPresent={true}
                  inputType="email"
                  label="Admin Email"
                  placeholder="Admin Email"
                  name="email"
                  id="email"
                  onBlur={() => setIsEmailTouched(true)}
                  onChange={(e) => setEnteredEmail(e.target.value)}
                ></RdsInput>
                {EmailInputIsEmptyAndTouched && (
                  <span className="red-color-error">
                    Email must not be empty
                  </span>
                )}
                {enteredEmailIsInvalid && (
                  <span className="red-color-error">
                    Entered Email is Invalid
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-6 sm-p-0">
              <div className="form-group mb-3">
                <label htmlFor="Edition" className="mb-2">
                  Edition
                </label>
                <RdsSelectList
                  label={"Edition"}
                  selectItems={props.editionList}
                ></RdsSelectList>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 sm-p-0">
              <div className="form-group mb-3">
                <RdsCheckbox
                  label={"Unlimited Time Subscription"}
                  checked={false}
                ></RdsCheckbox>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 sm-p-0">
              <div className="form-group mb-3">
                <RdsDatePicker DatePickerLabel={""}></RdsDatePicker>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="footer-buttons py-3 bottom-0 w-100 action-buttons">
        <RdsButton
          tooltipTitle={""}
          type={"button"}
          label="Cancel"
          colorVariant="outline-primary"
          size="small"
          databsdismiss="offcanvas"
        ></RdsButton>
        <RdsButton
          label="Next"
          size="small"
          class="ms-2"
          colorVariant="primary"
          tooltipTitle={""}
          onClick={next}
          type={"button"}
        ></RdsButton>
      </div>
    </div>
  );
};

export default RdsCompTenantInformation;
