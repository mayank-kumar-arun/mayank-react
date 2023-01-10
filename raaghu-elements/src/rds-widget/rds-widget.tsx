import React, { Fragment, ReactNode } from "react";
import RdsIcon from "../rds-icon/rds-icon";

export interface RdsWidgetProps {
  isRefreshRequired?: boolean;
  colorVariant?:
    | "primary"
    | "success"
    | "danger"
    | "warning"
    | "light"
    | "info"
    | "secondary"
    | "dark"
    | "gradient-primary"
    | "white";
  headerTitle: string;
  children?: ReactNode;
  class?: string;
  style?: any;
  subTitleColorVariant?: string;
  height?: string;
  width?: string;
  bigNumber?: string;
  subTitle?: string;
  minHeight?: string;
  icon?: string;
  iconHeight?: string;
  iconStroke?: boolean;
  iconFill?: boolean;
  iconWidth?: string;
  iconColor?: string;
  border?: boolean;
  bigNumberColor?: string;
  onRefresh?: React.MouseEventHandler<HTMLDivElement>;
}

const RdsWidget = (props: RdsWidgetProps) => {
  let borderColor = " border-" + props.subTitleColorVariant;
  let subTitleColor = "text-" + (props.subTitleColorVariant || "primary");
  let isRefreshIcon = props.isRefreshRequired || false;
  let bg = " bg-" + props.colorVariant;
  let gradient;
  if (props.colorVariant == "gradient-primary") {
    gradient = `linear-gradient(to right, #7e2eef 0%, #01ae9d 100%)`;
  }

  return (
    <Fragment>
      <div
        className={`card p-3 shadow-sm ${props.class} gutter-b ${bg} `}
        style={{
          background: gradient,
          border: "none",
          height: `${props.height}`,
          minHeight: `${props.minHeight}`,
          width: `${props.width}`,
        }}
      >
        <div className="cardHeader mb-2 mt-2 border-0 d-flex justify-content-between">
          <h5 className={`card-title text-${props.bigNumberColor}`}>
            {props.headerTitle}
          </h5>
          <div
            className="card-toolbar"
            style={{ cursor: "pointer" }}
            onClick={props.onRefresh}
          >
            {isRefreshIcon == true && (
              <RdsIcon
                name="refresh"
                height="20px"
                width="20px"
                fill={false}
                stroke={true}
              ></RdsIcon>
            )}
          </div>
        </div>

        <div>
          {props.bigNumber && (
            <h1 className={`text-${props.bigNumberColor}`}>
              {props.bigNumber}
            </h1>
          )}
          {props.subTitle && (
            <h6 className={subTitleColor}>
              {props.icon && (
                <RdsIcon
                  name={props.icon}
                  fill={props.iconFill}
                  stroke={props.iconStroke}
                  colorVariant={props.iconColor}
                  height={props.iconHeight}
                  width={props.iconWidth}
                />
              )}
              <span className="ms-1">{props.subTitle}</span>
            </h6>
          )}
        </div>
        {props.children && (
          <div className="card-body pt-2 " style={props.style}>
            {props.children}
          </div>
        )}
      </div>
      <div></div>
    </Fragment>
  );
};

export default RdsWidget;
