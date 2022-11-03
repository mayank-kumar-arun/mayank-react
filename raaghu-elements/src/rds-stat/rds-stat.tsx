import React, { Fragment } from "react";
import RdsIcon from "../rds-icon";
import "./rds-stat.scss";

export interface RdsStatProps {
  displayType: string;
  items: any[];
  colorVariant:string,
}

const RdsStat = (props: RdsStatProps) => {
  return (
    <Fragment>
      {props.displayType == "basic" && (
        <div className="card h-100 w-100 border">
          <div className="card-body align-items-center d-flex justify-content-center">
            {props.items.map((item: any) => (
              <div>
                <div className="grow mt-4 text-center">
                  <RdsIcon
                    name={item.icon}
                    fill={item.iconFill}
                    colorVariant={props.colorVariant}
                    //stroke={item.iconStroke}
                    height={item.iconHeight}
                    width={item.iconWidth}
                    strokeColor={props.colorVariant}
                  />
                </div>
                <h1 className="fw-bold mt-4 text-center">{item.value}</h1>
                <div>
                  <label className="fs-5 text-muted text-center">
                    {item.title}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {props.displayType == "advance" && (
        <div className="card h-300px w-300px border rounded-circle">
          {props.items.map((item: any) => (
            <div
              className="
          card-body
          align-items-center
          card-body
          d-flex
          justify-content-center
          stathover
        "
            >
              <div className="d-block text-center">
                <h1 className="fw-bold py-2 titlehover">{item.value}</h1>
                <div>
                  <label className="fs-5 text-muted">{item.title}</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};
export default RdsStat;
