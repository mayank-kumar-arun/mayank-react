import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsDropdownList from "./rds-dropdown-list";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Elements/DropdownList",
  component: RdsDropdownList,
 
  
} as ComponentMeta<typeof RdsDropdownList>;


const Template: ComponentStory<typeof RdsDropdownList> = (args) => <RdsDropdownList {...args} />;

export const Default = Template.bind({});

Default.args = {
    
    width: '100px',
   listItems : [
      {
        value: "Deutsch",
       
        icon: "de",
        iconWidth: "20px",
        iconHeight: "20px",
      },
      {
        value: "English(IND)",
        
        icon: "in",
        iconWidth: "20px",
        iconHeight: "20px",
      },
      {
        value: "English (Default)",
       
        icon: "us",
        iconWidth: "20px",
        iconHeight: "20px",
      },
    ],
   
};


