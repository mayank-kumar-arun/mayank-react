import React, {useState} from "react";
import { RdsBankCardDetail} from "../rds-elements";


export interface RdsCompCardDetailListProps {
 cardDatas:any[],
}

const RdsCompCardDetailList = (props:RdsCompCardDetailListProps) => {
    const [activeButton, setActiveButton] =useState<number>();
    const [checked, setChecked] = useState(false);

   const clickHandler =(index:any) =>{
    setActiveButton(index)
   // setChecked (true)
   }
  return (
    <>
<div className="m-1 p-1 ">
    {props.cardDatas.map((data:any, index:number) =>(
        <div key={index} onClick={()=>clickHandler(index) }  className={`${
            activeButton === index
              ?  "m-2 p-2 border-color "
              : " m-2 p-2 border "
            }`} >

            <RdsBankCardDetail  cardData={data.cardData} isSelectable={data.isSelectabl}  isEditable={data.isEditable} label={data.label}  />
          </div>
         ))}

</div>

    </>
  );
};
export default RdsCompCardDetailList;
