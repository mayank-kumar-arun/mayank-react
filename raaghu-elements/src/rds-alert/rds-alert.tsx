import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./rds-alert.css";
import { Colors} from "../Types";

export interface RdsAlertProps {
  label: string;
  dismisable?: boolean;
  alertmessage: string;
  colorVariant?: Colors;
}

const RdsAlert = (props: RdsAlertProps) => {
  //const label1 = `${(props.withlabel === false)? "" : props.label}`;
  const alertColor = "alert alert-" + (props.colorVariant || 'primary');
  //const fontSize = {"font-size:" + props.Size }
  return (
    <Fragment>
      <div className={alertColor} role="alert">
        <div className="cont">
          <div>{props.alertmessage}</div>
          <div>
            {props.dismisable === true && (
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RdsAlert;

/* { doubleApproval === true && <input  type="checkbox" onClick={handleOnCheck} checked/>}
   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  */
