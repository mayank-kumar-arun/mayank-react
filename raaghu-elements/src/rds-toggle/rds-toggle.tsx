import React, { useState } from "react";
import RdsIcon from "../rds-icon/rds-icon";
import "./rds-toggle.scss";

export interface RdsToggleProps {
  // for future reference
  //   isLabel: boolean;
  //   labelOnUncheck: string;
  //   labelOnCheck: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  iconOnUncheck: string;
  iconOnCheck: string;
}

const RdsToggle = (props: RdsToggleProps) => {
  const [checked, setChecked] = useState(false);

const onChangeHandler =()=>{
  setChecked((prev)=>(!prev));
}

  return (
    <>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChangeHandler}
          onClick={props.onClick}
        />
        <span className="toggle-switch-slider d-flex align-items-center justify-content-around">
          <div className="position-relative z-3">
            {/* For future reference */}
            {/* {props.isLabel && (
              <div className={`${checked ? "text-white" : "text-dark"}`}>
                {props.labelOnUncheck}
              </div>
            )} */}
            {
              <RdsIcon
                name={props.iconOnUncheck}
                height="15px"
                width="15px"
                fill={true}
                stroke={true}
                colorVariant={`${checked ? "light" : ""}`}
              ></RdsIcon>
            }
          </div>
          <div className="position-relative z-3">
            {/* For future reference */}
            {/* {props.isLabel && props.labelOnCheck} */}
            {
              <RdsIcon
                name={props.iconOnCheck}
                height="15px"
                width="15px"
                fill={true}
                stroke={true}
              ></RdsIcon>
            }
          </div>
        </span>
      </label>
    </>
  );
};

export default RdsToggle;
