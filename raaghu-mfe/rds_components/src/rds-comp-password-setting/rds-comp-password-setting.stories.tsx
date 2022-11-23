
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompPasswordSetting from "./rds-comp-password-setting";

export default {
  title: "Components/Password Setting",
  component: RdsCompPasswordSetting,

} as ComponentMeta<typeof RdsCompPasswordSetting>;


const Template: ComponentStory<typeof RdsCompPasswordSetting> = (args) => 
  <RdsCompPasswordSetting {...args} />;


export const Default = Template.bind({});

Default.args ={
    sizeDataWithDescription :[
        {type: 'Standard', days:"4-10 buisness days", cost:"$5.00"},
        {type: 'Express', days:"2-5 buisness days", cost:"$16.00"},
         {type: 'Free', days:"10-12 buisness days", cost:"$0.00"},],
    sizeType :  'withDescription',
}

