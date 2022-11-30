import React, { useState, useRef, Fragment } from "react";
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
      <form>
        <div className={SWITCH}>
          <input
            type="checkbox"
            className={props.state=="Indeterminate"?"form-check-intermediate form-check-input ":props.state=="ErrorCheckbox"?" form-check-input form-check-checkbox-input-error":"form-check-input"}
           
            value=" "
            disabled={props.isDisabled}
            defaultChecked={props.checked}
            id="class1"
            name={props.name}
            onChange={props.onChange}
          />

         {props.withlabel==false? <></>: <label
            className="form-check-label d-inline me-5 ms-2 "
            htmlFor="flexCheckDefault"
          >
            {props.label}
          </label>}
        </div>
      </form>
    </Fragment>
  );
};

export default RdsCheckbox;

/* { doubleApproval === true && <input  type="checkbox" onClick={handleOnCheck} checked/>}
   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  */

// import React, { useState, useRef, Fragment, useEffect } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";
// import "./rds-checkbox.scss";

// export interface RdsCheckboxProps {
//   label: string;
//   checked: boolean;
//   isDisabled?: boolean;
//   isSwitch?: boolean;
//   withlabel?: boolean;
//   name?: string;
//   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
//   state?:"Checkbox" |"Indeterminate"|"ErrorCheckbox";
//   id?: string;
//   focus?: boolean;
// }

// const RdsCheckbox = (props: RdsCheckboxProps) => {
//   const islabel = `${props.withlabel === false ? "" : props.label}`;
//   const SWITCH = `${
//     props.isSwitch !== true ? " form-check " : " form-switch "
//   }`;
//   const labelColor = `${
//     props.state === "ErrorCheckbox" ? "text-danger" : "text-dark"
//   }`;
//   const labelClassName = `${
//     "form-check-label d-inline me-5 ms-2 " + labelColor
//   }`;
//   const checkRef: any = useRef();
//   const [isChecked, setIsChecked] = useState<boolean>(false);
//   const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false);

//   const checkedHandler: any = () => {
//     if (props.state === "Indeterminate") setIsChecked(!isChecked);
//   };
//   useEffect(() => {
//     if (props.state === "Indeterminate") {
//       checkRef.current.checked = false;
//       setIsIndeterminate(!isIndeterminate);
//       checkRef.current.indeterminate = isIndeterminate;
//       console.log(checkRef);
//     }
//   }, [isChecked]);

//   return (
//     <Fragment>
//       <form>
//         <div className={SWITCH}>
//           <input
//             type="checkbox"
//             className="form-check-input"
//             disabled={props.isDisabled}
//             defaultChecked={props.checked}
//             ref={checkRef}
//             name={props.name}
//             onChange={props.onChange || checkedHandler}
//           />
//           <label className={labelClassName} htmlFor="flexCheckDefault">
//             {islabel}
//           </label>
//         </div>
//       </form>
//     </Fragment>
//   );
// };

// export default RdsCheckbox;

