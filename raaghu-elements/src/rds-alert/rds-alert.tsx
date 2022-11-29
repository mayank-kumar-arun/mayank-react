import React, { useState, Fragment, useEffect } from "react";
import "./rds-alert.scss";
import { colors } from "../../libs/types";
import RdsIcon from "../rds-icon";
export interface RdsAlertProps {
	dismisable?: boolean;
	alertmessage: string;
	colorVariant: colors;
	delay?: number;
	icon?: string;
	iconFill?: boolean;
	iconStroke?: boolean;
	iconHeight?: string;
	iconWidth?: string;
	position?: "top" |"bottom" ;
	style?: any;
}

const RdsAlert = (props: RdsAlertProps) => {
	const [clicked, setClicked] = useState(false);
    let delay = props.delay;
	const alertColor = " p-2 alert alert-" + (props.colorVariant || "primary");
	const handler = props.hasOwnProperty("delay");
    const bg=" bg-"+(props.colorVariant || "primary")
	useEffect(() => {
		if (handler == true) {
			setTimeout(() => {
				setClicked(true);
			}, delay);
		}
	});

	const closeHandler = (e: any) => {
		setClicked(true);
	};
    let isShow = `${clicked == true ? " closed " : " shown1 "}`;
    let isPosition = props.position == "bottom"? "fixed-bottom": " ";
	
	const iconColor =(props.colorVariant =="light")?"dark":"light";
	return (
		<Fragment>
			<div
				className={`${alertColor} ${isShow} ${isPosition} `}
				style={props.style}
				role="alert"
			>
				<div className="d-flex justify-content-between" id="alert__1">
					<div>
						{props.hasOwnProperty("icon")?
						<span className={` icon__style  ${bg}`} >
							<RdsIcon
								name={props.icon||" "}
								fill={props.iconFill}
								stroke={props.iconStroke}
								height={props.iconHeight}
								width={props.iconWidth}
								colorVariant={iconColor}
							/>
						</span>:<>{" "}</>}
						<span className="text-dark">{props.alertmessage}</span>
					</div>
					<div >
						{props.dismisable === true && (
							<button
								type="button"
								className="btn-close position-right"
								data-bs-dismiss="alert"
								aria-label="Close"
							
								onClick={() => closeHandler}
							></button>
						)}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default RdsAlert;