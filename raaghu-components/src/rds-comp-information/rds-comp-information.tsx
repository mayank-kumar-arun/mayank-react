import React, { useEffect, useState } from "react";
import { RdsSelectList, RdsInput, RdsTextArea } from "../rds-elements";

export interface RdsCompInformationProps {
  inputTypeList: any;
  informationItem?: (item: any) => void;
}

const RdsCompInformation = (props: RdsCompInformationProps) => {

  const [user, setUser] = useState({
    propertyname:"",
    displayname:"" ,
    inputValue:props.inputTypeList[0].option
  });

  const [error, setError] = useState({
    propertyname:"",
    displayname:"" ,
  });
  
  const isPropertyValid = (propertyname: any) => {
    if (!propertyname || propertyname.length === 0) {
      return false;
    }
    return true;
  };
  const isDisplaynameValid = (displayname: any) => {
    if (!displayname || displayname.length === 0) {
      return false;
    }
    return true;
  };

  const propertyhandleChange = (event:any) => {
    if (!isPropertyValid(event.target.value)) {
      setError({...error,propertyname:"Property Name is invalid"});
    } else {
      setError({...error,propertyname:""});
    }
    setUser({ ...user, propertyname:event.target.value});
  };
  const displayhandleChange = (event:any) => {
    if (!isDisplaynameValid(event.target.value)) {
      setError({...error,displayname:"Display Name is invalid"});
    } else {
      setError({...error,displayname:""});
    }
    setUser({...user,displayname:event.target.value});
  };

  const isFormValid = isPropertyValid(user.propertyname) && isDisplaynameValid(user.displayname);

  useEffect(()=>{
    isFormValid && props.informationItem != undefined && props.informationItem(user);
    console.log("userInformation : ", user)
  })
  return (
    <>
      <div>
      
          <div className="row ">
            <div className="mt-1 mb-3 col-6">
              <RdsInput
                label="Property Name"
                redAsteriskPresent={true}
                placeholder="Enter Property Name"
                inputType="text"
                onChange={propertyhandleChange}
                value={user.propertyname}
                name={"Property Name"}
              ></RdsInput>
              {error.propertyname && <span style={{ color: "red" }}>{error.propertyname}</span>}
            </div>

            <div className="mt-1 mb-3 col-6">
              <RdsInput
                label="Display Name"
                redAsteriskPresent={true}
                placeholder="Display Name"
                inputType="text"
                onChange={displayhandleChange}
                name={"Display Name"}
                value={user.displayname}
              ></RdsInput>
              {error.displayname && <span style={{ color: "red" }}>{error.displayname}</span>}
            </div>
          </div>

          <div className="row">
            <div className="col-6 mt-1 mb-3">
              <label className="mb-2">Input Type</label>
              <RdsSelectList label="Input Type"   onSelectListChange={(e: any) =>
                    setUser({
                      ...user,
                      inputValue: e.target.value,
                    })}
                     selectItems={props.inputTypeList}  />
            </div>
          </div>
       
      </div>
    </>
  );
};
export default RdsCompInformation;
