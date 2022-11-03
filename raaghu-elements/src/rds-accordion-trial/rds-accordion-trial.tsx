import React, { useState } from "react";
import { faqs } from "./data";
import "./rds-accordion-trial.scss";

export interface RdsAccordionTrialProps {}

const RdsAccordionTrial = (props: RdsAccordionTrialProps) => {


  const [clicked, setClicked] = useState(false);

 let idd :any;
  const handleToggle = (idx:any) => {
    idd = idx
    console.log("index - "+ idd);
    //console.log("clicked"+clicked);
    // if (clicked == idx) {
    //  return setClicked("0");
    // }
    // setClicked(idx);
    // console.log("clicked"+clicked);
   };
const handler =() =>{
  setClicked(!clicked)
}
let classes = `${clicked ==true? 'card show ' :" card close"}`

  return (
    <>
      <div className="accordion" id="accordionExample">
      <button type="button" className="btn btn-primary" onClick={handler}>Primary</button>
        {/* {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${faq.id}`}>
              <button
                
                type="button"
                // data-bs-toggle="collapse"
                // data-bs-target={`#${faq.id}`}
                // aria-expanded={true}
                // aria-controls={faq.id}
                onClick={()=>{handleToggle(index)}}
                className="accordion-button "
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={faq.id}
              
              className={" " +`${idd ==index? "collapse show": "collapse "}`}
              // accordion-collapse collapse show 
              // aria-labelledby={`heading${faq.id}`}
              // data-bs-parent="#accordionExample"
            >
              <div className="accordion-body " >
                {faq.answer}
              </div>
            </div>
          </div>
        ))} */}

<div className={classes} style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
      </div>
    </>
  );
};

export default RdsAccordionTrial;
