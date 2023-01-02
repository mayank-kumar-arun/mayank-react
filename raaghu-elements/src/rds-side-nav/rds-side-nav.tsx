import React from 'react'
import "./rds-side-nav-new.scss"
import RdsSideNavChild from './rds-side-nav-child'
import RdsIcon from "../rds-icon/rds-icon";
import DarkMode from './DarkMode';


export interface RdsSideNavPros{
    sideNavItems: any[]
}

const RdsSideNav = (props: RdsSideNavPros) => {
  return (
    <nav id="sidebar" className="bd-links min-vh-100 pt-2 position-relative">
        <RdsSideNavChild data={props.sideNavItems}></RdsSideNavChild>
        <div className="footer">
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
        </div>
    </nav>
  )
}

export default RdsSideNav;
