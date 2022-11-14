
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompDeliveryMethod from "./rds-comp-delivery-method";

export default {
  title: "Components/Delivery Method ",
  component: RdsCompDeliveryMethod,

} as ComponentMeta<typeof RdsCompDeliveryMethod>;


const Template: ComponentStory<typeof RdsCompDeliveryMethod> = (args) => 
  <RdsCompDeliveryMethod {...args} />;


export const Default = Template.bind({});

Default.args ={
    sizeDataWithDescription :[
        {type: 'Standard', days:"4-10 buisness days", cost:"$5.00"},
        {type: 'Express', days:"2-5 buisness days", cost:"$16.00"},
         {type: 'Free', days:"10-12 buisness days", cost:"$0.00"},],
    sizeType :  'withDescription',
}

