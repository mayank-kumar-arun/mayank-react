import React, { useState } from "react";
import "./rds-radio-button.scss";
import { useReducer } from "react";

export interface RdsRadioButtonProps {
  switch?: boolean;
  inline?: boolean;
  isInputGroup?: boolean;
  onClick?:(React.MouseEventHandler<HTMLInputElement>);
  itemList: any;
  displayType?: string;
}




// const reducer = (state:any, action:any) => {
//   switch (action.type) {
//     case "COMPLETE":
//         console.log("button clicked" )
//       return state.map((todo:any) => {
//         if (todo.id === action.id) {
//             console.log("button clicked changed" + todo.checked)
//           return { ...todo, checked: !todo.checked };
          
//         } else {
//           return todo;
//         }
        
//       });
//     default:
//       return state;
      
//   }
// };


const RdsRadioButton = (props: RdsRadioButtonProps) => {

//   const [items, dispatch] = useReducer(reducer, props.itemList);

//   const handleComplete = (todo:any) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };

  let InputGroup = props.isInputGroup || false;
  let Switch = props.switch || false;
  let Inline = props.inline || false;

  let display_type= props.displayType||'Default';

  let InputGroup1 = `${InputGroup === true  ? "input-group-text" : ""} `;
  let Switch1 = `${Switch === true ? "form-switch" : ""} `;
  let Inline1 = `${Inline === true || display_type =="Horizontal" ? "form-check-inline" : ""} `;

  
  return (
    <>
      <div>
      <div>
          {props.itemList.map((item: any, idx: any) => (
            <div
            className={"form-check " + `${InputGroup1}` + `${Switch1}` + `${Inline1}`
              }
            >
              <input
                type="radio"
                key={idx}
                className="form-check-input"
                name={item.name}
                value={item.label}
                
                defaultChecked={item.checked}
                
                id={item.id}
                disabled={item.disabled}
               
               
              />
              <label
                htmlFor={item.id}
                className="ms-2 form-check-label" 
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>


        
      </div>
    </>
  );
};
export default RdsRadioButton;
