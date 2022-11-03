import React, { Fragment, ReactNode } from "react";

import RdsIcon from "../rds-icon/rds-icon";
//import { Colors} from "../Types";

export interface RdsWidgetProps {
  // colorVarient?:Colors,
  headerTitle: string;
  children?:ReactNode;
  class?:string;
  isRefreshRequired?: boolean ;
  onRefresh?: ( React.MouseEventHandler<HTMLElement>);
}

const RdsWidget = (props:RdsWidgetProps) => {
  let isRefreshIcon =props.isRefreshRequired ||false;
   
  return (
    <Fragment>
      <div
         className={`card shadow-sm ${props.class} gutter-b`  }
        // style={{ background: background }}
      >
        <div className="card-header bg-white border-0 d-flex justify-content-between">
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
        <div className="card-body pt-0"> {props.children}</div>
      </div>
    </Fragment>
  );
};

export default RdsWidget;
