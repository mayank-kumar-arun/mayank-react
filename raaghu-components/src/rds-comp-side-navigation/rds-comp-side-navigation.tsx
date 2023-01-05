import React from "react";
import { RdsSideNav } from "../rds-elements";
import { useTranslation } from "react-i18next";

export interface RdsCompSideNavigationProps{
  sideNavItems: any[];
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const RdsCompSideNavigation = (props:RdsCompSideNavigationProps) => {
	const { t } = useTranslation();

  return <RdsSideNav sideNavItems={props.sideNavItems} onClick={props.onClick}></RdsSideNav>;
};

export default RdsCompSideNavigation;
