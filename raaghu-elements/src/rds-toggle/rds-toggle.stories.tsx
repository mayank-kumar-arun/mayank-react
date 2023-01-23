import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsToggle from "./rds-toggle";

export default {
  title: "Elements/Toggle",
  component: RdsToggle,
  argTypes: {
    
  },
} as ComponentMeta<typeof RdsToggle>;

const Template: ComponentStory<typeof RdsToggle> = (args) => (
  <RdsToggle {...args} />
);

export const Default = Template.bind({});
Default.args = {
    // for future reference
//     isLabel: false,
//   labelOnUncheck: "",
//   labelOnCheck: "",
  iconOnUncheck: "sun",
  iconOnCheck: "moon",
  small:false
}