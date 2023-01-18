import React, { useState } from "react";
import "./rds-accordion.scss";
import "../style.scss";

export interface RdsAccordionItemProps {
  title: string;
  children: React.ReactNode;
  id: any;
}

const RdsAccordionItem = (props: RdsAccordionItemProps) => {
  return (
    <>
      <div title={props.title}>
        <div className="accordion-item">
          <h2 className="accordion-header" id={`heading${props.id}`}>
            <button
              type="button"
              data-bs-toggle="collapse"
              className="accordion-button collapsed"
              data-bs-target={`#collapse${props.id}`}
              aria-expanded="false"
              aria-controls={`collapse${props.id}`}
            >
              {props.title}
            </button>
          </h2>
          <div
            className="accordion-collapse collapse"
            id={`collapse${props.id}`}
            data-bs-parent="#accordionBasic"
            aria-labelledby={`heading${props.id}`}
          >
            <div className="accordion-body">{props.children}</div>
          </div>
        </div>
      </div>

      {/* <div className="accordion-item ">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapseTwo${props.id}`}
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            {props.title}
          </button>
        </h2>
        <div
          id={`collapseTwo${props.id}`}
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">{props.children}</div>
        </div>
      </div> */}
      {/* </div> */}
    </>
  );
};

export default RdsAccordionItem;
