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
	const alertColor = "p-2 alert alert-" + (props.colorVariant || "primary");
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
    let isShow = `${clicked == true ? " d-none " : " w-100 "}`;
    let isPosition = props.position == "bottom"? "fixed-bottom": " ";
	return (
		<Fragment>
			<div className={`${alertColor} ${isShow} ${isPosition} `} style={props.style} role="alert">
				<div className="px-2 d-flex justify-content-between" >
					<div>
						{props.hasOwnProperty("icon")&&
						<RdsIcon
								name={props.icon||" "}
								fill={props.iconFill}
								stroke={props.iconStroke}
								height={props.iconHeight}
								width={props.iconWidth}
								classes='me-2'
							/>}
						<span>{props.alertmessage}</span>
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