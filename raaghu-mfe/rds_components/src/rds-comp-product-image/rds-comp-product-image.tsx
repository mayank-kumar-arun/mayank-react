import React from "react";
import { RdsLabel, RdsBadge, RdsIcon } from "../rds-elements";
import img from "../Images/product-image.png";
export interface RdsCompProductImageProps {}
const RdsCompProductImage = (props: RdsCompProductImageProps) => {
  return (
    <div
      className="card d-flex align-items-center justify-content-center"
      style={{ width: "666px", height: "980px" }}
    >
      <div>
        <img src={img} alt="product-img" width="370px" height="436px"></img>
        <div style={{ marginTop: "20px" }}>
          <RdsLabel label="Basic Tee" size="28px" bold={true}></RdsLabel>
        </div>
        <div style={{ marginTop: "12px" }}>
          <RdsLabel label="White" color="#626262" size="20px"></RdsLabel>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ marginTop: "28px" }}
        >
          <div>
            <RdsLabel label="$35" size="32px" bold={true}></RdsLabel>
          </div>
          <div className="d-flex align-items-center">
            <div className="mb-1">
              <RdsBadge
                label=" Quality Assured"
                size="small"
                badgeType="pill"
                colorVariant="warning"
                textColor="danger"
                children={
                  <RdsIcon
                    name="featured"
                    colorVariant="danger"
                    height="15px"
                    width="15px"
                    fill={false}
                    stroke={true}
                  ></RdsIcon>
                }
              ></RdsBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RdsCompProductImage;
