import React from "react";
import RdsIcon from "../rds-icon";
import { colors, size } from "../../libs/types";
import "./rds-rating.scss";

export interface RdsRatingProps {
  rating: 0 | 1 | 2 | 3 | 4 | 5,
  reviewPosition?: "left" | "right" | "none",
  colorVariant?: colors
  noOfReviews?: number
  size?: size
  seeAllOption?: boolean
  onSeeAll?: () => void
}

const RdsRating = (props: RdsRatingProps) => {

  const orderArray = [1, 2, 3, 4, 5]

  return (
    <div className="d-flex">
      <span className="">
        {(props.reviewPosition === "left" || props.reviewPosition === undefined) &&
          <span>{props.rating}</span>
        }
        {orderArray.map(order =>
          <span key={order} className="ps-1 rating-star-span-custom-class">
            <RdsIcon name="star"
              height="24px"
              width="24px"
              stroke={true}
              fill={order <= props.rating}
              colorVariant={props.colorVariant}
            ></RdsIcon>
          </span>
        )}
        {props.reviewPosition === "right" &&
          <span className="ps-1">{props.rating}</span>
        }
      </span>
      {props.seeAllOption &&
        <small className="ps-2 text-primary" onClick={props.onSeeAll}>
          See all {props.noOfReviews} reviews
        </small>
      }
    </div>
  );
};

export default RdsRating;
