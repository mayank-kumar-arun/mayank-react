<<<<<<< Updated upstream
import React from "react";
// import { FormGroup } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
=======
import React, { ChangeEventHandler, useRef, useState, useImperativeHandle } from "react";
import { FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
>>>>>>> Stashed changes
import './rds-input.scss';

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
  tooltipPlacement?: string;
  tooltipTitle?: string;
}

const RdsInput = React.forwardRef((props: RdsInputProps, ref: React.Ref<unknown> | undefined) => {
  let size: "sm" | "lg" | undefined = undefined;

  if (props.size == "small") {
    size = "sm";
  } else if (props.size == "large") {
    size = "lg";
  }

  const [tempEmail, setTempEmail] = useState('')

  const InputRef = useRef<HTMLInputElement>(null);

  // const activate = () => {
  //   InputRef.current.focus();
  // }

  useImperativeHandle(ref , () => {
    return { 
      InputRef: InputRef
    };
  } );

  return (
    <div>
<<<<<<< Updated upstream
      <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>

      {/* <FormGroup>
=======
      {/* <FormGroup> */}
>>>>>>> Stashed changes
        {props.titleType === "top" && <Form.Label>{props.title}</Form.Label>}
        <input
          ref={InputRef}
          // size={size}
          // onChange={props.onChange}
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
<<<<<<< Updated upstream
      </FormGroup> */}
    </div >
=======
      {/* </FormGroup> */}
    </div>
>>>>>>> Stashed changes
  );
});

export default RdsInput;
