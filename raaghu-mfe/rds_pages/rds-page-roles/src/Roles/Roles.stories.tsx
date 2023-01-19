import React from "react";
import { ComponentStory, ComponentMeta, addDecorator } from "@storybook/react";
import RdsPageRoles from "./roles";
import { Provider } from "react-redux";
import { store } from "../../../../libs/public.api";
import { BrowserRouter } from "react-router-dom";
export default {
  title: "Pages/Roles",
  component: RdsPageRoles,
} as ComponentMeta<typeof RdsPageRoles>;
const Template: ComponentStory<typeof RdsPageRoles> = (args) => (
  <RdsPageRoles {...args} />
);

export const Default = Template.bind({});
Default.args = {};
