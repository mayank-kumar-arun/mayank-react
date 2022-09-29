import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsButtonGroup from "./rds-button-group";

export default {
  title: "Elements/Button Group",
  component: RdsButtonGroup,
  argTypes: {
    colorVariant: {
      options: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "danger",
        "dark",
        "light",
        "review",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    role: {
      options: ["button", "radio", "checkbox"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof RdsButtonGroup>;

const Template: ComponentStory<typeof RdsButtonGroup> = (args) => (
  <RdsButtonGroup {...args} />
);

export const CheckboxButtonGroup = Template.bind({});
CheckboxButtonGroup.args = {
  vertical: false,
  size: "medium",
  colorVariant: "primary",
  outlineButton: false,
  role: "button",
  buttonGroupItems: [
    {
      label: "checkbox 1",
      id: "checkbox1",
      name: "",
    },
    {
      label: "checkbox 2",
      id: "checkbox2",
      name: "",
    },
    {
      label: "checkbox 3",
      id: "checkbox3",
      name: "",
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  vertical: false,
  size: "medium",
  colorVariant: "primary",
  outlineButton: false,
  role: "button",
  buttonGroupItems: [
    {
      label: "Left",
      id: "",
      name: "",
    },
    {
      label: "Middle",
      id: "",
      name: "",
    },
    {
      label: "Right",
      id: "",
      name: "",
    },
  ],
};

export const IconButtonGroup = Template.bind({});
IconButtonGroup.args = {
  vertical: false,
  size: "medium",
  colorVariant: "primary",
  buttonGroupItems: [
    {
      label: "",
      icon: "+",
      id: "Icon1",
      name: "",
    },
    {
      label: "",
      icon: "-",
      id: "Icon2",
      name: "",
    },
    {
      label: "",
      icon: "@",
      id: "Icon3",
      name: "",
    },
  ],
};

export const RadioButtonGroup = Template.bind({});
RadioButtonGroup.args = {
  vertical: false,
  size: "medium",
  colorVariant: "primary",
  outlineButton: false,
  role: "radio",
  buttonGroupItems: [
    {
      label: "radio 1",
      id: "radio1",
      name: "",
    },
    {
      label: "radio 2",
      id: "radio2",
      name: "",
    },
    {
      label: "radio 3",
      id: "radio3",
      name: "",
    },
  ],
};


export const Vertical = Template.bind({});
Vertical.args = {
  vertical: true,
  size: "medium",
  colorVariant: "primary",
  buttonGroupItems: [
    {
      label: "Top",
      icon: "",
      id: "Icon1",
      name: "",
    },
    {
      label: "Middle",
      icon: "",
      id: "Icon2",
      name: "",
    },
    {
      label: "Bottom",
      icon: "",
      id: "Icon3",
      name: "",
    },
  ],
};
