import React, { Fragment } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./rds-breadcrumb.scss";
import RdsIcon from "../rds-icon";

export interface breadcrumbprop {
  breadItems: any[];
  role?: string;
  divider?: string;
}

const RdsBreadcrumb = (props: breadcrumbprop) => {
  const Role = `${props.hasOwnProperty("role")? props.role :"default" }`;
  // const customrole =`${ Role === "Advance"? "|":Role==="withDivide"?'>':'/'}`;
  const divider= {
     margin:'5px' ,
    color:"#373535e6",
}
  return (
    <Fragment>
   {Role==="advance" ?<nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        {props.breadItems.map((breadItem, index) => {
            return index == 0 ? (
              <li className={`${breadItem.active}`} id='breaditem1'>
               <span className="me-2">
                <RdsIcon name={breadItem.icon} fill={breadItem.iconFill} stroke={breadItem.iconstroke} width={breadItem.iconWidth} height={breadItem.iconHeight} colorVariant={breadItem.iconColor} />
                </span>
                <a href={breadItem.route} aria-disabled="true">
                  {breadItem.label}
                </a>
              </li>
            ) : (
              <li className={`breadcrumb-item ${breadItem.active}`} id="breadcrumbItems">
                <span style={divider}>{ props.divider}</span>
                <span className="ms-1 me-2">
                <RdsIcon name={breadItem.icon} fill={breadItem.iconFill} stroke={breadItem.iconstroke} width={breadItem.iconWidth} height={breadItem.iconHeight} colorVariant={breadItem.iconColor} />
                </span>
                <a href={breadItem.route} aria-disabled="true">
                  {breadItem.label}
                </a>
                
              </li>
            );
          })}
        </ol>
      </nav>:<nav  aria-label="breadcrumb">
        <ol className="breadcrumb">
          {props.breadItems.map((breadItem) => (
           
              <li className={`breadcrumb-item ${breadItem.active}`}>
                <a href={breadItem.route} aria-disabled="true">
                  {breadItem.label}
                </a>
              </li>
          ))}
        </ol>
      </nav>} 

    </Fragment>
  );
};

export default RdsBreadcrumb;
