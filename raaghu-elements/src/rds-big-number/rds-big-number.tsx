import React, { Fragment } from "react";
import RdsIcon from "../rds-icon";
import { Colors } from "../../libs/types";
import "./rds-big-number.scss";

export interface RdsBigNumberProps {
  colorVariant?: string;
  textAlign?: "start" | "center" | "end";
  subTitleColorVariant?: Colors;
  bigNumber:string 
  subTitle?:string,
  bigNumberItems:any[],
  class?:string,
  style?:any,
  //isBackground?:boolean;
}

const RdsBigNumber = (props: RdsBigNumberProps) => {
  let Align = "text-" + (props.textAlign || "center");
  let bgColor = "bg-" + (props.colorVariant );

  // let background = `linear-gradient(90deg,#7e2eef 0%, #01ae9d 100% )`; 
 // props.isBackground = false;
  let isBg= `${props.hasOwnProperty("colorVariant")? "true" : "false"}`
  let subTitleColor = "text-" +(props.subTitleColorVariant || "primary");
  return (
    <Fragment>
    {isBg==="true" && <div className={`card ${Align} ${bgColor} ${props.class} `} > 
    <div className="card-body ">
          <h1 className="card-title">{props.bigNumber}</h1>
          <h6 className={`card-text ${subTitleColor}`}> 
    {props.bigNumberItems.map((item: any) => (
        
          <RdsIcon
                    name={item.icon}
                    colorVariant={item.colorVariant}
                    fill={item.iconFill}
                    stroke={item.iconStroke}
                    height={item.iconHeight}
                    width={item.iconWidth}
                    strokeColor={item.strokeColor}
                    
                  />))}
                  {props.subTitle}</h6>
        </div>
      </div>}
      { isBg==="false" && <div className={`card ${Align} ${props.class}`}>  
      <div className="card-body p-0">
          <h1 className="card-title">{props.bigNumber}</h1>
          <h6 className={`card-text ${subTitleColor}`}> 
      {props.bigNumberItems.map((item: any) => (
       
          <RdsIcon
                    name={item.icon}
                    colorVariant={item.colorVariant}
                    fill={item.iconFill}
                    stroke={item.iconStroke}
                    height={item.iconHeight}
                    width={item.iconWidth}
                    strokeColor={item.strokeColor}
                  />))}
                  {props.subTitle}</h6>
        </div>
      </div>}
    </Fragment>
  );
};
export default RdsBigNumber;
