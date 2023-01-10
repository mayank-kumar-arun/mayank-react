import React, { useEffect, useReducer, useRef, useState } from "react";
import { RdsCompDatatable } from "../../../rds-components";
import "./Auditlogs.scss";
import {
  RdsIllustration,
  RdsButton,
  RdsBadge,
  RdsOffcanvas,
  RdsNavtabs,
  RdsDatePicker,
  RdsCheckbox,
  RdsSelectList,
  RdsInput,
} from "../../../rds-elements";
import { elements } from "chart.js";
import { NULL } from "sass";

export interface RdsPageAuditlogsProps {
  operationLogsHeaders: any;
  listItem1?: any;
  listItem2?: any;
  operationLogs: any[];
  deleteEvent?: (event: React.MouseEventHandler<HTMLDivElement>) => void;
  parameterData?: (event: React.MouseEventHandler<HTMLDivElement>) => void;
  ChangeLogparameterData?: (
    event: React.MouseEventHandler<HTMLDivElement>
  ) => void;
  changeLogs: any;
  changeLogsHeaders: any;
  isShimmer?: boolean;
}

const Auditlogs = (props: RdsPageAuditlogsProps) => {
  const [activeTab, setActiveTab] = useState("operation");
  const [count, setCount] = useState(0);
  const isFirstRun = useRef(true);
  const [isAdvancedFilters, setIsAdvancedFilters] = useState(false);
  const [selectFilterValue, setSelectFilterValue] = useState({
    user: "",
    service: "",
    duration: 0,
    durationConditon: "",
    action: "",
    browser: "",
    usernameC: "",
    id: "data",
    errorStateO: "",
    errorStateC: "",
  });
  const [tableDataRowid, setTableDataRowId] = useState(0);
  const operationActions = [
    { id: "view", displayName: "View", offId: "oparationlogs" },
  ];

  const changeActions = [
    { id: "view", displayName: "View", offId: "changelogs" },
  ];
  const activeNavtabOrder = (id: any) => {
    setActiveTab(id);
  };
  const onActionSelection = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: { displayName: string; id: string }
  ) => {
    setTableDataRowId(tableDataRowIndex);
  };

  const onAdvancedFilteration = (e: any) => {
    setIsAdvancedFilters(!isAdvancedFilters);
  };
  const downloadcsv = () => {
    const keys = Object.keys(OperationFilterData[0]);
    const csvString = OperationFilterData.map((row: any) =>
      keys.map((key) => row[key]).join(",")
    ).join("\n");

    // Create a hidden link element
    const link = document.createElement("a");
    link.style.display = "none";
    link.setAttribute(
      "href",
      "data:text/csv;charset=utf-8," + encodeURIComponent(csvString)
    );
    link.setAttribute("download", "operation_logs.csv");

    // Append the link to the DOM
    document.body.appendChild(link);

    // Click the link to initiate the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  };
  const downloadcsv1 = () => {
    const keys = Object.keys(ChangeFilterData[0]);
    const csvString = ChangeFilterData.map((row: any) =>
      keys.map((key) => row[key]).join(",")
    ).join("\n");

    // Create a hidden link element
    const link = document.createElement("a");
    link.style.display = "none";
    link.setAttribute(
      "href",
      "data:text/csv;charset=utf-8," + encodeURIComponent(csvString)
    );
    link.setAttribute("download", "change_logs.csv");

    // Append the link to the DOM
    document.body.appendChild(link);

    // Click the link to initiate the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  };
  const onDatePicker = () => {};

  const filterByUser = (data: any, user: any) => {
    if (user == "") {
      return props.operationLogs;
    }
    return data.filter((data: any) => data.username == user);
  };
  const filterByService = (data: any, service: any) => {
    if (service == "") {
      return props.operationLogs;
    }
    return data.filter((data: any) => data.service == service);
  };

  const filterByDurationCondition = (
    data: any,
    duration: any,
    durationConditon: any
  ) => {
    let DataTable;
    if (duration == 0) {
      DataTable = props.operationLogs;
    } else {
      if (durationConditon == "Greater than") {
        DataTable = data.filter((item: any) => item.duration >= duration);
      } else {
        DataTable = data.filter((item: any) => item.duration < duration);
      }
    }
    return DataTable;
  };

  const filterByAction = (data: any, action: any) => {
    if (action == "") {
      return props.operationLogs;
    }
    return data.filter((data: any) => data.action == action);
  };

  const filterByBrowser = (data: any, browser: any) => {
    if (browser == "") {
      return props.operationLogs;
    }
    return data.filter((data: any) => data.browser == browser);
  };
  const filterByUserNameforChangeLogs = (data: any, username: any) => {
    if (username == "") {
      return props.changeLogs;
    }
    return data.filter((data: any) => data.username == username);
  };

  const OperationFilterData = (() => {
    return filterByDurationCondition(
      filterByUser(
        filterByAction(
          filterByBrowser(
            filterByService(
              [...props.operationLogs],
              selectFilterValue.service
            ),
            selectFilterValue.browser
          ),
          selectFilterValue.action
        ),
        selectFilterValue.user
      ),
      selectFilterValue.duration,
      selectFilterValue.durationConditon
    );
  })();

  const ChangeFilterData = (() => {
    return filterByUserNameforChangeLogs(
      [...props.changeLogs],
      selectFilterValue.usernameC
    );
  })();

  useEffect(() => {
    setSelectFilterValue({
      ...selectFilterValue,
      duration: 1000000000,
      usernameC: "",
    });
  }, []);

  return (
    <div>
      <div>
        <RdsNavtabs
          type="tabs"
          activeNavtabOrder={activeNavtabOrder}
          fill={false}
          navtabsItems={[
            {
              label: "Operation Logs",
              tablink: "#nav-Operation",
              subText: "Active subtext",
              id: "operation",
            },
            { label: "Change Logs", tablink: "#nav-Change", id: "change" },
          ]}
        />
      </div>
      {activeTab == "operation" && (
        <>
          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex justify-content-between mt-3">
              <div className="ms-1 me-1">
                <RdsDatePicker
                  DatePickerLabel=""
                  onDatePicker={onDatePicker}
                ></RdsDatePicker>
              </div>
              <div className="ms-4 me-1">
                <RdsInput
                  placeholder="User"
                  onKeyDown={(e: any) => {
                    if (e.keyCode == 13) {
                      setSelectFilterValue({
                        ...selectFilterValue,
                        user: e.target.value,
                      });
                    }
                  }}
                ></RdsInput>
              </div>
              <div className="ms-4 mt-1">
                <RdsCheckbox
                  label="Advanced Filters"
                  labelClass="nowwrap-class"
                  onChange={onAdvancedFilteration}
                  checked={isAdvancedFilters}
                />
              </div>
            </div>
            <div className="align-self-center">
              <RdsButton
                type="button"
                label="Export To Excel"
                onClick={downloadcsv}
                outlineButton={true}
                colorVariant="primary"
                tooltipPlacement="top"
                size="small"
                icon="export_data"
                iconHeight="15px"
                iconWidth="15px"
                iconFill={false}
                iconStroke={true}
                iconColorVariant="primary"
              ></RdsButton>
            </div>
          </div>
          {isAdvancedFilters && (
            <div className="mt-3 mb-3 d-flex justify-content-between">
              <div className="me-2">
                {" "}
                <RdsInput
                  placeholder="Service"
                  onKeyDown={(e: any) => {
                    if (e.keyCode == 13) {
                      setSelectFilterValue({
                        ...selectFilterValue,
                        service: e.target.value,
                      });
                    }
                  }}
                ></RdsInput>
              </div>
              <div className="me-2">
                {" "}
                <RdsSelectList
                  onSelectListChange={(e: any) =>
                    setSelectFilterValue({
                      ...selectFilterValue,
                      durationConditon: e.target.value,
                    })
                  }
                  label="Duration Condition"
                  selectItems={[
                    {
                      option: "Greater than",
                    },
                    {
                      option: "less than",
                    },
                  ]}
                />
              </div>
              <div className="me-2">
                {" "}
                <RdsInput
                  placeholder="Duration"
                  onKeyDown={(e: any) => {
                    if (e.keyCode == 13) {
                      setSelectFilterValue({
                        ...selectFilterValue,
                        duration: e.target.value,
                      });
                    }
                  }}
                ></RdsInput>
              </div>

              <div className="me-2">
                {" "}
                <RdsInput
                  placeholder="Action"
                  onKeyDown={(e: any) => {
                    if (e.keyCode == 13) {
                      setSelectFilterValue({
                        ...selectFilterValue,
                        action: e.target.value,
                      });
                    }
                  }}
                ></RdsInput>
              </div>
              <div className="me-2">
                {" "}
                <RdsSelectList
                  onSelectListChange={(e: any) =>
                    setSelectFilterValue({
                      ...selectFilterValue,
                      errorStateO: e.target.value,
                    })
                  }
                  label="Error State"
                  selectItems={[
                    { option: "All" },
                    { option: "Success" },
                    { option: "Has Error" },
                  ]}
                />{" "}
              </div>
              <div className="me-2">
                {" "}
                <RdsSelectList
                  onSelectListChange={(e: any) =>
                    setSelectFilterValue({
                      ...selectFilterValue,
                      browser: e.target.value,
                    })
                  }
                  label="Select browser"
                  selectItems={[
                    {
                      option: "All",
                    },
                    {
                      option: "Chrome",
                    },
                    {
                      option: "Opera",
                    },
                    {
                      option: "Edge",
                    },
                    {
                      option: "Safari",
                    },
                    {
                      option: "UC Browser",
                    },
                  ]}
                />{" "}
              </div>
            </div>
          )}

          {OperationFilterData?.length == 0 && (
            <div>
              <RdsIllustration
                label="Currently you do not have operation log"
                colorVariant="light"
              />
            </div>
          )}

          {OperationFilterData != 0 && (
            <RdsCompDatatable
              classes="table__userTable"
              tableHeaders={props.operationLogsHeaders}
              tableData={OperationFilterData}
              pagination={true}
              recordsPerPage={5}
              onActionSelection={onActionSelection}
              actions={operationActions}
              recordsPerPageSelectListOption={true}
            ></RdsCompDatatable>
          )}
        </>
      )}

      {activeTab == "change" && (
        <>
          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex justify-content-between mt-3">
              <div className="ms-1 me-1">
                <RdsDatePicker
                  DatePickerLabel=""
                  onDatePicker={onDatePicker}
                ></RdsDatePicker>
              </div>
              <div className="ms-4 me-1">
                <RdsInput
                  placeholder="User Name"
                  onKeyDown={(e: any) => {
                    if (e.keyCode == 13) {
                      setSelectFilterValue({
                        ...selectFilterValue,
                        usernameC: e.target.value,
                      });
                    }
                  }}
                ></RdsInput>
              </div>
              <div className="ms-4 mt-1">
                <RdsSelectList
                  onSelectListChange={(e: any) =>
                    setSelectFilterValue({
                      ...selectFilterValue,
                      errorStateC: e.target.value,
                    })
                  }
                  label="Error State"
                  selectItems={[
                    {
                      option: "All",
                    },
                    {
                      option: "Success",
                    },
                    {
                      option: "HasError",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="align-self-center">
              <RdsButton
                type="button"
                label="Export To Excel"
                onClick={downloadcsv1}
                outlineButton={true}
                colorVariant="primary"
                tooltipPlacement="top"
                size="small"
                icon="export_data"
                iconHeight="15px"
                iconWidth="15px"
                iconFill={false}
                iconStroke={true}
                iconColorVariant="primary"
              ></RdsButton>
            </div>
          </div>
          {ChangeFilterData?.length == 0 && (
            <div>
              <RdsIllustration
                label="Currently you do not have change log"
                colorVariant="light"
              />
            </div>
          )}

          {ChangeFilterData != 0 && (
            <RdsCompDatatable
              classes="table__userTable"
              tableHeaders={props.changeLogsHeaders}
              tableData={ChangeFilterData}
              pagination={true}
              recordsPerPage={5}
              onActionSelection={onActionSelection}
              actions={changeActions}
              recordsPerPageSelectListOption={true}
            ></RdsCompDatatable>
          )}
        </>
      )}
      <RdsOffcanvas
        backDrop={true}
        preventEscapeKey={true}
        scrolling={false}
        offId="oparationlogs"
        placement="end"
        canvasTitle="Operation Logs"
        offcanvaswidth={650}
        children={
          <ViewOperationLogsOffCanvas
            selectedRowData={OperationFilterData.filter(
              (item: any) => item.id == (tableDataRowid || 1)
            )}
          ></ViewOperationLogsOffCanvas>
        }
      ></RdsOffcanvas>
      <RdsOffcanvas
        backDrop={true}
        preventEscapeKey={true}
        scrolling={false}
        offId="changelogs"
        placement="end"
        canvasTitle="Change Logs"
        offcanvaswidth={650}
        children={
          <ViewChangeLogsOffCanvas
            selectedRowData={ChangeFilterData.filter(
              (item: any) => item.id == (tableDataRowid || 1)
            )}
          ></ViewChangeLogsOffCanvas>
        }
      ></RdsOffcanvas>
    </div>
  );
};

export default Auditlogs;
const ViewOperationLogsOffCanvas = (selectedRowData: any) => {
  return (
    <>
      <h5>
        <span className="fw-medium">User Information</span>
      </h5>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>UserName : </span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>{selectedRowData.selectedRowData[0]?.username}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>IP Address :</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>{selectedRowData.selectedRowData[0]?.ipAddress}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>Client :</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>{selectedRowData.selectedRowData[0]?.ipAddress}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>Browser :</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>{selectedRowData.selectedRowData[0]?.browserInfo}</span>
          </div>
        </div>
      </div>

      <h5>
        <span className="fw-medium">Account Information</span>
      </h5>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>Service :</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>{selectedRowData.selectedRowData[0]?.service}</span>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>'Time' :</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>{selectedRowData.selectedRowData[0]?.time}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>Duration :</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>{selectedRowData.selectedRowData[0]?.duration}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>Parameters : </span>
          </div>
        </div>
        <div className="col-md-6  ">
          <div
            className="form-group p-2 parameter-bg-color fs-6 mb-3 " //style="overflow-wrap:anywhere ;"
          >
            {selectedRowData.selectedRowData[0]?.parameters}
          </div>
        </div>
      </div>
      <h5>
        <span className="fw-medium">Custom Data </span>
      </h5>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span>None </span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span></span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-3">
            <span className="fw-medium">Error State : </span>
          </div>
          <div className="col-md-6">
            <div className="form-group mb-3">
              <RdsBadge
                size="small"
                label="9" //</div> *ngIf="!selectedRowData.selectedRowData[0].exception" [label]="'success'"
                colorVariant="success"
              ></RdsBadge>
              <RdsBadge
                size="small"
                label="9" //</div> *ngIf="selectedRowData.selectedRowData[0].exception" [label]="'HasError'"
              ></RdsBadge>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ViewChangeLogsOffCanvas = (selectedRowData: any) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="form-group mb-3">
          <span>{selectedRowData.selectedRowData[0]?.action} by:</span>
        </div>
      </div>
      <div className="col-md-6">
        <div className="form-group mb-3">
          <span>{selectedRowData.selectedRowData[0]?.username}</span>
        </div>
      </div>
    </div>
  );
};
