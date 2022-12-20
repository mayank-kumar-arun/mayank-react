import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompOrderDetails from "./rds-comp-order-details";

export default {
  title: "Components/Order Details",
  component: RdsCompOrderDetails,


} as ComponentMeta<typeof RdsCompOrderDetails>;


const Template: ComponentStory<typeof RdsCompOrderDetails> = (args) => 
  <RdsCompOrderDetails {...args} />;


export const Default = Template.bind({});

Default.args ={
}



