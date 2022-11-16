import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompEmail from './rds-comp-email'

export default {
  title: "Components/Email",
  component: RdsCompEmail,

} as ComponentMeta<typeof RdsCompEmail>;


const Template: ComponentStory<typeof RdsCompEmail> = (args) => 
  <RdsCompEmail {...args} />;


export const Default = Template.bind({});

Default.args ={

}