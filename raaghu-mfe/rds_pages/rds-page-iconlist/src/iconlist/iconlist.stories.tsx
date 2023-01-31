import React from "react";
import { ComponentStory, ComponentMeta, addDecorator } from "@storybook/react";
import RdsPageIconList from "./iconlist";

export default {
  title: "Pages/Icon List",
  component: RdsPageIconList,
} as ComponentMeta<typeof RdsPageIconList>;

const Template: ComponentStory<typeof RdsPageIconList> = () => (
  <RdsPageIconList />
);

export const Default = Template.bind({});

Default.args = {};
