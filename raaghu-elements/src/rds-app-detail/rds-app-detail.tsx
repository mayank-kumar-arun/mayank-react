import React, { Fragment } from "react";
import RdsIcon from "../rds-icon";
import "./rds-app-detail.scss";

export interface RdsAddressDetailProps {
  title: string;
  subtitle: string;
  icon: string;
  route: string;
  selected: boolean;
  iconHeight: string;
  iconWidth: string;
  iconFill: boolean;
  iconColor: string;
  iconStroke: boolean;
}

const RdsAddressDetail = (props: RdsAddressDetailProps) => {
  return (
    <Fragment>
      <div className="card">
        <div className="p-3 headerr ">
          <span className="border p-1">
            <RdsIcon
              name={props.icon}
              colorVariant={props.iconColor}
              height={props.iconHeight}
              width={props.iconWidth}
              fill={props.iconFill}
              stroke={props.iconStroke}
            />
          </span>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <div className="card-body p-2">
          <div>
            <label className="fs-5 fw-bold ">{props.title}</label>
          </div>
          <div>
            <label className="text-muted mt-1">{props.subtitle}</label>
          </div>
        </div>
        <div className="border-top pb-1">
          <a href={props.route} className="float-end p-2 fs-7 linkk">
            View integration
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default RdsAddressDetail;
