import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsRange from "./rds-range"

export default {
  title: "Elements/Range",
  component: RdsRange,
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
} as ComponentMeta<typeof RdsRange>;

const Template: ComponentStory<typeof RdsRange> = (args) => (
  <RdsRange {...args} />
);

export const Default = Template.bind({});
Default.args = {
    max:200,
    min:10,
    colorVariant: "danger",
};

