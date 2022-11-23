import React from "react";
import RdsAvatar from "../rds-avatar";
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
        description?: string,
        likes: number,
        dislikes: number
    }
}

const RdsReviewCategory = (props: RdsReviewCategoryProps) => {
    return (
        <>

            {(props.item && props.display_type === "Basic") &&
                <div className="RdsReviewCategory__basic">
                    <div className="row sm-d-flex">
                        <div className="col-md-3">
                            <div className="d-flex justify-content-start align-items-start flex-column gap-5 sm-gap-0">
                                <div>
                                    <RdsLabel label={props.item.name} multiline={false} bold={true} italic={false} />
                                    {props.item.date && <p className="mt-2 text-secondary" >
                                        {props.item.date.toDateString().slice(4)}
                                    </p>}
                                </div>
                                <div>
                                    <RdsLikeDislike like={props.item.likes} dislike={props.item.dislikes} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="mb-3">
                                <RdsRating rating={props.item.reviewRate} colorVariant="review" reviewPosition="right" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <RdsLabel
                                label={props.item.reviewTitle}
                                multiline={true}
                                bold={true}
                                italic={false}
                            />
                            <RdsLabel
                                label={props.item.reviewSubTitle}
                                multiline={true}
                                bold={false}
                                italic={false}
                            />
                            <RdsLabel
                                label={props.item.description}
                                multiline={true}
                                bold={false}
                                italic={false}
                            />
                        </div >
                    </div >
                </div >
            }


            {(props.item && props.display_type === "ReviewType_1") &&
                <div className="RdsReviewCategory__review-type-1">
                    <div className="row sm-d-flex">
                        <div className="col-md-3">
                            <div className="avatar">
                                <RdsAvatar colorVariant="light" withProfilePic={true} profilePic={props.item.imageUrl} />
                            </div>
                            <div className="item-name">
                                <RdsLabel label={props.item.name} multiline={false} bold={true} italic={false} />
                            </div>
                            <div className="rating">
                                <RdsRating rating={props.item.reviewRate} colorVariant="warning" reviewPosition="none" />
                            </div >
                            <div className="mt-3">
                                <RdsLikeDislike like={props.item.likes} dislike={props.item.dislikes} />
                            </div >
                        </div >
                        <div className="col-md-8 pe-5">
                            <RdsLabel label={props.item.reviewTitle} multiline={true} bold={true} italic={false} />
                            <RdsLabel label={props.item.reviewTitle} multiline={true} bold={false} italic={false} />
                            <RdsLabel label={props.item.description} multiline={true} bold={false} italic={false} />
                        </div >
                    </div >
                </div >
            }



            {(props.item && props.display_type === "ReviewType_2") &&
                <div className="RdsReviewCategory__review-type-2">
                    <div className="py-2 col-md-9">
                        <div className="d-flex pb-3">
                            <div className="avatar">
                                <RdsAvatar
                                    colorVariant="light"
                                    withProfilePic={true}
                                    profilePic={props.item.imageUrl}
                                />
                            </div>
                            <div className="mx-3">
                                <div className="item-name">
                                    <RdsLabel
                                        label={props.item.name}
                                        multiline={false}
                                        bold={true}
                                        italic={false}
                                    />
                                </div>
                                <div>
                                    <RdsRating rating={props.item.reviewRate} colorVariant="warning" reviewPosition="none" />
                                </div>
                            </div >
                        </div >
                        <div className="description mt-1">
                            <RdsLabel
                                label={props.item.description}
                                multiline={true}
                                bold={false}
                                italic={false}
                            />
                        </div >
                        <div className="mt-2">
                            <RdsLikeDislike like={props.item.likes} dislike={props.item.dislikes} />
                        </ div>
                    </div >

                </div>
            }


        </>
    );
};

export default RdsReviewCategory;
