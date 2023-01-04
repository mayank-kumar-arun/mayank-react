import React from "react";
import "./rds-side-nav-new.scss";
import RdsSideNavChild from "./rds-side-nav-child";
import RdsIcon from "../rds-icon/rds-icon";
import RdsToggle from "../rds-toggle/rds-toggle";

export interface RdsSideNavPros {
  sideNavItems: any[];
}

const RdsSideNav = (props: RdsSideNavPros) => {
  return (
    <>
      <nav
        id="sidebar"
        className="bd-links min-vh-100 pt-3 ps-4 position-relative"
      >
        <div className="listsItems">
          <RdsSideNavChild data={props.sideNavItems}></RdsSideNavChild>
        </div>
      </nav>
      <div className="sidenav-footer text-center" style={{width:"290px", bottom:"28px"}}>
        <div className="text-center mb-3">
          <RdsIcon
            name="grid_square"
            height="23px"
            width="23px"
            stroke={true}
            fill={false}
          ></RdsIcon>
        </div>
        <div className="darkTheme text-center">
          <a className="list d-inline-flex align-items-center text-decoration-none text-uppercase">
            <RdsToggle iconOnUncheck={"standard_subscription"} iconOnCheck={"professional_subscription"} ></RdsToggle>
          </a>
        </div>
      </div>
    </>
  );
};

export default RdsSideNav;
