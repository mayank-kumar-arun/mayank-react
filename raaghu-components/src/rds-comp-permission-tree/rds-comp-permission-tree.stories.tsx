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
      id: "testEditionScopeFeature",
      isSelected: false,
      isIntermediate: false,
      disabled: false,
      parent_id:"", 
      children: []
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
          children: []
        },
        {
          name: "Chat with other tenants",
          id: "chatwithothertenats",
          parent_id: "chat",
          isSelected: false,
          isIntermediate: false,
          disabled: false,
          children: []
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
      children: []
    },
    {
      name: "Test check feature",
      id: "testCheckFeature",
      parent_id: "",
      isSelected: false,
      isIntermediate: false,
      disabled: false,
      children: []
    },
    {
      name: "Test check feature",
      id:"testCheckFeature",
      parent_id: "",
      isSelected: true,
      isIntermediate: false,
      disabled: false,
      children: []
    },
  ],

 
};
