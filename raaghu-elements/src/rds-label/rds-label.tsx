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
}

const RdsLabel = (props: RdsLabelProps) => {
  return (
    <p
      className={`${!props.multiline ? "singleLine" : ""} ${
        props.bold ? "bold" : ""
      } ${props.italic ? "italic" : ""} ${props.className}`}
      style={{ fontSize: props.size }}
    >
      <label>{props.label}{props.children}</label>
    </p>
  );
};

export default RdsLabel;
