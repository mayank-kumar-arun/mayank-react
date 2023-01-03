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
  id?: string;
  canvasid: number;

  onclick?: (data: any) => void;
}

const RdsOffcanvas = (props: RdsOffcanvasProps) => {
  let autoid: any;
  if (props.id) {
    autoid = props.id;
  } else {
    let d = new Date();
    autoid = `${d.getMilliseconds()}${d.getSeconds()}`;
  }

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
        data-bs-target={`#${offcanvasPlacement}${autoid}${props.canvasid}`}
        aria-controls={offcanvasPlacement}
      >
        {props.offcanvasbutton}
      </div>

      <div
        className={`offcanvas offcanvas-${props.placement}`}
        tabIndex={-1}
        id={`${offcanvasPlacement}${autoid}${props.canvasid}`}
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
