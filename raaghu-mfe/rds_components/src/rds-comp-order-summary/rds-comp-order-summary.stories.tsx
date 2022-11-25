import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompOrderSummary from './rds-comp-order-summary'

export default {
  title: "Components/Order Summary",
  component: RdsCompOrderSummary,

} as ComponentMeta<typeof RdsCompOrderSummary>;


const Template: ComponentStory<typeof RdsCompOrderSummary> = (args) => 
  <RdsCompOrderSummary {...args} />;


export const Default = Template.bind({});

Default.args ={
    isCheckout: true,
}