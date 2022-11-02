import React, { useState } from "react";
import "./rds-accordion.scss";
import "../style.scss";

export interface RdsAccordionProps {
  buttonGroupItems: any[];
}

const RdsAccordion = (props: RdsAccordionProps) => {
  let [openHandler, setOpenhandler] = useState(true);

  const onClickhandler = (e: any) => {
    console.log(e.target.id);
    setOpenhandler(!openHandler);
  };

  let buttonClass = `accordion-button ${
    openHandler === false ? "collapsed" : ""
  }`;
  let divClass = `accordion-collapse collapse ${
    openHandler === true ? "show" : ""
  }`;
  console.log(openHandler);
  console.log(buttonClass);
  console.log(divClass);
  return (
    <>
      <div className="accordion" id="accordionExample">
        {props.buttonGroupItems.map((buttonGroupItem) => (
          <div className="accordion-item" id={buttonGroupItem.id}>
            <h2 className="accordion-header" id={buttonGroupItem.hId}>
              <button
                id={buttonGroupItem.id}
                className={buttonClass}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${buttonGroupItem.bId}`}
                aria-expanded={openHandler}
                aria-controls={buttonGroupItem.bId}
                onClick={onClickhandler}
              >
                {buttonGroupItem.title}
              </button>
            </h2>
            <div
              id={buttonGroupItem.bId}
              className={divClass}
              aria-labelledby={buttonGroupItem.hId}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <h3>Custom</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
   </>

  );
};


export default RdsAccordion;
