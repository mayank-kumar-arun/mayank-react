import React, { useEffect, useState } from "react";
//import axios from "axios";
import {
	RdsCompEditionList,
	RdsCompEditionInformation,
	RdsCompPermissionTree,
} from "../../../rds-components";
import { RdsButton, RdsOffcanvas, RdsNavtabs } from "../../../rds-elements";
import {
	useAppSelector,
	useAppDispatch,
} from "../../../../libs/state-management/hooks";
// import { useAppDispatch } from "../../../../libs/state-management/index"
import { EditionUser } from "../../../../libs/state-management/edition/edition-slice";
interface RdsPageEditionProps {}
const Edition = (props: RdsPageEditionProps) => {
	// const editionuser = useAppSelector((state) => state.persistedReducer.edition)
	// // const dispatch = useDispatch()
	// const dispatch = useAppDispatch()
	// useEffect(() => {
	//   dispatch(EditionUser())
	//   console.log("hi from edition")
	// },[])
	const [data, setData] = useState([]);
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
        <div className="d-flex justify-content-end">
        <RdsOffcanvas
        canvasTitle="NEW EDITION"
        onclick={offCanvasHandler}
        placement="end"
        offcanvaswidth={830}

        offcanvasbutton={
          <div className="d-flex justify-content-end">
            <RdsButton
              icon="plus"
              iconColorVariant="light"
              size="small"
              type="button"
              block={false}
              iconHeight="15px"
              iconWidth="15px"
              iconFill={false}
              iconStroke={true}
              colorVariant="primary"
              label="NEW EDITION"
            />
          </div>
        }
        backDrop={false}
        scrolling={false}
        preventEscapeKey={false}
        offId={"Edition"}
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
          <RdsCompPermissionTree familyTree={familyTree}/>
        )}
      </RdsOffcanvas>
      </div>
      <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
      {/* <RdsCompEditionList
      enablecheckboxselection={false}
        tableHeaders={tableHeaders}
        tableData={tableData}
        actions={actions}
        onActionSelection={() => {}}
        onNewTenantClick={() => {}}
        pagination={pagination}
        recordsPerPage={recordsPerPage}
        recordsPerPageSelectListOption={true}
      /> */}
	  </div>
    </div>
  );
};
export default Edition;
