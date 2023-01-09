import React, { Fragment, useState } from "react";

import { colors, placements } from "../../libs/types";
import RdsButton from "../rds-button/rds-button";
import RdsIcon from "../rds-icon/rds-icon";
import "./rds-counter.scss";

export interface RdsCounterProps {
	counterValue: number;
	label?: string;
	min: number;
	max: number;
	width: number;
	colorVariant?: colors;
	position?: placements;
}

const RdsCounter = (props: RdsCounterProps) => {
	let initialCounterValue: number = props.counterValue ? props.counterValue : 0;

	const classesForButton =
		"btn btn-icon btn-" + (props.colorVariant || "primary");
	const classesForInnerSpan =
		"form-control d-flex justify-content-center " +
		(props.colorVariant || "primary") +
		" rounded-0";
	const classesForWrapperDiv = "d-flex justify-content-between";
	// This state hook represents counter value
	const [counterValue, setCounterValue] = useState(initialCounterValue);
	const onMinusClick = () => {
		if (counterValue > props.min) setCounterValue((prev) => prev - 1);
	};
	const onPlusClick = () => {
		if (counterValue < props.max) setCounterValue((prev) => prev + 1);
	};
	return (
		<Fragment>
			{props.position ? (
				<>
					{" "}
					{props.position == "top" && (
						<div>
							<label className="mb-2">{props.label}</label>
							<div
								className={classesForWrapperDiv}
								style={{ width: props.width }}
							>
								<RdsButton
									type={"button"}
									icon="minus"
									style={{ borderRadius: "5px 0 0 5px" }}
									iconFill={false}
									iconColorVariant="light"
									iconStroke={true}
									iconHeight="13px"
									iconWidth="13px"
									class={classesForButton}
									onClick={onMinusClick}
								></RdsButton>
								<span className={classesForInnerSpan}>{counterValue}</span>
								<RdsButton
									type={"button"}
									icon="plus"
									iconColorVariant="light"
									style={{ borderRadius: "0 5px 5px 0" }}
									iconFill={false}
									iconStroke={true}
									iconHeight="13px"
									iconWidth="13px"
									class={classesForButton}
									onClick={onPlusClick}
								></RdsButton>
							</div>
						</div>
					)}
					{props.position == "bottom" && (
						<div>
							<div
								className={classesForWrapperDiv}
								style={{ width: props.width }}
							>
								<RdsButton
									type={"button"}
									icon="minus"
									style={{ borderRadius: "5px 0 0 5px" }}
									iconFill={false}
									iconColorVariant="light"
									iconStroke={true}
									iconHeight="13px"
									iconWidth="13px"
									class={classesForButton}
									onClick={onMinusClick}
								></RdsButton>
								<span className={classesForInnerSpan}>{counterValue}</span>
								<RdsButton
									type={"button"}
									icon="plus"
									iconColorVariant="light"
									style={{ borderRadius: "0 5px 5px 0" }}
									iconFill={false}
									iconStroke={true}
									iconHeight="13px"
									iconWidth="13px"
									class={classesForButton}
									onClick={onPlusClick}
								></RdsButton>
							</div>

							<label className="mt-2">{props.label}</label>
						</div>
					)}
					{props.position == "right" && (
						<div className="d-flex align-items-center gap-3">
							<label>{props.label}</label>
							<div
								className={classesForWrapperDiv}
								style={{ width: props.width }}
							>
								<RdsButton
									type={"button"}
									icon="minus"
									style={{ borderRadius: "5px 0 0 5px" }}
									iconFill={false}
									iconColorVariant="light"
									iconStroke={true}
									iconHeight="13px"
									iconWidth="13px"
									class={classesForButton}
									onClick={onMinusClick}
								></RdsButton>
								<span className={classesForInnerSpan}>{counterValue}</span>
								<RdsButton
									type={"button"}
									icon="plus"
									iconColorVariant="light"
									style={{ borderRadius: "0 5px 5px 0" }}
									iconFill={false}
									iconStroke={true}
									iconHeight="13px"
									iconWidth="13px"
									class={classesForButton}
									onClick={onPlusClick}
								></RdsButton>
							</div>
						</div>
					)}
					{props.position == "left" && (
						<div className="d-flex align-items-center gap-3">
							<div
								className={classesForWrapperDiv}
								style={{ width: props.width }}
							>
								<RdsButton
									type={"button"}
									icon="minus"
									style={{ borderRadius: "5px 0 0 5px" }}
									iconFill={false}
									iconColorVariant="light"
									iconStroke={true}
									iconHeight="13px"
									iconWidth="13px"
									class={classesForButton}
									onClick={onMinusClick}
								></RdsButton>
								<span className={classesForInnerSpan}>{counterValue}</span>
								<RdsButton
									type={"button"}
									icon="plus"
									iconColorVariant="light"
									style={{ borderRadius: "0 5px 5px 0" }}
									iconFill={false}
									iconStroke={true}
									iconHeight="13px"
									iconWidth="13px"
									class={classesForButton}
									onClick={onPlusClick}
								></RdsButton>
							</div>
							<label>{props.label}</label>
						</div>
					)}{" "}
				</>
			) : (
				<div>
					<label className="mb-2">{props.label}</label>
					<div className={classesForWrapperDiv} style={{ width: props.width }}>
						<RdsButton
							type={"button"}
							icon="minus"
							style={{ borderRadius: "5px 0 0 5px" }}
							iconFill={false}
							iconColorVariant="light"
							iconStroke={true}
							iconHeight="13px"
							iconWidth="13px"
							class={classesForButton}
							onClick={onMinusClick}
						></RdsButton>
						<span className={classesForInnerSpan}>{counterValue}</span>
						<RdsButton
							type={"button"}
							icon="plus"
							iconColorVariant="light"
							style={{ borderRadius: "0 5px 5px 0" }}
							iconFill={false}
							iconStroke={true}
							iconHeight="13px"
							iconWidth="13px"
							class={classesForButton}
							onClick={onPlusClick}
						></RdsButton>
					</div>
				</div>
			)}
		</Fragment>
	);
};

export default RdsCounter;
