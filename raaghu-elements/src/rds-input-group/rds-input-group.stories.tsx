import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsInputGroup from "./rds-input-group";

export default {
  title: "Elements/Input Group",
  component: RdsInputGroup,
  argTypes: {
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
        "review",
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
//   alertmessage: "this is close alert",
//   dismisable: false
    buttonLabel: "BUTTON",
    buttonColorVariant: "primary",
    placeholder: "Placeholder text",
    size: "medium",
    outline: true,
    inputGroupLabel: "Field Label yoyo"
};

