import React, { Fragment, useState } from "react";
import RdsIcon from "../rds-icon";

export interface RdsBankCardDetailProps {
  cardData: any;
  isSelectable: boolean;
  label: string;
  isEditable: boolean;
}

const RdsBankCardDetail = (props: RdsBankCardDetailProps) => {
  const [checked, setChecked] = useState(props.cardData.radioItems.checked);
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setChecked(true);
    setClicked(true);
  };
  return (
    <Fragment>
      <div className="pt-1 mb-4">
        <div className="border p-3  bg-light rounded">
          <div className=" ">
            <label className="bold ">{props.label}</label>

            <div className="d-flex mt-2 justify-content-between">
              <div className="d-flex  align-items-center">
                <RdsIcon
                  name={props.cardData.icon}
                  height={props.cardData.iconHeight}
                  width={props.cardData.iconWidth}
                  fill={props.cardData.iconFill}
                  stroke={props.cardData.iconstroke}
                  colorVariant={props.cardData.iconColorVarient}
                />

                <div className="ms-3  ">
                  <div className="ms-3 d-flex fs-6">
                    <span>{props.cardData.cardName}</span>
                    <span className="ms-1 me-1 ">Ending with</span>
                    <span>{props.cardData.cardNumber}</span>
                  </div>
                  <div className=" ms-3 fs-7">
                    <span className="text-muted fs-7">
                      {" "}
                      Expiry {props.cardData.cardExpiry}
                    </span>
                  </div>
                </div>
              </div>

              <div className="form-check">
              { props.isSelectable==true&& <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  defaultChecked={checked}
                />}
              </div>
            </div>
          </div>

        {props.isEditable==true && <div className="mt-2  ms-5">
            {clicked == false && (
              <a
                className="ms-3 text-primary "
                style={{ textDecoration: "auto" }}
                onClick={clickHandler}
              >
                Set as default
              </a>
            )}
            {clicked == true && (
              <a className=" ms-3 text-muted  me-1" style={{ textDecoration: "auto" }}>
                Default
              </a>
            )}
            <a className="text-primary ms-2 " style={{ textDecoration: "auto" }}>
             Edit
            </a>
          </div>}
        </div>
      </div>
    </Fragment>
  );
};

export default RdsBankCardDetail;
