import React, { useState } from "react";
import { RdsIcon, RdsNotification } from "../rds-elements";
export interface RdsCompTopNavigationProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
  notifications?: any[];
  languageItems?: any [];
  navbarTitle?: string;
  navbarSubTitle?: string;
}

const RdsCompTopNavigation = (props: RdsCompTopNavigationProps) => {

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light dlfex justify-content-between ps-2 pe-3">
				<div className="d-flex align-items-center">
					<img
						className="ms-1"
						src="./assets/raaghu_icon.png"
						alt="logo"
						style={{ width: "100px", height: "55.125px" }}
					></img>
					<div className="ms-4">
						<div style={{ fontWeight: 500, fontSize: "15px" }}>{props.navbarTitle}</div>
						<div style={{ fontSize: "12px" }} className="text-muted">
							{props.navbarSubTitle}
						</div>
					</div>
				</div>
				<div className="d-flex me-2">
					<div style={{ position: "relative" }}>
						<a
							data-bs-toggle="dropdown"
							aria-expanded="false"
							className="d-flex align-items-center"
							style={{ textDecoration: "none", cursor: "pointer " }}
						>
							<RdsIcon
								name="us"
								width="15px"
								height="15px"
								stroke={true}
								fill={false}
							></RdsIcon>
							<span className="ms-2 me-2">EN(US)</span>
							<RdsIcon
								name="chevron_down"
								fill={false}
								stroke={true}
								height="10px"
								width="10px"
							></RdsIcon>
						</a>
						<div
							className="dropdown-menu fab-dropdown border-0 shadow mb-1"
							style={{ position: "absolute" }}
						>
							{(props.languageItems!).map((language: any, i: any) => (
								<a
									id="i"
									className="dropdown-item fab-dropdown-item d-flex"
									style={{ marginBottom: "28px" }}
								>
									<RdsIcon
										name={language.icon}
										height={language.iconHeight}
										width={language.iconWidth}
										fill={false}
										stroke={true}
									></RdsIcon>
									<span style={{ marginLeft: "16px" }}>{language.value}</span>
								</a>
							))}
						</div>
					</div>
					<div className="ms-3" style={{ position: "relative" }}>
						<a
							data-bs-toggle="dropdown"
							aria-expanded="false"
							style={{ textDecoration: "none", cursor: "pointer " }}
						>
							<RdsIcon
								name="notification"
								height="15px"
								width="15px"
								fill={false}
								stroke={true}
							></RdsIcon>
						</a>
						<div
							className="dropdown-menu fab-dropdown border-0 shadow"
							style={{ position: "absolute", width: "18rem", left: "-200%" }}
						>
							<RdsNotification
								notifications={props.notifications!}
								colorVariant="primary"
								footerText="2 days ago"
							></RdsNotification>
						</div>
						<span className="ms-3 me-3 text-muted">|</span>
					</div>
					<div className="me-2">
						<RdsIcon
							name="gear"
							height="15px"
							width="15px"
							fill={false}
							stroke={true}
						></RdsIcon>
						<span className="ms-3 me-2 text-muted ">|</span>
					</div>
					<div className="d-flex align-items-center">
						<img
							src="./assets/profile-picture-circle.svg"
							style={{
								width: "20px",
								height: "20px",
								borderRadius: "50%",
								border: "solid 1px grey",
							}}
						></img>
						<div className="ms-2">
							<div style={{ fontWeight: 500, fontSize: "11px" }}>
								Host Admin
							</div>
							<div style={{ fontSize: "9px" }} className="text-muted">
								Keanu Foster
							</div>
						</div>
						<span className="ms-3">
							<RdsIcon
								name="chevron_down"
								height="12px"
								width="12px"
								fill={false}
								stroke={true}
							></RdsIcon>
						</span>
					</div>
				</div>
			</nav>
		</>
	);
};

export default RdsCompTopNavigation;
