import React from "react";
import "./rds-side-nav.scss";
import RdsIcon from "../rds-icon/rds-icon";
import DarkMode from "./DarkMode";

export interface RdsSideNavProps {
  sidenavItems: any[];
}

const RdsSideNav = (props: RdsSideNavProps) => {
  return (
    <nav id="sidebar" className="bd-links min-vh-100 pt-2 position-relative">
      <ul className="sidebarList list-unstyled mb-0 py-2 px-4 h-100">
        {props.sidenavItems.map((sidenavItem, key) => (
          <li
            key={key}
            onClick={() => {
              window.location.pathname = sidenavItem.path;
            }}
            className="listRow mb-2"
          >
            <a className="list d-inline-flex align-items-center text-decoration-none text-uppercase">
              <div className="pe-3">
                <RdsIcon
                  name={sidenavItem.icon}
                  height="20px"
                  width="20px"
                  fill={false}
                  stroke={true}
                />
              </div>
              <div>{sidenavItem.label}</div>
            </a>
          </li>
        ))}
        {/* <li className=" dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Link
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li> */}
        <li className="listRow fixed-bottom mb-2 darkTheme">
        <a className="list d-inline-flex align-items-center text-decoration-none text-uppercase">
            {/* <div>☀  Light</div>
            <div>☾ &nbsp; Dark</div> */}
          <DarkMode></DarkMode>
        </a>
        </li>
        {/* <li>
          <div className="sidenav-footer">
            <div className="btn-container d-flex justify-content-center">
              <i aria-hidden="true" className="fa fa-sun-o"></i>
              <label className="switch btn-color-mode-switch border-0">
                <input
                  type="checkbox"
                  name="color_mode"
                  id="flexSwitchCheckDefault"
                  value="1"
                />
                <label
                  htmlFor="color_mode"
                  data-on="☾ &nbsp; Dark"
                  data-off="☀  Light"
                  className="btn-color-mode-switch-inner border-0"
                ></label>
              </label>
              <i aria-hidden="true" className="fa fa-moon-o"></i>
            </div>
          </div>
        </li> */}
      </ul>
    </nav>
  );
};

export default RdsSideNav;
