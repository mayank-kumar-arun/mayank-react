import React, { Fragment, ReactNode } from "react";

import RdsIcon from "../rds-icon/rds-icon";
//import { Colors} from "../Types";

export interface RdsWidgetProps {
  // colorVarient?:Colors,
  headerTitle: string;
  children?:ReactNode
  onClick?: ( React.MouseEventHandler<HTMLElement>);
  className?:string
}
const RdsWidget = (props:RdsWidgetProps) => {
  // let background = `linear-gradient(90deg,#7e2eef 0%, #01ae9d 100% )`;

  return (
    <Fragment>
      <div
         className={`card shadow-sm ${props.className} gutter-b`  }
        // style={{ background: background }}
      >
        <div className="card-header bg-white border-0 d-flex justify-content-between">
          <h5 className="card-title">{props.headerTitle}</h5>
          <div className="card-toolbar" style={{ cursor: "pointer" }}  onClick={props.onClick}>
            <RdsIcon
              name="refresh"
              height="20px"
              width="20px"
              fill={false}
              stroke={true}
            ></RdsIcon>
          </div>
         </div>
        <div className="card-body pt-0"> {props.children}</div>
      </div>
    </Fragment>
  );
};

export default RdsWidget;
