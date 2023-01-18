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
    },
    {
      displayName: "Creation Time",
      key: "ctime",
      datatype: "text",
      dataLength: 5,
      required: false,
      sortable: true,
    },
  ],
  tableData: [
    {
      id: 1,
      selected: false,
      isDefault: true,
      role: {
        children: (
          <>
            Hello{" "}
            <span className={`d-none`}>
              <RdsBadge label={"Default"} colorVariant={"success"}></RdsBadge>{" "}
            </span>
          </>
        ),
      },
      ctime: "11/15/2021, 2:44:51 PM",
    },
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
  ],
  actions: [
    { id: "anything", displayName: "Edit", offId: "Edit" },
    { id: "Del", displayName: "Delete", modalId: "Del" },
  ],
  pagination: true,
};
