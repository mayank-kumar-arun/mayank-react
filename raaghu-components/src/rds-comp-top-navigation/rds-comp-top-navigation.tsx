import React, { useState, useEffect } from "react";
import RdsCompLinkedAccount from "../rds-comp-linked-account/rds-comp-linked-account";
import RdsCompProfile from "../rds-comp-profile/rds-comp-profile";
import { Link } from "react-router-dom";
import {
  RdsDropdownList,
  RdsIcon,
  RdsNotification,
  RdsOffcanvas,
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
  };

  return (
    <div>
      <nav className={`navbar p-0 fixed-top`}>
        <div className="container-fluid mobile-fluid">
          <div className="d-flex align-items-center">
            <span className="navbar-brand p-0 m-0">
              <Link
                to="/dashboard"
                className="raaghu_icon routerLinkActive-iconname d-flex align-items-center"
              >
                <img
                  className="image"
                  src="./assets/raaghu_icon.png"
                  alt="logo"
                  width="70"
                ></img>
                <span className="title fw-bold text-lowercase ms-1 pt-1">
                  <b>{props.brandName}</b>
                </span>
              </Link>
            </span>
            <div className="py-0 m-0 breadcrumbs">
              <div>
                <a className="nav-link active p-0">{props.navbarTitle}</a>
              </div>
              <div className="mob-description">
                <a className="nav-link text-muted p-0 fs-6">
                  {props.navbarSubTitle}
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div
              id="navbarSupportedContent1"
              className="ps-5 ms-4 py-0 m-0 d-flex align-items-center"
            >
              <div className="me-2">
                <RdsDropdownList
                  displayIconRoundedCorner={true}
                  listItems={props.languageItems}
                  withBorder={false}
                  darkVariant={props.darkMode}
                  onClick={props.onClick}
                ></RdsDropdownList>
              </div>
              <ul className="navbar-nav d-flex flex-row align-items-center ms-auto">
                <li className="nav-item dropdown pe-3 ps-2 me-1">
                  <a data-bs-toggle="dropdown" aria-expanded="false">
                    <RdsIcon
                      name="notification"
                      height="20px"
                      width="20px"
                      fill={false}
                      stroke={true}
                    ></RdsIcon>
                  </a>
                  <div className="dropdown-menu fab-dropdown border-0 shadow p-0 position-absolute">
                    <RdsNotification
                      notifications={props.notifications!}
                      colorVariant="primary"
                      footerText="2 days ago"
                    ></RdsNotification>
                  </div>
                </li>
                <li>
                  <a className="me-3 px-3 setting border-start border-end">
                    <RdsIcon
                      name="gear"
                      height="20px"
                      width="20px"
                      fill={false}
                      stroke={true}
                    ></RdsIcon>
                  </a>
                </li>
              </ul>
            </div>
            <div className="d-flex me-2 align-items-center">
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
                    <img
                      src="./assets/profile-picture-circle.svg"
                      className="avatar bg-light avatar-sm rounded rounded-circle mb-0"
                    ></img>
                    <div className="ms-2">
                      <div>{props.profileTitle}</div>
                      <div className="text-muted">{props.profileName}</div>
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default RdsCompTopNavigation;
