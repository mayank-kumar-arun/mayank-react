import React, { ReactNode } from "react";
import "./rds-badge.scss";

export interface RdsBadgeProps {
  label: string;
  children?: ReactNode;
  size?: "small" | "smaller" | "smallest" | "medium" | "large" | "xlg";
  colorVariant?:
    | "primary"
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "dark"
    | "light"
    | "secondary";
  badgeType?: "rectangle" | "circle" | "pill";
  childrenSide?: "right" | "left";
  positioned?: boolean;
  showClose?: boolean;
  onClose?: (Event: React.MouseEvent<HTMLSpanElement>) => void;
}

const RdsBadge = (props: RdsBadgeProps) => {
  let size = props.hasOwnProperty("size") ? props.size : "";
  let bg = "badge-" + (props.colorVariant || "primary");
  let badgeType =
    props.badgeType === "rectangle"
      ? "rounded rectangle"
      : props.badgeType === "pill"
      ? "rounded-pill badge-pill"
      : props.badgeType === "circle"
      ? "rounded-circle badge-circle"
      : "";
  let childrenSide = props.childrenSide || "left";
  let positioned =
    props.positioned === true
      ? "position-absolute badge_icon start-100 translate-middle"
      : "";
  return (
    <>
      <span className={`m-1 ${size}`}>
        <span className={`badge ${bg} ${positioned} ${badgeType} ${size}`}>
          {childrenSide == "left" && <>{props.children}</>}
          {props.label}
          {props.showClose && (
            <span className="ms-1" role="button" tabIndex={0} aria-hidden="true" onClick={props.onClose}>
              &times;
            </span>
          )}
          {childrenSide == "right" && <>{props.children}</>}
        </span>
      </span>
    </>
  );
};

export default RdsBadge;
