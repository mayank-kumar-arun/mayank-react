import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompEmailSettingsNew from './rds-email-settings-new'

export default {
  title: "Components/Email Settings New",
  component: RdsCompEmailSettingsNew,

} as ComponentMeta<typeof RdsCompEmailSettingsNew>;


const Template: ComponentStory<typeof RdsCompEmailSettingsNew> = (args) => 
  <RdsCompEmailSettingsNew {...args} />;


export const Default = Template.bind({});

Default.args ={

}