import React, { ReactNode } from "react";
import "./rds-label.scss";

export interface RdsLabelProps {
  children?: ReactNode;
  label?: string;
  multiline?: boolean;
  bold?: boolean;
  italic?: boolean;
  size?: string;
  className?: string;
  fontWeight?: number;
  color?:string;
}

const RdsLabel = (props: RdsLabelProps) => {
  return (
    <p
      className={`${!props.multiline ? "singleLine" : ""} ${
        props.bold ? "bold" : ""
      } ${props.italic ? "italic" : "poppins"} ${props.className}`}
      style={{ fontSize: props.size, fontWeight: props.fontWeight, color:props.color, margin:0, padding: 0 }}
    >
      <label>{props.label}{props.children}</label>
    </p>
  );
};

export default RdsLabel;
