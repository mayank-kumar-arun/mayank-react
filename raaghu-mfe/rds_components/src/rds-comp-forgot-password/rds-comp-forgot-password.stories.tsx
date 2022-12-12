
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompForgotPassword from "./rds-comp-forgot-password";

export default {
  title: "Components/Forgot Password",
  component: RdsCompForgotPassword,

} as ComponentMeta<typeof RdsCompForgotPassword>;


const Template: ComponentStory<typeof RdsCompForgotPassword> = (args) => 
  <RdsCompForgotPassword {...args} />;


export const Default = Template.bind({});

Default.args ={
}

