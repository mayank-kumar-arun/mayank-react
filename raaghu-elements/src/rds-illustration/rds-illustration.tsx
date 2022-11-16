import React, { Fragment } from "react";
import { Colors } from "../../libs/types";
import "./rds-illustration.scss"
import RdsIcon from "../rds-icon/rds-icon";

export interface RdsIllustrationProps {
  label?: string;
  subLabel?: string;
  colorVariant?: Colors;
}
const RdsIllustration = (props: RdsIllustrationProps) => {
  return (
    <Fragment>
      <div className="text-center illustration-margin">
        <div className="d-block">
          <RdsIcon name="file_plus" width="155px" height="155px" fill={false} stroke={true} colorVariant ={props.colorVariant||"dark"}></RdsIcon>
        </div>
        <label className="mt-4">{props.label}</label>
        <div className="mt-2 opacity-25">{props.subLabel}</div>
      </div>
    </Fragment>
  );
};
export default RdsIllustration;
