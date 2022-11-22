import React, { MouseEventHandler } from "react";
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
  name?: string;
  label?: string;
  id?: string
  redAsteriskPresent?: boolean
  
  required?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any
  onClick?: (event:React.MouseEvent<HTMLInputElement>) =>void;

  customClasses?: string;
  formName?: string;
}

const RdsInput = React.forwardRef(
	(props: RdsInputProps, ref: React.Ref<unknown> | undefined) => {
		let size: "sm" | "lg" | undefined = undefined;

		if (props.size == "small") {
			size = "sm";
		} else if (props.size == "large") {
			size = "lg";
		}

		const inputClasses =
			"form-control form-control-" +
			size +
			" flex-grow-1 " +
			props.customClasses;

		return (
			<div>
				{props.label && (
					<label htmlFor={props.id} className="form-label">
						{props.label}
					</label>
				)}
				{props.redAsteriskPresent && <span className="text-danger">*</span>}
				<input
					type={props.inputType}
					className={inputClasses}
					id={props.id}
					placeholder={props.placeholder}
					onChange={props.onChange}
					onClick={props.onClick}
					name={props.name}
					form={props.formName}
					required={props.required}
					onFocus={props.onFocus}
					onBlur={props.onBlur}
					value={props.value}
					disabled={props.isDisabled}
					readOnly={props.readonly}
				></input>
			</div>
		);
	}
);

export default RdsInput;
