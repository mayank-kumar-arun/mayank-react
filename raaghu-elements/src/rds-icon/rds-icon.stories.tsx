import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsIcon from "./rds-icon";

export default {
  title: "Elements/Icon",
  component: RdsIcon,
  argTypes: {
      colorVariant: {
        options: ['primary' ,'success' , 'danger' , 'warning' , 'light' ,'info' , 'secondary' , 'dark'],
        control: { type: "select" },
      }
  }
} as ComponentMeta<typeof RdsIcon>;

const Template: ComponentStory<typeof RdsIcon> = (args) => (
  <RdsIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "users",
  width: "20px",
  height: "20px",
  fill: true,
  stroke: true,
  colorVariant: "primary",
  isAnimate:true,
};
