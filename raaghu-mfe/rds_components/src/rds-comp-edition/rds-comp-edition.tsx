import React from "react";
import { RdsLabel } from "../rds-elements";
import "./rds-comp-edition.scss";
export interface RdsCompEditionProps {
  EditionItems: any;
  features: any;
}
const RdsCompEdition = (props: RdsCompEditionProps) => {
  return (
    <>
      <div className="col-md-2" style={{ width: "170px" }}>
        <div className="card">
          <div className="card-body p-3">
            <div className="body">
              <div className="row">
                <div className="col-md-12 mb-1" style={{ textAlign: "center" }}>
                  <b>{props.EditionItems.EditionName}</b>
                  <RdsLabel
                    label={props.EditionItems.EditionTitle}
                    size="10px"
                    multiline={true}
                  ></RdsLabel>
                </div>
                <div className="col-md-12" style={{ textAlign: "center" }}>
                  <b style={{ color: "#249CF7", fontSize: "18px" }}>$</b>
                  <b style={{ color: "#249CF7", fontSize: "25px" }}>
                    {props.EditionItems.Price}
                  </b>
                  <p
                    className="text-muted"
                    style={{
                      fontSize: "10px",
                      color: "c7c7c7",
                      marginBottom: 0,
                    }}
                  >
                    {props.EditionItems.Plan}
                  </p>
                </div>
                <div
                  className="col-md-12 RdsCompEdition__description-list-inside-card"
                  style={{
                    paddingTop: "0px",
                    textAlign: "left",
                    paddingLeft: "26px",
                  }}
                >
                  <ul style={{ fontSize: "10px", paddingLeft: "11px" }}>
                    {props.features.map((item: any) => (
                      <>
                        <li>{item}</li>
                      </>
                    ))}
                    
                  </ul>
                </div>
                <div className="col-md-12" style={{ textAlign: "left" }}>
                  <i className="bi bi-pencil" style={{ color: "#249CF7" }}></i>
                  <i
                    className="bi bi-trash m-2"
                    style={{ color: "#F04646" }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    </>
  );
};
export default RdsCompEdition;
