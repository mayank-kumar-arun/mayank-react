import React, { Fragment, useState } from "react";
import { Colors } from "../Types";
import RdsIcon from "../rds-icon/rds-icon";
import "./rds-like-dislike.scss";

export interface RdsLikeDislikeProps {
  colorVariant?: Colors;
  like:number;
  dislike:number;
}

const RdsLikeDislike = (props: RdsLikeDislikeProps) => {
  const [like, setLike] = useState(props.like);
  const [dislike, setDislike] = useState(props.dislike);

  const likeHandler = () => {
    setLike(like + 1);
    console.log(setLike);
  };
  const dislikeHandler = () => {
    setDislike(dislike + 1);
    console.log(setDislike);
  };

  let bg = "bg-" + (props.colorVariant || "dark");

  return (
    <Fragment>
      <div className={`row `}>
        <div className="d-flex ">
          <div onClick={likeHandler}>
            <RdsIcon
              name="like"
              height="20px"
              width="20px"
              fill={false}
              stroke={true}
              colorVariant ={props.colorVariant ||"dark"}
            ></RdsIcon>

            <span className="ms-2 me-2 ">
              <label className="marginclassName">{like}</label>
            </span>
          </div>

          <div onClick={dislikeHandler} className="d-flex">
            <div className="mt-1">
              <RdsIcon
                name="dislike"
                height="20px"
                width="20px"
                fill={false}
                stroke={true}
                colorVariant ={props.colorVariant ||"dark"}
              ></RdsIcon>
            </div>
            <span className="ms-2">
              <label>{dislike}</label>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RdsLikeDislike;
