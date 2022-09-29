import React, { useState } from "react";
import "./rds-button.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip, { TooltipProps } from "react-bootstrap/Tooltip";

import PropTypes from "prop-types";
import classNames from "classnames";
import { Colors, Placements } from "../Types";

export interface RdsButtonProps {
  isDisabled?: boolean;
  colorVariant?: Colors;
  label?: string;
  block?: boolean;
  size?: "sm" | "lg" | string;
  roundedButton?: boolean;
  roundedCorner?: boolean;
  icon?: string;
  outlineButton?: boolean;
  tooltip?: boolean;
  tooltipPlacement?: Placements;
  tooltipTitle?: string;
}

const RdsButton = (props: RdsButtonProps) => {
  // const renderTooltip = (props: JSX.IntrinsicAttributes & TooltipProps & React.RefAttributes<HTMLDivElement>) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     Simple tooltip
  //   </Tooltip>
  // );

  const outlineColorVariant =
    `${props.outlineButton === true ? "outline-" : ""}` + props.colorVariant;
    let size: "sm" | "lg" | undefined = undefined;

    if (props.size == "small") {

      size = "sm";

    } else if (props.size == "large") {

      size = "lg";

    }

  return (
    <div className={props.block ? "d-grid gap-2" : ""}>
      {!props.tooltip && (
        <Button
          variant={outlineColorVariant}
          disabled={props.isDisabled}
          size={size}
          // onClick={props.onClick}
          style={{
            borderRadius:
              props.roundedButton === true && props.roundedCorner === false
                ? "50%"
                : props.roundedButton === false && props.roundedCorner === true
                ? "100px"
                : props.roundedButton === true && props.roundedCorner === true
                ? "50%"
                : "",
          }}
        >
          {props.icon}
          {!props.roundedButton && props.label}
        </Button>
      )}

      {/* Tooltip */}
      {props.tooltip && (
        <OverlayTrigger
          placement={props.tooltipPlacement}
          delay={{ show: 250, hide: 400 }}
          overlay={
            <Tooltip id="button-tooltip-2">{props.tooltipTitle}</Tooltip>
          }
        >
          <Button
            variant={outlineColorVariant}
            disabled={props.isDisabled}
            size={size}
            // onClick={props.onClick}
            style={{
              borderRadius:
                props.roundedButton === true && props.roundedCorner === false
                  ? "50%"
                  : props.roundedButton === false &&
                    props.roundedCorner === true
                  ? "100px"
                  : props.roundedButton === true && props.roundedCorner === true
                  ? "50%"
                  : "",
            }}
          >
            {props.label}
          </Button>
        </OverlayTrigger>
      )}
    </div>
  );
};

export default RdsButton;
