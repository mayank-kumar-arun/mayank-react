import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.css";
import './rds-input-group.scss';



import React, { Fragment, useState } from "react";

import RdsButton from "../rds-button";
import RdsInput from "../rds-input";
import { colors } from "../../libs/types";



export interface RdsInputGroupProps {
    buttonLabel: string,
    buttonColorVariant: colors
    placeholder?: string
    size?: "small" | "medium" | "large"
    inputGroupLabel?: string
    outline?: boolean
    inputValue(arg: string): any;
}

const RdsInputGroup = (props: RdsInputGroupProps) => {

    // const inputClasses = "form-control";
    // const buttonClasses = "btn " + (props.outline ? "btn-outline-" : "btn-") + props.buttonColorVariant;
    const inputGroupDivClasses = "d-flex input-group input-group-" + ( props.size==="small" ? "sm" : ( props.size==="large" ? "lg" : "md" ))
    const inputGroupLabelClasses = ( props.size==="small" ? "fs-6" : ( props.size==="large" ? "fs-5" : "" ))

    const buttonClickHandler = (e: any) => {
        e.preventDefault();
        props.inputValue(e.target[0].value);
    }

    const formName = 'input-group_' + Math.random().toString(36).substr(2, 9);

    return (
        <Fragment>
            {/* <form id={formName} onSubmit={buttonClickHandler}>

                <label>Field Label</label>
                <div className={inputGroupDivClasses} >

                    <input type="text" form={formName} className={inputClasses} placeholder={props.placeholder} />
                    <button type="submit" form={formName} className={buttonClasses}> {props.buttonLabel} </button>
                </div>
            </form>

            <hr></hr> */}

            <form id={formName} onSubmit={buttonClickHandler}>

                {props.inputGroupLabel && <label className={inputGroupLabelClasses} > {props.inputGroupLabel} </label>}
                <div className={inputGroupDivClasses} >
                    <div className="flex-grow-1">
                    <RdsInput
                        name={""}
                        placeholder={props.placeholder}
                        customClasses=" input-for-rds-input-group"   //its css defined in RdsInput.css
                        formName={formName}
                        size={props.size}
                    ></RdsInput>
                    </div>
                    <RdsButton
                        label={props.buttonLabel}
                        tooltipTitle={""}
                        type={"submit"}
                        colorVariant={props.buttonColorVariant}
                        outlineButton={props.outline}
                        class="button-for-rds-input-group"   //its css defined n RdsButton
                        formName={formName}
                        size={props.size}
                    ></RdsButton>

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

