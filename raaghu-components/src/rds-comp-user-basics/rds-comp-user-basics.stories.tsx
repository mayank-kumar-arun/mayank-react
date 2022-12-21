import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompUserBasics from './rds-comp-user-basics'

export default {
  title: "Components/User Basics",
  component: RdsCompUserBasics,

} as ComponentMeta<typeof RdsCompUserBasics>;


const Template: ComponentStory<typeof RdsCompUserBasics> = (args) => 
  <RdsCompUserBasics {...args} />;


export const Default = Template.bind({});

Default.args ={

}