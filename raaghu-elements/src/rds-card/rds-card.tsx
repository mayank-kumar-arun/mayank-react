import React, { Fragment } from "react";
import { colors } from "../../libs/types";
import RdsAvatar from "../rds-avatar";

import "./rds-card.scss";

export interface RdsCardProps {
	buttonLabel?: string;
	colorVariant?: colors;
	cardTitle?: string;
	cardText?: string;
	showFooter?: boolean;
	isImage?: boolean;
	imageUrl?: string;
	avatarUrl?: string;
	centerAlign?: boolean;
	isAvatar?: boolean;
	borderColor?: colors;
}

const RdsCard = (props: RdsCardProps) => {
	const btnColor = "btn btn-md btn-" + (props.colorVariant || "primary");

	let isCenter = props.centerAlign || false;
	let textAlign = `${isCenter === true ? "card text-center" : "card"}`;
	let leftAlignCenter = `calc(50% + (-42px))`;
	let borderColor = `border border-${props.borderColor}`;

	return (
		<Fragment>
			<div className={`${textAlign} ${props.borderColor ? borderColor : ""}`}>
				<div className="headerClass">
					{/* {props.isImage === true && (
						<div>
							<img
								src={props.imageUrl}
								id="backImg"
								className="card-img-top"
								alt="..."
							/>
						</div>
					)} */}
					{props.isImage === true ? (
						<div className="position-relative">
							<img
								src={props.imageUrl}
								id="backImg"
								className="card-img-top"
								alt="..."
							/>
							{isCenter === true ? (
								<>
									{props.isAvatar === true && (
										<div>
											<div className="position-relative avatar-pic2 d-flex justify-content-center">
												<RdsAvatar
													withProfilePic={true}
													roundedAvatar={true}
													profilePic={props.avatarUrl}
												></RdsAvatar>
											</div>
										</div>
									)}
								</>
							) : (
								<>
									{props.isAvatar === true && (
										<div>
											<div className="position-absolute avatar-pic">
												<RdsAvatar
													withProfilePic={true}
													roundedAvatar={true}
													profilePic={props.avatarUrl}
												></RdsAvatar>
											</div>
										</div>
									)}
								</>
							)}
						</div>
					) : (
						<>
							{props.isAvatar === true && (
								<div>
									<div className="">
										<RdsAvatar
											withProfilePic={true}
											roundedAvatar={true}
											profilePic={props.avatarUrl}
										></RdsAvatar>
									</div>
								</div>
							)}
						</>
					)}
					{/* {props.isAvatar === true &&
						isCenter === true &&
						props.isImage === true && (
							<img
								className="img-fluid"
								style={{ left: leftAlignCenter }}
								src={props.avatarUrl}
							></img>
						)} */}
				</div>

				{props.isImage || props.isAvatar ? (
					<div className="card-body">
						<h5 className={`${isCenter ? "" : "mt-3"}`}>{props.cardTitle}</h5>
						<p>{props.cardText}</p>
					</div>
				) : (
					<>
						<div className={`${isCenter === true ? "":"card-header pt-3"}`}>
							<h5>{props.cardTitle}</h5>
						</div>

						<div className="card-body">
							<div>
								<p>{props.cardText}</p>
							</div>
						</div>
					</>
				)}

				{props.showFooter === true && (
					<div className="card-footer">
						<button type="button" className={` ${btnColor}`}>
							{props.buttonLabel}
						</button>
					</div>
				)}
			</div>
		</Fragment>
	);
};

export default RdsCard;
