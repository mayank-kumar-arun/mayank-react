import React from "react";
import "./rds-checkbox-group.scss"

export interface RdsCheckboxGroupProps {
  isSwitch?: boolean;
  isInline?: boolean;
  itemList: any;
  label?: string;
  id?: number;
  state?: "Checkbox" | "Indeterminate" | "ErrorCheckbox";
  errorMessage?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

const RdsCheckboxGroup = (props: RdsCheckboxGroupProps) => {
  let Switch1 = `${props.isSwitch === true ? " mb-2 form-switch " : " mb-2 form-check "} `;
  let Inline1 = `${props.isInline === true && props.isSwitch==false ? " form-check-inline" : ""} `;
  let state = props.state || "Checkbox";

  return (
    <>
      <div key={props.id}>
        <div>
          <label className="d-flex">{props.label}</label>

          {state == "ErrorCheckbox" && (
            <span className="error_Msg"> {props.errorMessage}</span>
          )}
          {props.itemList.map((item: any, idx: any) => (
            <div key={idx} className={`${Switch1} ${Inline1}`}>
             {item.title && <div className="item___title__checkbox__group">{item.title}</div>}
              <div>
              <input
                type="checkbox"
                className={
                  props.state == "Indeterminate"
                    ? "form-check-intermediate form-check-input "
                    : props.state == "ErrorCheckbox"
                    ? " form-check-input form-check-checkbox-input-error"
                    : "form-check-input"
                }
                name={item.name}
                value={item.label}
                defaultChecked={item.checked}
                id={item.id}
                disabled={item.disabled}
                onClick={props.onClick}
              />
              <label htmlFor={item.id} className="ms-2 form-check-label">
                {item.label}
              </label>

              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RdsCheckboxGroup;
