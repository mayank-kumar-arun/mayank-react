import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompUserClaim from './rds-comp-user-claims'

export default {
  title: "Components/User Claims",
  component: RdsCompUserClaim,

} as ComponentMeta<typeof RdsCompUserClaim>;


const Template: ComponentStory<typeof RdsCompUserClaim> = (args) => 
  <RdsCompUserClaim {...args} />;


export const Default = Template.bind({});

Default.args ={

}