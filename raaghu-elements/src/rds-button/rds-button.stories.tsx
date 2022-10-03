import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsButton, { RdsButtonProps } from "./rds-button";
import "bootstrap/dist/css/bootstrap.min.css";
// import Button from "react-bootstrap/Button";
// import { Colors } from "../Types";

export default {
  title: "Elements/Button",
  component: RdsButton,
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
    tooltipPlacement: {
      options: ["top", "bottom", "right", "left"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof RdsButton>;

const Template: ComponentStory<typeof RdsButton> = (args) => (
  <RdsButton {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  colorVariant: "primary",
  label: "BUTTON",
  block: false,
  size: "medium",
};

export const Disable = Template.bind({});
Disable.args = {
  colorVariant: "primary",
  label: "Disable",
  isDisabled: true,
  block: false,
  size: "medium",
};

export const IconWithLabel = Template.bind({});
IconWithLabel.args = {
  // roundedButton: true,
  // roundedCorner: false,
  icon: "+",
  colorVariant: "primary",
  label: "BUTTON",
  block: false,
  size: "medium",
};

export const Outline = Template.bind({});
Outline.args = {
  outlineButton: true,
  colorVariant: "primary",
  label: "BUTTON",
  block: false,
  size: "medium",
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  colorVariant: "primary",
  label: "BUTTON",
  block: false,
  size: "medium",
  tooltip: true,
  tooltipPlacement: "right",
  tooltipTitle: "This is tooltip",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  // roundedButton: true,
  // roundedCorner: false,
  icon: "+",
  colorVariant: "primary",
  label: "Button",
  block: false,
  size: "medium",
  // tooltip: true,
  // tooltipPlacement: "right",
  // tooltipTitle:"This is tooltip",
};
