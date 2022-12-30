import React, { useState } from "react";
import {
  RdsInput,
  RdsButton,
  RdsRadioButton,
  RdsCounter,
  RdsDropdownList,
} from "../rds-elements";
import './rds-comp-edition-information.scss'
export interface RdsCompEditionInformationProps {
  radioItems: any[];
  sizeDataWithDescription?: any[];
  editionInfo: (next: boolean) => void;
}
const RdsCompEditionInformation = (props: RdsCompEditionInformationProps) => {
  const [values, setValues] = useState({
    editionName: "",
    annualPrice: "",
  });
  const [inputTouched, setInputTouched] = useState({
    editionName: false,
    annualPrice: false
  });
  const [showEditionDropdown,setShowEditionDropdown] = useState(false);
  const inputEmpty = {
    editionName: (values.editionName.trim() === ""),
    annualPrice: (values.annualPrice.trim() === "")
  };
  const inputTouchedAndEmpty = {
    editionName:(inputEmpty.editionName && inputTouched.editionName),
    annualPrice: (inputEmpty.annualPrice && inputTouched.annualPrice)
  }
  const errorMessages = {
    editionName: "Edition name cannot be empty",
    annualPrice: "Annual Price cannot be empty"
  }
  const valuesHandler = (event: any) => {
    const name = event.target.name;
    const val = event.target.value;
    setValues({ ...values, [name]: val });
  };
  const inputTouchedHandler = (event: any) =>{
    const name = event.target.name;
    const val = true;
    setInputTouched({ ...inputTouched, [name]: val });
  }
  const isFormValid = !inputEmpty.editionName && !inputEmpty.annualPrice;
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInputTouched({editionName:true, annualPrice:true});
    if (!isFormValid) return;
    props.editionInfo(true);
    setValues({
      editionName: "",
      annualPrice: "",
    });
  };
  const editionDropdownListItems = [
    {
    label: "Standard",
    val: "en",
    },
    {
      label: "Basic",
      val: "en",
    },
    {
      label: "Premium",
      val: "en",
    },
    {
      label: "Professional",
      val: "en",
    },
]
  return (
    <>
      <div className="py-4">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 my-3">
              <RdsInput
                label="Edition Name"
                redAsteriskPresent={true}
                placeholder="Edition Name"
                inputType="text"
                onChange={valuesHandler}
                onBlur = {inputTouchedHandler}         
                name={"editionName"}
              ></RdsInput>
              {inputTouchedAndEmpty.editionName && <span className="error-msg-color">{errorMessages.editionName}</span>}
            </div>
            <div className="col-md-6 my-3">
              <RdsInput
                label="Annual Price"
                redAsteriskPresent={true}
                placeholder="Annual Price"
                inputType="number"
                onChange={valuesHandler}
                onBlur = {inputTouchedHandler}
                name={"annualPrice"}            
              ></RdsInput>
              {inputTouchedAndEmpty.annualPrice && <span className="error-msg-color">{errorMessages.annualPrice}</span>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 px-2 my-3 ">
              <RdsCounter
                counterValue={0}
                label="Trial Period"
                min={0}
                max={50}
                width={125}
                colorVariant="primary"
              />
            </div>
            <div className=" col-md-6 px-2 my-3">
              <RdsCounter
                counterValue={0}
                label=" Expiry Notification Interval"
                min={0}
                max={50}
                width={125}
                colorVariant="primary"
              />
            </div>
          </div>
          
          {props.radioItems.map((ritem: any, index:any) => (
            <div className="my-3" key={index}>
              <label>{ritem.label}</label>
              <form> 
              <RdsRadioButton displayType = "Horizontal" itemList={ritem.itemList} inline={ritem.inline} id={ritem.id}/>
              </form>
            </div>
          ))}
          {showEditionDropdown && <div className="w-50">

            <RdsDropdownList listItems = {editionDropdownListItems} withBorder = {true} width ="50%"/>
          </div>}
          <div className="my-4 d-flex">
            <RdsButton
              class="me-2"
              tooltipTitle={""}
              type={"button"}
              label="Cancel"
              colorVariant="outline-primary"
              size="small"
              databsdismiss="offcanvas"
            ></RdsButton>
            <RdsButton
              class="me-2"
              label="Next"
              size="small"
              colorVariant="primary"
              tooltipTitle={""}
              type={"submit"}
            ></RdsButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default RdsCompEditionInformation;
