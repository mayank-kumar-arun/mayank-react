import React from 'react'
import RdsCompProductImage,{Item} from '../rds-comp-product-image/rds-comp-product-image'
import './rds-comp-product-list.scss'
export interface RdsCompProductListProps{
    items:Item[];
    type?:string;
}
const RdsCompProductList = (props: RdsCompProductListProps) => {
  return (
    <div className = "container">
        <div className = "row">
        {props.items.map((item: any,index:any)=>(
        <div className = "col-md-3 mb-5">
            <RdsCompProductImage item={item}/>
        </div>
        ))
        }
        </div>
        
    </div>
  )
}

export default RdsCompProductList;