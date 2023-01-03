import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RdsIcon from "../rds-icon";
import "./rds-side-nav-new.scss";


const RdsSideNavChild = ({ data, counter }: { data: any[], counter: number }) => {

  let [count, setCount] = useState(counter);

  useEffect(()=>{
    setCount(prev => prev+1);
  },[])

  return (
    <div>
      <ul className={`mb-0 py-2 ps-1 ${count == 1 ? "list-unstyled":count == 2 ?"list-style-disc":""}`} >
        {data && data.map((item) => <Node node={item} count={count}></Node>)}
      </ul>
    </div>
  );
};

RdsSideNavChild.defaultProps = {
  counter: 0
};

const Node = ({ node , count}: { node: any, count: number }) => {
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
              {count == 1 ? (<RdsIcon
                name={node.icon}
                fill={false}
                stroke={true}
                height="20px"
                width="20px"
                class="me-3"
              ></RdsIcon>): null}
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
            {count == 1 ? (<RdsIcon
              name={node.icon}
              fill={false}
              stroke={true}
              height="20px"
              width="20px"
              class="me-3"
            ></RdsIcon>): null}
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
            <RdsSideNavChild data={node.children} counter={count}></RdsSideNavChild>
          </ul>
        </div>
      )}
    </li>
  );
};

export default RdsSideNavChild;

