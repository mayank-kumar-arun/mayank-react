import React from "react";
import RdsLabel from "../rds-label";
import RdsLikeDislike from "../rds-like-dislike";
import RdsRating from "../rds-rating";
import "./rds-review-category.scss";

export interface RdsReviewCategoryProps {
    display_type: string,
    item: {
        name: string,
        date?: Date,
        imageUrl?: string,
        reviewRate: 0 | 1 | 2 | 3 | 4 | 5,
        reviewTitle?: string,
        reviewSubTitle?: string,
        description?: string
    }
}

const RdsReviewCategory = (props: RdsReviewCategoryProps) => {
    return (
        <>

            {(props.item && props.display_type === "Basic") &&
                <div>
                    <div className="row sm-d-flex">
                        <div className="col-md-3">
                            <div className="d-flex justify-content-start align-items-start flex-column gap-5 sm-gap-0">
                                <div>
                                    <RdsLabel label={props.item.name} multiline={false} bold={true} italic={false}></RdsLabel>
                                    <p className="mt-2 text-secondary">{props.item.date.toDateString().slice(4)}</p>
                                </div>
                                <div>
                                    <RdsLikeDislike
                                    // likeCount=0
                                    // dislikeCount=0
                                    // onClick={onClick($event)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <RdsRating rating={props.item.reviewRate} Size="medium" ratingPosition="right" colorVariant="review" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <RdsLabel label={props.item.reviewTitle} multiline={true} bold={true} italic={false} className="mb-1 " />

                            <RdsLabel label={props.item.reviewSubTitle} multiline={true} bold={false} italic={false} className="mt-2 text-secondary" />

                            <RdsLabel label={props.item.description} multiline={true} bold={false} italic={false} className="text-secondary" />
                        </div >
                    </div >
                </div >
            }



            {(props.item && props.display_type === "ReviewType_1") &&
            <div>
                <div className="py-2">
                    <div className="d-flex">
                        <RdsAvatar colorVariant="light" withProfilePic={true} profilePic={props.item.imageUrl} size="large" verticallyAlligned={false} />
                        <div className="mx-3">
                            <RdsLabel label={props.item.name} multiline={false} bold={true} italic={false} />
                            <p>
                                <RdsRating withNoOfReviews={false} rating={props.item.reviewRate} colorVariant="warning" noOfReview={123} Size="small" />
                            </p>
                        </div >
                    </div >
                    <div>
                        <RdsLabel label={props.item.description} multiline={true} bold={false} italic={false} className="text-secondary" />
                    </div >
                    <div className="mt-2">
                        <RdsLikeDislike 
                            // likeCount={0}
                            //  dislikeCount={0} 
                            //  (onClick)="onClick($event)"
                        />
                    </div >
                </div >

            </div>
            }












    {(props.item && props.display_type === "ReviewType_2") &&
    <div>
      <div className="row sm-d-flex">
        <div className="col-md-3">
          <div>
            <RdsAvatar colorVariant="light" withProfilePic={true} profilePic={props.item.imageUrl} size="large" verticallyAlligned={false} />
          </div>
          <div>
            <RdsLabel label={props.item.name} multiline={false} bold={true} italic={false} className="my-1" />
          </div>
          <div>
            <RdsRating rating={props.item.reviewRate} noOfReview={123} Size="small" colorVariant="warning" />
          </div >
    <div className="mt-3">
        <RdsLikeDislike likeCount={0} dislikeCount={0}  (onClick)="onClick($event)" />
          </div >
        </div >
        <div className="col-md-9 pe-5">
          <RdsLabel label={props.item.reviewTitle} multiline={true} bold={true} italic={false} className="mb-1" />
          <RdsLabel label={props.item.reviewTitle} multiline={true} bold={false} italic={false} className = "mt-2 text-secondary" />
    <RdsLabel label={props.item.description} multiline={true} bold={false} italic={false} className = "text-secondary" />
        </div >
      </div >
    </div >



    }
      
    </>
  );
};

export default RdsReviewCategory;
