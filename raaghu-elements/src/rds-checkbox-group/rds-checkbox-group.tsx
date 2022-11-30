import React from "react";

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
  let Switch1 = `${props.isSwitch === true ? "form-switch " : "form-check "} `;
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
          ))}
        </div>
      </div>
    </>
  );
};
export default RdsCheckboxGroup;
// import React, { useState, Fragment } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// ///import './rds-checkbox-group.scss';

// export interface RdsCheckboxGroupProps {

//   isSwitch?: boolean;
//   withlabel?:boolean;
//   isInline?:boolean;
//   itemList:any[],

// }

// const RdsCheckboxGroup = (props: RdsCheckboxGroupProps) => {

//   const islabel = `${props.hasOwnProperty("withlabel") == true&&props.withlabel==false ? "noLabel" : "yesLabel"}`;
//   const SWITCH = `${props.isSwitch !== true ? "form-check" : "form-switch"}`;
//    const inline=`${props.hasOwnProperty("isInline") == true && props.isInline==true ? " d-flex " : ""}`
//   return (
//     <Fragment>
//       <form>
//         <div className={`${inline}`}>

//         {props.itemList.map((item:any) =>(
//          <div className={SWITCH}>

//          <input
//           type="checkbox"
//           className="form-check-input"
//           value=" "
//           disabled={item.disabled}
//           defaultChecked ={item.checked }
//           id={item.id}
//          />

//      {islabel=="yesLabel" && <label className="form-check-label d-inline me-5 ms-2"  htmlFor={item.id}>
//          {item.label}
//        </label>}

//      </div>
//        ))}
//         </div>

//       </form>
//     </Fragment>
//   );
// };

// export default RdsCheckboxGroup;

// /* { doubleApproval === true && <input  type="checkbox" onClick={handleOnCheck} checked/>}
//    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
//   */
