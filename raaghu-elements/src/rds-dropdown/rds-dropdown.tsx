import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.min.js";

export interface RdsDropdownProps {
    colorVariant: string,
    size: string,
    darkDropdown: boolean,
    listItems: string ,
    label: string,
    direction: string,
    dropdownAlignment: [],
    role:string,

}

const RdsDropdown = (props: RdsDropdownProps) => {
  // const renderTooltip = (props: JSX.IntrinsicAttributes & TooltipProps & React.RefAttributes<HTMLDivElement>) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     Simple tooltip
  //   </Tooltip>
  // );

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a className="dropdown-item" href="#">
              Action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default RdsDropdown;
