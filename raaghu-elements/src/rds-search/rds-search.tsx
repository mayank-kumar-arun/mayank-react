import React from "react";
import Icons from "../rds-icon";
import "./rds-search.scss";

export interface RdsSearchProps {
    placeholder: string;
    size: string;

}

const RdsSearch = (props: RdsSearchProps) => {

    let searchBarClass = `input-group mb-3 ${props.size=="small"?"input-group-sm": props.size=="large"?"input-group-lg":""}`
    let ariaDescribedby = props.size == "small"? "inputGroup-sizing-sm" : props.size =="large" ?"inputGroup-sizing-lg" :"inputGroup-sizing-default"
    let spanClass = `input-group-text iconButton ${props.size=="medium"?"searchIconMed": props.size=="large"?"searchIconLarge":""}`
  return (
    <div className={searchBarClass}>
      <input
        type="text"
        className="form-control"
        placeholder={props.placeholder}
        aria-label="Recipient's username"
        aria-describedby={ariaDescribedby}
      />
      <div className="input-group-append">
        <span className={spanClass} id={ariaDescribedby}>
          <Icons name="search" fill={false} strokeColor="#827f7f" stroke={true} height='17px' width="17px"></Icons>
        </span>
      </div>
    </div>
  );
};

export default RdsSearch;
