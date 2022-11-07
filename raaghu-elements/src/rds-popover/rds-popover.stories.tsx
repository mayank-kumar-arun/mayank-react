import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsPopover from './rds-popover'

export default {
  title: "Elements/Popover",
  component: RdsPopover,
  argTypes: {
    
  },
} as ComponentMeta<typeof RdsPopover>;

const Template: ComponentStory<typeof RdsPopover> = (args) => (
  <RdsPopover {...args} />
);

export const Default = Template.bind({});
Default.args = {

};
