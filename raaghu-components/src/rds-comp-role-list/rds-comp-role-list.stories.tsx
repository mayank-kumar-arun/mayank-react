import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompRoleList from "./rds-comp-role-list";
import { RdsBadge } from "../../../raaghu-elements/src";

export default {
  title: "Components/Role List",
  component: RdsCompRoleList,
} as ComponentMeta<typeof RdsCompRoleList>;

const Template: ComponentStory<typeof RdsCompRoleList> = (args) => (
  <RdsCompRoleList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  permission: [
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
  ],
  listItems: [
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
  ],

  enablecheckboxselection: true,
  tableHeaders: [
    {
      displayName: "Role Name",
      key: "role",
      datatype: "children",
      dataLength: 30,
      required: true,
      sortable: true,
      isEndUserEditing: false,
    },
    {
      displayName: "Creation Time",
      key: "ctime",
      datatype: "text",
      dataLength: 5,
      required: false,
      sortable: true,
      isEndUserEditing: false,
    },
  ],
  tableData: [
    {
      id: 1,

      isDefault: false,
      displayName: "Admin",
      role: {
        children: (
          <>
            Admin{" "}
            <span className="ms-1">
              <RdsBadge label={"Static"} colorVariant={"primary"}></RdsBadge>{" "}
            </span>
          </>
        ),
      },
      ctime: "11/15/2021, 2:44:51 PM",
    },
    {
      id: 2,
      isDefault: false,
      displayName: "User Prime",
      role: {
        children: <>User Prime</>,
      },
      ctime: "11/15/2021, 2:44:51 PM",
    },
    {
      id: 3,
      isDefault: true,
      displayName: "Golden Role",
      role: {
        children: (
          <>
            Golden Role
            <span className="ms-1">
              <RdsBadge label={"Default"} colorVariant={"success"}></RdsBadge>{" "}
            </span>
          </>
        ),
      },
      ctime: "11/15/2021, 2:44:51 PM",
    },
    {
      id: 4,
      isDefault: true,
      displayName: "Work",
      role: {
        children: (
          <>
            Work
            <span className="ms-1">
              <RdsBadge label={"Default"} colorVariant={"success"}></RdsBadge>{" "}
            </span>
          </>
        ),
      },
      ctime: "11/15/2021, 2:44:51 PM",
    },
    {
      id: 5,
      isDefault: true,
      displayName: "Hello",
      role: {
        children: (
          <>
            Hello
            <span className="ms-1">
              <RdsBadge label={"Default"} colorVariant={"success"}></RdsBadge>{" "}
            </span>
          </>
        ),
      },
      ctime: "11/15/2021, 2:44:51 PM",
    },
    {
      id: 6,
      isDefault: false,
      displayName: "Hello",
      role: {
        children: <>Hello</>,
      },
      ctime: "11/15/2021, 2:44:51 PM",
    },
  ],
  actions: [
    { id: "anything", displayName: "Edit", offId: "Edit" },
    { id: "Del", displayName: "Delete", modalId: "Del" },
  ],
  pagination: true,
};
