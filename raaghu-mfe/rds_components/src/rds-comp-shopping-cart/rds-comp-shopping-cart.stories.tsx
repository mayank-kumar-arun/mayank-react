import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompShoppingCart from "./rds-comp-shopping-cart";

export default {
  title: "Components/Shopping Cart",
  component: RdsCompShoppingCart,


} as ComponentMeta<typeof RdsCompShoppingCart>;


const Template: ComponentStory<typeof RdsCompShoppingCart> = (args) => 
  <RdsCompShoppingCart {...args} />;


export const Default = Template.bind({});

Default.args ={
   
}



