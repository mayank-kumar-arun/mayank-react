import React, {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  useRef,
  Fragment,
} from "react";
import "./rds-double-range.scss";

interface  RdsDoubleRangeProps {
  min: number;
  max: number;
}


const  RdsDoubleRange: FC< RdsDoubleRangeProps> = ({
  min,
  max,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
 
  const [Value1, setValue1] = useState(min);
   const [isTouched1, setIsTouched1] = useState(false);
   const [isTouched2, setIsTouched2] = useState(false);
   const [Value2, setValue2] = useState(max);
 
   const handlerChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value1 = Math.min(+event.target.value, maxVal - 1);
    setMinVal(value1);
    setValue1(value1)
   // console.log(value1)
    event.target.value = value1.toString();
     setIsTouched1(true);
   // console.log(isTouched1);
   };
   
 
   const handlerChange2 = (event: ChangeEvent<HTMLInputElement>) => {
   
    const value2 = Math.max(+event.target.value, minVal + 1);
     setMaxVal(value2);
     setValue2(value2);
    // console.log(value2)
     event.target.value = value2.toString();
      setIsTouched2(true);
  //   console.log(isTouched2);
    
   };
 
   let percent1 = ((Value1 - min) / (max -min)) * 100;
   let percent2 = ((Value2 - min) / (max - min)) * 100;
   let left1 = `calc(${percent1}% + (${-5 - percent1 * 0.15}px))`;
   let left2 = `calc(${percent2}% + (${-5 - percent2 * 0.15}px))`;
   let background = `linear-gradient(90deg, #D0D7DD ${percent1}% , #7E2EEf ${percent1}% , #7E2EEf ${percent2}%, #D0D7DD ${percent2}%)`;
  
  let a=`calc(0% + (-5px))`;
  let b =`calc(100% + (-20px))`;
  let styleleft1 =`${isTouched1 ===true?left1 :a}`;
  let styleleft2 =`${isTouched2 ===true?left2 :b}`;

  //console.log(styleleft1);
  //console.log(styleleft2);
  return (
    <Fragment>
     <div className="position-relative py-5">
        <div className="slider-track" style={{ background: background }}>
        {isTouched1===true&& <span
            id="range1"
            style={{ left:styleleft1, top: "-55px", padding: "5px 10px" }}
            className="sliderTooltipRangeOne "
          >
            {Value1}
          </span>  } 
          {isTouched2===true&&   <span
            id="range2"
            style={{ left:styleleft2, top: "-55px", padding: "5px 10px" }}
            className="sliderTooltipRangeOne "
          >
            {Value2}
          </span>}

        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={handlerChange1}
          className="thumb thumb--zindex-4 slider_1"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={handlerChange2}
          className="thumb thumb--zindex-5 slider_2"
        />

        <div className="showvalue mt-4">
          <span>{min}</span> <span>{max}</span>
        </div>
      </div>

    </Fragment>
  );
};

export default  RdsDoubleRange;



 