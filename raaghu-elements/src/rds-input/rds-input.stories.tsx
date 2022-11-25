import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsInput from "./rds-input";

export default {
  title: "Elements/Input",
  component: RdsInput,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
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
  inputType: "text",
  placeholder: "Add Placeholder",
  label:"Label",
  labelPositon:"top",
  id:"",
  value: "",
  redAsteriskPresent: true,
};

export const Tooltip = Template.bind({});
Tooltip.decorators= [
  (Story) => (
    <div style={{ padding:'70px 200px' ,
    }}>
      <Story/>
    </div>
  ),
],
Tooltip.args = {
  size: "medium",
  inputType: "text",
  placeholder: "Add Placeholder",
  label:"Label",
  labelPositon:"top",
  id:"",
  value: "",
  redAsteriskPresent: true,
  tooltipPlacement:"top",
  tooltipTitle:"This is tooltip",
};


export const Disabled = Template.bind({});
Disabled.args = {
  size: "medium",
  inputType: "text",
  placeholder: "Add Placeholder",
  label:"Label",
  labelPositon:"top",
  id:"",
  value: "",
  redAsteriskPresent: true,
  isDisabled: true,
}

export const Readonly = Template.bind({});
Readonly.args = {
  size: "medium",
  inputType: "text",
  placeholder: "Add Placeholder",
  label:"Label",
  labelPositon:"top",
  id:"",
  value: "",
  redAsteriskPresent: true,
  readonly: true,
}