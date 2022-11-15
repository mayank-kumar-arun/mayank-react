import React, { Fragment, useState } from "react";
import RdsIcon from "../rds-icon";
import "./rds-size.scss";

export interface RdsSizeProps {
  sizeType: string;
  sizeData: any[];
  sizeDataWithDescription: any[];
}


const RdsSize = (props: RdsSizeProps) => {
  // const [clicked, setClicked] = useState(false);
  const [activeButton, setActiveButton] = useState("");
 
  return (
    <Fragment>
      {props.sizeType == "withDescription" && (
        <div className="">
          <ul className="d-flex ulStyle" id="rds-size">
            {props.sizeDataWithDescription.map((data: any, index: any) => (
              <li className="me-3 mt-3 border flex-evens">
                <div
                  key={index}
                  onClick={() => {
                    setActiveButton(data.value);
                  }}
                  className={`${
                    activeButton === data.value
                      ? "p-3 border-color"
                      : " p-3"
                  }`}
                >
                  <div className="size text-dark fw-medium">{data.value}</div>
                  <div className="description">{data.description}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {props.sizeType == "withoutDescription" && (
        <ul className="d-flex" id="rds-size">
          {props.sizeData.map((data: any, index: any) => (
            <li //</ul>*ngFor="let data of sizeData"
              className="me-3 mt-3 border flex-even text-center d-flex"
            >
              <div
                key={index}
                onClick={() => {
                  setActiveButton(data.value);
                }}
                className={`${
                  activeButton === data.value
                    ? " flex-even d-flex border-color"
                    : "flex-even  d-flex"
                }`}
                // className="d-flex mx-auto align-self-center"
                // (click)="onclick(data)"
              >
                <div className="size-small mx-auto ">
                  {data.value}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
};
export default RdsSize;
