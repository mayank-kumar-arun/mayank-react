import React from "react";
import { ComponentStory, ComponentMeta, addDecorator } from "@storybook/react";
import RdsPageVisualSetting from "./visualSetting";
import { Provider } from "react-redux";
import { store } from "../../../../libs/public.api";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Pages/Visual Setting",
  component: RdsPageVisualSetting,
} as ComponentMeta<typeof RdsPageVisualSetting>;

const Template: ComponentStory<typeof RdsPageVisualSetting> = (args) => (
  <RdsPageVisualSetting {...args} />
);

export const Default = Template.bind({});

Default.args = {};
