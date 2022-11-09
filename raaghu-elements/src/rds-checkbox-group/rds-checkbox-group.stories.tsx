import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCheckboxGroup from "./rds-checkbox-group";

export default {
  title: "Elements/Checkbox Group",
  component: RdsCheckboxGroup,
} as ComponentMeta<typeof RdsCheckboxGroup>;

const Template: ComponentStory<typeof RdsCheckboxGroup> = (args) => (
  <RdsCheckboxGroup {...args} />
);
                                                                                                                                                                                              
export const Default = Template.bind({});
Default.args = {
    isSwitch: false,
    withlabel:true,
    isInline:false,
  itemList:[
    {
      "id": 1,
      "label": "Child Checkbox 1",
      "checked": false,
      "disabled": false
    },
    {
      "id": 2,
      "label": "Child Checkbox 2",
      "checked": false,
      "disabled": false
    }
  ]
  //withlabel:true,
};

