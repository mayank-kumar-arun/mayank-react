import React, { useState } from "react";
import { RdsDropdownList, RdsIcon, RdsNotification } from "../rds-elements";
// import logo from "";
export interface RdsCompTopNavigationProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
  notifications?: any[];
  languageItems?: any [];
  navbarTitle?: string;
  navbarSubTitle?: string;
  brandName ?: string;
}

const RdsCompTopNavigation = (props: RdsCompTopNavigationProps) => {

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-white bg-white dlfex justify-content-between ps-2 pe-3">
				<div className="d-flex align-items-center">
					<span className="navbar-brand p-0 m-0">
          <img
						className="ms-1"
						src="./assets/raaghu_icon.png"
						alt="logo"
						width="70"
					></img>
          <span className="title fw-bold text-lowercase m-2">
            <b>{props.brandName}</b>
          </span>
          </span>
					<div className="ms-5">
						<div className="text-bold" style={{ fontSize: "15px" }}>{props.navbarTitle}</div>
						<div style={{ fontSize: "12px" }} className="text-muted">
							{props.navbarSubTitle}
						</div>
					</div>
				</div>
				<div className="d-flex me-2 align-items-center">

					<RdsDropdownList listItems={props.languageItems} withBorder={false}></RdsDropdownList>

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
							className="dropdown-menu fab-dropdown border-0 shadow p-0"
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
					<div className="me-2" style={{cursor: "pointer"}}>
						<RdsIcon
							name="gear"
							height="15px"
							width="15px"
							fill={false}
							stroke={true}
						></RdsIcon>
						<span className="ms-3 me-2 text-muted ">|</span>
					</div>
					<div className="d-flex align-items-center" style={{cursor: "pointer"}}>
						<img
							src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
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
