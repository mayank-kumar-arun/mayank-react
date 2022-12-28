import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RdsIcon from "../rds-icon";
import "./rds-side-nav-new.scss";

// export interface RdsSideNavNewProps {
//   sideNavItemsNew: any[];
// }

const RdsSideNavNew = ({ data }: { data: any[] }) => {
  return (
    <ul className="list-unstyled mb-0 py-2 px-4 h-100">
      {data && data.map((item) => <Node node={item}></Node>)}
    </ul>
  );
};

const Node = ({ node }: { node: any }) => {
  const [childVisibility, setChildVisibility] = useState(false);
  const hasChild = node.children ? true : false;

  return (
    <li style={{ cursor: "pointer" }} className="mb-2">
      {!hasChild && (
          <Link
            to={node.path}
            className="routingLink d-inline-flex align-items-center text-decoration-none text-uppercase"
          >
            <div className="d-flex">
              <div className="col">
                <RdsIcon
                  name={node.icon}
                  fill={false}
                  stroke={true}
                  height="20px"
                  width="20px"
                  class="me-3"
                ></RdsIcon>
                {node.label}
              </div>
            </div>
          </Link>
      )}

      {hasChild && (
        <div
          className="d-flex d-inline-flex align-items-center text-decoration-none text-uppercase"
          onClick={(e) => setChildVisibility((v) => !v)}
        >
          <div className="col">
            <RdsIcon
              name={node.icon}
              fill={false}
              stroke={true}
              height="20px"
              width="20px"
              class="me-3"
            ></RdsIcon>
            {node.label}
          </div>
        </div>
      )}

      {hasChild && childVisibility && (
        <div>
          <ul className="d-flex">
            <RdsSideNavNew data={node.children}></RdsSideNavNew>
          </ul>
        </div>
      )}
    </li>
  );
};

export default RdsSideNavNew;
