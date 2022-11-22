import { useState, useEffect, ReactNode } from "react";
import { Collapse } from "bootstrap";
import React from "react";
import "./rds-collapse.scss";

export interface RdsCollapseProps {
  children: ReactNode;
  buttonList: any[];
  horizontalCollapse: boolean;
  multitoggle: boolean;
}

const RdsCollapse = (props: RdsCollapseProps) => {
  var [toggle, setToggle] = useState(false);

  const toggleElement = (event: any) => {
    var myCollapse = document.getElementById(event.target.name);
    var bsCollapse = new Collapse(myCollapse!, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
    setToggle((toggle) => !toggle);
    console.log(event.target.name);
  };

    // useEffect(() => {
  //   var myCollapse = document.getElementById(props.buttonList[0].id);
  //   var bsCollapse = new Collapse(myCollapse!, { toggle: false });
  //   toggle ? bsCollapse.show() : bsCollapse.hide();
  // });

  // useEffect(() => {
  //   var myCollapse = document.getElementById(props.buttonList[0].id);
  //   var bsCollapse = new Collapse(myCollapse!, { toggle: false });
  //   toggle ? bsCollapse.show() : bsCollapse.hide();
  // });

  let mWidth = props.horizontalCollapse ? "300px" : "";
  let mHeight = props.horizontalCollapse ? "120px" : "";

  return (
    <>
      {!props.multitoggle && (
        <div className="py-2">
          <button
            className={`btn btn-${props.buttonList[0].colorVariant} `}
            name={props.buttonList[0].id}
            onClick={toggleElement}
            // onClick={() => setToggle((toggle) => !toggle)}
          >
            {props.buttonList[0].label}
          </button>
          <div
            className="collapse card fw-normal p-2  card-body mt-1"
            style={{
              width: mWidth,
              minHeight: mHeight,
            }}
            id={props.buttonList[0].id}
          >
            This is the collapsible content! {props.children}
          </div>
        </div>
      )}
      {props.multitoggle && (
        <div className="py-2">
          <button
            className={`btn m-2 btn-${props.buttonList[0].colorVariant} `}
            name={props.buttonList[0].id}
            onClick={toggleElement}
          >
            {props.buttonList[0].label}
          </button>
          <button
            className={`btn m-2 btn-${props.buttonList[0].colorVariant} `}
            name={props.buttonList[1].id}
            onClick={toggleElement}
          >
            {props.buttonList[1].label}
          </button>
          <button
            className={`btn m-2 btn-${props.buttonList[0].colorVariant} `}
            onClick={() => setToggle((toggle) => !toggle)}
          >
            {props.buttonList[2].label}
          </button>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-6">
              <div
                className="collapse fw-normal p-2 card card-body mt-1"
                id={props.buttonList[0].id}
              >
                This is the collapsible content! {props.children}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-6">
              <div
                className="collapse  fw-normal p-2 card card-body mt-1"
                id={props.buttonList[1].id}
              >
                This is the collapsible content! 2 {props.children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RdsCollapse;
