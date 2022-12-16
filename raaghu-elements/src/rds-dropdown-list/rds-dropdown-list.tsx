import React, { useState } from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import RdsIcon from "../rds-icon";
import "./rds-dropdown-list.scss";
export interface RdsDropdownListProps {
  width?: string;
  listItems: {
    value: string;
    icon?: string;
    iconWidth?: string;
    iconHeight?: string;
  }[];
}

const RdsDropdownList = (props: RdsDropdownListProps) => {
  const [selectedOption, setSelectedOption] = useState("us");
	const iconWidth = (props.listItems)
  return (
    <div>
      <div style={{ position: "relative" }}>
        <a
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{ textDecoration: "none", cursor: "pointer " }}
        >
          <div className="bDropdown d-flex align-items-center">
            <RdsIcon
              name="us"
              width="15px"
              height="15px"
              stroke={true}
              fill={false}
            ></RdsIcon>
            <span className="ms-2 me-2 flex-grow-1">EN(US)</span>
            <div className="">
              <RdsIcon
                name="chevron_down"
                fill={false}
                stroke={true}
                height="10px"
                width="10px"
              ></RdsIcon>
            </div>
          </div>
        </a>

        <div
          className="dropdown-menu fab-dropdown border-0 shadow mb-1"
          style={{ position: "absolute", width: "100%" }}
        >
          {props.listItems.map((language: any, i: any) => (
            <div>
              <a
                id="i"
                className="dropdown-item fab-dropdown-item d-flex"
                onClick={() => setSelectedOption(language.icon)}
              >
                {language.icon && <RdsIcon
                  name={language.icon}
                  height={language.iconWidth?language.iconWidth:'20px'}
                  width={language.iconWidth?language.iconWidth:'20px'}
                  fill={false}
                  stroke={true}
                ></RdsIcon>}
                <span style={{ marginLeft: "16px"}}>
                  {language.value}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RdsDropdownList;
