import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsPageForgotPassword from "./forgotpassword";

export default {
  title: "Pages/Forgot Password",
  component: RdsPageForgotPassword,

} as ComponentMeta<typeof RdsPageForgotPassword>;


const Template: ComponentStory<typeof RdsPageForgotPassword> = (args) => 
  <RdsPageForgotPassword {...args} />;


export const Default = Template.bind({});

Default.args ={

}

