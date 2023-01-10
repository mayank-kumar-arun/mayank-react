import React, { ReactNode } from "react";
import "./rds-badge.scss";

export interface RdsBadgeProps {
  label: string;
  children?: ReactNode;
  size?: "small" | "large" | "medium";
  colorVariant?:
    | "primary"
    | "success"
    | "danger"
    | "warning"
    | "light"
    | "info"
    | "secondary"
    | "dark";
  textColor?:
    | "primary"
    | "success"
    | "danger"
    | "warning"
    | "light"
    | "info"
    | "secondary"
    | "dark"
    |"white";
  badgeType?: "rectangle" | "circle" | "pill";
  childrenSide?:"right" |"left";
}

const RdsBadge = (props: RdsBadgeProps) => {
  let fonts =
    props.size == "small" ? "10px" : props.size == "large" ? "18px" : "14px";
  let textColor = "text-" + props.textColor || "dark";
  let bg = " bg-" + props.colorVariant || "dark";
  let badgeType =
    props.badgeType == "rectangle"
      ? " rounded-0 "
      : props.badgeType == "pill"
      ? " rounded-pill "
      : " ";
      let childrenSide= props.childrenSide ||"left"
  return (
    <>
      <span
        className={`mx-1 badge fw-normal ${badgeType} ${textColor} ${bg}`}
        style={{ fontSize: fonts }}
      >
       {childrenSide=="left" &&<>{props.children}</> }
        {props.label}
        {childrenSide=="right" &&<>{props.children}</> }
      </span>
      {/* <span
        className={` badge fw-normal badge-primary`}
        style={{ fontSize: fonts }}
      >
       {childrenSide=="left" &&<>{props.children}</> }
        {props.label}
        {childrenSide=="right" &&<>{props.children}</> }
      </span> */}
    </>
  );
};

export default RdsBadge;
/*
<span
                          key={item.id}
                          className=" p-1 me-2 badge bg-primary text-dark  small "
                        >
                          <span>{item.label}</span>
                          <span className="mx-1">
                            <RdsIcon
                              name="close"
                              fill={false}
                              stroke={true}
                              height="6px"
                              width="6px"
                              onClick={(e) => uncheckHandler(e, item)}
                              colorVariant={`${
                                props.darkVariant ? "light" : ""
                              }`}
                            ></RdsIcon>
                          </span>
                        </span>
*/ 
