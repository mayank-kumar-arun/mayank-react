import React from "react";
import RdsIcon from "../rds-icon";
import { colors, size } from "../../libs/types";
import "./rds-rating.scss";

export interface RdsRatingProps {
  rating: 0 | 1 | 2 | 3 | 4 | 5,
  colorVariant?: colors
  // withNoOfReviews: boolean
  reviewPosition?: "left" | "right"
  noOfReviews?: number
  size?: size
}

const RdsRating = (props: RdsRatingProps) => {

  const orderArray = [1, 2, 3, 4, 5]

  return (
    <><div className="d-flex">
      <span className="">
        {props.reviewPosition != "right" && <span>{props.rating}</span>}
        {orderArray.map(order =>
          <span key={order} className="ps-1 rating-star-span-custom-class">
            <RdsIcon name="star"
              height="1.3em"
              width="1.3em"
              stroke={true}
              fill={order <= props.rating}
              colorVariant={props.colorVariant}
            ></RdsIcon>
          </span>
        )}
        {props.reviewPosition === "right" && <span className="ps-1">{props.rating}</span>}
      </span>
      <span className="ps-2">{props.noOfReviews}&nbsp;reviews</span></div>
    </>
  );
};

export default RdsRating;
