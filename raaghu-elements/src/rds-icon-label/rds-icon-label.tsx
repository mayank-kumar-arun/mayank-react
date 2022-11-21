import React from "react";
import "./rds-icon-label.scss";
import RdsIcon from "../rds-icon/rds-icon";
import RdsLabel from "../rds-label/rds-label";

export interface RdsIconLabelProps {
  label?: string;
  icon: string;
  size: string;
  iconSize: string;
}

const RdsIconLabel = (props: RdsIconLabelProps) => {
  let size =
    props.iconSize == "large"
      ? "25px"
      : props.iconSize == "medium"
      ? "20px"
      : "15px";
  let fontSize =
    props.size == "large" ? "25px" : props.size == "medium" ? "20px" : "15px";

  return (
    <>
      <div className="d-flex justify-content-start">
        <RdsIcon
          name={props.icon}
          height={size}
          width={size}
          fill={true}
          stroke={true}
        ></RdsIcon>
        <div className="labelClass">
          <RdsLabel label={props.label} size={fontSize}></RdsLabel>
        </div>
      </div>
    </>
  );
};

export default RdsIconLabel;
