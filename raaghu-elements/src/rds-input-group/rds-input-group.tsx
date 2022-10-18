import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import './rds-input-group.scss';



import React, { Fragment, useState } from "react";

import RdsButton from "../rds-button";
import RdsInput from "../rds-input";
import { Colors } from "../Types";



export interface RdsInputGroupProps {
    buttonLabel: string,
    buttonColorVariant: Colors
    placeholder?: string
    size?: "sm" | "md" | "lg"
    outline?: boolean
    inputValue(arg: string):any
}

const RdsInputGroup = (props: RdsInputGroupProps) => {

    const inputClasses = "form-control";
    const buttonClasses = "btn " + (props.outline? "btn-outline-" : "btn-") + props.buttonColorVariant;
    const inputGroupDivClasses = "input-group input-group-" + props.size

    const buttonClickHandler = (e: any) => {
        e.preventDefault();
        props.inputValue(e.target[0].value);
    }

    const formName = 'input-group_' + Math.random().toString(36).substr(2, 9);

    return (
        <Fragment>
            <form id={formName} onSubmit={buttonClickHandler}>

            <label>Field Label</label>
            <div className={inputGroupDivClasses} >
                <input type="text" form={formName} className={inputClasses} placeholder={props.placeholder} />
                <button type="submit" form={formName}  className={buttonClasses}> {props.buttonLabel} </button>
            </div>
            </form>
        </Fragment>
    )


}


export default RdsInputGroup;






//----------------------------------------------//
//                  EXAMPLE                     //
//----------------------------------------------//
//          HOW TO USE VALUE IN PARENT          //
//----------------------------------------------//

//   //In tsx
// const onValueRecieveHandler = (v: any) =>{
//     console.log(v);
//   //Can Insert anything here depending on what you want to do with the recieved value.
//   }
//   //In 'return' of tsx
// <RdsInputGroup buttonLabel={"search"} buttonColorVariant={"primary"} inputValue={onValueRecieveHandler}></RdsInputGroup>

