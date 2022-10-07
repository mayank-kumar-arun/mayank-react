import React from "react";
import { Icons } from "./Icons";

export interface RdsIconProps {
  width: string;
  height: string;
  color: string;
  name: string;
}

const RdsIcon = (props: RdsIconProps) => {

  let icon= Icons[props.name];

  return (
    <>


     
     <div style={{
      width: props.width ,
      height: props.height,
      
     }}
      dangerouslySetInnerHTML={{__html: icon }}
      ></div>
     


      
    </>
  );
};

export default RdsIcon;
