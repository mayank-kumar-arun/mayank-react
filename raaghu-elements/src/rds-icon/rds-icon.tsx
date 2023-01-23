import React from "react";
import { Icons } from "./Icons";
import { Flags } from "./flag-icons";
import { useEffect } from "react";

export interface RdsIconProps {
  width?: string;
  height?: string;
  colorVariant?: string;
  name?: string;
  fill?: boolean;
  stroke?: boolean;
  strokeWidth?: string;
  borderRadius?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  opacity?: string;
  isAnimate?: boolean;
  class?: any;
}

const RdsIcon = (props: RdsIconProps) => {
  let name: string = !props.name ? "" : props.name.toLowerCase();
  let icon = Icons.hasOwnProperty(name) ? Icons[name] : Flags[name];

  const svgElementFromString = (svgContent: string): SVGElement => {
    let fillColor = "currentColor";
    const div = document.createElement("DIV");
    div.innerHTML = svgContent;
    const svg = div.querySelector("svg");
    if (!svg) {
      throw Error("<svg> tag not found");
    }

    if (props.height) {
      svg.style.height = props.height;
    }
    if (props.width) {
      svg.style.width = props.width;
    }
    if (props.opacity) {
      svg.style.opacity = props.opacity;
    }
    if (props.colorVariant == "primary") {
      // svg.setAttribute('class', 'icon-' + props.colorVariant);
      fillColor = "#7E2EEf";
    } else if (props.colorVariant == "secondary") {
      fillColor = "#2B0066";
    } else if (props.colorVariant == "success") {
      fillColor = "#2EEF59";
    } else if (props.colorVariant == "info") {
      fillColor = "#3ef1e8";
    } else if (props.colorVariant == "warning") {
      fillColor = "#E3A300";
    } else if (props.colorVariant == "danger") {
      fillColor = "#EF2E2E";
    } else if (props.colorVariant == "dark") {
      fillColor = "#363636";
    } else if (props.colorVariant == "light") {
      fillColor = "#F8F9FA";
    } else if (props.colorVariant == "review") {
      fillColor = "#E3A300";
    } else if (props.colorVariant == "basic") {
      fillColor = "#00A443";
    } else if (props.colorVariant == "standard") {
      fillColor = "#005FA4";
    } else if (props.colorVariant == "premium") {
      fillColor = "#660064";
    } else if (props.colorVariant == "professional") {
      fillColor = "#F76161";
    }

    if (props.fill) {
      svg.style.fill = fillColor;
    } else {
      svg.style.fill = "none";
    }

    if (props.stroke || props.stroke === undefined) {
      svg.style.stroke = fillColor;
    } else {
      svg.style.stroke = "none";
    }
    if (props.isAnimate) {
      svg.classList.add("jiggle");
    }

    return (
      svg || document.createElementNS("http://www.w3.org/2000/svg", "path")
    );
  };
  var stringData =
    icon != undefined ? svgElementFromString(icon).outerHTML : "";

  return (
    <span
      className={props.class}
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      dangerouslySetInnerHTML={{ __html: stringData }}
    />
  );
};

export default RdsIcon;
