import React, {useState} from "react";
import { RdsButton } from "../rds-elements";
import "./rds-comp-delivery-method.scss"

export interface RdsCompDeliveryMethodProps {
    sizeDataWithDescription:any[],
    sizeType : 'withoutDescription'|'withDescription',
  //  onselect:(event:React.MouseEventHandler)
}

const RdsCompDeliveryMethod = (props:RdsCompDeliveryMethodProps) => {
    const [activeButton, setActiveButton] = useState<number>();

    const onclick =(data:any, index:any)=>{
    console.log(data )
   
    }
  return (
    <>
    <ul className="d-flex ulStl" id="rds-delivery">
        { props.sizeDataWithDescription.map((data:any ,index:number)=>(
            <li 
              className="m-2 border flex-evens">
        <div   onClick={() => {
                    setActiveButton(index);
                    console.log("activeButton - "+activeButton)
                  }}
                  className={`${
                    activeButton === index
                      ? "p-3 border-color"
                      : " p-3"
                  }`}  >
            <div className="d-flex">
                <div className="type flex-grow-1">
                    {data.type}
                </div>
                
                {/* <input type="checkbox" className="checkbox-round" defaultChecked={true} />
                <input type="checkbox" className="checkbox-round" defaultChecked={false} /> */}
                  {activeButton === index && <div className="checkbox"> <input type="checkbox" className="checkbox-round" defaultChecked={true} /></div>  } 
              
                
            </div>
            <div className="description">
                {data.days}
            </div>
            <div className="type mt-2">
                {data.cost}
            </div>
        </div>
    </li>
        ))}
    
</ul>
<div className="my-4 pt-4 row display-none">
    <div className="col-6">
        <RdsButton colorVariant='primary' label ="" block ={true} outlineButton={true} size="medium" tooltipTitle ="bottom" type="button" />
       
    </div>
    <div className="col-6">
    <RdsButton colorVariant='primary' label ="" block ={true} outlineButton={true} size="medium" tooltipTitle ="bottom" type="button" />
     
       
    </div>
</div>
    </>
  );
};
export default RdsCompDeliveryMethod;
