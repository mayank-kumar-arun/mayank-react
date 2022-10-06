import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompLogin from "./rds-comp-login";

export default {
  title: "Components/Login",
  component: RdsCompLogin,

} as ComponentMeta<typeof RdsCompLogin>;


const Template: ComponentStory<typeof RdsCompLogin> = (args) => 
  <RdsCompLogin {...args} />;


export const Default = Template.bind({});

Default.args ={
//   userNameData:[],
//  userPasswordData: '',
//  rememeberMe: '',
//  TenantNameData: '',
//  TenancyName: '',
//  TenantName: '',
//  UserName: 'Email/Username',
//  Password: 'Password',
//  userNameInputType:  'email',
//  userPasswordInputType: ''
}

