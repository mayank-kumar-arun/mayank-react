import React, { useState, Fragment } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import './rds-checkbox.scss';

export interface RdsCheckboxProps {
  label: string;
  checked?: boolean;
  isDisabled?: boolean;
  isSwitch?: boolean;
  withlabel?:boolean;
}


const RdsCheckbox = (props: RdsCheckboxProps) => {

  const islabel = `${(props.withlabel === false)? "" : props.label}`;
  

  const SWITCH = `${props.isSwitch !== true ? " form-check " : " form-switch "}`;

  return (
    <Fragment>
      <form>
        <div className={SWITCH}>
         
            <input
              type="checkbox"
              className="form-check-input"
              value=" "
              //id={`$props.isSwitch === true? "flexSwitchCheckDefault":"flexCheckDefault"`}
              disabled={props.isDisabled}
           //   onClick={handleOnCheck}
             defaultChecked ={props.checked}
            />
           
            <label className="form-check-label d-inline me-5 ms-2 " htmlFor="flexCheckDefault">
            {islabel}
          </label>

        </div>
      </form>
    </Fragment>
  );
};

export default RdsCheckbox;

/* { doubleApproval === true && <input  type="checkbox" onClick={handleOnCheck} checked/>}
   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  */
