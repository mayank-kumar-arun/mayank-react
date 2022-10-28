import React, { Fragment } from "react";
import { Colors } from "../Types";

export interface RdsSpinnerProps {
  spinnerType?: string;
  colorVariant?: Colors;
}
const RdsSpinner = (props: RdsSpinnerProps) => {
    let spinner= props.spinnerType||"border";
    let txtColor="text-"+ props.colorVariant||"primary";
  return (
    <Fragment>
     {spinner=="border"&& <div className={"spinner-border"+` ${txtColor}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
      {spinner=="grow"&& <div className={"spinner-grow"+` ${txtColor}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
    </Fragment>
  );
};
export default RdsSpinner;
