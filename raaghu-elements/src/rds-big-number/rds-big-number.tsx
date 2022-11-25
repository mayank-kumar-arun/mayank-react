import React, { Fragment, ReactNode } from "react";
import RdsIcon from "../rds-icon";
import "./rds-big-number.scss";

export interface RdsBigNumberProps {
  colorVariant?: string;
  subTitleColorVariant?: string;
  bigNumber:string 
  subTitle?:string,
  class?:string,
  role: 'basic' | 'advanced' ,
  icon: string ;
  iconHeight: string ;
  iconStroke: boolean;
  iconFill: boolean ;
  iconWidth: string ;
  iconColor :string;
  children:ReactNode;
  textAlign: 'text-start' | 'text-center' | 'text-end';

}

const RdsBigNumber = (props: RdsBigNumberProps) => {
  let alignclasses = props.textAlign;
  let borderColor=" border-"+(props.subTitleColorVariant)
  let bgColor = " bg-" + (props.colorVariant ) ||"  text-white bg-gradient-primary ";
  let subTitleColor = "text-" +(props.subTitleColorVariant || "primary");
 return (
 <Fragment>
  { props.role=="basic" && <div className={"card p-3 border-0 "+ `${bgColor}`} // *ngSwitchCase="'basic'"
    >
      <div className={alignclasses} >
        <h1>{props.bigNumber}</h1>
        <h6  className={subTitleColor} >
          <RdsIcon  name={props.icon} fill={props.iconFill } stroke={props.iconStroke}
            colorVariant={props.iconColor} height={props.iconHeight} width={props.iconWidth} />
          {props.subTitle}
        </h6>
      </div>
    </div>}

  {  props.role=="advanced" && <div className={"border-top  border-3  d-flex justify-content-center align-items-center big-number p-3 gap-4" + borderColor} 
    >
      <div className="">
        <div className="fs-1 text-center">
          <p className="mb-0"><b>{props.bigNumber}</b></p>
          <p className={"fs-6 mb-0 " + subTitleColor} >
            {props.subTitle}
          </p>
        </div>
        
      </div>
      <div className="">
        <div className="align-items-center justify-content-center d-flex">
          {props.children}
        </div>
      </div>
    </div>}
  </Fragment>
  );
};
export default RdsBigNumber;
