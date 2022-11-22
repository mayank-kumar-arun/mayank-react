import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompNewRole from './rds-comp-new-role'

export default {
  title: "Components/New Role",
  component: RdsCompNewRole,

} as ComponentMeta<typeof RdsCompNewRole>;


const Template: ComponentStory<typeof RdsCompNewRole> = (args) => 
  <RdsCompNewRole {...args} />;


export const Default = Template.bind({});

Default.args ={
    roleData:{
        "displayName":"Role Name",
        "isDefault": false
    }
}