import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsRadioButton from './rds-radio-button'

export default {
    title: "Elements/RadioButton",
    component: RdsRadioButton,
    argTypes: {
        displayType:{
            options:[
                'Default',
                'Horizontal'
            ],
            control: { type: "select" },
        }
      }
} as ComponentMeta<typeof RdsRadioButton>;

const Template: ComponentStory<typeof RdsRadioButton> = (args) => (
    <RdsRadioButton {...args} />
  );

export const Default = Template.bind({})
Default.args = {
  displayType: 'Default',
  id:"1",
  itemList : [
    {
      id: 1,
      label: "Radio Button 1",
      checked: false,
      name:'radio_button',
    },
    {
      id: 2,
      label: "Radio Button 2",
      checked: false,
      name:'radio_button',
    },
    {
      id: 3,
      label: "Radio Button 3",
      checked: true,
      name:'radio_button',
    },    
  ]
}

