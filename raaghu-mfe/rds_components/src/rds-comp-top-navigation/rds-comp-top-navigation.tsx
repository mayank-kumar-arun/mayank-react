import React, { useState } from "react";
import { RdsIcon, RdsNotification } from "../rds-elements";

export interface RdsCompTopNavigationProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const RdsCompTopNavigation = (props: RdsCompTopNavigationProps) => {
	const languageItems = [
		{
			value: "Deutsch",
			some: "value",
			key: "new",
			icon: "de",
			iconWidth: "20px",
			iconHeight: "20px",
		},
		{
			value: "English(IND)",
			some: "value",
			key: "refresh",
			icon: "in",
			iconWidth: "20px",
			iconHeight: "20px",
		},
		{
			value: "English (Default)",
			some: "value",
			key: "export",
			icon: "us",
			iconWidth: "20px",
			iconHeight: "20px",
		},
	];

	const notifications = [
		{
			status: "success",
			title: "Tenant added",
			urlTitle: "hello",
			// url:" " ,
			time: "a month ago",
			state: 1,
			userNotificationId: 0,
			selected: false,
		},

		{
			status: "error",
			title: "Tenant deleted",
			urlTitle: "hello",
			time: "a month ago",
			state: 1,
			userNotificationId: 1,
			selected: false,
		},

		{
			status: "warn",
			title: "Tenant added  warn",
			urlTitle: "hello",
			time: "a month ago",
			state: 1,
			userNotificationId: 2,
			selected: false,
		},

		{
			status: "info",
			title: "Tenant deleted info",
			urlTitle: "hello",
			time: "a month ago",
			state: 1,
			userNotificationId: 3,
			selected: false,
		},
	];
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light dlfex justify-content-between ps-2 pe-3">
				<div className="d-flex align-items-center">
					<img
						className="ms-1"
						src="raaghu-logo.svg"
						alt="logo"
						style={{ width: "100px", height: "55.125px" }}
					></img>
					<div className="ms-4">
						<div style={{ fontWeight: 500, fontSize: "15px" }}>Dashboard</div>
						<div style={{ fontSize: "12px" }} className="text-muted">
							Statistics and reports
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
							{languageItems.map((language: any, i: any) => (
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
								notifications={notifications}
								unreadCount={12}
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
