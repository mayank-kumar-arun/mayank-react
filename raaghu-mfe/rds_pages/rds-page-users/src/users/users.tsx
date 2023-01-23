import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  RdsCompDatatable,
  RdsCompTenantInformation,
  RdsCompTenantSettings,
  RdsCompUserBasics,
} from "../../../rds-components";
import {
  RdsButton,
  RdsCheckbox,
  RdsNavtabs,
  RdsOffcanvas,
} from "../../../rds-elements";

const Users = () => {
  const tableHeaders = [
    {
      displayName: "User Name",
      key: "userName",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Name",
      key: "name",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Roles",
      key: "roles",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Email Address",
      key: "emaiAddress",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Email Confirm",
      key: "emailConfirm",
      datatype: "badge",
      dataLength: 5,
      required: true,
      sortable: true,
    },
    {
      displayName: "Status",
      key: "status",
      datatype: "badge",
      dataLength: 20,
      required: true,
      sortable: true,
    },
    {
      displayName: "Creation Time",
      key: "creationTime",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
  ];

  const tableData = [
    {
      id: 1,
      userName: "tet04",
      name: "test04",
      roles: "Admin, HR",
      emaiAddress: "test04@yopmail.com",
      emailConfirm: { badgeColorVariant: "primary", content: "Yes" },
      status: { badgeColorVariant: "success", content: "Active" },
      creationTime: "01/04/2023, 09:20:51 AM",
    },
    {
      id: 2,
      userName: "neethu",
      name: "neethu",
      roles: "Admin, Engineer11, HR",
      emaiAddress: "neethu@gmail.com",
      emailConfirm: { badgeColorVariant: "danger", content: "No" },
      status: { badgeColorVariant: "primary", content: "Inactive" },
      creationTime: "12/21/2022, 08:35:26 AM",
    },
    {
      id: 3,
      userName: "nithya",
      name: "nithya1",
      roles: "Admin, HR, Manager, Role211",
      emaiAddress: "nithya.menon@gmaol.com",
      emailConfirm: "Yes",
      status: { badgeColorVariant: "success", content: "Active" },
      creationTime: "12/19/2022, 09:14:44 AM",
    },
    {
      id: 4,
      userName: "009",
      name: "test009",
      roles: "Admin, HR",
      emaiAddress: "009@yopmail.com",
      emailConfirm: "Yes",
      status: { badgeColorVariant: "success", content: "Active" },
      creationTime: "12/15/2022, 06:50:15 AM",
    },
    {
      id: 5,
      userName: "admin",
      name: "admin",
      roles: "Admin",
      emaiAddress: "admin@aspnetzero.com",
      emailConfirm: "Yes",
      status: { badgeColorVariant: "success", content: "Active" },
      creationTime: "12/13/2022, 11:48:03 AM",
    },
  ];

  const actions = [
    { id: "delete", displayName: "Delete" },
    { id: "edit", displayName: "Edit" },
  ];

  const editionList = [
    { option: "Not assigned" },
    { option: "Standard" },
    { option: "apple" },
    { option: "Apple1" },
  ];

  const navtabsItems = [
    { label: "User Information", tablink: "#nav-home", id: 0 },
    { label: "Roles", tablink: "#nav-profile", id: 1 },
    { label: "Organization Units", tablink: "#nav-organization-unit", id: 2 },
  ];

  const offCanvasHandler = () => {};
  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [showTenantSettings, setShowTenantSettings] = useState(false);

  // const exportToExcel = () => {
  //   // create an empty excel workbook
  //   const wb = XLSX.utils.book_new();

  //   // create the headers and data arrays
  //   const headers = tableHeaders.map(header => header.displayName);
  //   const data = tableData.map(row => {
  //     let dataRow = {}
  //     tableHeaders.forEach(header => {
  //       dataRow[header.displayName] = row[header.key]
  //     })
  //     return dataRow
  //   });

  //   // create a worksheet and add the headers and data
  //   const ws = XLSX.utils.json_to_sheet([headers, ...data]);

  //   // add the worksheet to the workbook
  //   XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  //   // write the workbook to a file
  //   XLSX.writeFile(wb, "data.xlsx")
  // }

  const exportToExcel = () => {
    // create an empty excel workbook
    const wb = XLSX.utils.book_new();

    // create the headers and data arrays
    const headers = tableHeaders.map((header) => header.displayName);
    type DataRow = { [key: string]: any };
    const data = tableData.map((row: any) => {
      let dataRow: DataRow = {};
      tableHeaders.forEach((header) => {
        dataRow[header.displayName] = row[header.key];
      });
      return dataRow;
    });

    // create a worksheet and add the headers and data
    const ws = XLSX.utils.json_to_sheet([headers, ...data]);

    // add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // write the workbook to a file
    XLSX.writeFile(wb, "data.xlsx");
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-end mb-3">
          <RdsButton
            type={"button"}
            size="small"
            label="FILTER BY PERMISSION"
            colorVariant="primary"
            isOutline={true}
            class="me-2"
          ></RdsButton>
          <RdsButton
            type={"button"}
            size="small"
            label="EXPORT TO EXCEL"
            onClick={exportToExcel}
            colorVariant="primary"
            isOutline={true}
            class="me-2"
          ></RdsButton>
          <RdsOffcanvas
            canvasTitle={"NEW USER"}
            onclick={offCanvasHandler}
            placement="end"
            offcanvaswidth={830}
            offcanvasbutton={
              <div className="d-flex justify-content-end">
                <RdsButton
                  type={"button"}
                  size="small"
                  label="NEW USER"
                  icon="plus"
                  iconColorVariant="light"
                  iconFill={false}
                  iconStroke={true}
                  iconHeight="15px"
                  iconWidth="15px"
                  colorVariant="primary"
                  class="me-2"
                ></RdsButton>
              </div>
            }
            backDrop={false}
            scrolling={false}
            preventEscapeKey={false}
            offId={"tenant"}
          >
            <RdsNavtabs
              navtabsItems={navtabsItems}
              type="tabs"
              isNextPressed={showTenantSettings}
              activeNavTabId={activeNavTabId}
              activeNavtabOrder={(activeNavTabId) => {
                setActiveNavTabId(activeNavTabId), setShowTenantSettings(false);
              }}
            />
            {activeNavTabId == 0 && showTenantSettings === false && (
              <RdsCompUserBasics></RdsCompUserBasics>
              // <RdsCompTenantInformation
              //   editionList={editionList}
              //   tenantInfo={(showTenantSettings) => {
              //     setShowTenantSettings(showTenantSettings),
              //       setActiveNavTabId(1);
              //   }}
              // />
            )}
            {(activeNavTabId == 1 || showTenantSettings == true) && (
              <div className="tab-content py-4 vh-100 d-flex flex-column justify-content-between">
                <div className="row ps-4">
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"Admin"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"Engineer11"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox label={"HR"} checked={false}></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"Manager"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"Role211"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"test0012"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"test09"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox label={"wef"} checked={false}></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"wefrwf"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <RdsButton
                    label="CANCEL"
                    databsdismiss="offcanvas"
                    type={"button"}
                    size="small"
                    isOutline={true}
                    colorVariant="primary"
                    class="me-2"
                  ></RdsButton>
                  <RdsButton
                    label="SAVE"
                    type={"button"}
                    size="small"
                    isDisabled={true}
                    colorVariant="primary"
                    class="me-2"
                  ></RdsButton>
                </div>
              </div>
            )}
            {(activeNavTabId == 2 || showTenantSettings == true) && <div></div>}
          </RdsOffcanvas>
        </div>
        <div className="col-md-12 mb-3">
          <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
            <RdsCompDatatable
              tableHeaders={tableHeaders}
              tableData={tableData}
              actions={actions}
              tableBordered={false}
              pagination={true}
              recordsPerPage={5}
              recordsPerPageSelectListOption={true}
              onActionSelection={function (
                clickEvent: any,
                tableDataRow: any,
                tableDataRowIndex: number,
                action: {
                  displayName: string;
                  id: string;
                  offId?: string | undefined;
                }
              ): void {
                throw new Error("Function not implemented.");
              }}
            ></RdsCompDatatable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
