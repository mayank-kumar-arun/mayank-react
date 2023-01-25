import React, { ReactNode, useEffect, useState } from "react";
import { EditionCreateDto } from "../../../../libs/public.api";
import {
  RdsCompDatatable,
  RdsCompInformation,
  RdsCompPermissionTree,
  RdsCompDynamicEntityProperty,
  RdsCompAlertPopup,
} from "../../../rds-components";
import {
  RdsIllustration,
  RdsButton,
  RdsAlert,
  RdsOffcanvas,
  RdsNavtabs,
} from "../../../rds-elements";

export interface RdsPageWebhookSubscriptionProps {}

const DynamicProperty = (props: RdsPageWebhookSubscriptionProps) => {
  const [identity, setIdentity] = useState({
    nextId: 0,
    nextEntityId: 0,
    dynamicActionId: 0,
    entityActionId: 0,
  });
  let dPItems: {
    id: number;
    propertyName: string;
    displayName: string;
    inputType: string;
  }[];
  const [activeTab, setActiveTab] = useState("dynamicProps");

  const [dPItem, setDpItem] = useState<typeof dPItems>([]);
  const [entityPItem, setEntityPItem] = useState<any>([]);

  const activeNavtabOrder = (id: any) => {
    setActiveTab(id);
  };

  const dPHeader = [
    {
      displayName: "Property Name",
      key: "propertyName",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Display Name",
      key: "displayName",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Input Type",
      key: "inputType",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Permission",
      key: "permission",
      datatype: "text",
      sortable: true,
    },
  ];
  const entityPItemheader = [
    {
      displayName: "Entity Full Name",
      key: "entityFN",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Dynamic Property",
      key: "dProp",
      datatype: "text",
      sortable: true,
    },
  ];

  const dynamicActions = [
    { id: "edit_offcanvas", displayName: "Edit", offId: "dynamic-edit-off" },
    { id: "delete", displayName: "Delete", modalId: "dynamic_delete_off" },
  ];

  const entityActions = [
    { id: "edit_", displayName: "Edit", offId: "entity-edit-off" },
  ];
  const onActionSelection = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: { displayName: string; id: string }
  ) => {
    setIdentity({ ...identity, dynamicActionId: tableDataRowIndex });
  };
  const onEntityActionSelection = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: { displayName: string; id: string }
  ) => {
    setIdentity({ ...identity, entityActionId: tableDataRowIndex });
  };

  const onselectedEntityItems = (selectedItems: any) => {
    let newTempData: any;
    const str = selectedItems.parameter
      .map((a: any) => `${a.label}`)
      .join(", ");

    newTempData = {
      entityFN: selectedItems.entity,
      dProp: str,
    };

    setEntityPItem((prev: any) => [...prev, newTempData]);
  };
  const onEditedEntityItems = (item: any) => {
    const str = item.parameter.map((a: any) => `${a.label}`).join(", ");

    let updatedList = entityPItem.map((curElem: any) => {
      if (curElem.id === identity.entityActionId) {
        return { ...curElem, entityFN: item.entity, dProp: str };
      }
      return curElem;
    });

    setEntityPItem(updatedList);
  };
  const dummyData = [
    {
      propertyName: "",
      displayName: "",
      inputType: "",
    },
  ];
  const onDynamicProperty = (item: any) => {
    let newTempData: any;
    newTempData = {
      id: identity.nextId,
      propertyName: item.propertyname,
      displayName: item.displayname,
      inputType: item.inputValue,
    };

    setDpItem((prev: any) => [...prev, newTempData]);
    setIdentity({ ...identity, nextId: identity.nextId + 1 });
  };

  const onDynamicEditProperty = (item: any) => {
    let updatedList = dPItem.map((curElem: any) => {
      if (curElem.id === identity.dynamicActionId) {
        return {
          ...curElem,
          propertyName: item.propertyname,
          displayName: item.displayname,
          inputType: item.inputValue,
        };
      }
      return curElem;
    });

    setDpItem(updatedList);
  };

  const onDeleteUnit = () => {
    let tempDynamicData = dPItem.filter(
      (curElem: any) => curElem.id !== identity.dynamicActionId
    );
    setDpItem(tempDynamicData);
  };

  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        {activeTab == "dynamicProps" && (
          <RdsOffcanvas
            backDrop={true}
            preventEscapeKey={true}
            scrolling={false}
            offId="dynamic_offcanvas"
            placement="end"
            canvasTitle="NEW DYNAMIC PROPERTY"
            offcanvaswidth={650}
            offcanvasbutton={
              <RdsButton
              
                type={"button"}
                colorVariant="primary"
                label="NEW DYNAMIC PROPERTY"
                size="small"
                icon='plus'
                iconWidth="13px"
              iconStroke={true}
              iconFill={false}
              iconHeight="13px"
              iconColorVariant="primary"
              />
            }
            children={
              <NewDynamicProperty
                dPItemlist={onDynamicProperty}
                editData={dummyData[0]}
                offId="dynamic_offcanvas"
              ></NewDynamicProperty>
            }
          ></RdsOffcanvas>
        )}
        {activeTab == "dynamicEntityProps" && (
          <RdsOffcanvas
            backDrop={true}
            preventEscapeKey={true}
            scrolling={false}
            offId="entity__offCanvas"
            placement="end"
            canvasTitle="NEW DYNAMIC ENTITY PROPERTY"
            offcanvaswidth={650}
            offcanvasbutton={
              <RdsButton
                type={"button"}
                colorVariant="primary"
                label="NEW DYNAMIC ENTITY PROPERTY"
                size="small"
                icon='plus'
                iconWidth="13px"
                iconStroke={true}
                iconFill={false}
                iconHeight="13px"
                iconColorVariant="primary"
              />
            }
            children={
              <RdsCompDynamicEntityProperty
                offcanvasId="entity__offCanvas"
                parameterList={[
                  {
                    label: "Demo 1",
                  },
                  {
                    label: "Demo 2",
                  },
                  {
                    label: "Demo 3",
                  },
                  {
                    label: "Demo 4",
                  },
                ]}
                entityNames={[
                  { label: "ANZAngular105Demo.Authorization.Users.User" },
                  { label: "ANZAngular105Demo.Authorization" },
                ]}
                onSelectedItems={onselectedEntityItems}
              ></RdsCompDynamicEntityProperty>
            }
          ></RdsOffcanvas>
        )}
      </div>
      <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
       <div >
        <RdsNavtabs
          type="tabs"
          activeNavtabOrder={activeNavtabOrder}
          fill={false}
          navtabsItems={[
            {
              label: "Dynamic Properties",
              tablink: "#nav-dp",
              subText: "Active subtext",
              id: "dynamicProps",
            },
            {
              label: "Dynamic Entity Properties",
              tablink: "#nav-dep",
              id: "dynamicEntityProps",
            },
          ]}
        />
      </div>
      {activeTab == "dynamicProps" && (
        <div className="m-4">
          {dPItem.length == 0 && (
            <div>
              <RdsIllustration
                label="Currently you do not have Dynamic property"
                subLabel="Click on the button above to add."
                colorVariant="light"
              />
            </div>
          )}

          {dPItem.length > 0 && (
            <RdsCompDatatable
              classes="table__userTable"
              tableHeaders={dPHeader}
              tableData={dPItem}
              pagination={true}
              recordsPerPage={5}
              actions={dynamicActions}
              onActionSelection={onActionSelection}
              recordsPerPageSelectListOption={true}
            ></RdsCompDatatable>
          )}
        </div>
      )}

      {activeTab == "dynamicEntityProps" && (
        <div className="m-4">
          {entityPItem.length == 0 && (
            <div>
              <RdsIllustration
                label="Currently you do not have Dynamic Entity property"
                subLabel="Click on the button above to add."
                colorVariant="light"
              />
            </div>
          )}

          {entityPItem.length > 0 && (
            <RdsCompDatatable
            classes="table__userTable"
              tableHeaders={entityPItemheader}
              tableData={entityPItem}
              pagination={true}
              recordsPerPage={5}
              actions={entityActions}
              onActionSelection={onEntityActionSelection}
              recordsPerPageSelectListOption={true}
              ></RdsCompDatatable>
              )}
        </div>
      )}
      {activeTab == "dynamicProps" && dPItem.length != 0 && (
        <RdsOffcanvas
          backDrop={true}
          preventEscapeKey={true}
          scrolling={false}
          offId="dynamic-edit-off"
          placement="end"
          canvasTitle="NEW DYNAMIC PROPERTY"
          offcanvaswidth={650}
          children={
            <NewDynamicProperty
            editData={dPItem[identity.dynamicActionId]}
            dPItemlist={onDynamicEditProperty}
            offId="dynamic-edit-off"
            ></NewDynamicProperty>
          }
          ></RdsOffcanvas>
      )}
      {activeTab == "dynamicEntityProps" && entityPItem.length != 0 && (
        <RdsOffcanvas
        backDrop={true}
        preventEscapeKey={true}
        scrolling={false}
        offId="entity-edit-off"
        placement="end"
          canvasTitle="NEW DYNAMIC ENTITY PROPERTY"
          offcanvaswidth={650}
          children={
            <RdsCompDynamicEntityProperty
              offcanvasId="entity-edit-off"
              parameterList={[
                {
                  label: "Demo 1",
                },
                {
                  label: "Demo 2",
                },
                {
                  label: "Demo 3",
                },
                {
                  label: "Demo 4",
                },
              ]}
              entityNames={[
                { label: "ANZAngular105Demo.Authorization.Users.User" },
                { label: "ANZAngular105Demo.Authorization" },
              ]}
              onSelectedItems={onEditedEntityItems}
              ></RdsCompDynamicEntityProperty>
            }
            ></RdsOffcanvas>
      )}
        <RdsCompAlertPopup
        alertID="dynamic_delete_off"
        onSuccess={onDeleteUnit}
        />
    </div>
    </div>
  );
};

export default DynamicProperty;

export interface dynamicProps {
  dPItemlist?: (item: any) => void;
  editData?: any;
  offId: any;
}
const NewDynamicProperty = (props: dynamicProps) => {
  const [aciveTabID, setActiveTabId] = useState("information");

  const [user, setUser] = useState({
    propertyname: props?.editData.propertyName,
    displayname: props?.editData.displayName,
    inputValue: props?.editData.inputType,
    reset: false,
  });

  const activeNavtabOrder = (id: any) => {
    setActiveTabId(id);
  };

  const isformValid = user.propertyname !== "";
  const onSubmitHandler = (event: any) => {
    event.preventDefault();
    props.dPItemlist != undefined && props.dPItemlist(user);
    setUser({
      ...user,
      propertyname: "",
      displayname: "",
      inputValue: "",
      reset: !user.reset,
    });
  };
  return (
    <>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div>
            <RdsNavtabs
              type="tabs"
              activeNavtabOrder={activeNavtabOrder}
              fill={false}
              navtabsItems={[
                {
                  label: "Information",
                  tablink: "#nav-information",
                  subText: "Active subtext",
                  id: "information",
                },
                {
                  label: "Permission Tree",
                  tablink: "#nav-permisstion",
                  id: "permisstion",
                },
              ]}
            />
          </div>
          {aciveTabID == "information" && (
            <div className="m-4">
              <RdsCompInformation
                informationItemInitial={props.editData}
                inputTypeList={[
                  {
                    label: "SINGLE_LINE_STRING",
                  },
                  {
                    label: "COMBOBOX",
                  },
                  {
                    label: "CHECKBOX",
                  },
                  {
                    label: "MULTISELECTCOMBOBOX",
                  },
                ]}
                onPropertyChange={(event: any) =>
                  setUser({ ...user, propertyname: event.target.value })
                }
                onDisplayChange={(event: any) =>
                  setUser({ ...user, displayname: event.target.value })
                }
                onInputTypeChange={(event: any) =>
                  setUser({ ...user, inputValue: event.target.innerText })
                }
                reset={user.reset}
              />
            </div>
          )}
          {aciveTabID == "permisstion" && (
            <div className="m-4">
              <RdsCompPermissionTree
                familyTree={[
                  {
                    name: "[Test edition scope feature]",
                    id: "testEditionScopeFeature",
                    isSelected: false,
                    isIntermediate: false,
                    disabled: false,
                    parent_id: "",
                    children: [],
                  },
                  {
                    name: "Chat",
                    id: "chat",
                    parent_id: "",
                    isSelected: false,
                    isIntermediate: false,
                    disabled: false,
                    children: [
                      {
                        name: "Chat with host",
                        id: "chatwithhost",
                        parent_id: "chat",
                        isSelected: false,
                        isIntermediate: false,
                        disabled: false,
                        children: [],
                      },
                      {
                        name: "Chat with other tenants",
                        id: "chatwithothertenats",
                        parent_id: "chat",
                        isSelected: false,
                        isIntermediate: false,
                        disabled: false,
                        children: [],
                      },
                    ],
                  },
                  {
                    name: "Maximum user count",
                    id: "maximumUserCount",
                    parent_id: "",
                    isSelected: false,
                    isIntermediate: false,
                    disabled: false,
                    children: [],
                  },
                  {
                    name: "Test check feature",
                    id: "testCheckFeature",
                    parent_id: "",
                    isSelected: false,
                    isIntermediate: false,
                    disabled: false,
                    children: [],
                  },
                  {
                    name: "Test check feature",
                    id: "testCheckFeature",
                    parent_id: "",
                    isSelected: true,
                    isIntermediate: false,
                    disabled: false,
                    children: [],
                  },
                ]}
              />
            </div>
          )}
          <div className=" footer-buttons row m-3 mt-5">
            <div className="col-2">
              <RdsButton
                label="Cancel"
                colorVariant="primary"
                block={true}
                tooltipTitle={""}
                type="button"
                size="small"
                isOutline={true}
                databstoggle="offcanvas"
                databstarget={`#${props.offId}`}
                ariacontrols={props.offId}
              />
            </div>
            <div className="col-2">
              <RdsButton
                label="Save"
                colorVariant="primary"
                isDisabled={!isformValid}
                block={true}
                tooltipTitle={""}
                type="submit"
                size="small"
                databstoggle="offcanvas"
                databstarget={`#${props.offId}`}
                ariacontrols={props.offId}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
