import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompUserManagement from "./rds-comp-user-management";

export default {
  title: "Components/User Management",
  component: RdsCompUserManagement,

} as ComponentMeta<typeof RdsCompUserManagement>;


const Template: ComponentStory<typeof RdsCompUserManagement> = (args) => 
  <RdsCompUserManagement {...args} />;


export const Default = Template.bind({});

Default.args ={
    Usermanagementsettings:[
            {
              "id": 1,
              "label": "Email Confirmation Required For Login.",
              "checked": false, 
            },
            {
              "id": 2,
              "label": "Phone Number Verification Enabled (Via SMS)",
              "checked": false,
            },
            {
              "id": 3,
              "label": "Use Security Image Question (Captcha) On Login.",
              "checked": false,
            },
            {
              "id": 4,
              "label":  "Cookie Consent Enabled",
              "checked": false,
            },
            {
                "id": 5,
                "label": "Allow Using to use Gravatar Profile Picture",
                "checked": false,
              },
         
          
      ]
}

