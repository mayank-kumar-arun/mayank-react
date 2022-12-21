import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompPageNotFound from './rds-comp-page-not-found'

export default {
  title: "Components/Page Not Found",
  component: RdsCompPageNotFound,

} as ComponentMeta<typeof RdsCompPageNotFound>;


const Template: ComponentStory<typeof RdsCompPageNotFound> = (args) => 
  <RdsCompPageNotFound {...args} />;


export const Default = Template.bind({});

Default.args ={

}