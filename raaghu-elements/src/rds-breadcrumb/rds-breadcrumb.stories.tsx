import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsBreadcrumb from "./rds-breadcrumb";

export default {
  title: "Elements/Breadcrumb",
  component: RdsBreadcrumb,
  argTypes: {
    role: {
      options: [
        "advance",
        "default"
      ],
      control: { type: "select" },
    },
}} as ComponentMeta<typeof RdsBreadcrumb>;

const Template: ComponentStory<typeof RdsBreadcrumb> = (args) => (
  <RdsBreadcrumb {...args} />
);
                                                                                                                                                                                              
export const Default = Template.bind({});
Default.args = {
 breadItems:[{
    label:"Home",
    route:"#",
    disabled:true

  },
  {
    label:"Library",
    route:"#",
    disabled:true
  },
  {
    label:"Data",
    active: true,
    disabled:true

  },
   
  ]
 
};
                                                                                                                                                                                              
export const Advance = Template.bind({});
Advance.args = {
  divider:">",
  role:'advance',
  breadItems:[{
    label:"Home",
    route:"#",
    disabled:true

  },
  {
    label:"Library",
    route:"#",
    disabled:true
  },
  {
    label:"Data",
    active: true,
    disabled:true

  },
   
  ]
 
};