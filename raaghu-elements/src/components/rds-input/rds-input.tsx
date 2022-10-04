import React, { ChangeEventHandler, useRef, useState } from "react";
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export interface RdsInputProps {
  // onChange: ChangeEventHandler<FormControlElement> | undefined;
  size?: "sm" | "lg" | string;
  isDisabled?: boolean;
  readonly?: boolean;
  value?: string;
  inputType?: string;
  placeholder?: string;
  title?: string;
  titleType?: string;
  tooltipPlacement?:string;
  tooltipTitle?:string;
}

const RdsInput = (props: RdsInputProps) => {

  // const inputString = useRef<HTMLInputElement>(null)

  // const InputChangeHandler = () => {
  //   props.onChange(inputString?.current?.value)
  // }
  // props.onChange

  return (
    <div>
      <FormGroup
        size={
          props.size === "small" ? "sm" : props.size === "large" ? "lg" : ""
        }
      >
        {props.titleType === "top" && <Form.Label>{props.title}</Form.Label>}
        <Form.Control
          // ref={inputString}
          // onChange={InputChangeHandler}
          disabled={props.isDisabled}
          value={props.value}
          readOnly={props.readonly}
          type={props.inputType}
          placeholder={props.placeholder}
          data-bs-toggle="tooltip" 
          data-bs-placement={props.tooltipPlacement} 
          title={props.tooltipTitle}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        {props.titleType === "bottom" && <Form.Label>{props.title}</Form.Label>}
      </FormGroup>
    </div>
  );
};

export default RdsInput;
