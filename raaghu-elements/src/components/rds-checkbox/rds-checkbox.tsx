import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export interface RdsCheckboxProps {
  label: string;
  checked?: boolean;
  isDisabled?: boolean;
  isSwitch?: boolean;
}

const RdsCheckbox = (props: RdsCheckboxProps) => {
  //  const checkedtake =(props :CheckboxProps)=>{
  //   isChecked = checked in props ?'yes':'no';
  //  }`
  const check: boolean = props.checked || false;
  //const label1 = `${(props.withlabel === false)? "" : props.label}`;

  
    
  const [doubleApproval, setDoubleApproval] = useState<boolean>(check);
  const handleOnCheck = () => {
    setDoubleApproval(!doubleApproval);
    {
      props.checked;
    }
    setDoubleApproval;
  };
  const SWITCH = `${props.isSwitch !== true ? "form-check" : "form-switch"}`;

  return (
    <Fragment>
      <form>
        <div className={SWITCH}>
          {check === true ? (
            <input
              type="checkbox"
              className="form-check-input"
              value=""
              //id={`$props.isSwitch === true? "flexSwitchCheckDefault":"flexCheckDefault"`}
              disabled={props.isDisabled}
              onClick={handleOnCheck}
              checked
            />
          ) : (
            <input
              type="checkbox"
              className="form-check-input"
              value=""
              //id={`$props.isSwitch === true? "flexSwitchCheckDefault":"flexCheckDefault"`}

              disabled={props.isDisabled}
              onClick={handleOnCheck}
            />
          )}

            <label className="form-check-label" htmlFor="flexCheckDefault">
            {props.label}
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
