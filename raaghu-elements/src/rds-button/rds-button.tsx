import React, { ReactNode, useState ,  useEffect, useRef} from "react";
import "./rds-button.scss";
import { colors, placements } from "../../libs/types";
import Tooltip from "../rds-tooltip/rds-tooltip";
import RdsIcon from "../rds-icon";

export interface RdsButtonProps {
  submit?: boolean;
  count?: number;
  isFabIcon?: false;
  isRounded?: false;
  id?: string;
  buttonId?: string;
  isLoading?: boolean;
  showLoadingSpinner?: boolean;
  children?: ReactNode;
  isDisabled?: boolean;
  colorVariant?: colors;
  label?: string;
  block?: boolean;
  size?: string;
  roundedButton?: boolean;
  roundedCorner?: boolean;
  icon?: string;
  isOutline?: boolean;
  tooltip?: boolean;
  tooltipPlacement?: placements;
  tooltipTitle?: string;
  type: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  formName?: string;
  iconHeight?: string;
  iconWidth?: string;
  iconFill?: boolean;
  iconStroke?: boolean;
  class?: string;
  arialabel?: string;
  databsdismiss?: string;
  databstarget?: string;
  databstoggle?: string;
  ariacontrols?: string;
  iconColorVariant?: string;
  style?: any;
}

const RdsButton = (props: RdsButtonProps) => {
  
  const outline = `${props.isOutline? "  btn-outline-" + props.colorVariant: "  align-items-center btn-" + props.colorVariant}`;
  const mode = props.size? ` btn-${ props.size === "small" ? "sm " : props.size === "large" ? "lg " : "md "}`: "";
  const icon = props.isFabIcon ? " btn-icon p-1 rounded-pill " : "";
  const icon1 = props.isRounded ? " rounded-pill " : "";
  const blockWidth = props.block === true ? "w-100" : "";
  const spinner = props.showLoadingSpinner ? " spinner" : "";
  const classes = `${outline}${mode}${icon}${icon1} ${blockWidth} ${spinner} ${props.class}`;
  const btnType = props.type === "submit" ? "submit" : "button";

  const buttonClick = (evt: any) => {
    if (!props.showLoadingSpinner && !props.isDisabled) {
      props.onClick != undefined && props.onClick(evt);
    }
  };
  const iconClasses =
    props.hasOwnProperty("icon") && props.hasOwnProperty("label")
      ? "me-2 d-inline-block"
      : "";
  const showLoadingSpinner = props.showLoadingSpinner || false;
  const id =props.id ||'rds_buttonId_';

 return (<>
  {props.tooltip ? (< Tooltip text={props.tooltipTitle} place={props.tooltipPlacement}>
    <button
  type={btnType}
  className={`btn position-relative${classes}`}
  disabled={props.isDisabled}
  onClick={buttonClick}
  form={props.formName}
  style={props.style}
  aria-label={props.arialabel}
          data-bs-dismiss={props.databsdismiss}
          data-bs-target={props.databstarget}
          data-bs-toggle={props.databstoggle}
          aria-controls={props.ariacontrols}
  id={props.id}
>
  {showLoadingSpinner === false && props.icon && (
      <span className={iconClasses}>
        <RdsIcon
          name={props.icon}
          width={props.iconWidth}
          height={props.iconHeight}
          fill={props.iconFill}
          stroke={props.iconStroke}
          isAnimate={false}
        />
      </span>
    )
  }
  {props.label && (<span className="btn-text align-text-bottom"  >
      {props.label}
    </span>
  )}
  {showLoadingSpinner === false && <>{props.children}</>}
</button>
</Tooltip>):<button
  type={btnType}
  className={`btn position-relative ${classes}`}
  disabled={props.isDisabled}
  onClick={buttonClick}
  form={props.formName}
  style={props.style}
  aria-label={props.arialabel}
  data-bs-dismiss={props.databsdismiss}
 data-bs-target={props.databstarget}
 data-bs-toggle={props.databstoggle}
aria-controls={props.ariacontrols}
  id={props.id}
>
  {showLoadingSpinner === false && props.icon && (
      <span className={iconClasses}>
        <RdsIcon
          name={props.icon}
          width={props.iconWidth}
          height={props.iconHeight}
          fill={props.iconFill}
          stroke={props.iconStroke}
          isAnimate={false}
        />
      </span>
    )
  }
  {props.label && (<span className="btn-text align-text-bottom"  >
      {props.label}
    </span>
  )}
  {showLoadingSpinner === false && <>{props.children}</>}
</button>} 
 </>
)
};

 export default RdsButton;
