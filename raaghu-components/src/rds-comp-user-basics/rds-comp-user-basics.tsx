import { E } from "chart.js/dist/chunks/helpers.core";
import React, { FormEventHandler, useState, useRef } from "react";
import { RdsButton, RdsCheckbox, RdsInput } from "../rds-elements";
import img from "./edit-profile.png";

export interface RdsCompUserBasicsProps {}

const RdsCompUserBasics = (props: RdsCompUserBasicsProps) => {
  const [values, setValues] = useState({
    name: "",
    surName: "",
    email: "",
    phone: "",
    userName: "",
    password: "",
    cnfPassword: "",
  });

  const [records, setRecords] = useState({});

  let name, val;
  const handleChange = (event: any) => {
    name = event.target.name;
    val = event.target.value;
    setValues({ ...values, [name]: val });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let newRecord = { ...values, id: new Date().getTime().toString() };
    setRecords({ ...values, id: new Date().getTime().toString() });
    setValues({
      name: "",
      surName: "",
      email: "",
      phone: "",
      userName: "",
      password: "",
      cnfPassword: "",
    });
  };
  const inputFile: any = useRef(null);
  const profilePicHandler = () => {
    inputFile.current.click();
  };
  return (
    <>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
      />
      <form className="p-2" onSubmit={handleSubmit}>
        <div className="row align-items-center">
          <div className="col-lg-3 col-md-3 text-center mb-2">
            <img src={img} alt="Profile Pic" onClick={profilePicHandler}></img>
          </div>
          <div className="col-lg-9 col-md-9">
            <div className="mb-3">
              <RdsInput
                value={values.name}
                placeholder="Enter Name"
                inputType="text"
                label="Name"
                name="name"
                size="small"
                redAsteriskPresent={true}
                onChange={handleChange}
              ></RdsInput>
            </div>
            <div>
              <RdsInput
                value={values.surName}
                placeholder="Smith"
                inputType="text"
                label="Surname"
                name="surName"
                size="small"
                redAsteriskPresent={true}
                onChange={handleChange}
              ></RdsInput>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-lg-12 col-md-12">
            <div className="mb-2">
              <RdsInput
                value={values.email}
                placeholder="Carolyncarpenter@gmail.com"
                inputType="email"
                label="Email Address"
                name="email"
                size="small"
                redAsteriskPresent={true}
                onChange={handleChange}
              ></RdsInput>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-lg-6 col-md-6">
            <div className="mb-2">
              <RdsInput
                value={values.phone}
                placeholder="Carolyncarpenter@gmail.com"
                inputType="number"
                label="Phone Number"
                name="phone"
                size="small"
                redAsteriskPresent={true}
                onChange={handleChange}
              ></RdsInput>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="mb-2">
              <RdsInput
                value={values.userName}
                placeholder="Carolyncarpenter"
                inputType="text"
                label="User Name"
                name="userName"
                size="small"
                redAsteriskPresent={true}
                onChange={handleChange}
              ></RdsInput>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-lg-6 col-md-6">
            <div className="mb-2">
              <RdsInput
                value={values.password}
                placeholder="**********"
                inputType="password"
                label="Password"
                name="password"
                redAsteriskPresent={true}
                size="small"
                onChange={handleChange}
              ></RdsInput>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="mb-2">
              <RdsInput
                value={values.cnfPassword}
                placeholder="**********"
                inputType="password"
                label="Confirm Password"
                name="cnfPassword"
                redAsteriskPresent={true}
                size="small"
                onChange={handleChange}
              ></RdsInput>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="mb-2 text-muted">
            <RdsCheckbox
              id="0"
              label="Set Random Password"
              checked={false}
            ></RdsCheckbox>
          </div>
          <div className="mb-2 text-muted">
            <RdsCheckbox
              id="1"
              label="Should Change Password On Next Login"
              checked={false}
            ></RdsCheckbox>
          </div>
          <div className="mb-2 text-muted">
            <RdsCheckbox
              id="2"
              label="Send Activation Email"
              checked={false}
            ></RdsCheckbox>
          </div>
          <div className="mb-2 text-muted">
            <RdsCheckbox label="Active" id="3" checked={false}></RdsCheckbox>
          </div>
          <div className="mb-2 text-muted">
            <RdsCheckbox
              label="Lockout Enabled"
              id="4"
              checked={false}
            ></RdsCheckbox>
          </div>
        </div>
        <div className="mt-3 d-flex">
          <RdsButton
            class="me-2"
            label="CANCEL"
            type="button"
            outlineButton={true}
            colorVariant="primary"
            size="small"
          ></RdsButton>
          <RdsButton
            class="me-2"
            label="SAVE"
            type="submit"
            outlineButton={false}
            colorVariant="primary"
            onClick={handleSubmit}
            size="small"
          ></RdsButton>
        </div>
      </form>
    </>
  );
};

export default RdsCompUserBasics;
