import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsInput from "./rds-input";

export default {
  title: "Elements/Input",
  component: RdsInput,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    inputType: {
      options: ["email", "text", "password"],
      control: { type: "select" },
    },
    titleType: {
      options: ["top", "bottom"],
      control: { type: "select" },
    },
    tooltipPlacement: {
        options: ["top", "bottom","right", "left"],
        control: { type: "radio" },
      },
  },
} as ComponentMeta<typeof RdsInput>;

const Template: ComponentStory<typeof RdsInput> = (args) => (
  <RdsInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  isDisabled: false,
  readonly: false,
  value: "",
  inputType: "text",
  placeholder: "edit",
  title: "",
  titleType: "top",
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  size: "medium",
  isDisabled: false,
  readonly: false,
  value: "",
  inputType: "text",
  placeholder: "edit",
  title: "",
  titleType: "top",
  tooltipPlacement:"top",
  tooltipTitle:"This is tooltip",
};
