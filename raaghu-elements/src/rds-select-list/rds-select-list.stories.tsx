import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsSelectList from "./rds-select-list";

export default {
  title: "Elements/SelectList",
  component: RdsSelectList,
  argTypes: {
    size: {
      options: ["lg",
        "md",
        "sm"
      ],
      control: { type: "select" },
    },
}
  
} as ComponentMeta<typeof RdsSelectList>;

const Template: ComponentStory<typeof RdsSelectList> = (args) => (
  <RdsSelectList {...args} />
);
                                                                                                                                                                                              
export const Default = Template.bind({});
Default.args = {
  label:"Open select list",
  isMultiple:false,
  selectItems:[
    {
      option:"One"
    },
    {
      option:"two"
    },
    {
      option:"three"
    },
    {
      option:"four"
    }

  ],
  isDisabled:false
};