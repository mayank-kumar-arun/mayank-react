import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompShippingAddress from './rds-comp-shipping-address'

export default {
  title: "Components/Shipping Address",
  component: RdsCompShippingAddress,

} as ComponentMeta<typeof RdsCompShippingAddress>;


const Template: ComponentStory<typeof RdsCompShippingAddress> = (args) => 
  <RdsCompShippingAddress {...args} />;


export const Default = Template.bind({});

Default.args ={
   countryList: [
        {
          "value": "1",
          "option": "India",
          "isSelected": false
        },
        {
          "value": "2",
          "option": "China",
          "isSelected": false
        },
        {
          "value": "3",
          "option": "Canada",
          "isSelected": false
        },
        {
          "value": "4",
          "option": "Japan",
          "isSelected": false
        },
        {
          "value": "5",
          "option": "Australia",
          "isSelected": false
        },
        {
          "value": "6",
          "option": "USA",
          "isSelected": false
        },
        {
          "value": "7",
          "option": "UK",
          "isSelected": false
        }
      ]
}