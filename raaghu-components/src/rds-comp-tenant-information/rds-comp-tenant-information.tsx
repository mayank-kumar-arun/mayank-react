import {
	RdsInput,
	RdsSelectList,
	RdsCheckbox,
	RdsDatePicker,
	RdsButton,
} from "../rds-elements";
import React ,  { useState, useRef } from "react";
import "./rds-comp-tenant-information.scss";
import { useTranslation } from "react-i18next";
export interface RdsCompTenantInformationProps {
	editionList: any[];
	tenantData?: any[];
	tenantInfo: (next: boolean) => void;
	onCancel?: React.EventHandler<any>;
}

const RdsCompTenantInformation = (props: RdsCompTenantInformationProps) => {

	const {t} = useTranslation();

	const emailRegex =
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const [enteredTenancyName, setEnteredTenancyName] = useState("");
	const [isTenancyNameTouched, setIsTenancyNameTouched] = useState(false);
	const isTenancyNameEmpty = enteredTenancyName.trim() === "";
	const isTenancyNameInputEmptyAndTouched =
		isTenancyNameTouched && isTenancyNameEmpty;
	const [enteredTenantName, setEnteredTenantName] = useState("");
	const [isTenantNameTouched, setIsTenantNameTouched] = useState(false);
	const isTenantNameEmpty = enteredTenantName.trim() === "";
	const isTenantNameInputEmptyAndTouched =
		isTenantNameTouched && isTenantNameEmpty;
	const [enteredEmail, setEnteredEmail] = useState("");
	const [isEmailTouched, setIsEmailTouched] = useState(false);
	const isEnteredEmailEmpty = enteredEmail.trim() === "";
	const isEnteredEmailInvalid = !emailRegex.test(enteredEmail);
	const EmailInputIsEmptyAndTouched = isEmailTouched && isEnteredEmailEmpty;
	const isEmailInputInvalid = isEnteredEmailInvalid && isEnteredEmailEmpty;
	const isFormValid =
		!isTenancyNameEmpty && !isTenantNameEmpty && !isEmailInputInvalid;
	// const next = (event: any) => {
	//   if (!event || event.invalid) {
	//     return;
	//   }

	// };
	const DatePicker = (start: any, end: any) => {};
	const [isUnlimitedSubscriptionChecked, setIsUnlimitedSubscriptionChecked] =
		useState(false);
	const [selctedOption, setSelectedOption] = useState("");
	const inputFile: any = useRef(null);
	const profilePicHandler = () => {
		inputFile.current.click();
	};
	const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setIsTenancyNameTouched(true);
		setIsEmailTouched(true);
		setIsTenantNameTouched(true);
		if (!isFormValid) return;
		props.tenantInfo(true);
		setEnteredEmail("");
		setEnteredTenancyName("");
		setEnteredTenantName("");
		setIsTenancyNameTouched(false);
		setIsEmailTouched(false);
		setIsTenantNameTouched(false);
	};
	return (
		<div>
			<div className="tab-content py-4">
				<form onSubmit={submitHandler}>
					<div className="row align-items-center">
						<div className="col-md-3 text-center cursor-pointer sm-p-0">
							<img src="./assets/edit-pic.png" onClick={profilePicHandler} />

							<input
								type="file"
								id="file"
								ref={inputFile}
								style={{ display: "none" }}
							/>
						</div>
						<div className="col-md-9 sm-p-0">
							<div className="form-group mb-3">
								<RdsInput
									inputType="text"
									redAsteriskPresent={true}
									label={t("Tenancy Name") || ""} 
									name="tenancy_name"
									id="tenancy_name"
									placeholder={t("Tenancy Name") || ""}
									onBlur={() => setIsTenancyNameTouched(true)}
									onChange={(e) => setEnteredTenancyName(e.target.value)}
								></RdsInput>
								{isTenancyNameInputEmptyAndTouched && (
									<span className="red-color-error">
										{t("Tenancy Name is required")}
									</span>
								)}
								<div className="form-control-feedback"></div>
							</div>
							<div className="form-group mb-3">
								<RdsInput
									redAsteriskPresent={true}
									inputType="text"
									label={t("Tenant Name") || ""}
									name="tenant_name"
									id="tenant_name"
									placeholder={t("Tenant Name") || ""}
									onBlur={() => setIsTenantNameTouched(true)}
									onChange={(e) => setEnteredTenantName(e.target.value)}
								></RdsInput>
								{isTenantNameInputEmptyAndTouched && (
									<span className="red-color-error">
										{t("Tenant Name is required")}
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
									label={t("Admin Email") || ""}
									placeholder={t("Admin Email") || ""}
									name="email"
									id="email"
									onBlur={() => setIsEmailTouched(true)}
									onChange={(e) => setEnteredEmail(e.target.value)}
								></RdsInput>
								{EmailInputIsEmptyAndTouched && (
									<span className="red-color-error">
										{t("Email is required")}
									</span>
								)}
								{isEnteredEmailInvalid && !isEnteredEmailEmpty && (
									<span className="red-color-error">
										{t("Entered invalid Email Address")}
									</span>
								)}
							</div>
						</div>
						<div className="col-md-6 sm-p-0">
							<div className="form-group mb-3">
								<label htmlFor="Edition" className="mb-2">
									{t("Edition")}
								</label>
								<RdsSelectList
									label={t("Edition") ||""}
									selectItems={props.editionList}
									onSelectListChange={(e) => setSelectedOption(e.target.value)}
								></RdsSelectList>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 sm-p-0">
							<div className="form-group mb-3">
								<RdsCheckbox
									label={t("Unlimited Time Subscription") || ""}
									checked={false}
									onChange={(e) =>
										setIsUnlimitedSubscriptionChecked(e.target.checked)
									}
								></RdsCheckbox>
							</div>
						</div>
					</div>
					{!isUnlimitedSubscriptionChecked && (
						<div className="row">
							<div className="col-md-6 sm-p-0">
								<div className="form-group mb-3">
									<RdsDatePicker
										DatePickerLabel={""}
										DatePicker={DatePicker}
									></RdsDatePicker>
								</div>
							</div>
						</div>
					)}
					<div className="mt-3 d-flex">
						<RdsButton
							class="me-2"
							tooltipTitle={""}
							type={"button"}
							label={t("Cancel") || ""}
							colorVariant="outline-primary"
							size="small"
							databsdismiss="offcanvas"
						></RdsButton>
						<RdsButton
							class="me-2"
							label={t("Next") || ""}
							size="small"
							colorVariant="primary"
							tooltipTitle={""}
							type={"submit"}
						></RdsButton>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RdsCompTenantInformation;
