import React, { useState } from "react";
import "./rds-color.scss"

export interface RdsColorProps {
  header: string;
  itemList: any;
  defaultValue: number;
  displayType: "rounded" | "square";
  selectedColor :(event:React.MouseEvent<HTMLDivElement> , selected_Color:any) =>void;
}

const RdsColor = (props: RdsColorProps) => {
  let defaultV = props.hasOwnProperty("defaultValue") ? props.defaultValue : 1;
  const [value, setValue] = useState(defaultV);
  let displaytype = props.hasOwnProperty("displayType")
    ? props.displayType
    : "rounded";
  const selectColor = (e:any, item: any) => {
    setValue(item.id);
    selectColor (e, item.value);
  };
  return (
    <>
      <div>
        {displaytype == "rounded" && (
          <div>
            <h6>{props.header}</h6>
            <div className="d-flex">
              {props.itemList.map((item: any, index: any) => (
                <div
                  key={index}
                  className={`${
                    value === item.id ? "selected-border" : "default-border"
                  }`}
                  id={item.color}
                  style={{ backgroundColor: item.color }}
                  onClick={(e) => selectColor(e,item)}
                ></div>
              ))}
            </div>
          </div>
        )}
        {displaytype == "square" && (
          <div>
            <h6>{props.header}</h6>
            <div className="d-flex">
              {props.itemList.map((item: any, index: any) => (
                <div
                  key={index}
                  className={`${
                    value === item.id
                      ? "selected-border-square"
                      : "default-border-square"
                  }`}
                  id={item.color}
                  style={{ backgroundColor: item.color }}
                  onClick={(e) => selectColor(e, item)}
                ></div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default RdsColor;
