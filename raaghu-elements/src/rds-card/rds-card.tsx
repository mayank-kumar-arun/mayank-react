import React, { Fragment } from "react";
import { colors } from "../../libs/types";

import "./rds-card.scss"

export interface RdsCardProps {
  buttonLabel?: string;
  colorVariant?: colors;
  cardTitle?:string,
  cardText?:string
  showFooter?: boolean;
  isImage?: boolean;
  imageUrl?: string;
  avatarUrl?: string;
  centerAlign?: boolean;
  isAvatar?: boolean;
}

const RdsCard = (props: RdsCardProps) => {
  const btnColor = "btn btn-md btn-" + (props.colorVariant || "primary");

  let isCenter = props.centerAlign || false;
  let textAlign = `${isCenter === true ? "card text-center" : "card"}`;
  let leftAlignLeft="20px"
  let leftAlignCenter=`calc(50% + (-42px))`;
  
       
  return (
    <Fragment>
      <div className={textAlign} >
        <div className=" position-relative">
          {props.isImage === true && (
            <img src={props.imageUrl} id="backImg" style={{
              position: 'relative',
            }} className="card-img-top" alt="..." />
          )} 
          {props.isAvatar === true && isCenter===true&& props.isImage === true&&
          <img className="img-fluid avatar___Image"
            style={{left: leftAlignCenter}}
            src={props.avatarUrl}
          ></img>}
            {props.isAvatar === true && isCenter===false && props.isImage === true&&
          <img className="img-fluid avatar___Image"
            style={{left:leftAlignLeft}}
            src={props.avatarUrl}
          ></img>}
        </div>
        
        <div className={`card-body ${props.isAvatar === true?" cardBody__Avatar":"cardBody__withoutAvatar"}`} >
          
            <div>
              <h5 className="card-title">{props.cardTitle}</h5>
              <p className="card-text">{props.cardText}</p>
            </div>
          
          {props.showFooter === true && (
            <button type="button" className={` bottombtn ${btnColor}`} >
              {props.buttonLabel}
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default RdsCard;
