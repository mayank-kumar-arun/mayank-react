import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsEmailSettings from "./rds-email-settings";

export default {
  title: "Components/Email Settings",
  component: RdsEmailSettings,

} as ComponentMeta<typeof RdsEmailSettings>;


const Template: ComponentStory<typeof RdsEmailSettings> = (args) => 
  <RdsEmailSettings {...args} />;


export const Default = Template.bind({});

Default.args ={
    emailSettings: {
        "currentEmail": "niphy.anto@waiin.com",
        "newEmail": "abc@waiin.com",
        "confirmEmail": "abc@waiin.com"
      }
}