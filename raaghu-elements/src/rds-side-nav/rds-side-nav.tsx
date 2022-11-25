import React, { useState } from "react";
import "./rds-side-nav.scss";
import RdsIcon from "../rds-icon/rds-icon";
import DarkMode from "./DarkMode";
export interface RdsSideNavProps {
	sidenavItems: any[];
}

const RdsSideNav = (props: RdsSideNavProps) => {
	const [displayItem, setDisplayItem] = useState("none");

	const onClickHandler = () => {
		if (displayItem == "none") {
			setDisplayItem("block");
		} else if (displayItem == "block") {
			setDisplayItem("none");
		}
	};

	return (
		<nav id="sidebar" className="bd-links min-vh-100 position-relative">
			<div
				className="sidebarList list-unstyled mb-0 py-2 px-4"
				style={{
					border: 1,
					borderStyle: "solid",
					borderColor: "#cecece",
					background: "white",
				}}
			>
				<img
					src="./raaghu-logo.svg"
					alt="Raaghu-logo"
					style={{ width: 191 }}
				></img>
			</div>
			<ul className="sidebarList list-unstyled mb-0 py-2 px-4 h-100">
				{props.sidenavItems.map((sidenavItem, key) => (
					<li key={key} className="listRow mb-2" style={{ paddingLeft: 40 }}>
						<a
							className="list d-inline-flex align-items-center text-decoration-none text-uppercase"
							href="#"
						>
							<div className="pe-3">
								<RdsIcon
									name={sidenavItem.icon}
									height="20px"
									width="20px"
									fill={false}
									stroke={true}
								/>
							</div>
							<div>{sidenavItem.label}</div>
						</a>
						{sidenavItem.children && (
							<>
								<span className="ms-4" key={key} onClick={onClickHandler}>
									<RdsIcon
										name="chevron_down"
										fill={false}
										stroke={true}
										height="20px"
										width="20px"
									></RdsIcon>
								</span>
								<ul
									key={sidenavItem.children.label}
									style={{ display: displayItem }}
									className="list-unstyled"
								>
									{sidenavItem.children.map((Child: any, idx: any) => (
										<>
											<li key={idx} className="ps-3">
												<a
													className="list d-inline-flex align-items-center text-decoration-none text-uppercase"
													href="#"
												>
													<div className="pe-3">
														<RdsIcon
															name={Child.icon || "none"}
															height="20px"
															width="20px"
															fill={false}
															stroke={true}
														/>
													</div>
													<div>{Child.label}</div>
												</a>
											</li>
										</>
									))}
								</ul>
							</>
						)}
					</li>
				))}

				{/* <li className="listRow mb-2 darkTheme">
          
        </li> */}
				<div className="gridIcon">
					<RdsIcon
						name="grid_square"
						height="23px"
						width="23px"
						stroke={true}
						fill={false}
					></RdsIcon>
				</div>
				<div className="darkTheme">
					<a className="list d-inline-flex align-items-center text-decoration-none text-uppercase">
						<DarkMode></DarkMode>
					</a>
				</div>
			</ul>
		</nav>
	);
};

export default RdsSideNav;
