import React, { Fragment } from "react";
import "./rds-avatar.scss";

import validator from "validator";

export interface RdsAvatarProps {
  profilePic?: string;
  withProfilePic?: boolean;
  firstName?: string;
  lastName?: string;
  role?: string;
  colorVariant?: string;
  isTitle?: boolean;
  titleAlign?: string;
  size?: "small" | "large" | "medium";
  verticallyAlligned?: boolean;
  roundedAvatar?: boolean;
  roundedPills?: boolean;
  height?: string;
}

const RdsAvatar = (props: RdsAvatarProps) => {
  let FL = props.firstName || "";
  let LL = props.lastName || "";
  let userRole = props.role || "";
  let backcolor = props.colorVariant || "gray";
  let tAlign = props.titleAlign;
  let Title = props.isTitle || false;
  let WPP = props.withProfilePic || false;
  let src = props.profilePic || " ";

  const Align = `${props.hasOwnProperty("titleAlign") ? tAlign : "horizontal"}`;
  const Aligned = `${Align === "horizontal" ? "flex" : "block"}`;
  const validate: boolean = validator.isURL(src);

  const defaultPP =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0m5Cy4lXCbuyG54L0vuo3i5-ALavHe9KmhWA_wDM&s";

  const withPP = `${
    props.hasOwnProperty("profilePic") && validate === true
      ? props.profilePic
      : defaultPP
  }`;

  const hasName =
    (FL.length != 0 && props.hasOwnProperty("firstName") === true) ||
    (LL.length != 0 && props.hasOwnProperty("lastName") === true);

  let fLetter = FL.charAt(0).toUpperCase();
  let lLetter = LL.charAt(0).toUpperCase();
  let rLetter = userRole.charAt(0).toUpperCase();

  let titleFirstName = fLetter + FL.slice(1) + " ";
  let titleLastName = lLetter + LL.slice(1);
  let titleRole = rLetter + userRole.slice(1);
  let imgwidth =
    props.size == "small" ? "32px" : props.size == "large" ? "48px" : "40px";
  let imgheigt = props.height || "48px";
  return (
    <Fragment>
      {" "}
      <div style={{ display: Aligned }}>
        {WPP === false && !hasName && (
          <div className="image flex-grow-0 d-flex align-items-center">
            <img src={defaultPP} width={imgheigt} height={imgheigt} />
          </div>
        )}

        {WPP === false && hasName && (
          <div
            className="image d-flex justify-content-center align-items-center avatar rounded-circle"
            style={{
              backgroundColor: backcolor,
              width: imgwidth,
              height: imgwidth,
            }}
          >
            <span className="letters">
              {fLetter}
              {lLetter}
            </span>
          </div>
        )}
        {WPP === true && (
          <div className="image flex-grow-0 d-flex align-items-center">
            <img src={withPP} width={imgheigt} height={imgheigt} />
          </div>
        )}

        {Title === true && hasName && (
          <div style={{ marginLeft: "10px" }}>
            <span>
              {titleFirstName}
              {titleLastName}{" "}
            </span>
            <br />
            <span>{titleRole}</span>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default RdsAvatar;
