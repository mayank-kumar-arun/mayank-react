import React, { useState } from "react";
import { RdsInput, RdsButton, RdsRadioButton, RdsCounter } from "../rds-elements";
export interface RdsCompEditionFeatureProps {
  radioItems: any[];
  sizeDataWithDescription: any[];
  
}

const RdsCompEditionFeature = (props: RdsCompEditionFeatureProps) => {
  const [editionName, setEditionName] = useState("");
  const [price, setPrice] = useState("");

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const isEditionNameValid = (email: any) => {
    if (!email || email.length === 0) {
      return false;
    }

    return true;
  };
  const isPriceValid = (fullname: any) => {
    if (!fullname || fullname.length === 0) {
      return false;
    }
    return true;
  };
  const namehandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (!isEditionNameValid(event.target.value)) {
      setError1("Email is invalid");
    } else {
      setError1("");
    }
    setEditionName(event.target.value);
  };
  const pricehandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (!isPriceValid(event.target.value)) {
      setError2("fullname is invalid");
    } else {
      setError2("");
    }
    setPrice(event.target.value);
  };
  const isFormValid = isEditionNameValid(editionName) && isPriceValid(price);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //props.onLogin(email,fullname)
    setEditionName("");
    setPrice("");
  };
  return (
    <>
      <div>
        {" "}
        <form onSubmit={handleSubmit}>
          <div className="mt-1 row mb-3">
            <div className="col-6" >
            <RdsInput
              label="Edition Name"
              redAsteriskPresent={true}
              placeholder="Edition Name"
              inputType="text"
              onChange={namehandleChange}
              value={editionName}
              name={"Edition Name"}
            ></RdsInput>
            {error1 && <span style={{ color: "red" }}>{error1}</span>}
             </div>
           
             <div className="col-6" >
            <RdsInput
              label="Annual Price" 
              redAsteriskPresent={true}
              placeholder="Annual Price"
              inputType="number"
              onChange={pricehandleChange}
              name={"Annual Price"}
              value={price}
            ></RdsInput>
            {error2 && <span style={{ color: "red" }}>{error2}</span>}
            </div>
          </div>
      <div className="row "> 
      <div className="col-6 p-2 text-left">
        <RdsCounter  counterValue= {0}
             label ="Trial Period"
            min= {0}
            max= {50}
            width= {125}
           colorVariant= "primary" 
        />

      </div>
        <div className=" col-6 p-2 text-left">
       
         <RdsCounter  counterValue= {0}
             label =" Expiry Notification Interval"
            min= {0}
            max= {50}
            width= {125}
           colorVariant= "primary" 
        />
        </div>
      </div>

          {props.radioItems.map((ritem: any, index:any) => (
            <div className="mb-2 mt-2" key={index}>
              <label>{ritem.label}</label>
              <form> 
              <RdsRadioButton itemList={ritem.itemList} inline={ritem.inline} id={ritem.id}/>
              </form>
            </div>
          ))}

          <div className="row fixed-bottom m-3">
            <div className="col-2">
            <RdsButton
              label="Cancel"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="submit"
              outlineButton={true}
            />
            </div>
            <div className="col-2">
            <RdsButton
              label="Save"
              colorVariant="primary"
              isDisabled={!isFormValid}
              block={true}
              tooltipTitle={""}
              type="submit"
            />
             </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RdsCompEditionFeature;
