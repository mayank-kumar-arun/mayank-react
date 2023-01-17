import React from "react";
import { ComponentStory, ComponentMeta, addDecorator } from "@storybook/react";
import RdsPageDynamicProperty from "./dynamicProperties";
import { Provider } from "react-redux";
import { store } from "../../../../libs/public.api";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Pages/Dynamic Property",
  component: RdsPageDynamicProperty,
} as ComponentMeta<typeof RdsPageDynamicProperty>;

const Template: ComponentStory<typeof RdsPageDynamicProperty> = (args) => (
  <RdsPageDynamicProperty {...args} />
);

export const Default = Template.bind({});

Default.args = {};
