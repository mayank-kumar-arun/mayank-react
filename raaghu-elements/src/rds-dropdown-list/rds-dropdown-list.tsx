import React, { MouseEventHandler, useState } from "react";

import RdsIcon from "../rds-icon";
import RdsBadge from "../rds-badge";
import "./rds-dropdown-list.scss";
import { PROPERTY_TYPES } from "@babel/types";
import { useEffect } from "react";
export interface RdsDropdownListProps {
  reset?: boolean;
  width?: string;
  withIcons?: boolean;
  placeholder?: string;
  displayNameSize?: string;
  insideListNameSize?: string;
  displayIconHeight?: string;
  displayIconWidth?: string;

  displayIconRoundedCorner?: boolean;
  insideIconRoundedCorner?: boolean;

  listItems: {
    label: string;
    val: string;
    icon?: string;
    iconWidth?: string;
    iconHeight?: string;
  }[];
  withBorder?: boolean;
  darkVariant?: boolean;
  multiSelect?: boolean;

  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  selectedItems?: (selectedItems: any) => void;
  selectedIndex?: (selectedindex: number) => void;
}

const RdsDropdownList = (props: RdsDropdownListProps) => {
  let nextId = 0;
  const [checkedCategoryList, setCheckedCategoryList] = useState<any>([]);
  const [isTouch, setIsTouch] = useState(false);
  // to fetch the index of the selected language

  const lang = localStorage.getItem("i18nextLng");
  let index = props.listItems.findIndex((item) => item.val === lang);

  //  If language not found then we are updating index to 0

  if (index == -1) {
    index = 0;
  }

  //  updating the selected language accordingly

  const [selectedOption, setSelectedOption] = useState<number>(index);

  // using onClickHandler to change the language

  const onClickHandler = (index: number, val: string) => {
    setSelectedOption(index);
    setIsTouch(true);
  };
  let displayIconWidth = props.displayIconWidth || "16px";
  let displayIconHeight = props.displayIconHeight || "12px";
  let displaySize = props.displayNameSize || "12.25px";

  const uncheckHandler = (e: any, item: any) => {
    const newChildTreeunits = checkedCategoryList.filter(
      (curItem: any) => curItem.label !== item.label
    );
    setCheckedCategoryList(newChildTreeunits);
  };
  const checkHandler = (e: any, item: any) => {
    let newTempData: any;

    newTempData = {
      id: item.label,
      label: item.label,
    };

    setCheckedCategoryList((prev: any) => [...prev, newTempData]);
  };

  useEffect(() => {
    setIsTouch(false);
    setCheckedCategoryList([]);
  }, [props.reset]);
  useEffect(() => {
    props.multiSelect === undefined &&
      props.selectedIndex != undefined &&
      props.selectedIndex(selectedOption);
  }, [selectedOption]);

  useEffect(() => {
    props.multiSelect &&
      props.selectedItems != undefined &&
      props.selectedItems(checkedCategoryList);
  }, [checkedCategoryList]);
  return (
    <div>
      <div className="position-relative">
        <a
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div
            className="d-flex align-items-center ps-2 justify-content-between"
            style={{
              border: `${props.withBorder ? "" : "none"}`,
              background: `${props.darkVariant ? "#212529" : "white"}`,
              color: `${props.darkVariant ? "white" : "#212529"}`,
            }}
          >
            {checkedCategoryList.length == 0 &&
              props.multiSelect === true &&
              props.placeholder && (
                <div>
                  <span className="ms-2 me-2  text-muted">
                    {props.placeholder}
                  </span>
                </div>
              )}
            {/* multiselected dropdown's badge */}
            {props.multiSelect === true &&
              props.listItems &&
              props.listItems[0] && (
                <div>
                  {checkedCategoryList.length != 0 &&
                    checkedCategoryList.map((item: any) => (
                      <RdsBadge
                        key={item.id}
                        label={item.label}
                        colorVariant="primary"
                        size="small"
                       children={<span className="mx-1">
                        <RdsIcon
                          name="close"
                          fill={false}
                          stroke={true}
                          height="6px"
                          width="6px"
                          onClick={(e) => uncheckHandler(e, item)}
                          colorVariant={`${
                            props.darkVariant ? "light" : ""
                          }`}
                        ></RdsIcon>
                      </span>} /> 
                      
                      ))}
                  </div>)}

            {isTouch != true &&
              props.placeholder &&
              props.multiSelect !== true && (
                <div>
                  <span className="ms-2 me-2  text-muted">
                    {props.placeholder}
                  </span>
                </div>
              )}
            {isTouch == true &&
              props.multiSelect !== true &&
              props.listItems &&
              props.listItems[0] && (
                <>
                  <div>
                    {props.listItems[selectedOption].icon && (
                      <span
                        style={{
                          borderRadius: `${
                            props.displayIconRoundedCorner ? "50%" : "0"
                          }`,
                        }}
                      >
                        <RdsIcon
                          name={props.listItems[selectedOption].icon}
                          width={displayIconWidth}
                          height={displayIconHeight}
                          stroke={true}
                          fill={false}
                        ></RdsIcon>
                      </span>
                    )}
                    <span
                      className="ms-2 me-2 flex-grow-1"
                      style={{ fontSize: `${displaySize}` }}
                    >
                      {props.listItems[selectedOption].label}
                    </span>
                  </div>
                </>
              )}
            <div>
              <RdsIcon
                name="chevron_down"
                fill={false}
                stroke={true}
                height="6px"
                width="12px"
                colorVariant={`${props.darkVariant ? "light" : ""}`}
              ></RdsIcon>
            </div>
          </div>
        </a>

        {/* DropdownList items */}
        <div
          className="dropdown-menu fab-dropdown border-0 shadow mb-1"
        >
          {props.listItems?.map((language: any, i: any) => (
            <div
              key={i}
              onMouseDown={() => {
                onClickHandler(i, language.val);
              }}
            >
              <a
                data-name={language.val}
                id={i}
                className="dropdown-item fab-dropdown-item d-flex ps-0"
                onClick={props.onClick}
                style={{ cursor: "pointer" }}
              >
                {props.multiSelect && (
                  <div className="ms-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={
                          checkedCategoryList.filter(
                            (curElem: any) => curElem.label == language.label
                          ).length == 1
                        }
                        onChange={(e) =>
                          `${
                            e.target.checked !== true
                              ? uncheckHandler(e, language)
                              : checkHandler(e, language)
                          }`
                        }
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                )}
                {language.icon && (
                  <div
                    className="ms-2"
                    style={{
                      borderRadius: `${
                        props.insideIconRoundedCorner ? "50%" : "0"
                      }`,
                    }}
                  >
                    <RdsIcon
                      name={language.icon}
                      height={language.iconWidth ? language.iconWidth : "20px"}
                      width={language.iconWidth ? language.iconWidth : "20px"}
                      fill={false}
                      stroke={true}
                    ></RdsIcon>
                  </div>
                )}

                <span
                  className="ms-1"
                >
                  <div data-name={language.val} >{language.label} </div>
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
