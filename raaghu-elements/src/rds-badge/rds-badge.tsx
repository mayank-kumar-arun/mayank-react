import React from "react";
import { useState } from "react";
import "./rds-badge.scss";
import  RdsBadgeWithIcon from "./rds-badge.stories"

export interface RdsBadgeProps {
  label: string;
  number: number;
  size?: "small" | "large" | string;
  buttonColor: string;
  badgeColor: string;
  badgeType?: string;
  icon: string;

  
}

const RdsBadge = (props: RdsBadgeProps) => {
  let size: "btn-sm" | "btn-lg" | undefined = undefined;
  if (props.size == "small") {
    size = "btn-sm";
  } else if (props.size == "large") {
    size = "btn-lg";
  }

  let shape: "rounded-pill" | "rounded-circle" | undefined = undefined;
  if (props.badgeType == "pill") {
    shape = "rounded-pill";
  } else if (props.badgeType == "circle") {
    shape = "rounded-circle";
  }

  // if () {
    
  // }

  

  // const [buttonClassForIcon, setButtonClassForIcon] = useState<string>(" ");

  // const handleOnCheck = () => {
  //  setButtonClassForIcon("position-relative");};
  //  setButtonClassForIcon;
 
  
  let space!: " ";

  return (
    <>
      {/* <button type="button" className="btn btn-primary">
        {props.label} {space}
        <Badge bg={props.buttonColor}> {props.number} </Badge>
      </button> */}

      <button type="button" className={ "btn btn-"+ `${props.buttonColor} `+ ` ${size} `}>
        {props.label}{space} <span className={ "badge bg-"+ `${props.badgeColor} ` + ` ${shape}`}>{props.number}</span>
      </button>
      
    </>
  );
};

export default RdsBadge;
