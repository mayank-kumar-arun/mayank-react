
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompInvoice from "./rds-comp-invoice";

export default {
  title: "Components/Invoice",
  component: RdsCompInvoice,

} as ComponentMeta<typeof RdsCompInvoice>;


const Template: ComponentStory<typeof RdsCompInvoice> = (args) => 
  <RdsCompInvoice />;


export const Default = Template.bind({});

Default.args ={
   
}

