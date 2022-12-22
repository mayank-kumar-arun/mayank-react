import React, { useState } from "react";
import { RdsSelectList, RdsInput, RdsTextArea } from "../rds-elements";

export interface RdsCompInformationProps {
  selectItem: any;
}

const RdsCompInformation = (props: RdsCompInformationProps) => {
  const [email, setEmail] = useState("");

  const [fullname, setFullname] = useState("");

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  const isEmailValid = (email: any) => {
    if (!email || email.length === 0) {
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return false;
    }

    return true;
  };
  const isFullnameValid = (fullname: any) => {
    if (!fullname || fullname.length === 0) {
      return false;
    }
    return true;
  };

  const emailhandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (!isEmailValid(event.target.value)) {
      setError1("Email is invalid");
    } else {
      setError1("");
    }
    setEmail(event.target.value);
  };
  const fullnamehandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    if (!isFullnameValid(event.target.value)) {
      setError2("fullname is invalid");
    } else {
      setError2("");
    }
    setFullname(event.target.value);
  };

  const isFormValid = isFullnameValid(fullname) && isEmailValid(email);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //props.onLogin(email,fullname)
    setEmail("");
    setFullname("");
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row ">
            <div className="mt-1 mb-3 col-6">
              <RdsInput
                label="Property Name"
                redAsteriskPresent={true}
                placeholder="Enter Property Name"
                inputType="text"
                onChange={emailhandleChange}
                value={email}
                name={"Property Name"}
              ></RdsInput>
              {error1 && <span style={{ color: "red" }}>{error1}</span>}
            </div>

            <div className="mt-1 mb-3 col-6">
              <RdsInput
                label="Display Name"
                redAsteriskPresent={true}
                placeholder="Display Name"
                inputType="text"
                onChange={fullnamehandleChange}
                name={"Display Name"}
                value={fullname}
              ></RdsInput>
              {error2 && <span style={{ color: "red" }}>{error2}</span>}
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <RdsSelectList label="--select--" selectItems={props.selectItem}  />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default RdsCompInformation;
