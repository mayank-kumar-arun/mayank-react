import React from "react";
//import { RdsEdition } from "../rds-elements";
import "./rds-comp-edition.scss"

export interface RdsCompEditionProps {
  bodybackGroundColor?: string;
  borderRadious?: number;
  Paddig?: number;
  borderwidth?: number;
  EditionData: any[];
  EditionBorder?: number;


}

const RdsCompEdition = (props: RdsCompEditionProps) => {
  return (
    <>
      {props.EditionData.map((item: any, index: number) => (
        <div
          className="d-inline-block p-3 card"
          style={{ width: "180px" }}
          key={index}
        >
          <div  className="card-body">
            <div
              className="col-md-12 text-center border-radius " // [ngStyle]="{'border-radius': borderRadious +'px'}"
            >
              <b style={{ marginBottom: "0px", padding: "6px" }}>
                {item.EditionName}
              </b>
              <p style={{ fontSize: "10px" }}>{item.EditionTitle}</p>
            </div>
            <div className="col-md-12 text-center">
              <b style={{ fontSize: "18px", color: "#249CF7" }}>$</b>
              <b
                style={{
                  marginBottom: "0px",
                  padding: "0px",
                  fontSize: "25px",
                  color: "#249CF7",
                }}
              >
                {item.Price}
              </b>
              <p style={{ fontSize: "10px", color: "#C7C7C7" }}>{item.Plan}</p>
            </div>
            <div className="col-md-12 text-left">
              <ul
                style={{
                  marginTop: "4px",
                  paddingLeft: "11px",
                  fontSize: "10px",

                }}
              >
                {item.features.map((items: any) => (
                  <li className="listyl">{items}</li>
                ))}
              </ul>
            </div>
            <div className="col-md-12 text-left">
              <i className="bi bi-pencil " style={{ color: "#249CF7" }}></i>
              <i className="bi bi-trash m-2" style={{ color: "#F04646" }}></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RdsCompEdition;
