import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsListGroup from "./rds-list-group";

export default {
  title: "Elements/List Group",
  component: RdsListGroup,
  argTypes: {
    labelPosition: {
      options: ["top", "bottom"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof RdsListGroup>;

const Template: ComponentStory<typeof RdsListGroup> = (args) => (
  <RdsListGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
  labelPosition: "top",
  label:"List Group",
  listItem: [
    {
      label: " label 1",
      disabled: true,
      badgeLabel: "10",
      listHeading: "",
      listContent: "",
      listTime: "",
      type: "",
      isActive: false,
    },
    {
      label: " label 2",
      disabled: false,
      badgeLabel: "2",
      listHeading: "",
      listContent: "",
      listTime: "",
      type: "",
      isActive: true,
    },
    {
      label: " label 3",
      disabled: false,
      badgeLabel: "5",
      listHeading: "",
      listContent: "",
      listTime: "",
      type: "",
      isActive: false,
    },
  ],
};


export const ListGroupWithMultiSelect = Template.bind({});
ListGroupWithMultiSelect.args = {
  labelPosition: "top",
  label:"List Group",
  lsitGroupWithMultiSelect: true,
  listItem: [
    {
      label: " label 1",
      disabled: true,
      badgeLabel: "10",
      listHeading: "",
      listContent: "",
      listTime: "",
      type: "",
      isActive: false,
    },
    {
      label: " label 2",
      disabled: false,
      badgeLabel: "2",
      listHeading: "",
      listContent: "",
      listTime: "",
      type: "",
      isActive: true,
    },
    {
      label: " label 3",
      disabled: false,
      badgeLabel: "5",
      listHeading: "",
      listContent: "",
      listTime: "",
      type: "",
      isActive: false,
    },
  ],
};