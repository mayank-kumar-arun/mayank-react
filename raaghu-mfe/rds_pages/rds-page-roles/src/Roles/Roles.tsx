import React, { useState } from "react";

import { RdsCompRoleList } from "../../../rds-components";

interface RdsPageRolesProps {}

const Roles = (props: RdsPageRolesProps) => {
  const enablecheckboxselection = true;

  const tableHeaders = [
    {
      displayName: "Role Name",

      key: "role",

      datatype: "text",

      dataLength: 30,

      required: true,

      sortable: true,
    },

    {
      displayName: "Creation Time",

      key: "ctime",

      datatype: "text",

      dataLength: 5,

      required: false,

      sortable: true,
    },
  ];

  const tableData = [
    { id: 1, selected: false, role: "Admin", ctime: "11/15/2021, 2:44:51 PM" },

    { id: 2, selected: false, role: "Team", ctime: "11/15/2021, 2:44:51 PM" },

    {
      id: 3,

      selected: false,

      role: "Manager",

      ctime: "11/15/2021, 2:44:51 PM",
    },

    {
      id: 4,

      selected: false,

      role: "Software Developer",

      ctime: "11/15/2021, 2:44:51 PM",
    },

    {
      id: 5,

      selected: false,

      role: "UI/UX designer",

      ctime: "11/15/2021, 2:44:51 PM",
    },

    {
      id: 6,

      selected: false,

      role: "Associate",

      ctime: "11/15/2021, 2:44:51 PM",
    },
  ];

  const actions = [
    { id: "anything", displayName: "Edit", offId: "Edit" },

    { id: "delete", displayName: "Delete", modalId: "Delete" },
  ];

  const pagination = true;

  const permission = [
    {
      name: "Test edition scope feature",

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

  const listItems = [
    {
      value: "Refresh",

      some: "value",

      key: "refresh",

      icon: "refresh",

      iconWidth: "20px",

      iconHeight: "20px",
    },

    {
      value: "Filter By Permission",

      some: "value",

      key: "filterByPermission",

      icon: "funnel",

      iconWidth: "20px",

      iconHeight: "20px",
    },

    {
      value: "New Role",

      some: "value",

      key: "new",

      icon: "plus",

      iconWidth: "12px",

      iconHeight: "12px",
    },
  ];

  // tableHeaders:[ {

  //   displayName: "hello",

  //   key: "hello",

  //   datatype: "text",

  //   dataLength?: number | undefined;

  //   required?: boolean | undefined;

  //   sortable?: boolean | undefined;

  //   colWidth?: string | undefined;

  //   disabled?: boolean | undefined;

  //   isEndUserEditing?: boolean | undefined;

  // }];

  // tableData: {}[];

  // actions: {

  //   displayName: string;

  //   id: string;

  // }[];

  // pagination: boolean;

  // enablecheckboxselection?: boolean;

  // onActionSelection(arg: any): any;

  // onRefresh?:(Event:React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

  // onSearch?:(Event:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void;

  // onFilterByPermissions?:(id:any)=>void;

  // onNewRole?:(Event:React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;

  return (
    <>
      <RdsCompRoleList
        tableHeaders={tableHeaders}
        tableData={tableData}
        actions={actions}
        pagination={pagination}
        onActionSelection={function (arg: any) {
          throw new Error("Function not implemented.");
        }}
        listItems={listItems}
        permission={permission}
      ></RdsCompRoleList>
    </>
  );
};

export default Roles;
