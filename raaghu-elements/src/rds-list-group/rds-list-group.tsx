import React from "react";
import RdsLabel from "../rds-label";
import "./rds-list-group.scss";

export interface RdsListGroupProps {
  labelPosition?: string;
  label?: string;
  listItem: any[];
  lsitGroupWithMultiSelect?: boolean;
}

const RdsListGroup = (props: RdsListGroupProps) => {
  return (
    <>
      {props.labelPosition == "top" && (
        <RdsLabel label={props.label} className="mx-1"></RdsLabel>
      )}
      {!props.lsitGroupWithMultiSelect && (
        <ul className="list-group mb-1">
          {props.listItem.map((listItems) => (
            <>
              <li
                className={`list-group-item form-check ${
                  listItems.disabled ? "disabled" : ""
                } ${
                  listItems.isActive ? "active" : ""
                } d-flex justify-content-between align-items-center`}
              >
                {listItems.label}
                <span className="badge bg-danger badge-pill">
                  {listItems.badgeLabel}
                </span>
              </li>
            </>
          ))}
        </ul>
      )}
      {props.lsitGroupWithMultiSelect && (
        <ul className="list-group mb-1">
          {props.listItem.map((listItems) => (
            <>
              <li
                className={`list-group-item form-check ${
                  listItems.disabled ? "disabled" : ""
                } ${
                  listItems.isActive ? "active" : ""
                }  justify-content-between align-items-center`}
              >
                <input
                  className="form-check-input ms-1 me-2"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <div className="d-flex justify-content-between">
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    {listItems.label}
                  </label>
                  <span className="badge bg-danger badge-pill">
                    {listItems.badgeLabel}
                  </span>
                </div>
              </li>
            </>
          ))}
        </ul>
      )}
      {props.labelPosition == "bottom" && (
        <RdsLabel label={props.label} className="mx-1"></RdsLabel>
      )}
    </>
  );
};

export default RdsListGroup;
