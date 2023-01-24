import React, { ReactNode } from "react";

export interface RdsDropdownProps {
  colorVariant: string;
  size: string;
  darkDropdown: boolean;
  label: string;
  direction: string;
  role: string;
  listItems: any[];

  split: boolean;
  id: string;
  button: ReactNode;
}

const RdsDropdown = (props: RdsDropdownProps) => {
  let size: "btn-sm" | "btn-lg" | undefined = undefined;
  if (props.size == "small") {
    size = "btn-sm";
  } else if (props.size == "large") {
    size = "btn-lg";
  }

  let dropdowndirection: "dropup" | "dropend" | "dropstart" | undefined =
    undefined;
  if (props.direction == "Drop-Up") {
    dropdowndirection = "dropup";
  } else if (props.direction == "Drop-Right") {
    dropdowndirection = "dropend";
  } else if (props.direction == "Drop-Left") {
    dropdowndirection = "dropstart";
  } else if (props.direction == "Drop-Down") {
    dropdowndirection = undefined;
  }

  return (
    <>
      <div className={`btn-group ${dropdowndirection} `}>
        {props.split && (
          <button
            className={`btn btn-${props.colorVariant} ${size}`}
            type="button"
          >
            {props.label}
          </button>
        )}

        {!props.button ? (
          <>
            <button
              className={`btn btn-${props.colorVariant} ${
                props.split ? "dropdown-toggle-split" : ""
              } dropdown-toggle ${size}`}
              type="button"
              data-bs-toggle="dropdown"
              id={`dropdownMenuButton23${props.id}`}
              aria-expanded="false"
            >
              {!props.split && <>{props.label}hhh</>}{" "}
              {props.split && (
                <span className="visually-hidden">Toggle Dropdown</span>
              )}
            </button>
          </>
        ) : (
          <>
            <div
              className={`dropdown-toggle`}
              data-bs-toggle="dropdown"
              id={`dropdownMenuButton23${props.id}`}
              aria-expanded="false"
            >
              <>{props.button}</>
            </div>
          </>
        )}

        <ul
          style={{ width: "auto" }}
          className={`dropdown-menu ${
            props.darkDropdown ? "dropdown-menu-dark" : ""
          }`}
          aria-labelledby={`dropdownMenuButton23${props.id}`}
        >
          {props.listItems.map((listItem) => (
            <li id={listItem.id}>
              <a className="dropdown-item" href={listItem.path}>
                {listItem.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RdsDropdown;
