// import React, { useState, Fragment, useEffect } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import "./rds-alert.scss";
// import { colors } from "../../libs/types";
// import RdsIcon from "../rds-icon";

// export interface RdsAlertProps {
// 	dismisable?: boolean;
// 	alertmessage: string;
// 	colorVariant?: colors;
// 	delay?: number;
// 	icon: string;
// 	iconFill: boolean;
// 	iconStroke: boolean;
// 	iconHeight: string;
// 	iconWidth: string;
// 	iconColor: string;
// 	position?: string;
// 	style?: any;
// }

// const RdsAlert = (props: RdsAlertProps) => {
// 	const [clicked, setClicked] = useState(false);

// 	let delay = props.delay;
// 	const alertColor = "p-1 alert alert-" + (props.colorVariant || "primary");
// 	const handler = props.hasOwnProperty("delay");

// 	useEffect(() => {
// 		if (handler == true) {
// 			setTimeout(() => {
// 				setClicked(true);
// 			}, delay);
// 		}
// 	});

// 	const closeHandler = (e: any) => {
// 		setClicked(true);
	
// 	};

// 	let isShow = `${clicked == true ? " closed " : " shown1 "}`;

// 	let isposition =
// 		props.position == "bottom"
// 			? "position-absolute bottom-0 start-0 "
// 			: "position-absolute start-0";

// 	return (
// 		<Fragment>
// 			<div
// 				className={`${alertColor} ${isShow} ${isposition}`}
// 				style={props.style}
// 				role="alert"
// 			>
// 				<div className="cont" id="alert">
// 					<div>
// 						<span>
// 							{" "}
// 							<RdsIcon
// 								name={props.icon}
// 								fill={props.iconFill}
// 								stroke={props.iconStroke}
// 								height={props.iconHeight}
// 								width={props.iconWidth}
// 								colorVariant={props.iconColor}
// 							/>
// 						</span>
// 						<span>{props.alertmessage}</span>
// 					</div>
// 					<div>
// 						{props.dismisable === true && (
// 							<button
// 								type="button"
// 								className="btn-close position-right"
// 								data-bs-dismiss="alert"
// 								aria-label="Close"
// 								onClick={() => closeHandler}
// 							></button>
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 		</Fragment>
// 	);
// };

// export default RdsAlert;

import React, { useState, Fragment, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./rds-alert.scss";
import { colors } from "../../libs/types";
import RdsIcon from "../rds-icon";

export interface RdsAlertProps {
	dismisable?: boolean;
	alertmessage: string;
	colorVariant?: colors;
	delay?: number;
	icon: string;
	iconFill: boolean;
	iconStroke: boolean;
	iconHeight: string;
	iconWidth: string;
	iconColor: string;
	position?: "top" |"bottom" ;
	style?: any;
}

const RdsAlert = (props: RdsAlertProps) => {
	const [clicked, setClicked] = useState(false);
    let delay = props.delay;
	const alertColor = "p-1 alert alert-" + (props.colorVariant || "primary");
	const handler = props.hasOwnProperty("delay");

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

	return (
		<Fragment>
			<div
				className={`${alertColor} ${isShow} ${isPosition} alertDiv`}
				style={props.style}
				role="alert"
			>
				<div className="d-flex justify-content-between" id="alert">
					<div>
						<span>
							{" "}
							<RdsIcon
								name={props.icon}
								fill={props.iconFill}
								stroke={props.iconStroke}
								height={props.iconHeight}
								width={props.iconWidth}
								colorVariant={props.iconColor}
							/>
						</span>
						<span> {" "}{props.alertmessage}</span>
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