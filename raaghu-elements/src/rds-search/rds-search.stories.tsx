import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsSearch from './rds-search'

export default {
  title: "Elements/Search",
  component: RdsSearch,
  argTypes: {
    size: {
        options: ["small", "medium", "large"],
        control: { type: "select" },
      },
  },
} as ComponentMeta<typeof RdsSearch>;

const Template: ComponentStory<typeof RdsSearch> = (args) => (
  <RdsSearch {...args} />
);

export const Default = Template.bind({});
Default.args = {
    placeholder: "Search",
    size: "small",
    iconside:"left"
};
