import React from "react";
import { isHtmlElement } from "react-router-dom/dist/dom";
import { RdsLabel, RdsBadge, RdsIcon, RdsRating, RdsColorSwitcher } from "../rds-elements";
import "./rds-comp-product-image.scss"
export interface Item{
  imgUrl?: string, 
  rating?: 0 | 1 | 2 | 3 | 4 | 5, 
  reviews?: string, 
  productTitle?: string, 
  productDescription?: string, 
  colorLabel?: string,
  cost?: string,
  badgeWithIcon?: {badge:string, icon: string},
  itemWidth?:string,
  ColorSwitcherList?: {id:number, color: string}[];
}
export interface RdsCompProductImageProps {
  item: Item;
}
const RdsCompProductImage = (props: RdsCompProductImageProps) => {
  return (
    // <div
    //   className="card d-flex align-items-center justify-content-center"
    //   style={{ width: "666px", height: "980px" }}
    // >
      <div className = "mx-4 d-inline-block position-relative w-100" >
        <img src={props.item.imgUrl} alt="product-img" className = "w-100 h-100"></img>
        <div className = "mt-3">
          <RdsLabel label="Basic Tee" size="28px"></RdsLabel>
        </div>
        <div className = "position-absolute iconposition-heart">
        <RdsIcon
                    name= "heart"
                    colorVariant="dark"
                    height="21px"
                    width="25px"
                    fill={false}
                    stroke={true}
                  ></RdsIcon>
        </div>
        { props.item.rating  && (
                  <div className="mt-1 me-4" style={{ display: "inline-block" }}>
                    <RdsRating
                      rating={props.item.rating}
                      colorVariant="warning"
                    ></RdsRating>
                  </div>
                )}
                {props.item.reviews && (
                  <div style={{ display: "inline-block" }}>
                    <a href="#" className="text-decoration-none">
                      {props.item.reviews}
                    </a>
                  </div>
                )}
     
        {props.item.productDescription && <div className = "mt-2 text-muted">{props.item.productDescription}</div>}
        {props.item.colorLabel && <div className="mt-2">
          <RdsLabel label={props.item.colorLabel} color="#626262" size="20px"></RdsLabel>
        </div>}
        <div
          className="d-flex justify-content-between mt-4"
        
        >
          {props.item.cost && <div>
            <RdsLabel label="$35" size="32px" ></RdsLabel>
          </div>}
          {props.item.badgeWithIcon && <div className="d-flex align-items-center">
            <div className="mb-1">
               <RdsBadge
                label={props.item.badgeWithIcon?.badge}
                size="small"
                badgeType="pill"
                colorVariant="warning"
                textColor="danger"
                children={
                  <RdsIcon
                    name= {props.item.badgeWithIcon?.icon}
                    colorVariant="danger"
                    height="15px"
                    width="15px"
                    fill={false}
                    stroke={true}
                  ></RdsIcon>
                }
              ></RdsBadge>
             
            </div>
          </div>}
      
        </div>
        {props.item.ColorSwitcherList && <div className = ""><RdsColorSwitcher itemList={props.item.ColorSwitcherList}/></div>}
      </div>
    // </div>
  );
};

export default RdsCompProductImage;
