import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Todos from "./rds-checkbox";

export default {
  title: "Elements/Checkbox",
  component: Todos,
} as ComponentMeta<typeof Todos>;

const Template: ComponentStory<typeof Todos> = (args) => (
  <Todos {...args} />
);
                                                                                                                                                                                              
export const Default = Template.bind({});
Default.args = {
  label: "default checkbox",
  checked:false
};

