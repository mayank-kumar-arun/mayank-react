import React, { useState, Fragment, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./rds-alert.scss";
import { Colors} from "../../libs/types";
import RdsIcon from "../rds-icon";

export interface RdsAlertProps {
  dismisable?: boolean;
  alertmessage: string;
  colorVariant?: Colors;
  delay?: number;
  icon: string;
  iconFill: boolean;
  iconStroke: boolean;
  iconHeight: string;
  iconWidth: string;
  iconColor: string;
}

const RdsAlert = (props: RdsAlertProps) => {
  const [clicked, setClicked] = useState(false);

  let delay = props.delay;
  const alertColor = "p-1 alert alert-" + (props.colorVariant || "primary");
  const handler = props.hasOwnProperty("delay");


  useEffect(() => {
    if (handler == true) {
      setTimeout(() => {
        setClicked(true);
      }, delay);
    }
  });

  const closeHandler = (e: any) => {
    setClicked(true);
    //props.onDismiss(e);
  };

  let isShow = `${clicked == true ? " closed " : " shown1 "}`;

  return (
    <Fragment>
      <div
        className={`${alertColor}` + `${isShow}`}
        role="alert"
      >
        <div className="cont">
          <div>
            {" "}
            <span>
              {" "}
              <RdsIcon
                name={props.icon}
                fill={props.iconFill}
                stroke={props.iconStroke}
                height={props.iconHeight}
                width={props.iconWidth}
                colorVariant={props.iconColor}
              />
            </span>
            <span> {props.alertmessage}</span>
          </div>
          <div>
            {props.dismisable === true && (
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() => closeHandler}
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
