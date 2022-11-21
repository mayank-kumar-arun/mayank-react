import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompUserManagement from "./rds-comp-user-management";

export default {
  title: "Components/UserManagement",
  component: RdsCompUserManagement,

} as ComponentMeta<typeof RdsCompUserManagement>;


const Template: ComponentStory<typeof RdsCompUserManagement> = (args) => 
  <RdsCompUserManagement {...args} />;


export const Default = Template.bind({});

Default.args ={

}

