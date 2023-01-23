import React, { useState } from "react";
import "./rds-side-nav-new.scss";
import RdsSideNavChild from "./rds-side-nav-child";
import RdsIcon from "../rds-icon/rds-icon";

export interface RdsSideNavProps {
  sideNavItems: any[];
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const RdsSideNav = (props: RdsSideNavProps) => {
  const [dataFromChild, setDataFromChild] = useState("");

  const handleChildData = (data: any) => {
    console.log(data);
    setDataFromChild(data);
  };
  return (
    <>
      <nav
        id="sidebar"
        className={`bd-links min-vh-100 pt-3 ps-4 position-relative ${
          dataFromChild ? "toggle toggle-sidebar-menu" : ""
        }`}
      >
        <RdsSideNavChild
          callback={handleChildData}
          data={props.sideNavItems}
          onClickHandler={props.onClick}
        ></RdsSideNavChild>
      </nav>
    </>
  );
};

export default RdsSideNav;
