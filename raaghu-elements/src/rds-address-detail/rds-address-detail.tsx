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
	cardborder?: boolean;
}

const RdsAddressDetail = (props: RdsAddressDetailProps) => {
	return (
		<Fragment>
			{!props.withIcon && (
				<div className={props.cardborder ? "card" : ""}>
					<div className=" gap-2 p-4 word_wrap">
						<p className="address-header fw-semibold hr mb-0">{props.header}</p>
						<div className="address-body mt-0 mb-1">
							{/* <RdsLabel
								label={props.addressLine1}
								multiline={true}
								class="addressLine"
							>
							</RdsLabel> */}
							<div className="mb-0">
								{props.addressLine1}
								{props.addressLine2 && ","}
							</div>
							{/* <RdsLabel
								label={props.addressLine2}
								multiline={true}
								class="addressLine"
							>
								{props.addressLine3 && ","}
							</RdsLabel> */}
							<div className="mb-0">
								{props.addressLine2}
								{props.addressLine3 && ","}
							</div>
							{/* <RdsLabel
								label={props.addressLine3}
								multiline={true}
								class="addressLine"
							></RdsLabel> */}
							<div className="mb-0">{props.addressLine3}</div>
							{props.children}
						</div>
					</div>
				</div>
			)}
			{props.withIcon && (
				<div className={props.cardborder ? "card" : ""}>
					<div className="d-flex gap-2 p-4 word_wrap">
						<div className="block">
							<RdsIcon
								name="location"
								colorVariant="primary"
								height="20px"
								width="20px"
								fill={false}
								stroke={true}
							></RdsIcon>
						</div>
						<div>
							<p className="address-header fw-semibold hr mb-0">
								{props.header}
							</p>
							<div className="address-body mt-0 mb-1">
								{/* <RdsLabel
							label={props.addressLine1}
							multiline={true}
							class="addressLine"
						>
						</RdsLabel> */}
								<div className="mb-0">
									{props.addressLine1}
									{props.addressLine2 && ","}
								</div>
								{/* <RdsLabel
							label={props.addressLine2}
							multiline={true}
							class="addressLine"
						>
							{props.addressLine3 && ","}
						</RdsLabel> */}
								<div className="mb-0">
									{props.addressLine2}
									{props.addressLine3 && ","}
								</div>
								{/* <RdsLabel
							label={props.addressLine3}
							multiline={true}
							class="addressLine"
						></RdsLabel> */}
								<div className="mb-0">{props.addressLine3}</div>
								{props.children}
							</div>
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default RdsAddressDetail;
