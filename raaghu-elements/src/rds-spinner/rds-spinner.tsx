import React, { Fragment } from "react";

import "./rds-spinner.scss";

export interface RdsSpinnerProps {
  spinnerType?: string;
  colorVariant?: string;
  width?:string; 
  borderWidth?:string,
  height?:string
}
const RdsSpinner = (props: RdsSpinnerProps) => {
    let spinner= props.spinnerType||"border";
    let txtColor="text-"+ props.colorVariant||"primary";
  return (
    <Fragment>

     {spinner=="border"&& <div className={"spinner-border"+` ${txtColor}`} style={{width:props.width, height:props.height ,borderWidth:props.borderWidth }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
      {spinner=="grow"&& <div className={"spinner-grow"+` ${txtColor}`} style={{width:props.width, height:props.height ,borderWidth:props.borderWidth}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>}
      
     
    </Fragment>
  );
};
export default RdsSpinner;
