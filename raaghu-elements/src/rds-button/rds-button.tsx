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
  const classes = `${outline}${mode}${icon}${icon1} ${blockWidth} ${spinner}`;
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

{/* <button
  type={btnType}
  className={`btn position-relative${classes}`}
  disabled={props.isDisabled}
  onClick={buttonClick}
  form={props.formName}
  style={props.style}
  aria-label={props.arialabel}
  data-bs-dismiss={props.databsdismiss}
  data-bs-target={props.databstarget}
  data-bs-toggle="tooltip"
  aria-controls={props.ariacontrols}
  data-bs-placement={props.tooltipPlacement}
  data-bs-trigger='hover'
  data-bs-title="tooltipTitle"
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
</button> */}


// import { Tooltip as BsTooltip } from "bootstrap";
// import React, { useEffect, useRef } from "react";
// import { placements } from "../../libs/types";

// export const Tooltip = (p: {
//   children: JSX.Element;
//   text?: string;
//   place?: placements;
// }) => {
//   const childRef = useRef(undefined as unknown as Element);

//   useEffect(() => {
//     const t = new BsTooltip(childRef.current, {
//       title: p.text,
//       placement: p.place,
//       trigger: "hover",
//     });
//     return () => t.dispose();
//   }, [p.text, p.place]);

//   return React.cloneElement(p.children, { ref: childRef });
// };

// export default Tooltip;


// <div className={props.block ? "RdsButton d-grid gap-2" : "RdsButton"}>
//   {props.tooltip && (
//     <Tooltip text={props.tooltipTitle} place={props.tooltipPlacement}>
//       <button
//         type={props.type}
//         className={`btn button__content ${outlineColorVariant} ${size}  ${props.class}`}
//         disabled={props.isDisabled}
//         onClick={props.onClick}
//         form={props.formName}
//         style={props.style}
//         aria-label={props.arialabel}
//         data-bs-dismiss={props.databsdismiss}
//         data-bs-target={props.databstarget}
//         data-bs-toggle={props.databstoggle}
//         aria-controls={props.ariacontrols}
//       >
//         <span className="btn-text  align-items-center justify-content-center">
//           {props.icon && (
//             <span style={{ marginRight: "5px" }}>
//               <RdsIcon
//                 colorVariant={props.iconColorVariant}
//                 name={props.icon}
//                 fill={props.iconFill}
//                 stroke={props.iconStroke}
//                 height={props.iconHeight}
//                 width={props.iconWidth}
//               ></RdsIcon>
//             </span>
//           )}
//           <span>{props.label}</span>
//         </span>
//         {props.children}
//       </button>
//     </Tooltip>
//   )}
//   {!props.tooltip && (
//     <button
//       type={props.type}
//       className={`btn button__content ${outlineColorVariant} ${size} ${props.class}`}
//       disabled={props.isDisabled}
//       onClick={props.onClick}
//       style={props.style}
//       form={props.formName}
//       aria-label={props.arialabel}
//       data-bs-dismiss={props.databsdismiss}
//       data-bs-target={props.databstarget}
//       data-bs-toggle={props.databstoggle}
//       aria-controls={props.ariacontrols}
//     >
//       <span className="d-flex align-items-center justify-content-center">
//         {props.icon && (
//           <span className={`${props.label ? "me-2" : ""}`}>
//             <RdsIcon
//               colorVariant={props.iconColorVariant}
//               name={props.icon}
//               fill={props.iconFill}
//               stroke={props.iconStroke}
//               height={props.iconHeight}
//               width={props.iconWidth}
//             ></RdsIcon>
//           </span>
//         )}
//         <span>{props.label}</span>
//       </span>
//       {props.children}
//     </button>
//   )}
// </div>
