import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompOtherSettings from "./rds-comp-other-settings";

export default {
  title: "Components/Other Settings",
  component: RdsCompOtherSettings,

} as ComponentMeta<typeof RdsCompOtherSettings>;


const Template: ComponentStory<typeof RdsCompOtherSettings> = (args) => 
  <RdsCompOtherSettings {...args} />;


export const Default = Template.bind({});

Default.args ={

}

