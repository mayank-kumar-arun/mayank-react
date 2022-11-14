import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompEdition from './rds-comp-edition'

export default {
  title: "Components/Email",
  component: RdsCompEdition,

} as ComponentMeta<typeof RdsCompEdition>;


const Template: ComponentStory<typeof RdsCompEdition> = (args) => 
  <RdsCompEdition {...args} />;


export const Default = Template.bind({});

Default.args ={

}