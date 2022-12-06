import React from "react";
import RdsCompProductImage, {
  Item,
} from "../rds-comp-product-image/rds-comp-product-image";
import "./rds-comp-product-list.scss";
export interface RdsCompProductListProps {
  items: Item[];
  type?: string;
  bordered?: boolean;
}
const RdsCompProductList = (props: RdsCompProductListProps) => {
  return (
    <div>
      {props.items.map((item: any, index: any) => (
        <div className="mb-5 d-inline-block">
          <RdsCompProductImage
            item={item}
            bordered={props.bordered ? true : false}
          />
        </div>
      ))}
    </div>
  );
};

export default RdsCompProductList;
