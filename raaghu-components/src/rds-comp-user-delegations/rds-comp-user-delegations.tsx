import React, { useState } from "react";
import { RdsButton, RdsDatePicker, RdsInput } from "../rds-elements";

export interface RdsUserDelegationsProps {
  onSubmit: (data: any) => void;
  selectuser: any[];
}

const RdsUserDelegations = (props: RdsUserDelegationsProps) => {
  const [userData, setUserData] = useState({
    username: "",
    startdate: "",
    enddate: "",
  });
  const [page, setPage] = useState(false);
  const onClickHandler = () => {
    setPage((prev) => !prev);
  };

  const DatePicker = (start: any, end: any) => {
    setUserData({ ...userData, startdate: start, enddate: end });
  };

  const selecthandler = (e: any) => {
    setUserData({ ...userData, username: e.target.value });
  };

  return (
    <>
      {!page && (
        <RdsButton
          type="button"
          icon="plus"
          iconFill={false}
          iconHeight="12px"
          iconStroke={true}
          iconWidth="12px"
          colorVariant="primary"
          label=" DELEGATE NEW USER"
          size="small"
          iconColorVariant="light"
          onClick={onClickHandler}
        ></RdsButton>
      )}
      {page && (
        <div>
          <div>
            <div className="mb-2">
              <div>
                <select
                  onClick={selecthandler}
                  defaultValue={'DEFAULT'}
                  className="form-select form-select-md"
                >
                  <option disabled value="DEFAULT">
                    Select a User
                  </option>
                  {props.selectuser.map((x, i) => (
                    <option key={x.id}>{x.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <RdsDatePicker
                type="advanced"
                DatePickerLabel={"Select Date Range"}
                onDatePicker={DatePicker}
              ></RdsDatePicker>
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
                onClick={() => props.onSubmit(userData)}
              ></RdsButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RdsUserDelegations;
