import React from "react";
import "./rds-badge.scss";

export interface RdsBadgeProps {
  label: string;
  size?: "small" | "large" | "medium";
  colorVariant?: 'primary' | 'success' | 'danger' | 'warning' | 'light' | 'info' | 'secondary' | 'dark';
  textColor?: 'primary' | 'success' | 'danger' | 'warning' | 'light' | 'info' | 'secondary' | 'dark';
  badgeType?: "rectangle"|"circle"|"pill";
}

const RdsBadge = (props: RdsBadgeProps) => {
  let fonts =(props.size=="small"?"10px":props.size=="large"?"18px":"14px" );
  let textColor ="text-"+ props.textColor ||"dark"; 
  let bg ="bg-"+ props.colorVariant ||"dark"; 
  let badgeType = (props.badgeType =="rectangle"?" rounded-0 ":props.badgeType =="pill" ? " rounded-pill ":" ");
return (
    <>
      <span className={` badge fw-normal ${badgeType} ${textColor} ${bg}`} style={{fontSize:fonts}} >{props.label}</span>  
    </>
  );
};

export default RdsBadge;
