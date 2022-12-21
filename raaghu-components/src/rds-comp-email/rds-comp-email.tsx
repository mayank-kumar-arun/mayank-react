import React, { useState } from "react";
import { RdsButton, RdsCheckbox, RdsInput, RdsLabel } from "../rds-elements";
import "./rds-comp-email.scss";

export interface RdsCompEmailProps {}

const RdsCompEmail = (props: RdsCompEmailProps) => {
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	function isValidEmail(email: any) {
		return /\S+@\S+\.\S+/.test(email);
	}

	const handleChange = (event: any) => {
		if (!isValidEmail(event.target.value)) {
			setError("Email is invalid");
		} else {
			setError("");
		}

		setMessage(event.target.value);
	};

	return (
		<>
			<form className="RdsCompEmail__form">
				<div className="row mb-3">
					<div className="col-md-6 col-sm-6 col-lg-6">
						<div className="form-group">
							<RdsLabel
								label="Default From (Sender) Email Address"
								class="mb-1"
								size="14px"
							></RdsLabel>
							<RdsInput
								placeholder="Email Address"
								customClasses="form-control"
								inputType="email"
								onChange={handleChange}
							></RdsInput>
							{error && (
								<h2
									style={{ color: "red", fontSize: "15px", marginTop: "5px" }}
								>
									{error}
								</h2>
							)}
						</div>
					</div>
					<div className="col-md-6 col-sm-6 col-lg-6">
						<RdsLabel
							label="Default From (Sender) Display Name"
							class="mb-1"
							size="14px"
						></RdsLabel>
						<RdsInput
							placeholder="Display Name"
							customClasses="form-control"
						></RdsInput>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col-md-6 col-sm-6 col-lg-6">
						<div className="form-group">
							<RdsLabel label="SMTP Host" class="mb-1" size="14px"></RdsLabel>
							<RdsInput
								placeholder="127.0.0.1"
								customClasses="form-control"
							></RdsInput>
						</div>
					</div>
					<div className="col-md-6 col-sm-6 col-lg-6">
						<RdsLabel label="SMTP Port" class="mb-1" size="14px"></RdsLabel>
						<RdsInput placeholder="25" customClasses="form-control"></RdsInput>
					</div>
				</div>

				<div className="row mb-3">
					<div
						className="col-lg-12 col-md-12 col-sm-12"
						style={{ fontSize: "14px" }}
					>
						<RdsCheckbox label="Use SSL" checked={false}></RdsCheckbox>
					</div>
				</div>

				<div className="row mb-3">
					<div
						className="col-lg-12 col-md-12 col-sm-12"
						style={{ fontSize: "14px" }}
					>
						<RdsCheckbox
							label="Use Default Credentials"
							checked={false}
						></RdsCheckbox>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col-md-6 col-sm-6 col-lg-6">
						<div className="form-group">
							<RdsLabel
								label="Test Email Settings"
								class="mb-1"
								size="14px"
							></RdsLabel>
							<RdsInput
								placeholder="admin@aspnetzero.com"
								customClasses="form-control"
								inputType="email"
							></RdsInput>
						</div>
					</div>
					<div className="col-md-6 col-sm-6 col-lg-6 pt-4">
						<RdsButton
							type="submit"
							label="SEND TEST EMAIL"
							colorVariant="primary"
						></RdsButton>
					</div>
				</div>
			</form>
		</>
	);
};

export default RdsCompEmail;
