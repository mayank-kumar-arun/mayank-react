import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompIdentityManagement from './rds-comp-identity-management-new'

export default {
  title: "Components/Identity Management New",
  component: RdsCompIdentityManagement,

} as ComponentMeta<typeof RdsCompIdentityManagement>;


const Template: ComponentStory<typeof RdsCompIdentityManagement> = (args) => 
  <RdsCompIdentityManagement {...args} />;


export const Default = Template.bind({});

Default.args ={
    identityData: {
        requiredLength: '',
       defaultAddress: '',
       nonAlpha: false,
       uppercaserequired: false,
       numbers: false,
       lowercaserequired: false,
      lockoutDuration: '',
      MaxAttmpts: '',
     uppercase: false,
     lowercase: false,
      newusers: ''
  
      }
}