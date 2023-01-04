import React, { HtmlHTMLAttributes, ReactNode, useEffect } from "react";
import RdsIcon from "../rds-icon";
import "./rds-offcanvas.scss";

export interface RdsOffcanvasProps {
  placement: "start" | "end" | "top" | "bottom";
  backDrop: "static" | true | false;
  scrolling: boolean;
  preventEscapeKey: boolean;
  offId: string;
  canvasTitle: string;
  offcanvaswidth: number;
  onShow?: React.EventHandler<HTMLAllCollection | any>;
  onClose?: React.EventHandler<HTMLAllCollection | any>;
  buttonname?: string;
  offcanvasbutton?: ReactNode;
  children?: ReactNode;
  onclick?: (data: any) => void;
}

const RdsOffcanvas = (props: RdsOffcanvasProps) => {
  let align = `offCanvasClass offcanvas offcanvas-${props.placement}`;
  const Width = `${
    props.placement == "start" || props.placement == "end"
      ? `${props.offcanvaswidth}px`
      : "100% "
  }`;

  return (
    <>
      {props.offcanvasbutton && (
        <div
          style={{ cursor: "pointer" }}
          onClick={props.onclick}
          data-bs-toggle="offcanvas"
          data-bs-target={`#${props.offId}`}
          aria-controls={props.offId}
        >
          {props.offcanvasbutton}
        </div>
      )}
      <div
        className={align}
        data-bs-spy="scroll"
        data-bs-scroll={props.scrolling}
        data-bs-keyboard={props.preventEscapeKey}
        data-bs-backdrop={props.backDrop}
        tabIndex={-1}
        id={props.offId}
        aria-labelledby={`'canvas' +${props.offId}`}
        style={{ width: Width }}
      >
        {props.canvasTitle !== "" && props.canvasTitle !== undefined ? (
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id={`'canvas' +${props.offId}`}>
              {props.canvasTitle}
            </h5>
            <button
              type="button"
              className="btn-close text-reset offcanvas-close"
              onClick={props.onClose}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        ) : (
          <div className="d-flex justify-content-end">
            {" "}
            <button
              type="button"
              className="btn-close text-reset offcanvas-close"
              onClick={props.onClose}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>{" "}
          </div>
        )}

        <div className="offcanvas-body">{props.children}</div>
      </div>
    </>
  );
};

export default RdsOffcanvas;
