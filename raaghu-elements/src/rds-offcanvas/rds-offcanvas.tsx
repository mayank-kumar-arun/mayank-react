import React, { ReactNode, useEffect } from "react";
import RdsIcon from "../rds-icon";
import "./rds-offcanvas.scss";

export interface RdsOffcanvasProps {
  buttonname?: string;
  offcanvasbutton?: ReactNode;
  children?: ReactNode;
  placement?: string;
  canvasTitle?: string;
  width?: string;

  onclick: (data: any) => void;
}

const RdsOffcanvas = (props: RdsOffcanvasProps) => {
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
      <div
        style={{ cursor: "pointer" }}
        onClick={props.onclick}
        data-bs-toggle="offcanvas"
        data-bs-target={`#${offcanvasPlacement}`}
        aria-controls={offcanvasPlacement}
      >
        {props.offcanvasbutton}
      </div>

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
