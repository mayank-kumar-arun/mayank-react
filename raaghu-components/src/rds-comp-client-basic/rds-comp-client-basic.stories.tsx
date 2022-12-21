
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompClientBasic from "./rds-comp-client-basic";

export default {
  title: "Components/Client Basic",
  component: RdsCompClientBasic,

} as ComponentMeta<typeof RdsCompClientBasic>;


const Template: ComponentStory<typeof RdsCompClientBasic> = (args) => 
  <RdsCompClientBasic {...args} />;


export const Default = Template.bind({});

Default.args ={
    sizeDataWithDescription :[
        {type: 'Standard', days:"4-10 buisness days", cost:"$5.00"},
        {type: 'Express', days:"2-5 buisness days", cost:"$16.00"},
         {type: 'Free', days:"10-12 buisness days", cost:"$0.00"},],
    sizeType :  'withDescription',
}

