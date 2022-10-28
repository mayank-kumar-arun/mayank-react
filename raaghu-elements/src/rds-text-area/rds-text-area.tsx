import React, { Fragment } from "react";
import { Colors } from "../Types";

export interface RdsTextAreaProps {
  rows?:number;
  readonly?:boolean;
  label?:string;
  placeholder:string;
  value?:any;
  isDisabled?:boolean;
  colorVariant?: Colors;
}
const RdsTextArea = (props: RdsTextAreaProps) => {
  return (
    <Fragment>
  
<div className="mb-3">
  <label  //HtmlFor="exampleFormControlTextarea1"
   className="form-label">{props.label}</label>
  <textarea className="form-control" disabled={props.isDisabled} id="exampleFormControlTextarea1" rows={props.rows} readOnly ={props.readonly} placeholder={props.placeholder}></textarea>
</div>
    </Fragment>
  );
};
export default RdsTextArea;
