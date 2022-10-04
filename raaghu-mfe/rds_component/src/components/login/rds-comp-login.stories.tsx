import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompLogin from "./rds-comp-login";

export default {
  title: "Components/Login",
  component: RdsCompLogin,
  //,
  // argTypes: {
  //   colorVariant: {
  //     options: [
  //       "primary",
  //       "secondary",
  //       "success",
  //       "info",
  //       "warning",
  //       "danger",
  //       "dark",
  //       "light",
  //       "review",
  //     ],
  //     control: { type: "select" },
  //   },
  // }
} as ComponentMeta<typeof RdsCompLogin>;


// const Template: Story<RdsCompLogin> = (args: RdsCompLogin) => ({
//   props:{
//     ...args
//   }
// });

// export const Default = Template.bind({});

// Default.args ={
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
// }

