import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./rds-checkbox";

export default {
  title: "Elements/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);
                                                                                                                                                                                              
export const Default = Template.bind({});
Default.args = {
  label: "default checkbox",
  Switch: true,
  checked:false,
  Disabled: false
};

