import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCheckbox from "./rds-checkbox";

export default {
  title: "Elements/Checkbox",
  component: RdsCheckbox,
} as ComponentMeta<typeof RdsCheckbox>;

const Template: ComponentStory<typeof RdsCheckbox> = (args) => (
  <RdsCheckbox {...args} />
);
                                                                                                                                                                                              
export const Default = Template.bind({});
Default.args = {
  label: "default checkbox",
  checked: false,
};

