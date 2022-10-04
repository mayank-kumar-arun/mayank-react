import React, { Fragment } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min";

export interface breadcrumbprop {
  breadItems: any[];
  role?: string;
}

const RdsBreadcrumb = (props: breadcrumbprop) => {
  // const Role = `${props.hasOwnProperty("role")? props.role :"Basic" }`;
  // const customrole =`${ Role === "Advance"? "|":Role==="withDivide"?'>':'/'}`;

  
  return (
    <Fragment>
      <nav  aria-label="breadcrumb">
        <ol className="breadcrumb">
          {props.breadItems.map((breadItem) => (
           
              <li className={`breadcrumb-item ${breadItem.active}`}>
                <a href={breadItem.route} aria-disabled="true">
                  {breadItem.label}
                </a>
              </li>
           
          ))}
        </ol>
      </nav>
    </Fragment>
  );
};

export default RdsBreadcrumb;
