import React, { useState } from "react";
import { RdsButton, RdsInput } from "../rds-elements";

export interface RdsLinkedAccountProps {}

const RdsLinkedAccount = (props: RdsLinkedAccountProps) => {
  const [userData, setUserData] = useState({
    tenancyName: "",
    userName: "",
    password: "",
  });
  const [page, setPage] = useState(false);
  const onClickHandler = () => {
    setPage((prev) => !prev);
  };

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    let name = e.target[0].value;
    setUserData({
      ...userData,
      tenancyName: e.target[0].value,
      userName: e.target[1].value,
      password: e.target[2].value,
    });
  };

  return (
    <>
      {!page && (
        <RdsButton
          type="button"
          icon="plus"
          colorVariant="primary"
          label="LINK NEW ACCOUNT"
          size="small"
          iconColorVariant="light"
          onClick={onClickHandler}
        ></RdsButton>
      )}
      {page && (
        <form onSubmit={(e) => onSubmitHandler(e)}>
          <div>
            <div className="mb-2">
              <RdsInput
                inputType="text"
                label="Tenancy Name"
                placeholder="Tenancy Name"
                redAsteriskPresent={true}
                size="small"
                name="tenancyName"
              ></RdsInput>
            </div>
            <div className="mb-2">
              <RdsInput
                inputType="text"
                label="User Name"
                placeholder="User Name"
                redAsteriskPresent={true}
                size="small"
                name="userName"
              ></RdsInput>
            </div>
            <div className="mb-2">
              <RdsInput
                inputType="password"
                label="Password"
                placeholder="Password"
                redAsteriskPresent={true}
                size="small"
                name="password"
              ></RdsInput>
            </div>
          </div>
          <div
            className="d-flex"
            style={{ position: "absolute", bottom: "5%" }}
          >
            <div className="me-2">
              <RdsButton
                type="button"
                outlineButton={true}
                colorVariant="primary"
                label="CANCEL"
                size="small"
                onClick={onClickHandler}
              ></RdsButton>
            </div>
            <div>
              <RdsButton
                type="submit"
                outlineButton={false}
                colorVariant="primary"
                label="SAVE"
                size="small"
              ></RdsButton>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default RdsLinkedAccount;
