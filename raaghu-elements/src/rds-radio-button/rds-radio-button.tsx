import React, { useState } from "react";
import "./rds-radio-button.scss";
import { useReducer } from "react";

export interface RdsRadioButtonProps {
  switch?: boolean;
  inline?: boolean;
  isInputGroup?: boolean;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  itemList: any;
  displayType?: string;
  label?: string;
  id?:number;
}

const RdsRadioButton = (props: RdsRadioButtonProps) => {
  let InputGroup = props.isInputGroup || false;
  let Switch = props.switch || false;
  let Inline = props.inline || false;

  let display_type = props.displayType || "Default";

  let InputGroup1 = `${InputGroup === true ? "input-group-text" : ""} `;
  let Switch1 = `${Switch === true ? "form-switch" : ""} `;
  let Inline1 = `${
    Inline === true || display_type == "Horizontal" ? "form-check-inline" : ""
  } `;

  return (
    <>
      <div key={props.id} >
        <div>
          <label>{props.label}</label>
          {props.itemList.map((item: any, idx: any) => (
            <div
              key={idx}
              className={
                "form-check " + `${InputGroup1}` + `${Switch1}` + `${Inline1}`
              }
            >
              <input
                type="radio"
                className="form-check-input"
                name={item.name}
                value={item.label}
                defaultChecked={item.checked}
                id={item.id}
                disabled={item.disabled}
              />
              <label htmlFor={item.id} className="ms-2 form-check-label">
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RdsRadioButton;
