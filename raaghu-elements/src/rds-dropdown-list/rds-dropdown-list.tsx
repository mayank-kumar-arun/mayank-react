import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";

export interface RdsDropdownListProps {
  placeholder: string;
  size: string;
  multiSelect: string;
  colorVariant: string;
  listItems: any[];
  className?:string;
  //   darkDropdown: boolean;
  //   label: string;
  //   direction: string;
  //   role: string;
  //   splitButton: boolean;
}

const RdsDropdownList = (props: RdsDropdownListProps) => {
  let size: "form-select-sm" | "form-select-lg" | undefined = undefined;
  if (props.size == "small") {
    size = "form-select-sm";
  } else if (props.size == "large") {
    size = "form-select-lg";
  }

  return (
    <>
      <select className={`form-select ${size} ${props.className}` }  aria-label="Default select example">
      <option selected>{props.placeholder}</option>
        {props.listItems.map((listItem)=><option key={listItem.id} value={listItem.value}><a href={listItem.href}>{listItem.value}</a></option>)}
        
        {/* <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option> */}
      </select>
    </>
  );
};

export default RdsDropdownList;
