import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompProfile from "./rds-comp-profile";

export default {
  title: "Components/Profile",
  component: RdsCompProfile,
} as ComponentMeta<typeof RdsCompProfile>;

const Template: ComponentStory<typeof RdsCompProfile> = (args) => (
  <RdsCompProfile {...args} />
);

export const Default = Template.bind({});

Default.args = {};
