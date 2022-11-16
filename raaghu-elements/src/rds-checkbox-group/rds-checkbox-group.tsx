import React, { useState, Fragment } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
///import './rds-checkbox-group.scss';

export interface RdsCheckboxGroupProps {
 
  isSwitch?: boolean;
  withlabel?:boolean;
  isInline?:boolean;
  itemList:any[],

}


const RdsCheckboxGroup = (props: RdsCheckboxGroupProps) => {

  const islabel = `${props.hasOwnProperty("withlabel") == true&&props.withlabel==false ? "noLabel" : "yesLabel"}`;
  const SWITCH = `${props.isSwitch !== true ? "form-check" : "form-switch"}`;
   const inline=`${props.hasOwnProperty("isInline") == true && props.isInline==true ? " d-flex " : ""}`

 //let isInlin= 
  return (
    <Fragment>
      <form>
        <div className={`${inline}`}>

        {props.itemList.map((item:any) =>(
         <div className={SWITCH}>
         
         <input
           type="checkbox"
           className="form-check-input"
           value=" "
           //id={`$props.isSwitch === true? "flexSwitchCheckDefault":"flexCheckDefault"`}
           disabled={item.disabled}
        //   onClick={handleOnCheck}
          defaultChecked ={item.checked }
          id={item.id}
         />
        
     {islabel=="yesLabel" && <label className="form-check-label d-inline me-5 ms-2" htmlFor={item.id}>
         {item.label}
       </label>}

     </div>
       ))}
        </div>
        
      </form>
    </Fragment>
  );
};

export default RdsCheckboxGroup;

/* { doubleApproval === true && <input  type="checkbox" onClick={handleOnCheck} checked/>}
   <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  */
