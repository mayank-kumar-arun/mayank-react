import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsTextArea from "./rds-text-area";

export default {
  title: "Elements/TextArea",
  component: RdsTextArea,
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
    }
  }
} as ComponentMeta<typeof RdsTextArea>;

const Template: ComponentStory<typeof RdsTextArea> = (args) => (
  <RdsTextArea {...args}/>
);

export const Default = Template.bind({});
Default.args = {
  rows:3,
  readonly:false,
  label:"Example label",
  placeholder:"This is text area...",
  //value:,
  isDisabled:false,
  colorVariant: "primary",
};
