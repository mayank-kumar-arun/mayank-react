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
    role:{
      options:["button", "radio" , "checkbox"],
      control:{type: "select"}
    }
  },
}as ComponentMeta<typeof RdsButtonGroup>;

const Template: ComponentStory<typeof RdsButtonGroup> = (args) => (
  <RdsButtonGroup {...args} />
);

export const CheckboxButtonGroup = Template.bind({});
CheckboxButtonGroup.args = {
  vertical: false,
  size: "medium",
  colorVariant:"primary",
  outlineButton:true,
  role:"checkbox",
  buttonGroupItems: [
    {
      label: "Checkbox 1",
      id: "checkbox1",
      name: "",
    },
    {
      label: "Checkbox 2",
      id: "checkbox2",
      name: "",
    },
    {
      label: "Checkbox 3",
      id: "checkbox3",
      name: "",
    }

  ]
}
