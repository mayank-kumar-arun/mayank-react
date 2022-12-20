import React, { useState, useEffect, ReactNode } from "react";
import "./rds-toggle-switch.scss";
const CheckedIcon = () => <>🌜</>;
const UncheckedIcon = () => <>🌞</>;

export interface RdsToggleSwitchProps {
  disabled: boolean;
  defaultChecked: boolean;
  className: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
  icons: {
    checked: ReactNode;
    unchecked: ReactNode;
  };
}

const RdsToggleSwitch = (props: RdsToggleSwitchProps) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (props.defaultChecked) {
      setToggle(props.defaultChecked);
    }
  }, [props.defaultChecked]);

  const triggerToggle = () => {
    if (props.disabled) {
      return;
    }
    setToggle(!toggle);
  };
  const toggleClass = (toggle?"wrg-toggle wrg-toggle--checked":"wrg-toggle");
  return (
    <div className="d-flex justify-content-center">

    <div onClick={triggerToggle} className={toggleClass}>
      <div className="wrg-toggle-container">
        <div className="wrg-toggle-check">
          <span>{<CheckedIcon />}</span>
        </div>
        <div className="wrg-toggle-uncheck">
          <span>{<UncheckedIcon />}</span>
        </div>
      </div>
      <div className="wrg-toggle-circle"></div>
      <input
        type="checkbox"
        aria-label="Toggle Button"
        className="wrg-toggle-input"
      />
    </div>
    </div>
  );
};

export default RdsToggleSwitch;
