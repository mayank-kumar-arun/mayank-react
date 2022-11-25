import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCheckboxParentChild  from './rds-checkbox-parent-child';

export default {
    title: 'Elements/Checkbox Parent Child',
    component: RdsCheckboxParentChild,
} as ComponentMeta<typeof RdsCheckboxParentChild>;


const Template: ComponentStory<typeof RdsCheckboxParentChild> = (args) => <RdsCheckboxParentChild {...args} />;


export const Default = Template.bind({})
Default.args = {
  parentName:"Select all" ,
  userData : [
    { name: "Child checkbox 1", isChecked: true },
    { name: "Child checkbox 2", isChecked: false },
    { name: "Child checkbox 3", isChecked: false },
    { name: "Child checkbox 4", isChecked: false },
  ],
}

