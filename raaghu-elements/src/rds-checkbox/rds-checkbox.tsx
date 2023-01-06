import React, { useState, useRef, Fragment } from "react";

import "./rds-checkbox.scss";

export interface RdsCheckboxProps {
  label: string;
  labelClass?:string,
  checked: boolean;
  isDisabled?: boolean;
  classes?:string;
  isSwitch?: boolean;
  withlabel?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  state?:"Checkbox" |"Indeterminate"|"ErrorCheckbox";
  errorMessage?:string;
  id?: string;
}

const RdsCheckbox = (props: RdsCheckboxProps) => {

  const SWITCH = `${
    props.isSwitch !== true ? " form-check " : " form-switch "
  }`;

  return (
    <Fragment>
      <div>
        <div className={`${SWITCH} ${props.classes}`} >
          <input
            type="checkbox"
            className={props.state=="Indeterminate"?"form-check-intermediate form-check-input ":props.state=="ErrorCheckbox"?" form-check-input form-check-checkbox-input-error":"form-check-input"}
            value=" "
            disabled={props.isDisabled}
            defaultChecked={props.checked}
            id={props.id}
            name={props.name}
            onChange={props.onChange}

          />

         {props.withlabel==false? <></>: <label
            className={` form-check-label d-inline me-5 ms-2  ${props.labelClass} `}
            htmlFor="flexCheckDefault"
          >
            {props.label}
          </label>}
        </div>
      </div>
    </Fragment>
  );
};

export default RdsCheckbox;
