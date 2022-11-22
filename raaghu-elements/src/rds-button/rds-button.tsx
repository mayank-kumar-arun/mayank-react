import React, { ReactNode, useState } from "react";
import "./rds-button.scss";
import { Colors, Placements } from "../../libs/types";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Tooltip from "../rds-tooltip/rds-tooltip";
import RdsIcon from "../rds-icon";

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
  type: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  formName?: string;

  class?: string;
  arialabel?: string;
  databsdismiss?: string;
  databstarget?: string;
  databstoggle?: string;
  ariacontrols?: string;
  iconColorVariant?: string;

}

const RdsButton = (props: RdsButtonProps) => {
  const outlineColorVariant =
    `${props.outlineButton === true ? "btn-outline-" : "btn-"}` +
    props.colorVariant;

  let size =
    props.size == "small" ? "btn-sm" : props.size == "large" ? "btn-lg" : "";

  return (
    <div className={props.block ? "d-grid gap-2" : ""}>
      {props.tooltip && (
        <Tooltip text={props.tooltipTitle} place={props.tooltipPlacement}>
          <button
            type={props.type}
            className={`btn ${outlineColorVariant} ${size}  ${props.class}`}
            disabled={props.isDisabled}
            onClick={props.onClick}
            form={props.formName}
            aria-label={props.arialabel}
            data-bs-dismiss={props.databsdismiss}
            data-bs-target={props.databstarget}
            data-bs-toggle={props.databstoggle}
            aria-controls={props.ariacontrols}
          >
            <span className="d-flex align-items-center justify-content-center">
              {props.icon && (
                <span>
                  <RdsIcon
                    colorVariant={props.iconColorVariant}
                    name={props.icon}
                    fill={true}
                    stroke={true}
                    height="17px"
                    width="17px"
                  ></RdsIcon>
                </span>
              )}
              <span style={{ marginLeft: "5px" }}>{props.label}</span>
            </span>
            {props.children}
          </button>
        </Tooltip>
      )}
      {!props.tooltip && (
        <button
          type={props.type}
          className={`btn ${outlineColorVariant} ${size} ${props.class}`}
          disabled={props.isDisabled}
          onClick={props.onClick}
          form={props.formName}
          aria-label={props.arialabel}
          data-bs-dismiss={props.databsdismiss}
          data-bs-target={props.databstarget}
          data-bs-toggle={props.databstoggle}
          aria-controls={props.ariacontrols}
        >
          <span className="d-flex align-items-center justify-content-center">
            {props.icon && (
              <span>
                <RdsIcon
                  colorVariant={props.iconColorVariant}
                  name={props.icon}
                  fill={true}
                  stroke={true}
                  height="17px"
                  width="17px"
                ></RdsIcon>
              </span>
            )}
            <span style={{ marginLeft: "5px" }}>{props.label}</span>
          </span>
          {props.children}
        </button>
      )}
    </div>
  );
};

export default RdsButton;
