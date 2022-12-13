import { MouseEvent, useEffect, useState } from "react";
import RdsCompDatatable from "../rds-comp-data-table/rds-comp-data-table";
import { RdsButton, RdsDatePicker } from "../rds-elements";
import "./rds-comp-login-attempts.scss";

export interface RdsCompLoginAttemptsProps {
  Data: any[];
  tableHeaders: {
    displayName: string;
    key: string;
    datatype: string;
    dataLength?: number | undefined;
    required?: boolean | undefined;
    sortable?: boolean | undefined;
    colWidth?: string | undefined;
    disabled?: boolean | undefined;
    isEndUserEditing?: boolean | undefined;
  }[];
  tableData: {}[];
  selectvalue: { value: string; some: string }[];
  pagination: boolean;
  onActionSelection(arg: any): any;
}

const RdsCompLoginAttempts = (props: RdsCompLoginAttemptsProps) => {
  const [Tdata, setTdata] = useState(props.tableData);

  const DatePicker = (start: any, end: any) => {
    console.log("start", start);
    console.log("end", end);

    let tempData = props.tableData.filter((data: any) => {
      if (data.time > start.toISOString() && data.time < end.toISOString()) {
        return data;
      }
    });
    setTdata(tempData);
    console.log("hello this works", tempData);
  };

  const selecthandler = (event: any) => {
    let tempData = props.tableData.filter((data: any) => {
      if (data.result === event.target.value) {
        return data;
      }
    });
    setTdata(tempData);
  };

  useEffect(() => {}, [Tdata]);
  return (
    <div className="body">
      <div className="define  ">
        <div>
          <RdsDatePicker
            type="advanced"
            DatePickerLabel={"Select Date Range"}
            DatePicker={DatePicker}
          ></RdsDatePicker>
        </div>

        <div className="Select">
          <div>Result</div>
          <div>
            <select
              onClick={selecthandler}
              className="form-select form-select-md"
              aria-label=".form-select-sm example"
              defaultValue="Open this select menu"
            >
              <option value={props.selectvalue[0].value}>
                {props.selectvalue[0].value}
              </option>
              <option value={props.selectvalue[1].value}>
                {props.selectvalue[1].value}
              </option>
              <option value={props.selectvalue[2].value}>
                {props.selectvalue[2].value}
              </option>
              <option value={props.selectvalue[3].value}>
                {props.selectvalue[3].value}
              </option>
              <option value={props.selectvalue[4].value}>
                {props.selectvalue[4].value}
              </option>
              <option value={props.selectvalue[5].value}>
                {props.selectvalue[5].value}
              </option>
              <option value={props.selectvalue[6].value}>
                {props.selectvalue[6].value}
              </option>
              <option value={props.selectvalue[7].value}>
                {props.selectvalue[7].value}
              </option>
              <option value={props.selectvalue[8].value}>
                {props.selectvalue[8].value}
              </option>
              <option value={props.selectvalue[9].value}>
                {props.selectvalue[9].value}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="table">
        <RdsCompDatatable
          tableHeaders={props.tableHeaders}
          // actions={props.actions}
          tableData={Tdata}
          pagination={false}
          onActionSelection={props.onActionSelection}
          onSortSelection={function (arg: {
            sortClickEvent: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>;
            sortOrder: string;
          }): void {
            throw new Error("Function not implemented.");
          }}
          actions={[]}
        ></RdsCompDatatable>
      </div>
    </div>
  );
};

export default RdsCompLoginAttempts;
