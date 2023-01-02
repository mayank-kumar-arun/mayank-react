import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RdsIcon from "../rds-icon";
import "./rds-side-nav-new.scss";

// export interface RdsSideNavNewProps {
//   sideNavItemsNew: any[];
// }

const RdsSideNavChild = ({ data }: { data: any[] }) => {

  // let [count, setCount] = useState(counter | 0);

  // useEffect(()=>{
  //   setCount(prev => prev+1);
    
  // },[])

  return (
    <div>
      <ul className="list-unstyled mb-0 py-2 ps-1">
        {data && data.map((item) => <Node node={item}></Node>)}
      </ul>
    </div>
  );
};

const Node = ({ node }: { node: any }) => {
  const [childVisibility, setChildVisibility] = useState(false);
  const hasChild = node.children ? true : false;
  
  // console.log("First count",counter);

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
          className="text-decoration-none text-uppercase d-flex align-items-center"
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
          <div>
            <RdsIcon
              name="chevron_down"
              fill={false}
              stroke={true}
              height="10px"
              width="10px"
              class="ms-4 me-3"
            ></RdsIcon>
          </div>
        </div>
      )}

      {hasChild && childVisibility && (
        <div>
          <ul>
            <RdsSideNavChild data={node.children} ></RdsSideNavChild>
          </ul>
        </div>
      )}
    </li>
  );
};

export default RdsSideNavChild;
