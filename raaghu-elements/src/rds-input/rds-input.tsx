
import React from "react";

// import { FormGroup } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup"; changes
import './rds-input.scss';

export interface RdsInputProps {
  // onChange: ChangeEventHandler<FormControlElement> | undefined;
  size?: "small" | "large" | "medium" | string;
  isDisabled?: boolean;
  readonly?: boolean;
  value?: string;
  inputType?: string;
  placeholder?: string;
  title?: string;
  titleType?: string;
  tooltipPlacement?: string;
  tooltipTitle?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  label?: string;
  id?: string

  customClasses?: string;
  formName?: string;

}

const RdsInput = React.forwardRef((props: RdsInputProps, ref: React.Ref<unknown> | undefined) => {
  let size: "sm" | "lg" | undefined = undefined;

  if (props.size == "small") {
    size = "sm";
  } else if (props.size == "large") {
    size = "lg";
  }

  const inputClasses = "form-control form-control-" + size + " flex-grow-1 " + props.customClasses;


  return (
    <div>
      {props.label && <label htmlFor={props.id} className="form-label">{props.label}</label>}
      <input
        type={props.inputType}
        className={inputClasses}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        form={props.formName}
        value={props.value}
      ></input>

      {/* <FormGroup>
        {props.titleType === "top" && <Form.Label>{props.title}</Form.Label>}
        <Form.Control
          size={size}
          onChange={props.onChange}
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
        {props.titleType === "bottom" && <label>{props.title}</label>}
      {/* </FormGroup>  */}
    </ div>


  );
});

export default RdsInput;
