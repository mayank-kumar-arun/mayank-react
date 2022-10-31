import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsDataTable from './rds-data-table'

export default {
  title: "Elements/Data Table",
  component: RdsDataTable,
  argTypes: {
   
  },
} as ComponentMeta<typeof RdsDataTable>;

const Template: ComponentStory<typeof RdsDataTable> = (args) => (
  <RdsDataTable {...args} />
);

export const Default = Template.bind({});
Default.args = {

};
