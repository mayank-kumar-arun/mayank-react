import React from "react";
import { RdsAppDetail } from "../rds-elements";

export interface RdsCompAppDetailProps {
    appDetailList:any
}

const RdsCompAppDetail = (props:RdsCompAppDetailProps) => {
  
    
  return (
    <>
    <div>
       {props.appDetailList.map((item:any, index:number)=>(
        <div className="m-2 " key={index}>

            <RdsAppDetail  title= {item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            route= {item.route}
            selected={item.selected}
            iconHeight={item.iconHeight}
            iconWidth={item.iconWidth}
            iconFill={item.iconFill}
            iconColor={item.iconColor}
            iconStroke={item.iconStroke} />

        </div>
       ))} 
  
    </div>
    
    </>
  );
};
export default RdsCompAppDetail;
