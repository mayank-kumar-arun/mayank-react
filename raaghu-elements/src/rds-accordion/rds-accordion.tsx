import React, { useState } from "react";
import "./rds-accordion.scss";
import "../style.scss";
import { anyTypeAnnotation } from "@babel/types";
import { colors } from "../../libs/types";

export interface RdsAccordionProps {
  buttonGroupItems: any[];
  colorVariant: colors;
  size: string;
  outline: boolean;
  select?: any;
  onclick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const RdsAccordion = (props: RdsAccordionProps) => {
  let [selected, setselected] = useState(props.select);

  const onClickhandler = (id: any) => {
    if (selected == id) {
      props.buttonGroupItems[id].state = !props.buttonGroupItems[id].state;
      return setselected(null);
    } else {
      props.buttonGroupItems[id].state = !props.buttonGroupItems[id].state;
      return setselected(id);
    }
  };

  return (
    <>
      <div className="accordion accord" id="accordionExample">
        {props.buttonGroupItems.map((buttonGroupItem, i) => (
          <div key={i} className="accordion-item itembox itemboxxx ">
            <div
              style={{ cursor: "pointer" }}
              className={`${
                props.buttonGroupItems[i].state ? "butn" : " button  collapsed"
              }`}
              onMouseDown={() => {
                onClickhandler(i);
              }}
              onClick={props.onclick}
            >
              <div className="titlebox">
                <div
                  className={`  title  text-${
                    props.buttonGroupItems[i].state
                      ? props.colorVariant
                      : "dark"
                  }`}
                >
                  {buttonGroupItem.title}
                </div>
              </div>
              <div className="Arrow">
                <div
                  className={`  Chevronbigbox ${
                    props.outline
                      ? ` border border-${props.colorVariant}`
                      : `bg-${props.colorVariant}`
                  }  ${props.buttonGroupItems[i].state ? "Chev" : "collapsed"}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="7"
                    fill="currentColor"
                    className={`  bi bi-chevron-down chevronbox ${
                      props.buttonGroupItems[i].state ? "Dis" : ""
                    }`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      className={`  ${
                        props.outline
                          ? `text-${props.colorVariant}`
                          : "text-white"
                      }`}
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="7"
                    fill="currentColor"
                    className={` bi bi-chevron-up chevronbox  ${
                      props.buttonGroupItems[i].state ? "" : "Dis"
                    }`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      className={`${
                        props.outline
                          ? `text-${props.colorVariant}`
                          : "text-white"
                      }`}
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div
              className={` accordion-collapse collapse ${
                props.buttonGroupItems[i].state ? "show" : ""
              }`}
            >
              <div className="accordion-body accbody">
                <h3>{buttonGroupItem.Bodyheading}</h3>
                <div>{buttonGroupItem.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RdsAccordion;
