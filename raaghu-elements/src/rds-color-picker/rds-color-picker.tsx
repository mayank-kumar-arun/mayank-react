
import React, { useState, Fragment, useEffect } from "react";

export interface RdsColorPickerProps {
  value: string;
  isDisabled?: boolean;
  label: string;
}

const RdsColorPicker = (props: RdsColorPickerProps) => {
  let Value = props.value  ;

  let [Color, setColor] = useState(Value);
 
  useEffect(() => {
    setColor(Value);
  }, [Value]);
  const HandlerChangecolor = (e: any) => {
    const { value } = e.target;
    console.log(value);
    return(
        setColor(Color =value))
  };
  //

 
let stri = Color;


  const isValidHexaCode=()=> {
    if (stri[0] != '#')
        return false;

    if (!(stri.length ==4 || stri.length==7))
        return false;

    for (let i = 1; i < stri.length; i++)
        if (!((stri[i].charCodeAt(0) <= '0'.charCodeAt(0) && stri[i].charCodeAt(0) <= 9)
            || (stri[i].charCodeAt(0) >= 'a'.charCodeAt(0) && stri[i].charCodeAt(0) <= 'f'.charCodeAt(0))
            || (stri[i].charCodeAt(0) >= 'A'.charCodeAt(0) || stri[i].charCodeAt(0) <= 'F'.charCodeAt(0))))
            return false;

    return true;
}

// Driver Code

if (isValidHexaCode() === true ) {
    console.log("validColor" + '<br>');
    Color=stri
}
else {
    console.log("invalid" + '<br>');
    Color="#000000"
}

  return (
    <Fragment>
    <div className="d-flex">
      <div >{props.label} </div>
     <div style={{marginLeft:'10px'}}>
     <input
        type="color"
        value={Color}
        id="color"
        disabled={props.isDisabled}
        onChange={HandlerChangecolor}

      />
      </div>
     </div>
      
      </Fragment>
  );
};
export default RdsColorPicker;
