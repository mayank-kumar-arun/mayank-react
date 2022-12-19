import React, { ReactNode, useEffect } from "react";
import RdsIcon from "../rds-icon";
import "./rds-offcanvas.scss";

export interface RdsOffcanvasProps {
  children?: ReactNode;
  placement?: string;
  canvasTitle?: string;
  width?: string;
  iconname?: string;
  iconwidth?: any;
  iconheight?: any;
  onclick: (data: any) => void;
}

const RdsOffcanvas = (props: RdsOffcanvasProps) => {
  useEffect(() => {
    console.log("offcanvasruns");
  }, [props.children]);
  let offcanvasPlacement = `${
    props.placement == "top"
      ? "offcanvasTop"
      : props.placement == "end"
      ? "offcanvasRight"
      : props.placement == "bottom"
      ? "offcanvasBottom"
      : props.placement == "start"
      ? "offcanvasStart"
      : "offcanvasRight"
  }`;

  return (
    <>
      {props.iconname?.length === 0 && (
        <button
          onClick={props.onclick}
          className="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target={`#${offcanvasPlacement}`}
          aria-controls={offcanvasPlacement}
        >
          Button
        </button>
      )}

      {props.iconname && (
        <div
          onClick={props.onclick}
          // type="button"
          data-bs-toggle="offcanvas"
          data-bs-target={`#${offcanvasPlacement}`}
          aria-controls={offcanvasPlacement}
        >
          <RdsIcon
            fill={false}
            stroke={true}
            width={props.iconwidth}
            height={props.iconheight}
            name={props.iconname}
          ></RdsIcon>
        </div>
      )}

      <div
        className={`offcanvas offcanvas-${props.placement}`}
        tabIndex={-1}
        id={offcanvasPlacement}
        aria-labelledby={`${offcanvasPlacement}Label1`}
        style={{ width: props.width }}
      >
        <div className="offcanvas-header">
          <h5 id={`${offcanvasPlacement}Label1`}>{props.canvasTitle}</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">{props.children}</div>
      </div>
    </>
  );
};

export default RdsOffcanvas;
