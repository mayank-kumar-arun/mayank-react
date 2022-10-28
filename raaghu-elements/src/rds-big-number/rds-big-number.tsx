import React, { Fragment } from "react";
import { Colors } from "../Types";
import "./rds-big-number.scss";

export interface RdsBigNumberProps {
  colorVariant?: "string";
  textAlign?: "start" | "center" | "end";
  subTitleColorVariant?: Colors;
  children?: any;
  //isBackground?:boolean;
}

const RdsBigNumber = (props: RdsBigNumberProps) => {
  let Align = "text-" + (props.textAlign || "center");
  let bgColor = "bg-" + (props.colorVariant );

  let background = `linear-gradient(90deg,#7e2eef 0%, #01ae9d 100% )`; 
 // props.isBackground = false;
  let isBg= `${props.hasOwnProperty("colorVariant")? "true" : "false"}`
  let subTitleColor = "text-" +(props.subTitleColorVariant || "primary");
  return (
    <Fragment>
    {isBg==="true" && <div className={`card ${Align} ${bgColor}`} >  
        <div className="card-body">
          <h1 className="card-title">$13000</h1>
          <h6 className={`card-text ${subTitleColor}`}>~9868</h6>
        </div>
      </div>}
      { isBg==="false" && <div className={`card ${Align}`}  style={{ background: background }}>  
        <div className="card-body">
          <h1 className="card-title">$13000</h1>
          <h6 className={`card-text ${subTitleColor}`}>~9868</h6>
        </div>
      </div>}
    </Fragment>
  );
};
export default RdsBigNumber;
