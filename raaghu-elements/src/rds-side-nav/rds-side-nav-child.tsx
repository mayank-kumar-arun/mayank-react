import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import RdsIcon from "../rds-icon";
import "./rds-side-nav-new.scss";
import RdsToggle from "../rds-toggle/rds-toggle";

const RdsSideNavChild = ({
  data,
  counter,
  onClickHandler,
  callback,
  toggleTheme,
}: {
  data: any[];
  callback: (data: any) => void;
  toggleTheme?: React.MouseEventHandler<HTMLInputElement>;
  counter: number;
  onClickHandler?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const [count, setCount] = useState(counter);

  const [collapse, setcollapse] = useState(false);

  const onCollapse = () => {
    console.log(collapse);
    callback(!collapse);
    setcollapse(!collapse);
  };

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      {/* list-unstyled mb-0 py-2 px-4 h-100 */}

      <ul
        className={`mb-0 py-2 px-4 h-100 ps-1 ${
          count == 1
            ? "list-unstyled"
            : count == 2
            ? "list-unstyled fw-normal pb-1 small"
            : ""
        }`}
      >
        {data &&
          data.map((item, id) => (
            <Node
              collapse={collapse}
              node={item}
              key={id}
              count={count}
              onClickHandler={onClickHandler}
            ></Node>
          ))}
        <li>
          <div
            className={`sidenav-footer text-center ${collapse ? "w-auto" : ""}`}
          >
            <div className="ms-3">
              <div className="text-center mb-3">
                <RdsIcon
                  name="grid_square"
                  height="23px"
                  width="23px"
                  stroke={true}
                  fill={false}
                  onClick={onCollapse}
                ></RdsIcon>
              </div>
              <div className="darkTheme text-center">
                <a
                  className={` d-inline-flex align-items-center text-decoration-none text-uppercase `}
                >
                  <RdsToggle
                    small={collapse}
                    iconOnUncheck={"sun"}
                    iconOnCheck={"moon"}
                    onClick={toggleTheme}
                  ></RdsToggle>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

RdsSideNavChild.defaultProps = {
  counter: 0,
};

const Node = ({
  node,
  count,
  collapse,
  onClickHandler,
}: {
  node: any;
  count: number;
  collapse: boolean;
  onClickHandler?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  const [childVisibility, setChildVisibility] = useState(false);
  const hasChild = node.children ? true : false;

  return (
    <li style={{ cursor: "pointer" }} className="mb-2">
      {!hasChild && (
        <Link
          to={node.path}
          onClick={onClickHandler}
          className="routingLink d-inline-flex align-items-center text-decoration-none text-uppercase"
        >
          <div className="d-flex">
            <div className="col d-flex align-items-center">
              {count == 1 ? (
                <div>
                  <RdsIcon
                    name={node.icon}
                    fill={false}
                    stroke={true}
                    height="20px"
                    width="20px"
                    classes="me-3"
                  ></RdsIcon>
                </div>
              ) : null}
              <div className="me-3" data-name={node.label}>
                {!collapse && <>{node.label}</>}
              </div>
            </div>
          </div>
        </Link>
      )}

      {hasChild && (
        <div
          className="text-decoration-none text-uppercase d-flex align-items-center"
          onClick={(e) => setChildVisibility((v) => !v)}
        >
          <div className="col d-flex align-items-center">
            {count == 1 ? (
              <div>
                <RdsIcon
                  name={node.icon}
                  fill={false}
                  stroke={true}
                  height="20px"
                  width="20px"
                  classes="me-3"
                ></RdsIcon>
              </div>
            ) : null}
            <div>{!collapse && <>{node.label}</>}</div>
          </div>
          <div className="me-2">
            <RdsIcon
              name="chevron_down"
              fill={false}
              stroke={true}
              height="10px"
              width="10px"
              classes="ms-4 me-3"
            ></RdsIcon>
          </div>
        </div>
      )}

      {hasChild && childVisibility && !collapse && (
        <div>
          <div
            className="collapse pt-2 show"
            style={{ marginLeft: "1rem" }}
            id="menuWithChildren2"
          >
            <RdsSideNavChild
              data={node.children}
              counter={count}
              onClickHandler={onClickHandler}
              callback={function (data: any): void {
                throw new Error("Function not implemented.");
              }}
            ></RdsSideNavChild>
          </div>
        </div>
      )}
    </li>
  );
};

export default RdsSideNavChild;
