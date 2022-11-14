import React, { Fragment, useState } from "react";
import "./rds-range.scss";
import { Colors} from "../../libs/types";

export interface RdsRangeProps {
  max: number;
  min: number;
  step?: number;
  colorVariant?: Colors;
}

const RdsRange = (props: RdsRangeProps) => {
  
 /// const Color = props.colorVariant || 'primary' ;

  const [Value, setValue] = useState(props.min);
  const [isTouched, setIsTouched] = useState(false);

  const handlerChange = (e: any) => {
    const value1 = e.target.value;
    setIsTouched(true);
   //  console.log(isTouched);
   // console.log(value1);
    setValue(value1);
  };

  let percent1 = ((Value - props.min) / (props.max - props.min)) * 100;
  let left = `calc(${percent1}% + (${-5 - percent1 * 0.15}px))`;

  let background = `linear-gradient(90deg,#5C82E3 ${percent1}%,#D0D7DD 0%)`;
  let a=`calc(0% + (-5px))`;
  let styleleft =`${isTouched===true?left :a}`;

  return(
    <Fragment>
      <div className="position-relative py-5">
        <div className="slider-track" style={{ background: background }}>
          {isTouched === true && (
            <span
              id="range1"
              style={{ left: styleleft, top: "-55px", padding: "5px 10px" }}
              className="sliderTooltipRange"
            >
              {Value}
            </span>
          )}
        </div>

        <input
          className="slider_0 "
          type="range"
          style={{ width: "100%" }}
          max={props.max}
          min={props.min}
          onChange={handlerChange}
        />
        <div className="showvalue mt-4"><span>{props.min}</span> <span>{props.max}</span></div>
      </div>
      
    </Fragment>
  );
};
export default RdsRange;
