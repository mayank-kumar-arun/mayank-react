import React, { useState, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export interface CheckboxProps {
  label: string;
  checked?: boolean;
  Disabled?: boolean;
  Switch?: boolean;
}

const Checkbox = (props: CheckboxProps) => {
  const check: boolean = props.checked || false;

  //const label1 = `${(props.withlabel === false)? "" : props.label}`;

  const [doubleApproval, setDoubleApproval] = useState<boolean>(check);
  const handleOnCheck = () => {
    setDoubleApproval(!doubleApproval);
    {
      props.checked !== props.checked;
    }
    setDoubleApproval;
  };
  const SWITCH = `${props.Switch !== true ? "form-check" : "form-switch"}`;

  return (
    <Fragment>
      <form>
        <div className={SWITCH}>
          {check === true ? (
            <input
              type="checkbox"
              className="form-check-input"
              value=""
              disabled={props.Disabled}
            //  onClick={handleOnCheck}
              checked
            />
          ) : (
            <input
              type="checkbox"
              className="form-check-input"
              value=""
              disabled={props.Disabled}
           //   onClick={handleOnCheck}
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

export default Checkbox;

/* { doubleApproval === true && <input  type="checkbox" onClick={handleOnCheck} checked/>}
   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  */
