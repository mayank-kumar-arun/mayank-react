import React from "react";
import "./rds-scrollspy.scss";

export interface RdsScrollspyProps {}

const RdsScrollspy = (props: RdsScrollspyProps) => {
  return (
    <div className="col-md-10 col-10 offset-1">
      <div id="scrollspy">
        <nav className="navbar navbar-light px-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a
                className="nav-link text-uppercase"
                target="_self"
                href="#scrollspyHeading1"
              >
                First
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase"
                target="_self"
                href="#scrollspyHeading2"
              >
                Second
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-uppercase"
                target="_self"
                href="#scrollspyHeading3"
              >
                Third
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="pt-4">
      <div id="scrollspyHeading1" className="mb-5">
        <h4>First header</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting
        </p>
        <div className="d-flex justify-content-end">
          <a href="#scrollspy" target="_self" className="m-1">
            Go Top
          </a>
        </div>
      </div>
      <div id="scrollspyHeading2" className="mb-5">
        <h4>First header</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting
        </p>
        <div className="d-flex justify-content-end">
          <a href="#scrollspy" target="_self" className="m-1">
            Go Top
          </a>
        </div>
      </div>
      <div id="scrollspyHeading3" className="mb-5">
        <h4>First header</h4>
        <p>
          This is some placeholder content for the scrollspy page. Note that as
          you scroll down the page, the appropriate navigation link is
          highlighted. It's repeated throughout the component example. We keep
          adding some more example copy here to emphasize the scrolling and
          highlighting
        </p>
        <div className="d-flex justify-content-end">
          <a href="#scrollspy" target="_self" className="m-1">
            Go Top
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RdsScrollspy;
