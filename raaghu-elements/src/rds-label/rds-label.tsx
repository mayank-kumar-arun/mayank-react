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
}

const RdsLabel = (props: RdsLabelProps) => {
  return (
    <p
      className={`${!props.multiline ? "singleLine" : ""} ${
        props.bold ? "bold" : ""
      } ${props.italic ? "italic" : "poppins"} ${props.className}`}
      style={{ fontSize: props.size, fontWeight: props.fontWeight }}
    >
      <label>{props.label}{props.children}</label>
    </p>
  );
};

export default RdsLabel;
