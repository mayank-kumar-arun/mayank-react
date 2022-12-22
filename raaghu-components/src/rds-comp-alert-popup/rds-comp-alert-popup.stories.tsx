import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompAlertPopup from "./rds-comp-alert-popup";

export default {
  title: "Components/AlertPopup",
  component: RdsCompAlertPopup,
} as ComponentMeta<typeof RdsCompAlertPopup>;

const Template: ComponentStory<typeof RdsCompAlertPopup> = (args) => (
  <RdsCompAlertPopup {...args} />
);

export const Default = Template.bind({});

Default.args = {
  iconheight: "",
  iconname: "",
  iconwidth: "",
};
