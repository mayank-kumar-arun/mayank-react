import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import  RdsDoubleRange from "./rds-double-range"

export default {
  title: "Elements/DoubleRange",
  component:  RdsDoubleRange,
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
  }
} as ComponentMeta<typeof  RdsDoubleRange>;

const Template: ComponentStory<typeof  RdsDoubleRange> = (args) => (
  < RdsDoubleRange {...args} />
);

export const Default = Template.bind({});
Default.args = {
    max:200,
    min:10,
    doubleRangeType:"default"
};

