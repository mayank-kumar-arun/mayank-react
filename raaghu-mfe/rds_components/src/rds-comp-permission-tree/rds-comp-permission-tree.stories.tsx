import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompPermissionTree from "./rds-comp-permission-tree";

export default {
  title: "Components/Permission Tree",
  component: RdsCompPermissionTree,
} as ComponentMeta<typeof RdsCompPermissionTree>;

const Template: ComponentStory<typeof RdsCompPermissionTree> = (args) => (
  <RdsCompPermissionTree {...args} />
);

export const Default = Template.bind({});

Default.args = {
  familyTree: [
    {
      name: "[Test edition scope feature]",
      id: "L1E1",
      isSelected: false,
      isIntermediate: false,
      disabled: false,
      children: []
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
          children: []
        },
        {
          name: "Chat with other tentents",
          id: "L2E2",
          parent_id: 2,
          isSelected: false,
          isIntermediate: false,
          disabled: false,
          children: []
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
      children: []
    },
    {
      name: "Test check feature",
      id: "L1E5",
      parent_id: 0,
      isSelected: false,
      isIntermediate: false,
      disabled: false,
      children: []
    },
    {
      name: "Test check feature",
      id:"L1E5",
      parent_id: 0,
      isSelected: true,
      isIntermediate: false,
      disabled: false,
      children: []
    },
  ],
};
