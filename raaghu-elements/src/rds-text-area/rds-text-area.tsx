import React, { Fragment } from "react";
import "./rds-text-area.scss";
export interface RdsTextAreaProps {
  rows?: number;
  readonly?: boolean;
  label?: string;
  placeholder: string;
  value?: any;
  isDisabled?: boolean;
  isRequired?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  labelPosition?: string;
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
}
const RdsTextArea = (props: RdsTextAreaProps) => {
  return (
    <Fragment>
      <div>
        {props.labelPosition === "top" && (
          <label className="form-label">
            {props.label}
            {props.isRequired && <span className="text-danger fs-6"> *</span>}
          </label>
        )}
        <textarea
          className="form-control"
          disabled={props.isDisabled}
          id="exampleFormControlTextarea1"
          rows={props.rows}
          readOnly={props.readonly}
          placeholder={props.placeholder}
          onChange={props.onChange}
          onClick={props.onClick}
        ></textarea>
        {props.labelPosition === "bottom" && (
          <label className="form-label mt-1">
            {props.label}
            {props.isRequired && <span className="text-danger fs-6"> *</span>}
          </label>
        )}
      </div>
    </Fragment>
  );
};
export default RdsTextArea;
