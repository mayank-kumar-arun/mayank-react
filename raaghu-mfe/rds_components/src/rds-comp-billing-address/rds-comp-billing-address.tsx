import { useState } from "react";
import { RdsInput, RdsButton, RdsSelectList } from "../rds-elements";

export interface RdsCompBillingAddressProps {
	countryList: { option: string }[];
	IndianStateList: { option: string }[];
	BillingAddressDetails(arg: RdsCompBillingAddressDetails): any;
}

export interface RdsCompBillingAddressDetails {
	FirstName: string;
	LastName: string;
	Company: string;
	Phone: string;
	Address: string;
	City: string;
	Country: string;
	StateProvince: string;
	PostalCode: string;
}

const RdsCompBillingAddress = (props: RdsCompBillingAddressProps) => {
	const onbackHandler = (e: any) => {
		//Whatever we want to do with Back Button goes in here
	};

	const onSubmitHandler = (e: any) => {
		//Preventing default on submit
		e.preventDefault();

		//Checking Validations before submit
		firstNameValidation(e.target[0].value);
		lastNameValidation(e.target[1].value);
		phoneValidationHandler(e.target[3].value);
		addressValidation(e.target[4].value);
		cityValidation(e.target[5].value);
		countryValidation(e.target[6].value);
		stateProvinceValidation(e.target[7].value);
		postalCodeValidation(e.target[8].value);

		//Submiting values if all validated
		if (
			firstNameErrorMessage === "" &&
			lastNameErrorMessage === "" &&
			// companyErrorMessage === "" &&
			phoneErrorMessage === "" &&
			addressErrorMessage === "" &&
			cityErrorMessage === "" &&
			countryErrorMessage === "" &&
			stateProvinceErrorMessage === "" &&
			postalCodeErrorMessage
		) {
			const BillingAddressDetails: RdsCompBillingAddressDetails = {
				FirstName: e.target[0].value,
				LastName: e.target[1].value,
				Company: e.target[2].value,
				Phone: e.target[3].value,
				Address: e.target[4].value,
				City: e.target[5].value,
				Country: e.target[6].value,
				StateProvince: e.target[7].value,
				PostalCode: e.target[8].value,
			};
			console.log(BillingAddressDetails);
		}
	};

	//Regarding Validations messages
	const [firstNameErrorMessage, setFirstNameErrorMessage] =
		useState<string>("");
	const [lastNameErrorMessage, setLastNameErrorMessage] = useState<string>("");
	{
		/* No validations required on Company*/
	}
	const [phoneErrorMessage, setPhoneErrorMessage] = useState<string>("");
	const [addressErrorMessage, setAddressErrorMessage] = useState<string>("");
	const [cityErrorMessage, setCityErrorMessage] = useState<string>("");
	const [postalCodeErrorMessage, setPostalCodeErrorMessage] =
		useState<string>("");
	const [countryErrorMessage, setCountryErrorMessage] = useState<string>("");
	const [stateProvinceErrorMessage, setProvinceStateErrorMessage] =
		useState<string>("");

	//Validation functions
	const firstNameValidation = (firstName: string) => {
		firstName === ""
			? setFirstNameErrorMessage("First Name is required")
			: setFirstNameErrorMessage("");
		console.log("hello everyone     " + firstName);
	};
	const lastNameValidation = (lastName: string) => {
		lastName === ""
			? setLastNameErrorMessage("Last Name is required")
			: setLastNameErrorMessage("");
	};
	const phoneValidationHandler = (phone: any) => {
		if (phone.trim() === "") setPhoneErrorMessage("Phone is required");
		else if (phone.trim() != phone)
			setPhoneErrorMessage("Enter valid phone number");
		else if (isNaN(phone)) setPhoneErrorMessage("Enter valid phone number");
		else if (phone.includes("e"))
			setPhoneErrorMessage("Enter valid phone number");
		else setPhoneErrorMessage("");
	};
	const addressValidation = (address: string) => {
		address === ""
			? setAddressErrorMessage("Address is required")
			: setAddressErrorMessage("");
	};
	const cityValidation = (city: string) => {
		city === ""
			? setCityErrorMessage("City is required")
			: setCityErrorMessage("");
	};
	const countryValidation = (country: string) => {
		country === "Select Country"
			? setCountryErrorMessage("Country is required")
			: setCountryErrorMessage("");
	};
	const stateProvinceValidation = (state: string) => {
		state === "Select Country"
			? setProvinceStateErrorMessage("State/Province is required")
			: setProvinceStateErrorMessage("");
	};
	const postalCodeValidation = (postalCode: string) => {
		postalCode === ""
			? setPostalCodeErrorMessage("Postal code is required")
			: setPostalCodeErrorMessage("");
		// Postal code need not be ,numeric-only' in some countries
	};

	return (
		<>
			<div className="contact-information">
				<h3 className="pb-2">Billing Address</h3>
				<form id="billingAddressForm" onSubmit={onSubmitHandler}>
					<div className="row">
						<div className="col-md-6 mb-3">
							<RdsInput
								label="First Name"
								size="medium"
								inputType="text"
								name="firstName"
								placeholder="Enter First Name"
								redAsteriskPresent
								onBlur={(e) => firstNameValidation(e.target.value)}
							/>
							{firstNameErrorMessage != "" && (
								<div className="form-control-feedback">
									<span className="text-danger">{firstNameErrorMessage}</span>
								</div>
							)}
						</div>
						<div className="col-md-6 mb-3">
							<RdsInput
								label="Last Name"
								size="medium"
								inputType="text"
								name="lastName"
								placeholder="Enter Last Name"
								redAsteriskPresent
								onBlur={(e) => lastNameValidation(e.target.value)}
							/>
							{lastNameErrorMessage != "" && (
								<div className="form-control-feedback">
									<span className="text-danger">{lastNameErrorMessage}</span>
								</div>
							)}
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 mb-3">
							<RdsInput
								label="Company"
								size="medium"
								name="company"
								id="txtCompany"
								placeholder="Enter Company"
							/>
						</div>
						<div className="col-md-6 mb-3">
							<RdsInput
								label="Phone"
								size="medium"
								name="phone"
								id="txtPhone"
								placeholder="Enter phone"
								redAsteriskPresent
								onBlur={(e) => phoneValidationHandler(e.target.value)}
							/>
							{phoneErrorMessage != "" && (
								<div className="form-control-feedback">
									<span className="text-danger">{phoneErrorMessage}</span>
								</div>
							)}
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 mb-3">
							<RdsInput
								label="Address"
								size="medium"
								name="address"
								id="txtAddress"
								redAsteriskPresent
								onBlur={(e) => addressValidation(e.target.value)}
							/>
							{addressErrorMessage != "" && (
								<div className="form-control-feedback">
									<span className="text-danger">{addressErrorMessage}</span>
								</div>
							)}
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 mb-3">
							<RdsInput
								label="City"
								size="medium"
								name="city"
								id="txtCompany"
								placeholder="Enter City"
								redAsteriskPresent
								onBlur={(e) => cityValidation(e.target.value)}
							/>
							{cityErrorMessage != "" && (
								<div className="form-control-feedback">
									<span className="text-danger">{cityErrorMessage}</span>
								</div>
							)}
						</div>
						<div className="col-md-6 mb-3">
							<div className="label mb-2">
								Country <span className="text-danger">*</span>
							</div>
							<RdsSelectList
								label="Select Country"
								selectItems={props.countryList}
							/>
							{countryErrorMessage != "" && (
								<div className="form-control-feedback">
									<span className="text-danger">{countryErrorMessage}</span>
								</div>
							)}
						</div>
					</div>
					<div className="row">
						<div className="col-md-6 mb-3">
							<div className="label mb-2">
								State/Province <span className="text-danger">*</span>
							</div>
							<RdsSelectList
								label="Select State/Province"
								selectItems={props.IndianStateList}
							/>
							{stateProvinceErrorMessage != "" && (
								<div className="form-control-feedback">
									<span className="text-danger">
										{stateProvinceErrorMessage}
									</span>
								</div>
							)}
						</div>
						<div className="col-md-6 mb-3">
							<RdsInput
								label="Postal Code"
								name="postalCode"
								id="txtPostalCode"
								placeholder="Enter Postal code"
								redAsteriskPresent
								onBlur={(e) => postalCodeValidation(e.target.value)}
							/>
							{postalCodeErrorMessage != "" && (
								<div className="form-control-feedback">
									<span className="text-danger">{postalCodeErrorMessage}</span>
								</div>
							)}
						</div>
					</div>
					<div className="pt-4 row">
						<div className="col-md-6 mb-3">
							<RdsButton
								block={true}
								size="medium"
								outlineButton={true}
								colorVariant="primary"
								label="Back"
								tooltipTitle={""}
								type={"button"}
								onClick={onbackHandler}
							/>
						</div>
						<div className="col-md-6 mb-3">
							<RdsButton
								block={true}
								size="medium"
								colorVariant="primary"
								label="Continue"
								tooltipTitle={""}
								type={"submit"}
							/>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default RdsCompBillingAddress;
