import React from "react";
import Icons from "../rds-icon";
import "./rds-search.scss";

export interface RdsSearchProps {
	placeholder: string;
	size: string;
  iconside?:"left"|"right" ,
}

const RdsSearch = (props: RdsSearchProps) => {
  //searchBar__left
    let iconside=props.iconside ||"right"
    let searchBarClass = `input-group mb-3 ${props.size=="small"?"input-group-sm": props.size=="large"?"input-group-lg":""}`
    let ariaDescribedby = props.size == "small"? "inputGroup-sizing-sm" : props.size =="large" ?"inputGroup-sizing-lg" :"inputGroup-sizing-default"
    let spanClass = `input-group-text ${iconside =="left"?" iconButton__left ":" iconButton__right "} ${props.size=="medium"?"searchIconMed": props.size=="large"?"searchIconLarge":""}`;
   
  return (
    <div className={searchBarClass}>
   {iconside =="left" ?
   <>
        <span className={spanClass} id={ariaDescribedby}>
          <Icons name="search" fill={false} strokeColor="#827f7f" stroke={true} height='17px' width="17px"></Icons>
        </span>
     
      <input
        type="text"
        className="form-control search__input__right"
        placeholder={props.placeholder}
        aria-label="Recipient's username"
        aria-describedby={ariaDescribedby}
      />
       </>
     :
      <>
        <input
        type="text"
        className="form-control search__input__left"
        placeholder={props.placeholder}
        aria-label="Recipient's username"
        aria-describedby={ariaDescribedby}
      />
       <span className={spanClass} id={ariaDescribedby}>
          <Icons name="search" fill={false} strokeColor="#827f7f" stroke={true} height='17px' width="17px"></Icons>
        </span>
     
    
    </>}
    </div>
  );
};

export default RdsSearch;
