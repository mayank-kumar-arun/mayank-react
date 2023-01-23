import React, { Fragment } from "react";
import "./rds-avatar.scss";

import validator from "validator";
import { colors } from "../../libs/types";

export interface RdsAvatarProps {
	profilePic?: string;
	withProfilePic?: boolean;
	firstName?: string;
	lastName?: string;
	role?: string;
	colorVariant?: colors;
	titleAlign?: string;
	size?: "small" | "large" | "medium";
	verticallyAlligned?: boolean;
	roundedAvatar?: boolean;
	roundedPills?: boolean;
	height?: string;
}

const RdsAvatar = (props: RdsAvatarProps) => {
	let FL = props.firstName || "";
	let LL = props.lastName || "";
	let userRole = props.role || "";
	let backcolor = props.colorVariant || "primary";
	let tAlign = props.titleAlign;
	let WPP = props.withProfilePic || false;
	let src = props.profilePic || " ";

	const Align = `${props.hasOwnProperty("titleAlign") ? tAlign : "horizontal"}`;
	const Aligned = `${Align === "horizontal" ? "flex" : "block"}`;
	const validate: boolean = validator.isURL(src);

	const defaultPP =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0m5Cy4lXCbuyG54L0vuo3i5-ALavHe9KmhWA_wDM&s";

	const withPP = `${
		props.hasOwnProperty("profilePic") && validate === true
			? props.profilePic
			: defaultPP
	}`;

	const hasName =
		(FL.length != 0 && props.hasOwnProperty("firstName") === true) ||
		(LL.length != 0 && props.hasOwnProperty("lastName") === true);

	let fLetter = FL.charAt(0).toUpperCase();
	let lLetter = LL.charAt(0).toUpperCase();
	let rLetter = userRole.charAt(0).toUpperCase();

	let titleFirstName = fLetter + FL.slice(1) + " ";
	let titleLastName = lLetter + LL.slice(1);
	let titleRole = rLetter + userRole.slice(1);

	let imgwidth =
		props.size == "small"
			? "avatar-sm"
			: props.size == "large"
			? "avatar-lg"
			: "avatar-md";
	let fonts =
		props.size == "small" ? "18px" : props.size == "large" ? "31px" : "24px";

	return (
		<Fragment>
			<div style={{ display: Aligned }}>
				{WPP === false && !hasName && (
					<div className={`flex-grow-0 d-flex align-items-center `}>
						<img src={defaultPP} className={`${imgwidth}`} />
					</div>
				)}

				{WPP === false && hasName && (
					<div
						className={`d-flex justify-content-center bg-${backcolor} align-items-center text-white avatar rounded-circle ${imgwidth}`}
					>
						<span className="fw-bold ">
							{fLetter}
							{lLetter}
						</span>
					</div>
				)}
				{WPP === true && (
					<div
						className=" flex-grow-0 align-items-center"
						style={{ display: Aligned }}
					>
						<img
							src={withPP}
							className={`avatar bg-light ${imgwidth} rounded-circle mb-0`}
						/>
						<div style={{ marginLeft: "10px" }}>
							<span className="fw-bold ">
								{titleFirstName}
								{titleLastName}
							</span>
							<br />
							<span>{titleRole}</span>
						</div>
					</div>
				)}

			
			</div>
		</Fragment>
	);
};

export default RdsAvatar;
