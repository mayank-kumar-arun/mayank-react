import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompAddressInput from "./rds-comp-address-input";

export default {
  title: "Components/Address Input",
  component: RdsCompAddressInput,

} as ComponentMeta<typeof RdsCompAddressInput>;


const Template: ComponentStory<typeof RdsCompAddressInput> = (args) => 
  <RdsCompAddressInput {...args} />;


export const Default = Template.bind({});

Default.args ={

}

