import { useState } from "react";
import { RdsInput, RdsButton, RdsIcon } from "../rds-elements";
import React from "react";
import img from "./cookie.svg";
import "./rds-comp-cookies-section.scss";
import { RdsAlert } from "../rds-elements";
export interface RdsCompCookiesSectionProps {
  onForgotPassword?: (email?: string) => void;
  showDeclineButton?: boolean;
}
const RdsCompCookiesSection = (props: RdsCompCookiesSectionProps) => {
  const alertMessage =
    "This website uses cookies to ensure you get the best experience on our website.";
  return (
    <div>
      <div className="card shadow position-relative cookies">
        <div className="position-absolute position-close">
          <button
            type="button"
            className="btn-close position-right"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
        <div className="row align-items-start">
          <div className="col-md-2">
            <div className="my-2 mx-2">
              <img src={img}></img>            
            </div>
          </div>
          <div className="col-md-6 align-self-start">
            <div className="mx-2 my-2">
              <span>{alertMessage}</span>
              {!props.showDeclineButton && (
                <div className="mt-3">
                  <RdsButton
                    label="Accept"
                    type="button"
                    colorVariant="primary"
                  ></RdsButton>
                </div>
              )}
            </div>
          </div>
          {props.showDeclineButton && (
            <div className="col-md-3">
              <div className="mx-2 my-2">
                <div className="mt-3" style={{ width: "150px" }}>
                  <RdsButton
                    label="Accept"
                    type="button"
                    block={true}
                    colorVariant="primary"
                  ></RdsButton>
                </div>
                <div className="mt-3" style={{ width: "150px" }}>
                  <RdsButton
                    class="me-2"
                    tooltipTitle={""}
                    type={"button"}
                    block={true}
                    label="Decline"
                    colorVariant="outline-primary"
                    size="small"
                    databsdismiss="offcanvas"
                  ></RdsButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RdsCompCookiesSection;
