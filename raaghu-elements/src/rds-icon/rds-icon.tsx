import React from "react";
import { Icons } from "./Icons";
import { Flags } from "./flag-icons";

export interface RdsIconProps {
  width?: string;
  height?: string;
  color?: string;
  name: string;
  fill?: boolean;
  stroke?: boolean;
}

const RdsIcon = (props: RdsIconProps) => {
  let fillProps = props.fill ? "black" : "none";
  let strokeProps = props.stroke ? "black" : "none";
  let name:string = (props.name).toLowerCase();
  let icon= Icons.hasOwnProperty(name) ? Icons[name] : Flags[name];

  return (
    <>

     <svg style={{
      width: props.width ,
      height: props.height,
      fill: fillProps,
      stroke: strokeProps || "black",
      
     }}
      dangerouslySetInnerHTML={{__html: icon }}
      ></svg>

    </>
  );
};

export default RdsIcon;
