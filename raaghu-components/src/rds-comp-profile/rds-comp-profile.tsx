import { useState } from "react";
import { RdsInput, RdsButton, RdsIcon, RdsOffcanvas } from "../rds-elements";
import React from "react";
import "./rds-comp-profile.scss";
import RdsCompLinkedAccount from "../rds-comp-linked-account/rds-comp-linked-account";

export interface RdsCompProfileProps {
  navtabItems: any[];
  profilePic: string;
  userName: string;
  userRole: string;
  onEditProfile?: (Event: React.MouseEvent<HTMLElement>) => void;
  onLogout?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
  currNavTabId?: (id: any) => void;
  // onClose?: (Event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
const RdsCompProfile = (props: RdsCompProfileProps) => {
  const [activetab, setAcivetab] = useState("");
  const profilePic =
    props.profilePic ||
    "https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png";
  const onSetNavTabHandler = (id: any) => {
    setAcivetab(id);
    props.currNavTabId != undefined && props.currNavTabId(id);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="d-inline-block position-relative">
          <img
            src={profilePic}
            alt="profilePic"
            width="130px"
            height="120px"
            className="profil_image_Class"
          ></img>
          <span className="pencilIconClass">
            <RdsIcon
              name="pencil"
              fill={false}
              stroke={true}
              width="18px"
              height="18px"
              colorVariant="dark"
              onClick={props.onEditProfile}
            ></RdsIcon>
          </span>
        </div>
        <p className="fw-bold text-center m-0">{props.userName}</p>
        <p className="mb-3 text-center text-muted ">{props.userRole}</p>
      </div>

      <div className="justify-content-center d-flex   p-2 m-2">
        <div>
          {props.navtabItems.map((item: any, i) => (
            <div key={i}>
              <div
                className={` d-flex mb-4 align-items-baseline gap-1  ${
                  activetab == item.id ? " activeBackgraound" : ""
                }`}
                onClick={() => onSetNavTabHandler(item.id)}
              >
                <span className="me-2">
                  <RdsIcon
                    name={item.icon}
                    colorVariant={activetab == item.id ? "primary" : "dark"}
                    fill={false}
                    stroke={true}
                    width="24px"
                    height="24px"
                  />
                </span>
                <div>
                  <div
                    className={`fw-semibold  ${
                      activetab == item.id ? " text-primary" : ""
                    }`}
                  >
                    {item.label}
                  </div>
                  <p className="text-muted text-break m-0">{item.subText}</p>
                </div>
              </div>
              {/* <RdsOffcanvas
								offId={item.id}
								placement="start"
								offcanvaswidth={400}
								backDrop={false}
								scrolling={false}
								preventEscapeKey={false}
								canvasTitle={""}
								offcanvasbutton={
									
								}
							>
								<RdsCompLinkedAccount></RdsCompLinkedAccount>
							</RdsOffcanvas> */}
            </div>
          ))}
        </div>
      </div>

      <section className="justify-content-center d-flex align-items-center ">
        <RdsButton
          label="Logout"
          colorVariant="primary"
          block={false}
          tooltipTitle={""}
          type="submit"
          isOutline={true}
          onClick={props.onLogout}
        />
      </section>
    </>
  );
};

export default RdsCompProfile;
