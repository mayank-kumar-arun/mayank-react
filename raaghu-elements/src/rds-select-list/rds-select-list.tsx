
import React, { Fragment } from "react";

export interface RdsSelectProps{
    label: string;
    isDisabled?:boolean;
    isMultiple?:boolean;
    size?:string;
    selectItems: any[];
    classes:string, 
    children?:React.ReactNode
    onSelectListChange ?:( Event:React.ChangeEvent<HTMLSelectElement>) => void; 
   }

const RdsSelectList = (props: RdsSelectProps) => {

  const Size = `${props.hasOwnProperty("size") ? props.size : "md"}`
  const customSize = `${Size === "lg" ? "form-select form-select-lg" : Size === "sm" ? "form-select form-select-sm" : "form-select"}`

  let Multiple = props.isMultiple || false;
  let Disabled = props.isDisabled || false;
  
  return (
    <Fragment>
      <select className={`${customSize} ${props.classes}`} disabled={Disabled} multiple={Multiple} aria-label="select example" onChange={props.onSelectListChange}>
        <option disabled selected hidden className="text-muted">{props.label}</option>
        {props.selectItems.map((selectItem) => (
          <option value={selectItem.option}>{selectItem.option} {props.children}</option>
        ))}
      </select>
    </Fragment>
  );
};

export default RdsSelectList;
