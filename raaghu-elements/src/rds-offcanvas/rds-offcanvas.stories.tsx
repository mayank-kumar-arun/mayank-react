import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsOffcanvas from './rds-offcanvas'

export default {
  title: "Elements/Offcanvas",
  component: RdsOffcanvas,
  argTypes: {
    placement: {
      options: ["top", "bottom", "end", "start"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof RdsOffcanvas>;

const Template: ComponentStory<typeof RdsOffcanvas> = (args) => (
  <RdsOffcanvas {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placement :"start",
  canvasTitle:"Canvas Title"
};
