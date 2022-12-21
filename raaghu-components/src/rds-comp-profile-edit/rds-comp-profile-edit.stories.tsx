import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompProfileEdit from "./rds-comp-profile-edit";

export default {
  title: "Components/Edit Profile",
  component: RdsCompProfileEdit,
} as ComponentMeta<typeof RdsCompProfileEdit>;

const Template: ComponentStory<typeof RdsCompProfileEdit> = (args) => (
  <RdsCompProfileEdit {...args} />
);

export const Default = Template.bind({});

Default.args = {};
