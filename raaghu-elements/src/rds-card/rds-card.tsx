import React, { Fragment } from "react";
import { colors } from "../../libs/types";
import "bootstrap/dist/css/bootstrap.min.css"

export interface RdsCardProps {
  buttonLabel?: string;
  colorVariant?: colors;
  cardItems: any[];
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
 let left1= "50%"; 
 let left2="10%"
  return (
    <Fragment>
      <div className={textAlign} >
        
          {props.isImage === true && (
            <img src={props.imageUrl}  style={{
              position: 'relative',
            }} className="card-img-top" alt="..." />
          )} 
          {props.isAvatar === true && isCenter===true&& props.isImage === true&&
          <img className="img-fluid"
            style={{
              position: "absolute",
              top: "151px",
              left: left1,
              width: "13vw",
              borderRadius: "13vw",
            }}
            src={props.avatarUrl}
          ></img>}
            {props.isAvatar === true && isCenter===false && props.isImage === true&&
          <img className="img-fluid"
            style={{
              position: "absolute",
              top: "151px",
              left:left2,
              width: "13vw",
              borderRadius: "13vw",
            }}
            src={props.avatarUrl}
          ></img>}
        
        <div className="card-body">
          {props.cardItems.map((cardItem) => (
            <div>
              <h5 className="card-title">{cardItem.cardTitle}</h5>
              <p className="card-text">{cardItem.cardText}</p>
            </div>
          ))}
          <br />

          {props.showFooter === true && (
            <button type="button" className={btnColor}>
              {props.buttonLabel}
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default RdsCard;
