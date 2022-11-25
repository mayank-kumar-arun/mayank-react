import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsPopover from './rds-popover'

export default {
  title: "Elements/Popover",
  component: RdsPopover,
  argTypes: {
    popoverPosition: {
      options: ["top", "bottom", "right", "left"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof RdsPopover>;

const Template: ComponentStory<typeof RdsPopover> = (args) => (
  <RdsPopover {...args} />
);

export const Default = Template.bind({});
Default.decorators= [
  (Story) => (
    <div style={{ padding:'200px 300px' ,
    }}>
      <Story/>
    </div>
  ),
],
Default.args = {
  popoverPosition:"top",
  children:<p>Popover</p>,
};
