import React, { useState } from "react";
import {
  RdsCompEditionList,
  RdsCompEditionInformation,
  RdsCompPermissionTree,
} from "../../../rds-components";
import { RdsButton, RdsOffcanvas, RdsNavtabs } from "../../../rds-elements";
interface RdsPageEditionProps {}
const Edition = (props: RdsPageEditionProps) => {
  const tableHeaders = [
    {
      displayName: "Edition Name",
      key: "editionName",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Price ($)",
      key: "price",
      datatype: "number",
      sortable: true,
    },
    {
      displayName: "Trial Period(Day(s))",
      key: "trialPeriod",
      datatype: "number",
    },
    {
      displayName: "Expiring Edition",
      key: "expiringEdition",
      datatype: "text",
    },
  ];
  const tableData = [
    { id: 1, editionName: "Standard" },
    {
      id: 2,
      editionName: "apple",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 3,
      editionName: "tesla",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 4, editionName: "google", price: 1200, trialPeriod: 2 },
    { id: 5, editionName: "Standard" },
    {
      id: 6,
      editionName: "amazon",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 7,
      editionName: "bing",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 8, editionName: "stack", price: 1200, trialPeriod: 2 },
    { id: 9, editionName: "slack" },
    {
      id: 10,
      editionName: "disc",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 11,
      editionName: "HD",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 12, editionName: "dell", price: 1200, trialPeriod: 2 },
    { id: 13, editionName: "logi" },
    {
      id: 14,
      editionName: "mcdonald",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 15,
      editionName: "perl",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 16, editionName: "proton", price: 1200, trialPeriod: 2 },
    { id: 17, editionName: "express" },
    {
      id: 18,
      editionName: "nord",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 19,
      editionName: "mern",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 20, editionName: "ruby", price: 1200, trialPeriod: 2 },
    { id: 21, editionName: "rails" },
    {
      id: 22,
      editionName: "asus",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 23,
      editionName: "code",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 24, editionName: "nick", price: 1200, trialPeriod: 2 },
    { id: 25, editionName: "plex" },
    {
      id: 26,
      editionName: "senti",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 27,
      editionName: "prick",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 28, editionName: "solar", price: 1200, trialPeriod: 2 },
  ];
  const actions = [
    { id: "delete", displayName: "Delete" },
    { id: "edit", displayName: "Edit" },
  ];
  const pagination = true;
  const recordsPerPage = 7;
  const recordsPerPageSelectListOption = true;
  const offCanvasHandler = () => {};
  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [showTenantSettings, setShowTenantSettings] = useState(false);
  
  const offCanvasButton =
    '<RdsButton icon = "plus" iconColorVariant="light" size = "medium" type = "button" colorVariant = "primary" label = "NEW TENANT"/>';
  const navtabsItems = [
    { label: "Edition Information", tablink: "#nav-home", id: 0 },
    { label: "Features", tablink: "#nav-profile", id: 1 },
  ];
  const radioItems = [
    {
      label: "First Bill Date",
      inline: true,
      id: 1,
      itemList: [
        {
          id: 1,
          label: "Immediately",
          checked: true,
          name: "radio_button",
        },
        {
          id: 2,
          label: "After Trial Period",
          checked: false,
          name: "radio_button",
        },
      ],
    },
    {
      label: "After Subscription Expiry",
      id: 2,
      inline: true,
      itemList: [
        {
          id: 1,
          label: "Deactivate Tenant",
          checked: true,
          name: "radio_button",
        },
        {
          id: 2,
          label: "Assign To Another Edition",
          checked: false,
          name: "radio_button",
        },
      ],
    },
  ];
  const familyTree = [
    {
      name: "[Test edition scope feature]",
      id: "L1E1",
      isSelected: false,
      isIntermediate: false,
      disabled: false,
      children: [],
    },
    {
      name: "Chat",
      id: "L1E2",
      parent_id: 0,
      isSelected: false,
      isIntermediate: false,
      disabled: false,
      children: [
        {
          name: "Chat with host",
          id: "L2E1",
          parent_id: 2,
          isSelected: false,
          isIntermediate: false,
          disabled: false,
          children: [],
        },
        {
          name: "Chat with other tentents",
          id: "L2E2",
          parent_id: 2,
          isSelected: false,
          isIntermediate: false,
          disabled: false,
          children: [],
        },
      ],
    },
    {
      name: "Maximum user count",
      id: "L1E6",
      parent_id: 0,
      isSelected: false,
      isIntermediate: false,
      disabled: false,
      children: [],
    },
    {
      name: "Test check feature",
      id: "L1E5",
      parent_id: 0,
      isSelected: false,
      isIntermediate: false,
      disabled: false,
      children: [],
    },
    {
      name: "Test check feature",
      id: "L1E5",
      parent_id: 0,
      isSelected: true,
      isIntermediate: false,
      disabled: false,
      children: [],
    },
  ];
  return (
    <div className="tenant">
      <RdsOffcanvas
        canvasTitle="NEW EDITION"
        onclick={offCanvasHandler}
        placement="end"
        width="830px"
        offcanvasbutton={
          <div className="d-flex justify-content-end">
            <RdsButton
              icon="plus"
              iconColorVariant="light"
              size="small"
              type="button"
              colorVariant="primary"
              label="NEW EDITION"
            />
          </div>
        }
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
          <RdsCompEditionInformation
            radioItems={radioItems}
            editionInfo={(showTenantSettings) => {
              setShowTenantSettings(showTenantSettings), setActiveNavTabId(1);
            }}
          />
        )}
        {(activeNavTabId == 1 || showTenantSettings == true) && (
          <RdsCompPermissionTree familyTree={familyTree} />
        )}
      </RdsOffcanvas>
      <RdsCompEditionList
        tableHeaders={tableHeaders}
        tableData={tableData}
        actions={actions}
        onActionSelection={() => {}}
        onNewTenantClick={() => {}}
        pagination={pagination}
        recordsPerPage = {recordsPerPage}
        recordsPerPageSelectListOption = {true}
      />
    </div>
  );
};

export default Edition;
