import React from "react";
import "./rds-comp-page-not-found.scss";
import { RdsLabel, RdsIcon } from "../rds-elements";

export interface RdsCompPageNotFoundProps {}

const RdsCompPageNotFound = (props: RdsCompPageNotFoundProps) => {
  return (
    <>
      <div className="row">
        <div
          className="col-lg-6 col-md-6 col-sm-6"
          style={{ textAlign: "center", padding: "30px" }}
        >
          <div style={{marginBottom:"100px"}}>
            <img
              style={{ width: "150px" }}
              src="static/media/.storybook/assets/raaghu-logo.svg"
              alt="raaghu-logo"
            ></img>
          </div>
          <div>
            <h1>
              <b>
                <RdsLabel label="Page not found"></RdsLabel>
              </b>
            </h1>
            <RdsLabel
              label="Sorry, we couldnt find the page youre looking for."
              className="text-muted fw-medium"
            ></RdsLabel>
            <p className="mb-0 pt-4">
              <a className="go-back-home text-primary" href="#">
                <span className="me-2">Go back home</span>
                <RdsIcon
                  name="right"
                  fill={false}
                  stroke={true}
                  width="16px"
                  height="16px"
                ></RdsIcon>
              </a>
            </p>
          </div>
          <div className="d-flex justify-content-center text-muted pb-3" style={{marginTop:"20vh"}}>
            <div className="pt-1">
              <span className="px-3">Contact Support</span>{" "}
              <span className="px-3">Status</span>{" "}
              <span className="ps-3">Twitter</span>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 countdown-col" style={{height: "100vh"}}></div>
      </div>
    </>
  );
};

export default RdsCompPageNotFound;
