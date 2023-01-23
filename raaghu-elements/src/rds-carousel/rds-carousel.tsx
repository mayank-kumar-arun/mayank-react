import React, { Fragment, useState } from "react";
import "./rds-carousel.scss";
import RdsIcon from "../rds-icon/rds-icon";

export interface RdsCarouselProps {
  role?: string;
  Indicators: boolean;
  crossFade?: boolean;
  controls?: boolean;
  carouselItems: any[];
}

const RdsCarousel = (props: RdsCarouselProps) => {
  const Role = `${props.hasOwnProperty("role") ? props.role : "basic"}`;
  let Fade = props.crossFade || false;

  //let length = props.carouselItems.length - 1;

  return (
    <Fragment>
      {Role == "basic" && (
        <div
          id="carouselExampleCaptions"
          className={
            Fade === true ? "carousel slide carousel-fade" : "carousel slide "
          }
          data-bs-ride="carousel"
        >
          {props.Indicators === true && (
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          )}
          <div className="carousel-inner">
            {props.carouselItems.map((carouselItem) => (
              <div
                className={`carousel-item ${
                  carouselItem.id == 1 ? "active" : ""
                }`}
              >
                <img
                  src={props.carouselItems[carouselItem.id - 1].imgUrl}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
            ))}
          </div>
          {props.controls === true && (
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
          )}
          {props.controls === true && (
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          )}
        </div>
      )}

      {/* {Role == "advanced" && (
        <div
          id="carouselExampleCaptions"
          className={
            Fade === true ? "carousel slide carousel-fade" : "carousel slide "
          }
          data-bs-ride="false"
        >
          {props.Indicators === true && (
            <div className="carousel-indicators">
               {props.carouselItems.map((carouselItem) => (
                <button
                tabIndex={0}
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to={carouselItem.id - 1}
                  className={carouselItem.id == 1 ? "active" : ""}
                  aria-current={carouselItem.id == 1 ? true : false}
                  aria-label="Slide"
                ></button>
              ))}
            </div>
          )}
          <div className="carousel-inner">
            {props.carouselItems.map((carouselItem) => (
              <div
                className={`carousel-item ${
                  carouselItem.id == 1 ? "active" : ""
                }`}
              >
                <div className="content">
                  <span>
                  <RdsIcon name="quote" height="20px" width="20px" fill={false} stroke={true} ></RdsIcon>
                  <img
                    src={props.carouselItems[carouselItem.id - 1].imgUrl}
                    width="100"
                    height="100"
                    className="justify-self-center rounded-circle m-2"
                    alt="..."
                  />
                   <RdsIcon name="quote_right" height="20px" width="20px" fill={false} stroke={true}></RdsIcon>
                   </span>
                  <br/>
                  <h1>{props.carouselItems[carouselItem.id - 1].name}</h1>
                  <h6>{props.carouselItems[carouselItem.id - 1].roleName} </h6>
                  <br/>
                  <p className="subtitle">{props.carouselItems[carouselItem.id - 1].subTitle}</p>
                  <br/>
                </div>
              </div>
            ))}
          </div>
          {props.controls === true && (
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
          )}
          {props.controls === true && (
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          )}
        </div>
      )} */}
    </Fragment>
  );
};
export default RdsCarousel;
// @import "../style.scss";

// .prev-icon {
//   background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
//  }

//  .next-icon {
//    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
//  }
//  .prev-icon, .next-icon {
//   width: 1.5rem !important;
//   height: 1.2rem !important;

// }

// .iconImage{
//   height: 100px;
//   width: 100px;
//   border-radius: 50px;
//   justify-self: center;
//   margin: 10px;
// }
// .indicators [data-bs-target] {

//   background-color: #6d6d6d !important;

// }
// .content{
//   display: grid;
//   justify-content: center;
//   text-align: center;
// }
// .subtitle{
//   margin-left: 4rem;
//   margin-right: 4rem;
// }
