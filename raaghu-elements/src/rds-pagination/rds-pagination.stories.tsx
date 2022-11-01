import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsPagination from "./rds-pagination";

export default {
  title: "Elements/Pagination",
  component: RdsPagination,
} as ComponentMeta<typeof RdsPagination>;

const Template: ComponentStory<typeof RdsPagination> = (args) => (
  <RdsPagination {...args}/>
);

export const Default = Template.bind({});
Default.args = {

  totalRecords:10,
  recordsPerPage:3,
  recodes:['a','b','c','d','e','f','g','h','i','j','k']
};
