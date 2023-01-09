
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompInformation from "./rds-comp-information";

export default {
  title: "Components/Information",
  component: RdsCompInformation,

} as ComponentMeta<typeof RdsCompInformation>;


const Template: ComponentStory<typeof RdsCompInformation> = (args) => 
  <RdsCompInformation {...args} />;


export const Default = Template.bind({});

Default.args ={
  inputTypeList:[
        {
          "option": "One"
        },
        {
          "option": "two"
        },
        {
          "option": "three"
        },
        {
          "option": "four"
        }
      ]
}

