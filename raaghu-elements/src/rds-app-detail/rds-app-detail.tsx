import React, { Fragment } from "react";
import RdsIcon from "../rds-icon";
import "./rds-app-detail.scss";

export interface RdsAppDetailProps {
	appDetailsItem: any;
}

const RdsAppDetail = (props: RdsAppDetailProps) => {
	return (
		<Fragment>
			<div className="card">
				<div className="p-3 headerr ">
					<span className="border p-1">
						<RdsIcon
							name={props.appDetailsItem.icon}
							colorVariant={props.appDetailsItem.iconColor}
							height={props.appDetailsItem.iconHeight}
							width={props.appDetailsItem.iconWidth}
							fill={props.appDetailsItem.iconFill}
							stroke={props.appDetailsItem.iconStroke}
						/>
					</span>
					<div className="form-check form-switch">
						<input
							className="form-check-input"
							type="checkbox"
							id="flexSwitchCheckDefault"
						/>
					</div>
				</div>
				<div className="card-body p-2">
					<div>
						<label className="fs-5 fw-bold ">
							{props.appDetailsItem.title}
						</label>
					</div>
					<div>
						<label className="text-muted mt-1">
							{props.appDetailsItem.subtitle}
						</label>
					</div>
				</div>
				<div className="border-top pb-1">
					<a
						href={props.appDetailsItem.route}
						className="float-end p-2 fs-7 linkk"
					>
						View integration
					</a>
				</div>
			</div>
		</Fragment>
	);
};

export default RdsAppDetail;
