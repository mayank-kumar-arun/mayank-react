import React from "react";
import "./rds-fab-menu.scss";
import { colors } from "../../libs/types";
import RdsIcon from "../rds-icon";

export interface RdsFabMenuProps {
  colorVariant?: colors;
  size?: string;
  menuIcon?: string;
  menuiconWidth?: string;
  menuiconHeight?: string;
  listItems: any[];
  onClick?: ( React.MouseEventHandler<HTMLButtonElement>);
}

const RdsFabMenu = (props: RdsFabMenuProps) => {
  let customClasses = `btn btn-${props.colorVariant} btn-icon fab-btn ${
    props.size == "small" ? "btn-sm" : props.size == "large" ? "btn-lg" : ""
  }`;

  return (
    <>
      <button
        className={customClasses}
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <RdsIcon
          name="list"
          fill={false}
          stroke={true}
          height="17px"
          width="17px"
          colorVariant="light"
        ></RdsIcon>
      </button>
      <div className="dropdown-menu fab-dropdown border-0 shadow mb-1">
        {props.listItems.map((listItem)=>(
          <a className="dropdown-item fab-dropdown-item d-flex" onClick={listItem.onClick} style={{marginBottom:"28px"}}>
              <RdsIcon name={listItem.icon} height={listItem.iconHeight} width={listItem.iconWidth} fill={false} stroke={true}></RdsIcon>
              <span style={{marginLeft: "16px"}}>{listItem.value}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default RdsFabMenu;
