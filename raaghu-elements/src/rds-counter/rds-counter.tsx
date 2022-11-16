import React, { Fragment, useState } from "react";
import { Colors, Placements } from "../../libs/types";
import RdsButton from "../rds-button/rds-button";

import "bootstrap/dist/css/bootstrap.min.css";
import "./rds-counter.scss";



export interface RdsCounterProps {
  counterValue: number,
  label?: string;
  min: number,
  max: number,
  width: number
  colorVariant?: Colors;
  position?: Placements;
}

const RdsCounter = (props: RdsCounterProps) => {

  if(props.counterValue === null) { props.counterValue = 0}
  if(props.width === null) { props.width = 125}
  if(props.min === null) { props.width = 0}
  if(props.max === null) { props.width = 50}


  const classesForButton = 'btn btn-' + (props.colorVariant || 'primary') + ' rounded-0';
  const classesForInnerSpan = 'd-flex align-self-center ' + (props.colorVariant || 'primary') + ' rounded-0';
  const classesForWrapperDiv = 'wrapper d-flex justify-content-between  mt-2 ms-1  border border-' + (props.colorVariant || 'primary') + ' rounded-0';

  // This state hook represents counter value
  const [counterValue, setCounterValue] = useState(props.counterValue);

  const onMinusClick = () => {
    if (counterValue > props.min)
      setCounterValue(prev => (prev - 1))

  }
  const onPlusClick = () => {
    if (counterValue < props.max)
      setCounterValue(prev => (prev + 1))
  }
  return (
    <Fragment>
      <div className="m-1">
      <label>{props.label}</label>
      </div>
      <div 
      className={classesForWrapperDiv}
      style={{
        width:props.width
      }}
      >  
        <button type="button" className={classesForButton} onClick={onMinusClick}>-</button>
        <span className={classesForInnerSpan}>{counterValue}</span>
        <button type="button" className={classesForButton} onClick={onPlusClick}>+</button>
      </div>
    </Fragment>
  );
};

export default RdsCounter;

