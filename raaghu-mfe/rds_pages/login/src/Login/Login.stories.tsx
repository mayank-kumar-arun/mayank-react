import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsPageLogin from "./Login";

export default {
  title: "Pages/Login",
  component: RdsPageLogin,

} as ComponentMeta<typeof RdsPageLogin>;


const Template: ComponentStory<typeof RdsPageLogin> = (args) => 
  <RdsPageLogin {...args} />;


export const Default = Template.bind({});

Default.args ={

}

