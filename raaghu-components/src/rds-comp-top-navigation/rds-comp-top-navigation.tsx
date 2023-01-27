import React, { useState, useEffect } from "react";
import RdsCompLinkedAccount from "../rds-comp-linked-account/rds-comp-linked-account";
import RdsCompProfile from "../rds-comp-profile/rds-comp-profile";
import {
  RdsDropdownList,
  RdsIcon,
  RdsNotification,
  RdsOffcanvas,
  RdsAvatar
} from "../rds-elements";

export interface RdsCompTopNavigationProps {
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  notifications?: any[];
  languageItems: any[];
  navbarTitle?: string;
  navbarSubTitle?: string;
  brandName?: string;
  darkMode?: boolean;
  profileTitle?: string;
  profileName?: string;
  logo?:string, 
  onLogout?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RdsCompTopNavigation = (props: RdsCompTopNavigationProps) => {
  const [LinkAccount, setLinkAccount] = useState(false);

  const navtabItems = [
    {
      label: "Manage Linked Accounts",
      icon: "manage_linked",
      subText: "Manage accounts linked to your account",
      id: "nav-LinkAccount",
    },
    {
      label: "Manage Authority Delegation",
      icon: "manage_authority",
      subText: "Manage authority accounts",
      id: "nav-Deligation",
    },
    {
      label: "Login Attempts",
      icon: "login_attempts",
      subText: "See recent login attempts for your account",
      id: "nav-Attempts",
    },
    {
      label: "My Settings",
      icon: "my_settings",
      subText: "Change your account settings",
      id: "nav-Settings",
    },
    {
      label: "Download Collected Data",
      icon: "download_data",
      subText: "Download data belongs to your account",
      id: "nav-DownLoad",
    },
  ];

  const ChangeId = (e: any) => {
    setLinkAccount(true);
    console.log(LinkAccount);
  };

  return (
    <div>
      <nav
        className={`navbar d-flex justify-content-between p-0 ps-2 pe-3 fixed-top`}
      >
        <div className="d-flex align-items-center">
          <span className="navbar-brand p-0 m-0">
            <img
              className="ms-1"
              src={props?.logo}
              alt="logo"
              width="70"
            ></img>
            <span className="title fw-bold text-lowercase m-2">
              <b>{props.brandName}</b>
            </span>
          </span>
          <div>
            <div className="text-bold fs-6" 
            >
              {props.navbarTitle}
            </div>
            <div
            className="text-muted fs-6"
            >
              {props.navbarSubTitle}
            </div>
          </div>
        </div>
        <div className="d-flex me-2 align-items-center">
          <RdsDropdownList
           placeholder={props.languageItems[0].label}
           icon =  "us"
           iconFill = {false }
           iconStroke ={ true}
            listItems={props.languageItems}
            onClick={props.onClick}
          ></RdsDropdownList>

          <div className="me-3 ms-3 position-relative">
            <a
              data-bs-toggle="dropdown"
              aria-expanded="false"
              role ='button'
              tabIndex={0}
              className ="text-decoration-none"
            >
              <RdsIcon
                name="notification"
                height="20px"
                width="20px"
                fill={false}
                stroke={true}
              ></RdsIcon>
            </a>
            <div
              className="dropdown-menu fab-dropdown border-0 shadow p-0 position-absolute  ">
              <RdsNotification
                notifications={props.notifications!}
                colorVariant="primary"
                footerText="2 days ago"
              ></RdsNotification>
            </div>
          </div>
          <div
            className="me-3 px-3 border-start border-end"
            role ='button'
            tabIndex={0}
          >
            <RdsIcon
              name="gear"
              height="20px"
              width="20px"
              fill={false}
              stroke={true}
              colorVariant={`${props.darkMode ? "light" : ""}`}
            ></RdsIcon>
          </div>

          <RdsOffcanvas
            className="pb-0"
            placement="end"
            offcanvaswidth={374}
            offId="Profile"
            offcanvasbutton={
              <div
                className="d-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                <img className="avatar bg-light avatar-sm rounded rounded-circle mb-0"
                  src="./assets/profile-picture-circle.svg"
                  className="avatar bg-light avatar-sm rounded rounded-circle mb-0"
                ></img>
                <div className="ms-2 fw-bold fs-6">
                  <div>
                    {props.profileTitle}
                  </div>
                  <div
                    className="text-muted"
                  >
                    {props.profileName}
                  </div>
                </div>
                <span className="ms-3">
                  <RdsIcon
                    name="chevron_down"
                    height="12px"
                    width="12px"
                    fill={false}
                    stroke={true}
                  ></RdsIcon>
                </span>
              </div>
            }
            backDrop={true}
            scrolling={false}
            preventEscapeKey={false}
            canvasTitle={""}
          >
            <RdsCompProfile
              navtabItems={navtabItems}
              profilePic={""}
              userName={"Host Admin"}
              userRole={"admin"}
              onLogout={props.onLogout}
            ></RdsCompProfile>
          </RdsOffcanvas>
        </div>
      </nav>
    </div>
  );
};

export default RdsCompTopNavigation;




