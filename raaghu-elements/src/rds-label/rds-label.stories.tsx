import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsLabel from "./rds-label";

export default {
  title: "Elements/Label",
  component: RdsLabel,
  argTypes: {
    color: {
      control: { type: "text" },
    },
    size: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof RdsLabel>;

const Template: ComponentStory<typeof RdsLabel> = (args) => (
  <RdsLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  multiline: false,
  bold: false,
  italic: false,
};
