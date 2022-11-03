import React from "react";
import { Icons } from "./Icons";
import { Flags } from "./flag-icons";

export interface RdsIconProps {
  width?: string;
  height?: string;
  colorFill?: string;
  name: string;
  fill?: boolean;
  stroke?: boolean;
  strokeColor?:string;
  className?:string
}

const RdsIcon = (props: RdsIconProps) => {
  let fillProps = props.fill ? (props.colorFill ||"black" ): "none";
  let strokeProps = props.stroke ? "black" : props.strokeColor;
  let name:string = (props.name).toLowerCase();
  let icon= Icons.hasOwnProperty(name) ? Icons[name] : Flags[name];

  return (
    <>

     <svg className={props.className} style={{
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
