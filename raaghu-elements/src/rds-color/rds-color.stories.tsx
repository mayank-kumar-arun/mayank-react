

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsColor from "./rds-color";

export default {
  title: "Elements/Color",
  component: RdsColor,
  argTypes: {
    displayType: {
      options: ['rounded', 'square'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof RdsColor>;

const Template: ComponentStory<typeof RdsColor> = (args) => (
  <RdsColor {...args} />
);
                                                                                                                                                                                              
export const Default = Template.bind({});
Default.args = {
    displayType:'rounded',
    header: 'Color',
    defaultValue: 1,
    itemList: [
      { id: 1, color: '#FFFFFF' },
      { id: 2, color: '#FDD2FF' },
      { id: 3, color: '#BFEAFF' },
    ]
  };

