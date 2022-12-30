import React, { ReactNode, useState } from "react";
import "./rds-button.scss";
import { colors, placements } from "../../libs/types";

import Tooltip from "../rds-tooltip/rds-tooltip";
import RdsIcon from "../rds-icon";

export interface RdsButtonProps {
	children?: ReactNode;
	isDisabled?: boolean;
	colorVariant?: colors;
	label?: string;
	block?: boolean;
	size?: string;
	roundedButton?: boolean;
	roundedCorner?: boolean;
	icon?: string;
	outlineButton?: boolean;
	tooltip?: boolean;
	tooltipPlacement?: placements;
	tooltipTitle?: string;
	type: "button" | "submit";
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	formName?: string;
	iconHeight?: string;
	iconWidth?: string;
	iconFill?: boolean;
	iconStroke?: boolean;
	class?: string;
	arialabel?: string;
	databsdismiss?: string;
	databstarget?: string;
	databstoggle?: string;
	ariacontrols?: string;
	iconColorVariant?: string;
}

const RdsButton = (props: RdsButtonProps) => {
	const outlineColorVariant =
		`${props.outlineButton === true ? "btn-outline-" : "btn-"}` +
		props.colorVariant;

	let size =
		props.size == "small" ? "btn-sm" : props.size == "large" ? "btn-lg" : "";

	return (
		<div className={props.block ? "RdsButton d-grid gap-2" : "RdsButton "}>
			{props.tooltip && (
				<Tooltip text={props.tooltipTitle} place={props.tooltipPlacement}>
					<button
						type={props.type}
						className={`btn ${outlineColorVariant} ${size}  ${props.class}`}
						disabled={props.isDisabled}
						onClick={props.onClick}
						form={props.formName}
						aria-label={props.arialabel}
						data-bs-dismiss={props.databsdismiss}
						data-bs-target={props.databstarget}
						data-bs-toggle={props.databstoggle}
						aria-controls={props.ariacontrols}
					>
						<span className="d-flex align-items-center justify-content-center">
							{props.icon && (
								<span style={{ marginRight: "5px" }}>
									<RdsIcon
										colorVariant={props.iconColorVariant}
										name={props.icon}
										fill={props.iconFill}
										stroke={props.iconStroke}
										height={props.iconHeight}
										width={props.iconWidth}
									></RdsIcon>
								</span>
							)}
							<span>{props.label}</span>
						</span>
						{props.children}
					</button>
				</Tooltip>
			)}
			{!props.tooltip && (
				<button
					type={props.type}
					className={`btn ${outlineColorVariant} ${size} ${props.class}`}
					disabled={props.isDisabled}
					onClick={props.onClick}
					form={props.formName}
					aria-label={props.arialabel}
					data-bs-dismiss={props.databsdismiss}
					data-bs-target={props.databstarget}
					data-bs-toggle={props.databstoggle}
					aria-controls={props.ariacontrols}
				>
					<span className="d-flex align-items-center justify-content-center">
						{props.icon && (
							<span style={{ marginRight: "5px" }}>
								<RdsIcon
									colorVariant={props.iconColorVariant}
									name={props.icon}
									fill={props.iconFill}
									stroke={props.iconStroke}
									height={props.iconHeight}
									width={props.iconWidth}
								></RdsIcon>
							</span>
						)}
						<span>{props.label}</span>
					</span>
					{props.children}
				</button>
			)}
		</div>
	);
};

export default RdsButton;
