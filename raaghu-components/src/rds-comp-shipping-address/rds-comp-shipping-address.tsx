import React from "react";
import "./rds-comp-shipping-address.scss";
import { RdsLabel, RdsInput, RdsSelectList, RdsButton } from "../rds-elements";

export interface RdsCompShippingAddressProps {
	countryList: any[];
}

const RdsCompShippingAddress = (props: RdsCompShippingAddressProps) => {
	return (
		<>
			<div>
				<p className="heading">Shipping Address</p>

				<div className="row mt-3">
					<div className="col-md-6 sm-p-0">
						<div className="form-group">
							<RdsLabel
								size="14px"
								fontWeight={500}
								label="First Name"
								class="form-label ms-1 inputLabel"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter a value"
								required={true}
							></RdsInput>
						</div>
					</div>
					<div className="col-md-6 sm-p-0">
						<div className="form-group">
							<RdsLabel
								size="14px"
								fontWeight={500}
								label="Last Name"
								class="form-label ms-1"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter a value"
								required={true}
							></RdsInput>
						</div>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-md-6 sm-p-0">
						<div className="form-group">
							<RdsLabel
								size="14px"
								fontWeight={500}
								label="Company"
								class="form-label ms-1 inputLabel"
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter a value"
								required={true}
							></RdsInput>
						</div>
					</div>
					<div className="col-md-6 sm-p-0">
						<div className="form-group">
							<RdsLabel
								size="14px"
								fontWeight={500}
								label="Phone"
								class="form-label ms-1"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter a value"
								required={true}
							></RdsInput>
						</div>
					</div>
				</div>

				<div className="row mt-3">
					<div className="form-group">
						<RdsLabel
							size="14px"
							fontWeight={500}
							label="Address"
							class="form-label ms-1"
							children={<span style={{ color: "red" }}>*</span>}
						></RdsLabel>
						<RdsInput
							size="small"
							inputType="text"
							isDisabled={false}
							readonly={false}
							placeholder="Enter a value"
							required={true}
						></RdsInput>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-md-6 sm-p-0">
						<div className="form-group">
							<RdsLabel
								size="14px"
								fontWeight={500}
								label="City"
								class="form-label ms-1 inputLabel"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter a value"
								required={true}
							></RdsInput>
						</div>
					</div>
					<div className="col-md-6 sm-p-0">
						<div className="form-group">
							<RdsLabel
								size="14px"
								fontWeight={500}
								label="Country"
								class="form-label ms-1"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsSelectList
								label="Select Country"
								selectItems={props.countryList}
								size="sm"
							></RdsSelectList>
						</div>
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-md-6 sm-p-0">
						<div className="form-group">
							<RdsLabel
								size="14px"
								fontWeight={500}
								label="State/Province"
								class="form-label ms-1 inputLabel"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter a value"
								required={true}
							></RdsInput>
						</div>
					</div>
					<div className="col-md-6 sm-p-0">
						<div className="form-group">
							<RdsLabel
								size="14px"
								fontWeight={500}
								label="Postal Code"
								class="form-label ms-1"
								children={<span style={{ color: "red" }}>*</span>}
							></RdsLabel>
							<RdsInput
								size="small"
								inputType="text"
								isDisabled={false}
								readonly={false}
								placeholder="Enter a value"
								required={true}
							></RdsInput>
						</div>
					</div>
				</div>

				<div className="row mt-4">
					<div className="col-md-6 sm-p-0">
						<RdsButton
							type="button"
							label="BACK"
							block={true}
							isOutline={true}
							colorVariant="primary"
							size="small"
						></RdsButton>
					</div>
					<div className="col-md-6 sm-p-0">
						<RdsButton
							type="button"
							label="SAVE"
							block={true}
							isOutline={false}
							colorVariant="primary"
							size="small"
						></RdsButton>
					</div>
				</div>
			</div>
		</>
	);
};

export default RdsCompShippingAddress;
