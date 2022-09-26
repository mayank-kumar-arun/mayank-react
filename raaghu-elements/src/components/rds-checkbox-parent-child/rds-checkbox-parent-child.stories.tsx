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
    
}

