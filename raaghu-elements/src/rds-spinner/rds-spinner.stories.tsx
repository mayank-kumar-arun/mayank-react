import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsSpinner from "./rds-spinner";

export default {
  title: "Elements/Spinner",
  component: RdsSpinner,
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
    spinnerType:{
        options:[
            "border",
            "grow",
        ],
        control: { type: "select" },
    }
  }
} as ComponentMeta<typeof RdsSpinner>;

const Template: ComponentStory<typeof RdsSpinner> = (args) => (
  <RdsSpinner {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    colorVariant:"primary"
};
