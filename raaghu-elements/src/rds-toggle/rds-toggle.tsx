import React, { useState } from "react";
import RdsIcon from "../rds-icon/rds-icon";
import "./rds-toggle.scss";

export interface RdsToggleProps {
    // for future reference
//   isLabel: boolean;
//   labelOnUncheck: string;
//   labelOnCheck: string;
  iconOnUncheck: string;
  iconOnCheck: string;
}

const RdsToggle = (props: RdsToggleProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span className="toggle-switch-slider d-flex align-items-center justify-content-around">
          <div className="position-relative z-3">
            {/* For future reference */}
            {/* {props.isLabel && (
              <div className={`${checked ? "text-white" : "text-dark"}`}>
                {props.labelOnUncheck}
              </div>
            )} */}
            {(
              <RdsIcon
                name={props.iconOnUncheck}
                height="15px"
                width="15px"
                fill={true}
                stroke={true}
                colorVariant={`${checked ? "light" : ""}`}
              ></RdsIcon>
            )}
          </div>
          <div className="position-relative z-3">
            {/* For future reference */}
            {/* {props.isLabel && props.labelOnCheck} */}
            {(
              <RdsIcon
                name={props.iconOnCheck}
                height="15px"
                width="15px"
                fill={true}
                stroke={true}
              ></RdsIcon>
            )}
          </div>
        </span>
      </label>
    </>
  );
};

export default RdsToggle;
