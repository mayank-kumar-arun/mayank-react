import React, { Fragment } from "react";
import RdsButton from "../rds-button";
import RdsInput from "../rds-input";
import { Colors } from "../../libs/types";
import './rds-input-group.scss';

export interface RdsInputGroupProps {
    buttonLabel: string,
    buttonColorVariant: Colors
    placeholder?: string
    size?: "small" | "medium" | "large"
    inputGroupLabel?: string
    outline?: boolean
    inputValue(arg: string): any;
}

const RdsInputGroup = (props: RdsInputGroupProps) => {

    const inputGroupDivClasses = "d-flex input-group input-group-" + ( props.size==="small" ? "sm" : ( props.size==="large" ? "lg" : "md" ))
    const inputGroupLabelClasses = ( props.size==="small" ? "fs-small-size" : ( props.size==="large" ? "fs-5" : "fs-6" ))

    const buttonClickHandler = (e: any) => {
        e.preventDefault();
        props.inputValue(e.target[0].value);
    }

    const formName = 'input-group_' + Math.random().toString(36).substr(2, 9);

    return (
        <Fragment>
            <form id={formName} className="RdsInputGroup__form" onSubmit={buttonClickHandler}>
                {props.inputGroupLabel && <label className={inputGroupLabelClasses} > {props.inputGroupLabel} </label>}
                <div className={inputGroupDivClasses}>
                    <div className="flex-grow-1">
                    <RdsInput
                        name={formName+"-input"}
                        placeholder={props.placeholder}
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
                        formName={formName}
                        size={props.size}
                    ></RdsButton>
                </div>
            </form>
        </Fragment>
    )


}


export default RdsInputGroup;