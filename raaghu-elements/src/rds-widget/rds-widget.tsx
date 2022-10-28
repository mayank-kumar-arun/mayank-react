import React, { Fragment } from "react";

import RdsIcon from "../rds-icon/rds-icon";
//import { Colors} from "../Types";

export interface RdsWidgetProps {
  // colorVarient?:Colors,
  headerTitle: string;
  content:any;
 
  onClick?: ( React.MouseEventHandler<HTMLElement>);
}
const RdsWidget = (props:RdsWidgetProps) => {
  let background = `linear-gradient(90deg,#7e2eef 0%, #01ae9d 100% )`;

  return (
    <Fragment>
      <div
        className="card shadow-sm card-stretch  gutter-b "
        style={{ background: background }}
      >
        <div className="cardHeader d-flex justify-content-between">
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
        <div className="Content"> {props.content}</div>
      </div>
    </Fragment>
  );
};

export default RdsWidget;
