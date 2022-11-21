import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompSecurity from "./rds-comp-security";

export default {
  title: "Components/Security",
  component: RdsCompSecurity,
  
} as ComponentMeta<typeof RdsCompSecurity>;

const Template: ComponentStory<typeof RdsCompSecurity> = (args) => (
  <RdsCompSecurity {...args} />
);

export const Default = Template.bind({});

Default.args = {
  
};
