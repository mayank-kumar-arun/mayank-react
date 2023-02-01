import React, { MouseEventHandler, useState } from "react";

import RdsIcon from "../rds-icon";
import RdsBadge from "../rds-badge";
import "./rds-dropdown-list.scss";
import { PROPERTY_TYPES } from "@babel/types";
import { useEffect } from "react";
import { Dropdown } from "bootstrap";
export interface RdsDropdownListProps {
  id?:string, 
  reset?: boolean;
  icon?: string;
  iconFill?:boolean, 
  iconWidth?: string;
  iconStroke?:boolean;
  iconHeight?: string;
  placeholder?: string;
  borderDropdown?:boolean, 
  listItems: {
    label: string;
    val: string;
    icon?: string;
    iconWidth?: string;
    iconHeight?: string;
  }[];
  multiSelect?: boolean;
  xOffset?: string;
  yOffset?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  selectedItems?: (selectedItems: any) => void;
  selectedIndex?: (selectedindex: number) => void;
}

const RdsDropdownList = (props: RdsDropdownListProps) => {
  let nextId = 0;
  const [checkedCategoryList, setCheckedCategoryList] = useState<any>([]);
  const [isTouch, setIsTouch] = useState(false);
  // to fetch the index of the selected language
  let id=props.id ||'dropdown_id'
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
  let IconWidth = props.listItems[selectedOption].iconWidth || "16px";
  let IconHeight = props.listItems[selectedOption].iconHeight || "12px";

  const uncheckHandler = (e: any, item: any) => {
    const newChildTreeunits = checkedCategoryList.filter(
      (curItem: any) => curItem.label !== item.label
    );
    setCheckedCategoryList(newChildTreeunits);
  };
  
  let offset =`${props.xOffset||''} , ${props.yOffset||''}` ; 
  const checkHandler = (e: any, item: any) => {
    let newTempData: any;

    newTempData = {
      id: item.label,
      label: item.label,
    };

    setCheckedCategoryList((prev: any) => [...prev, newTempData]);
  };
  let border =props.borderDropdown==true ?'border border-1 rounded-1 border-dark" ' :'';
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
      <div className="dropdown w-100 position-relative">
        <span 
          data-bs-toggle="dropdown"
          aria-expanded="false"
          data-bs-offset={offset} 
        >
          <div className={`px-2 py-1 fw-light fs-5 d-flex align-items-center ps-2 justify-content-between ${border}`}>
        {/* simple dropdown  */}
           {isTouch !== true &&
              props.placeholder &&
              props.multiSelect !== true && (
            
                <div>
                {props.icon && (
                  <span >
                     <RdsIcon name={props.icon} height={IconHeight} width={IconWidth} fill={props.iconFill}
                    stroke={props.iconStroke} classes ="pe-1" />
                     
                  </span>
                )}
                <span className="fs-6 ms-2 me-2 flex-grow-1">
                  {props.placeholder}
                </span>
              </div>
            )}
            
            {isTouch === true &&
              props.multiSelect !== true &&
              props.listItems &&
              props.listItems[0] && (
                <>
                  <div>
                    {props.listItems[selectedOption].icon && (
                      <span>
                        <RdsIcon
                          name={props.listItems[selectedOption].icon}
                          width={IconWidth}
                          height={IconHeight}
                          stroke={true}
                          fill={false}
                        ></RdsIcon>
                      </span>
                    )}
                    <span
                      className="fs-6 ms-2 me-2 flex-grow-1"
                    >
                      {props.listItems[selectedOption].label}
                    </span>
                  </div>
                </>
              )}

              {/* multiselected dropdown placeholder */}
            {checkedCategoryList.length == 0 && props.multiSelect === true &&props.placeholder &&  (
                <div>
                  <span className="ms-2 me-2  text-muted">
                    {props.placeholder}
                  </span>
                </div>
              )}
            {/* multiselected dropdown's badge */}
            {props.multiSelect === true && checkedCategoryList.length != 0 && (
                <div>
                  {checkedCategoryList.map((item: any) => (
                      <RdsBadge
                        key={item.id}
                        label={item.label}
                        colorVariant="primary"
                        size="small"
                        onClose={(e) => uncheckHandler(e, item)}
                        showClose = {true}
                      /> ))}
                  </div>)}

            {/* chevron_down icon */}
            <div>
              <RdsIcon
                name="chevron_down"
                fill={false}
                stroke={true}
                height="6px"
                width="12px"
              ></RdsIcon>
            </div>


          </div>
        </span>

        {/* DropdownList items */}
        <ul className="dropdown-menu" aria-labelledby={id}>
          {props.listItems?.map((language: any, i: any) => (
            <li
            className="ps-1"
              key={i}
              onMouseDown={() => {
                onClickHandler(i, language.val);
              }}
            >
              <a
                data-name={language.val}
                id={i}
                className="ps-2 dropdown-item fab-dropdown-item d-flex"
                onClick={props.onClick}
                style={{ cursor: "pointer" }}
              >
                {props.multiSelect && (
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
                )}
                {language.icon && (
                  <div
                    className="ms-2">
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
            </li>
          ))}
        </ul>
      </div>
  );
};

export default RdsDropdownList;