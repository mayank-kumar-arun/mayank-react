import React from "react";
import { Colors } from "../Types";

export interface RdsButtonGroupProps {
  vertical: boolean;
  outlineButton: boolean;
  colorVariant?: Colors;
  size: string;
  role: "checkbox" | "radio" | "button";
  buttonGroupItems: any[];
}

const RdsButtonGroup = (props: RdsButtonGroupProps) => {
  let size =
    props.size == "small"
      ? "btn-group-sm"
      : props.size == "large"
      ? "btn-group-lg"
      : "";

  const outlineColorVariant = `${
    props.outlineButton === true
      ? "btn btn-outline-" + props.colorVariant
      : "btn btn-" + props.colorVariant
  }`;

  return (
    <>
      {props.role != "button" && (
        <div
          className={`${
            props.vertical == true ? "btn-group-vertical" : "btn-group"
          } ${size}`}
          role="group"
          aria-label="Basic button toggle button group"
        >
          {props.buttonGroupItems.map((buttonGroupItem, idx) => (
            <>
              <input
                type={props.role}
                className={`${
                  props.role == "checkbox" || props.role == "radio"
                    ? "btn-check"
                    : "btn btn-primary"
                }`}
                name={props.role == "radio" ? "btnradio" : ""}
                id={buttonGroupItem.id}
                autoComplete="off"
              ></input>
              <label className={outlineColorVariant} htmlFor={buttonGroupItem.id}>
                {buttonGroupItem.label}
              </label>
            </>
          ))}
        </div>
      )}

      {props.role == "button" && (
        <div
          className={`${
            props.vertical == true ? "btn-group-vertical" : "btn-group"
          } ${size}`}
          role="group"
          aria-label="Basic example"
        >
          <button type="button" className={outlineColorVariant}>
            Left
          </button>
          <button type="button" className={outlineColorVariant}>
            Middle
          </button>
          <button type="button" className={outlineColorVariant}>
            Right
          </button>
        </div>
      )}
    </>
  );
};

export default RdsButtonGroup;
