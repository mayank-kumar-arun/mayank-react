import React from "react";
import { Icons } from "./Icons";
import { Flags } from "./flag-icons";

export interface RdsIconProps {
  width?: string;
  height?: string;
  colorVariant?: string;
  name?: string;
  fill?: boolean;
  stroke?: boolean;
  strokeColor?: string;
  class?: string;
  background?: string;
  borderRadius?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
}

const RdsIcon = (props: RdsIconProps) => {
  let fillColor: string;
  let strokeColor: string = props.strokeColor || "black";

  if (props.colorVariant == "primary") {
    // svg.setAttribute('class', 'icon-' + props.colorVariant);
    fillColor = "#007bff";
    strokeColor = "#007bff";
  } else if (props.colorVariant == "secondary") {
    fillColor = "#6c757d";
    strokeColor = "#6c757d";
  } else if (props.colorVariant == "success") {
    fillColor = "#28a745";
    strokeColor = "#28a745";
  } else if (props.colorVariant == "info") {
    fillColor = "#17a2b8";
    strokeColor = "#17a2b8";
  } else if (props.colorVariant == "warning") {
    fillColor = "#ffc107";
    strokeColor = "#ffc107";
  } else if (props.colorVariant == "danger") {
    fillColor = "#dc3545";
    strokeColor = "#dc3545";
  } else if (props.colorVariant == "dark") {
    fillColor = "#343a40";
    strokeColor = "#343a40";
  } else if (props.colorVariant == "light") {
    fillColor = "#f8f9fa";
    strokeColor = "#f8f9fa";
  }

  // console.log(fillColor!);
  // console.log(strokeColor!);

  let fillProps = props.fill ? fillColor! : "none";
  let strokeProps = props.stroke ? strokeColor! : "none";
  let name: string = !props.name ? "" : props.name.toLowerCase();
  let icon = Icons.hasOwnProperty(name) ? Icons[name] : Flags[name];
  let bg = " bg-" + props.background || "light";
  return (
    <>
      <svg
        style={{
          width: props.width,
          height: props.height,
          fill: fillProps!,
          stroke: strokeProps!,
          borderRadius: props.borderRadius,
        }}
        className={`${props.class} ${bg}`}
        dangerouslySetInnerHTML={{ __html: icon }}
        onClick={props.onClick}
      ></svg>
    </>
  );
};

export default RdsIcon;
