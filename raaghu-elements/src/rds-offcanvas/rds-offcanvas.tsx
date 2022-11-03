import React, { ReactNode } from "react";
import "./rds-offcanvas.scss";

export interface RdsOffcanvasProps {
  children?: ReactNode;
  placement?: string;
  canvasTitle?: string;
}

const RdsOffcanvas = (props: RdsOffcanvasProps) => {
  let offcanvasPlacement =
    props.placement == "top"
      ? "offcanvasTop"
      : props.placement == "end"
      ? "offcanvasRight"
      : props.placement == "bottom"
      ? "offcanvasBottom"
      : (props.placement = "start" ? "offcanvasStart" : "offcanvasRight");

      console.log(`#${offcanvasPlacement}`)
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target={`#${offcanvasPlacement}`}
        aria-controls={offcanvasPlacement}
      >
        Toggle Offcanvas
      </button>

      <div
        className={`offcanvas offcanvas-${props.placement}`}
        tabIndex={-1}
        id={offcanvasPlacement}
        aria-labelledby={`${offcanvasPlacement}Label1`}
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
