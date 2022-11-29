import React, { useState, useRef, Fragment, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./rds-checkbox.scss";

export interface RdsCheckboxProps {
  label: string;
  checked: boolean;
  isDisabled?: boolean;
  isSwitch?: boolean;
  withlabel?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  state?: string | null;
  id?: string;
  focus?: boolean;
}

const RdsCheckbox = (props: RdsCheckboxProps) => {
  const islabel = `${props.withlabel === false ? "" : props.label}`;
  const SWITCH = `${
    props.isSwitch !== true ? " form-check " : " form-switch "
  }`;
  const labelColor = `${
    props.state === "ErrorCheckbox" ? "text-danger" : "text-dark"
  }`;
  const labelClassName = `${
    "form-check-label d-inline me-5 ms-2 " + labelColor
  }`;
  const checkRef: any = useRef();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false);

  const checkedHandler: any = () => {
    if (props.state === "Indeterminate") setIsChecked(!isChecked);
  };
  useEffect(() => {
    if (props.state === "Indeterminate") {
      checkRef.current.checked = false;
      setIsIndeterminate(!isIndeterminate);
      checkRef.current.indeterminate = isIndeterminate;
      console.log(checkRef);
    }
  }, [isChecked]);

  return (
    <Fragment>
      <form>
        <div className={SWITCH}>
          <input
            type="checkbox"
            className="form-check-input"
            disabled={props.isDisabled}
            defaultChecked={props.checked}
            ref={checkRef}
            name={props.name}
            onChange={props.onChange || checkedHandler}
          />
          <label className={labelClassName} htmlFor="flexCheckDefault">
            {islabel}
          </label>
        </div>
      </form>
    </Fragment>
  );
};

export default RdsCheckbox;
