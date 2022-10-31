import React from "react";
import { Icons } from "./Icons";
import { Flags } from "./flag-icons";

export interface RdsIconProps {
  width?: string;
  height?: string;
  colorVariant?: string;
  name: string;
  fill?: boolean;
  stroke?: boolean;
  strokeColor?:string;
  class?: string;
}

const RdsIcon = (props: RdsIconProps) => {
  let fillColor: string;
  let strokeColor:string= "black";

  if (props.colorVariant == 'primary') {
    // svg.setAttribute('class', 'icon-' + props.colorVariant);
    fillColor = '#7E2EEf';
    strokeColor='#7E2EEf';
  } else if (props.colorVariant == 'secondary') {
    fillColor = '#2B0066';
    strokeColor='#2B0066';
  } else if (props.colorVariant == 'success') {
    fillColor = '#2EEF59';
    strokeColor='#2EEF59';
  } else if (props.colorVariant == 'info') {
    fillColor = '#3ef1e8';
    strokeColor='#3ef1e8';
  } else if (props.colorVariant == 'warning') {
    fillColor = '#E3A300';
    strokeColor='#E3A300';
  } else if (props.colorVariant == 'danger') {
    fillColor = '#EF2E2E';
    strokeColor='#EF2E2E';
  } else if (props.colorVariant == 'dark') {
    fillColor = '#363636';
    strokeColor='#363636';
  } else if (props.colorVariant == 'light') {
    fillColor = '#F8F9FA';
    strokeColor='#F8F9FA';
  } else if (props.colorVariant == 'review') {
    fillColor = '#E3A300';
    strokeColor='#E3A300';
  }

  console.log(fillColor!);
  console.log(strokeColor!);

  let fillProps = props.fill ? fillColor! : "none";
  let strokeProps = props.stroke ? strokeColor! : "none";
  let name:string = (props.name).toLowerCase();
  let icon= Icons.hasOwnProperty(name) ? Icons[name] : Flags[name];

  return (
    <>

     <svg style={{
      width: props.width ,
      height: props.height,
      fill: fillProps!,
      stroke: strokeProps!,
      
     }}
     className={props.class}
      dangerouslySetInnerHTML={{__html: icon }}
      ></svg>

    </>
  );
};

export default RdsIcon;
