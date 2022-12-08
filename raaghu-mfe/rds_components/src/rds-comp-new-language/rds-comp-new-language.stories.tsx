import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompNewLanguage from "./rds-comp-new-language";

export default {
  title: "Components/New Language",
  component: RdsCompNewLanguage,

} as ComponentMeta<typeof RdsCompNewLanguage>;


const Template: ComponentStory<typeof RdsCompNewLanguage> = (args) => 
  <RdsCompNewLanguage {...args} />;


export const Default = Template.bind({});

Default.args ={
    label:"Open select list",
  isMultiple:false,
  selectItems:[
    {
      option:"One"
    },
    {
      option:"two"
    },
    {
      option:"three"
    },
    {
      option:"four"
    }

  ],
  isDisabled:false
}

