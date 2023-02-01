import React, { useState } from "react";
import RdsCompAlertPopup from "../rds-comp-alert-popup/rds-comp-alert-popup";
import RdsCompDatatable from "../rds-comp-data-table/rds-comp-data-table";
import RdsCompPermissionTree from "../rds-comp-permission-tree/rds-comp-permission-tree";
import {
  RdsAlert,
  RdsBadge,
  RdsBanner,
  RdsButton,
  RdsInput,
  RdsNavtabs,
  RdsOffcanvas,
  RdsSearch,
} from "../rds-elements";
import { useEffect } from "@storybook/addons";
import { setDate } from "date-fns/esm";

export interface RdscompRoleListProps {
  listItems?: any;
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
  actions: any[];
  pagination: boolean;
  permission: any[];
  enablecheckboxselection?: boolean;
  // onActionSelection(arg: any): any;
  onRefresh?: (Event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onSearch?: (Event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onFilterByPermissions?: (id: any) => void;
  onNewRole?: (Event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const RdscompRoleList = (props: RdscompRoleListProps) => {
  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [activeNavTabIdE, setActiveNavTabIdE] = useState(0);
  const [data, setdata] = useState(props.tableData);
  const [name, setname] = useState({
    displayName: "",
    isDefault: false,
    ctime: "",
    id: "",
  });

  const onDeleteHandler = () => {
    let tempData = data.map((element: any) => {
      if (element.id === name.id) {
        return;
      } else {
        return element;
      }
    });

    console.log(tempData);
    setdata(tempData);
  };

  const onNewRole = () => {
    setname({
      displayName: "",
      isDefault: false,
      ctime: "",
      id: "",
    });
  };

  const nameChangeHandler = (e: any) => {
    setname({ ...name, displayName: e.target.value });
  };

  const onActionSelection = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: {
      displayName: string;
      id: string;
      offId?: string;
      modalId?: string;
    }
  ) => {
    setname({
      ...name,
      displayName: tableDataRow.displayName,
      isDefault: tableDataRow.isDefault,
      id: tableDataRow.id,
    });
  };

  const onEditHandler = () => {
    let tempData = data.map((element: any) => {
      if (element.id === name.id) {
        if (name.isDefault) {
          console.log("hellooooo", name.isDefault);
          return {
            ...element,
            displayName: name.displayName,
            role: {
              children: (
                <>
                  {name.displayName}
                  <span className={`ms-1`}>
                    <RdsBadge
                      label={"Default"}
                      colorVariant={"success"}
                    ></RdsBadge>{" "}
                  </span>
                </>
              ),
            },
            isDefault: name.isDefault,
          };
        } else {
          return {
            ...element,
            displayName: name.displayName,
            role: {
              children: <>{name.displayName}</>,
            },
            isDefault: name.isDefault,
          };
        }
      } else {
        return element;
      }
    });

    console.log(tempData);
    setdata(tempData);
  };

  const onSaveHandler = (e: any) => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentTime = date.toLocaleString("en-IN", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    let currentDate = `${day}/${month}/${year}, ${currentTime}`;

    console.log(name);
    setname({
      displayName: name.displayName,
      isDefault: name.isDefault,
      ctime: "",
      id: "",
    });

    if (name.isDefault) {
      setdata([
        ...data,
        {
          id: currentDate,
          displayName: name.displayName,
          isDefault: name.isDefault,
          role: {
            children: (
              <>
                {name.displayName}
                <span className={`ms-1`}>
                  <RdsBadge
                    label={"Default"}
                    colorVariant={"success"}
                  ></RdsBadge>{" "}
                </span>
              </>
            ),
          },
          ctime: currentDate,
        },
      ]);
    } else {
      setdata([
        ...data,
        {
          id: currentDate,
          displayName: name.displayName,
          isDefault: name.isDefault,
          role: {
            children: <>{name.displayName}</>,
          },
          ctime: currentDate,
        },
      ]);
    }
    setname({
      displayName: "",
      isDefault: false,
      ctime: "",
      id: "",
    });
  };

  const onCheckBoxHandler = (e: any) => {
    setname({ ...name, isDefault: e.target.checked });
  };

  return (
    <>
      <div>
        <div className="d-flex justify-content-end btn-sm">
          <div className="d-flex justify-content-end">
            <RdsButton
              class="me-3 rounded-pill btn-icon btn-sm"
              type={"button"}
              tooltip={true}
              tooltipPlacement={"bottom"}
              tooltipTitle={props.listItems[0].value}
              icon={"refresh"}
              iconWidth="20px"
              iconStroke={true}
              iconFill={false}
              iconHeight="20px"
              iconColorVariant="primary"
              colorVariant="primary"
              roundedButton={true}
            ></RdsButton>

            <RdsOffcanvas
              offcanvasbutton={
                <RdsButton
                  onClick={props.onFilterByPermissions}
                  class="me-3 btn-sm"
                  type={"button"}
                  colorVariant="primary"
                  isOutline={true}
                  label="FILTER BY PERMISSIONS"
                />
              }
              placement={"end"}
              backDrop={false}
              scrolling={false}
              preventEscapeKey={false}
              offId={props.listItems[1].key}
              canvasTitle={props.listItems[1].value}
              offcanvaswidth={600}
            >
              <div className="" onClick={props.onSearch}>
                <RdsSearch size="small" placeholder="search role"></RdsSearch>
              </div>
              <div className="mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Default"
                  name="Default"
                  value="Default"
                />
                <label className="ms-2" htmlFor="Default">
                  {" "}
                  Permissions
                </label>
              </div>
              <RdsCompPermissionTree
                familyTree={props.permission}
              ></RdsCompPermissionTree>
            </RdsOffcanvas>

            <RdsOffcanvas
              offcanvasbutton={
                <RdsButton
                  onClick={onNewRole}
                  class="btn-sm"
                  type={"button"}
                  colorVariant="primary"
                  label={props.listItems[2].value}
                  icon={props.listItems[2].icon}
                  iconHeight={props.listItems[2].iconHeight}
                  iconWidth={props.listItems[2].iconWidth}
                  iconColorVariant="light"
                />
              }
              placement={"end"}
              backDrop={false}
              scrolling={false}
              preventEscapeKey={false}
              offId={props.listItems[2].key}
              canvasTitle={props.listItems[2].value}
              offcanvaswidth={550}
            >
              <RdsNavtabs
                navtabsItems={[
                  {
                    label: "Role",
                    tablink: "#nav-home",
                    ariacontrols: "nav-home",
                    subText: "Active subtext",
                    id: 0,
                  },
                  {
                    label: "Permission",
                    tablink: "#nav-profile",
                    ariacontrols: "nav-profile",
                    id: 1,
                  },
                ]}
                type={"tabs"}
                activeNavTabId={activeNavTabId}
                activeNavtabOrder={(activeNavTabId) => {
                  setActiveNavTabId(activeNavTabId);
                }}
              ></RdsNavtabs>
              {activeNavTabId == 0 && (
                <>
                  <div className="mt-4 container">
                    <RdsInput
                      label="Role Name"
                      redAsteriskPresent={true}
                      placeholder={"Role Name"}
                      onChange={nameChangeHandler}
                      value={name.displayName}
                    ></RdsInput>
                    <div className="mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="Default"
                        name="Default"
                        value="Default"
                        checked={name.isDefault}
                        onChange={onCheckBoxHandler}
                      />
                      <label className="ms-2" htmlFor="Default">
                        {" "}
                        Default
                      </label>
                    </div>
                    <label className=" mt-2 text-muted">
                      Assign to new users by default
                    </label>
                  </div>
                </>
              )}
              {activeNavTabId == 1 && (
                <>
                  <div className=" container mt-4">
                    <RdsCompPermissionTree
                      familyTree={props.permission}
                    ></RdsCompPermissionTree>
                  </div>
                </>
              )}

              <div className="" style={{ position: "fixed", bottom: "5%" }}>
                <div></div>
                <RdsAlert
                  alertmessage={
                    "If you are changing your own permissions, you may need to refresh page (F5) to take effect of permission changes on your own screen!"
                  }
                  colorVariant={"primary"}
                ></RdsAlert>

                <div className="d-flex mt-3">
                  <div>
                    <RdsButton
                      class="btn-sm"
                      colorVariant="primary"
                      type={"button"}
                      label="cancel"
                    ></RdsButton>
                  </div>
                  <div className="ms-2">
                    <RdsButton
                      class="btn-sm"
                      colorVariant="primary"
                      type={"button"}
                      label="Save"
                      onClick={onSaveHandler}
                    ></RdsButton>
                  </div>
                </div>
              </div>
            </RdsOffcanvas>
          </div>
        </div>
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <RdsCompDatatable
          tableHeaders={props.tableHeaders}
          actions={props.actions}
          tableData={data}
          classes="table"
          pagination={props.pagination}
          recordsPerPageSelectListOption={true}
          recordsPerPage={5}
          onActionSelection={onActionSelection}
        ></RdsCompDatatable>
        </div>
        <RdsOffcanvas
          placement={"end"}
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
          offId={"Edit"}
          canvasTitle={"Edit"}
          offcanvaswidth={550}
        >
          <RdsNavtabs
            navtabsItems={[
              {
                label: "Role",
                tablink: "#nav-home",
                ariacontrols: "nav-home",
                subText: "Active subtext",
                id: 0,
              },
              {
                label: "Permission",
                tablink: "#nav-profile",
                ariacontrols: "nav-profile",
                id: 1,
              },
            ]}
            type={"tabs"}
            activeNavTabId={activeNavTabIdE}
            activeNavtabOrder={(activeNavTabIdE) => {
              setActiveNavTabIdE(activeNavTabIdE);
            }}
          ></RdsNavtabs>
          {activeNavTabIdE == 0 && (
            <>
              <div className="mt-4 container">
                <RdsInput
                  label="Role Name"
                  redAsteriskPresent={true}
                  placeholder={"Edit Role Name"}
                  onChange={nameChangeHandler}
                  value={name.displayName}
                ></RdsInput>
                <div className="mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="Default"
                    name="Default"
                    onChange={onCheckBoxHandler}
                    checked={name.isDefault}
                  />
                  <label className="ms-2" htmlFor="Default">
                    {" "}
                    Default
                  </label>
                </div>
                <label className=" mt-2 text-muted">
                  Assign to new users by default
                </label>
              </div>
            </>
          )}
          {activeNavTabIdE == 1 && (
            <>
              <div className=" container mt-4">
                <RdsCompPermissionTree
                  familyTree={props.permission}
                ></RdsCompPermissionTree>
              </div>
            </>
          )}
          <div className="" style={{ position: "fixed", bottom: "5%" }}>
            <RdsAlert
              alertmessage={
                "If you are changing your own permissions, you may need to refresh page (F5) to take effect of permission changes on your own screen!"
              }
              colorVariant={"primary"}
            ></RdsAlert>

            <div className="d-flex mt-3">
              <div>
                <RdsButton
                  class="btn-sm"
                  colorVariant="primary"
                  type={"button"}
                  label="cancel"
                ></RdsButton>
              </div>
              <div className="ms-2">
                <RdsButton
                  class="btn-sm"
                  colorVariant="primary"
                  type={"button"}
                  label="Save"
                  onClick={onEditHandler}
                ></RdsButton>
              </div>
            </div>
          </div>
        </RdsOffcanvas>
        <RdsCompAlertPopup alertID="Del" onSuccess={onDeleteHandler} />
      </div>
    </>
  );
};
export default RdscompRoleList;
