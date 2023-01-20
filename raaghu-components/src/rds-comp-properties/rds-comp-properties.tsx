import React, { useState } from "react";
import RdsCompDatatable from "../rds-comp-data-table/rds-comp-data-table";
import { RdsLabel, RdsInput, RdsButton } from "../rds-elements";

export interface RdsCompPropertiesProp {
  propertyData: any[];
  propertyHeaders: {
    displayName: string;
    key: string;
    datatype: string;
    dataLength?: number;
    required?: boolean;
    sortable?: boolean;
    colWidth?: string;
    disabled?: boolean;
    isEndUserEditing?: boolean;
  }[];
  onActionSelection(arg: any): void;
}

const RdsCompProperties = (props: RdsCompPropertiesProp) => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  const isHeaderKeyValid = (headerKey: any) => {
    if (!headerKey || headerKey.length === 0) {
      return false;
    }
    return true;
  };
  const isHeaderValueValid = (headerValue: any) => {
    if (!headerValue || headerValue.length === 0) {
      return false;
    }
    return true;
  };

  const headerKeyhandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setKey(event.target.value);
  };
  const headerValuehandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValue(event.target.value);
  };

  //****************handle Submit********************
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setKey("");
    setValue("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <RdsCompDatatable
          tableHeaders={props.propertyHeaders}
          tableData={props.propertyData}
          pagination={false}
          onActionSelection={props.onActionSelection}
        ></RdsCompDatatable>

        <div className=" fw-normal row" mb-3 mt-2>
          <div className="col-md-5 col-sm-12mb-3">
            <RdsInput
            label="Key"
              placeholder="Enter a key"
              inputType="text"
              onChange={headerKeyhandleChange}
              name={"Key"}
              value={key}
            ></RdsInput>
          </div>
          <div className="col-md-5 col-sm-12 mb-3">
            <RdsInput
            label="Value"
              placeholder="Enter a value"
              inputType="text"
              onChange={headerValuehandleChange}
              name={"value"}
              value={value}
            ></RdsInput>
          </div>
          <div className="col-2 mb-3 align-self-end">
            <RdsButton
              label="ADD"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="submit"
            />
          </div>
        </div>
        <div className="row mt-5 mb-3">
          <div className="col-2">
            <RdsButton
              label="Cancel"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="button"
              isOutline={true}
            />
          </div>
          <div className="col-2">
            <RdsButton
              label="Save"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default RdsCompProperties;
