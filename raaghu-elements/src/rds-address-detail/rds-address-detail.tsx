import React, { Fragment, ReactNode } from "react";
import RdsIcon from "../rds-icon";
import RdsLabel from "../rds-label";
import "./rds-address-detail.scss";

export interface RdsAddressDetailProps {
	children: ReactNode;
	withIcon?: boolean;
	header?: string;
	addressLine1?: string;
	addressLine2: string;
	addressLine3?: string;
}

const RdsAddressDetail = (props: RdsAddressDetailProps) => {
	return (
		<Fragment>
			{!props.withIcon && (
				<div className="addressContainer">
					<label className="addressHeading" style={{ fontWeight: "medium" }}>
						{props.header}
					</label>
					<div style={{ marginTop: "8px" }}>
						<RdsLabel
							label={props.addressLine1}
							multiline={true}
							class="addressLine"
						>
							{props.addressLine2 && ","}
						</RdsLabel>
						<RdsLabel
							label={props.addressLine2}
							multiline={true}
							class="addressLine"
						>
							{props.addressLine3 && ","}
						</RdsLabel>
						<RdsLabel
							label={props.addressLine3}
							multiline={true}
							class="addressLine"
						></RdsLabel>
						{props.children}
					</div>
				</div>
			)}
			{props.withIcon && (
				<div className="addressWithIconContainer">
					<div className="d-flex align-items-center">
						<RdsIcon
							name="location"
							height="15px"
							width="20px"
							fill={false}
							stroke={true}
							colorVariant="primary"
						></RdsIcon>
						<label className="addressHeading" style={{ marginLeft: "7px" }}>
							{props.header}
						</label>
					</div>
					<div className="addressLineContainer" style={{ marginTop: "8px" }}>
						<RdsLabel
							label={props.addressLine1}
							multiline={true}
							class="addressLine"
						>
							{props.addressLine2 && ","}
						</RdsLabel>
						<RdsLabel
							label={props.addressLine2}
							multiline={true}
							class="addressLine"
						>
							{props.addressLine2 && ","}
						</RdsLabel>
						<RdsLabel
							label={props.addressLine3}
							multiline={true}
							class="addressLine"
						></RdsLabel>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default RdsAddressDetail;
