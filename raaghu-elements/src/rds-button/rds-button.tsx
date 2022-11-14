import React, { ReactNode, useState } from "react";
import "./rds-button.scss";
import { Colors, Placements } from "../Types";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Tooltip from "../rds-tooltip/rds-tooltip";



export interface RdsButtonProps {
  children?: ReactNode;
  isDisabled?: boolean;
  colorVariant?: Colors;
  label?: string;
  block?: boolean;
  size?: string;
  roundedButton?: boolean;
  roundedCorner?: boolean;
  icon?: string;
  outlineButton?: boolean;
  tooltip?: boolean;
  tooltipPlacement?: Placements;
  tooltipTitle?: string;
  type: "button"|"submit" ;
  onClick?:(React.MouseEventHandler<HTMLButtonElement>);
  formName?: string;
  class?:string;
  arialabel?:string;
  databsdismiss?:string
}



const RdsButton = (props: RdsButtonProps) => {



  const outlineColorVariant =
    `${props.outlineButton === true ? "btn-outline-" : "btn-"}` +
    props.colorVariant;


  let size =
    props.size == "small" ? "btn-sm" : props.size == "large" ? "btn-lg" : "";

  return (

     
    <div className={props.block ? "d-grid gap-2" : ""}> 
    {props.tooltip && <Tooltip text={props.tooltipTitle} place={props.tooltipPlacement}>
    <button
        type={props.type}
        className={`btn ${outlineColorVariant} ${size}  ${props.class}`}
        disabled={props.isDisabled}
        onClick= {props.onClick}
        form={props.formName}
        aria-label={props.arialabel}
        data-bs-dismiss={props.databsdismiss}
      >
        {props.icon}
        {props.label}
        {props.children}      
      </button>
    </Tooltip>}
    {!props.tooltip && <button
        type={props.type}
        className={`btn ${outlineColorVariant} ${size} ${props.class}`}
        disabled={props.isDisabled}
        onClick= {props.onClick}
        form={props.formName}
        aria-label={props.arialabel}
        data-bs-dismiss={props.databsdismiss}
      >
        {props.icon}
        {props.label}
        {props.children}
      </button>}
    </div>
  );
};

export default RdsButton;
