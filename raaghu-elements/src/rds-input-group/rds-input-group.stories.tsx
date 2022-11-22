import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsInputGroup from "./rds-input-group";

export default {
  title: "Elements/Input Group",
  component: RdsInputGroup,
  argTypes: {
    inputValue: { action: 'Value sent to parent' },
    buttonColorVariant: {
      options: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "danger",
        "dark",
        "light",
      ],
      control: { type: "select" },
    },
    size: {
        options: [ 
            "small",
            "medium",
            "large"
        ],
        control: { type: "select" },
      },
  }
} as ComponentMeta<typeof RdsInputGroup>;

const Template: ComponentStory<typeof RdsInputGroup> = (args) => (
  <RdsInputGroup {...args} />
);

export const Default = Template.bind({});
Default.args = {
    buttonLabel: "BUTTON",
    buttonColorVariant: "primary",
    placeholder: "Placeholder text",
    size: "medium",
    outline: true,
    inputGroupLabel: "Field Label"
};

