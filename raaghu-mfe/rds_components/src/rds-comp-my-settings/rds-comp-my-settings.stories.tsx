import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompMySettings from "./rds-comp-my-settings";

export default {
  title: "Components/My Settings",
  component: RdsCompMySettings,
} as ComponentMeta<typeof RdsCompMySettings>;

const Template: ComponentStory<typeof RdsCompMySettings> = (args) => (
  <RdsCompMySettings {...args} />
);

export const Default = Template.bind({});

Default.args = {
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
};
