import React, { ReactNode } from "react";
import "./rds-label.scss";

export interface RdsLabelProps {
  children?: ReactNode;
  label?: string;
  multiline?: boolean; 
  size?: string;
  class?: string;
  fontWeight?: number|string;
  color?:string;
}

const RdsLabel = (props: RdsLabelProps) => {
  return (
    <p
      className={` p-0 m-0 ${!props.multiline?"singleLine":""} ${props.class}`}
      style={{fontSize: props.size, fontWeight: props.fontWeight, color:props.color }}
    >
      <label>{props.label}{props.children}</label>
    </p>
  );
};

export default RdsLabel;
