import React, { Fragment, ReactNode } from "react";
import RdsIcon from "../rds-icon/rds-icon";

export interface RdsWidgetProps {
  isRefreshRequired: boolean,
  colorVariant: 'primary' | 'success' | 'danger' | 'warning' | 'light' | 'info' | 'secondary' | 'dark' | 'gradient-primary' | '';
  headerTitle: string;
  children?:ReactNode;
  class?:string;
  onRefresh?: (React.MouseEventHandler<HTMLDivElement>) ;
}

const RdsWidget = (props:RdsWidgetProps) => {
  let isRefreshIcon =props.isRefreshRequired ||false;
   let bg = " bg-"+ props.colorVariant ;
   let gradient;
   if (props.colorVariant =="gradient-primary"){
   gradient = `linear-gradient(to right, #7e2eef 0%, #01ae9d 100%)`;
   }
  return (
    <Fragment>
      {/* <div
         className={`card p-3 shadow-sm ${props.class} gutter-b ${bg}`}
       style={{background:gradient}}
      >
        <div className="cardHeader border-0 d-flex justify-content-between">
          <h5 className="card-title">{props.headerTitle}</h5>
          <div className="card-toolbar" style={{ cursor: "pointer" }}  onClick={props.onRefresh}>
            {isRefreshIcon ==true &&<RdsIcon
              name="refresh"
              height="20px"
              width="20px"
              fill={false}
              stroke={true}
            ></RdsIcon>}
          </div>
         </div>
        <div className="card-body pt-2  "> {props.children}</div>
      </div> */}
      <div>
        
      </div>
    </Fragment>
  );
};

export default RdsWidget;
