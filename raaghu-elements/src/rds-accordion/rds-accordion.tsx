import React, { useState } from "react";
import "./rds-accordion.scss";
import "../style.scss";
import { anyTypeAnnotation } from "@babel/types";

export interface RdsAccordionProps {
  buttonGroupItems: any[];
}

const arr: any = [
  { state: false, id: 0 },
  { state: false, id: 1 },
  { state: false, id: 2 },
  { state: false, id: 3 },
  { state: false, id: 4 },
  { state: false, id: 5 },
  { state: false, id: 6 },
  { state: false, id: 7 },
  { state: false, id: 8 },
  { state: false, id: 9 },
  { state: false, id: 10 },
  { state: false, id: 11 },
  { state: false, id: 12 },
  { state: false, id: 13 },
  { state: false, id: 14 },
  { state: false, id: 15 },
  { state: false, id: 16 },
  { state: false, id: 17 },
  { state: false, id: 18 },
  { state: false, id: 19 },
  { state: false, id: 20 },
  { state: false, id: 21 },
  { state: false, id: 22 },
  { state: false, id: 23 },
  { state: false, id: 24 },
  { state: false, id: 25 },
  { state: false, id: 26 },
  { state: false, id: 27 },
  { state: false, id: 28 },
  { state: false, id: 29 },
  { state: false, id: 30 },
];

const RdsAccordion = (props: RdsAccordionProps) => {
  let [selected, setselected] = useState(null);
  let [selectState, setselectState] = useState(arr);

  const onClickhandler = (id: any) => {
    if (selected == id) {
      arr[id].state = !arr[id].state;
      return setselected(null);
    }

    arr[id].state = !arr[id].state;

    return setselected(id);
  };

  return (
    <>
      <div className="accordion accord" id="accordionExample">
        {props.buttonGroupItems.map((buttonGroupItem, i) => (
          <div className="accordion-item itembox itemboxxx ">
            <div
              style={{ cursor: "pointer" }}
              className={`${arr[i].state ? "butn" : " button  collapsed"}`}
              onClick={() => onClickhandler(i)}
            >
              <div className="titlebox">
                <div className={`${arr[i].state ? "titlepr" : " title "}`}>
                  {buttonGroupItem.title}
                </div>
              </div>
              <div className="Arrow">
                <div
                  className={`${
                    arr[i].state
                      ? "Chev Chevronbigbox "
                      : " Chevronbigbox   collapsed"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="7"
                    fill="currentColor"
                    className={`${
                      arr[i].state
                        ? " bi bi-chevron-down chevronbox Dis"
                        : " bi bi-chevron-down chevronbox  "
                    }`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="7"
                    fill="currentColor"
                    className={`${
                      arr[i].state
                        ? " bi bi-chevron-up chevronbox "
                        : " bi bi-chevron-up chevronbox Dis "
                    }`}
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div
              className={`${
                arr[i].state
                  ? "accordion-collapse collapse show"
                  : "accordion-collapse collapse"
              }`}
            >
              <div className="accordion-body accbody">
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
