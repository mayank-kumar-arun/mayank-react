import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsToggleSwitch from "./rds-toggle-switch";

export default {
  title: "Elements/Toggle Switch",
  component: RdsToggleSwitch,
} as ComponentMeta<typeof RdsToggleSwitch>;

const Template: ComponentStory<typeof RdsToggleSwitch> = (args) => (
  <RdsToggleSwitch {...args} />
);

export const Default = Template.bind({});

Default.args = {
  defaultChecked: false,
};
