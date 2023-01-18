import React from "react";
import { RdsSideNav } from "../rds-elements";
import { useTranslation } from "react-i18next";

export interface RdsCompSideNavigationProps{
  sideNavItems: any[];
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  toggleTheme?: React.MouseEventHandler<HTMLInputElement>;
}

const RdsCompSideNavigation = (props:RdsCompSideNavigationProps) => {
	const { t } = useTranslation();

  // const toggleTheme =(e: any)=>{
  //   console.log("Button Clicked", e.target.checked)
  // }

  return <RdsSideNav sideNavItems={props.sideNavItems} onClick={props.onClick} toggleTheme={props.toggleTheme}></RdsSideNav>;
};

export default RdsCompSideNavigation;
