import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsDropdownList from "./rds-dropdown-list";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Elements/DropdownList",
  component: RdsDropdownList,
  argTypes: {
    size: {
        options: ["small","mid","large"],
        control: { type: "radio" },
      },
      colorVariant: {
        options: ["primary", "secondary","success","danger","warning","info","light","dark","white"],
        control: { type: "select" },
      },
      direction: {
        options: ["Drop-Up", "Drop-Right","Drop-Down","Drop-Left"],
        control: { type: "radio" },
      },
      role:{
        options: ["Dropdown-Button without split", "Dropdown-Button with split"],
        control: { type: "radio" },
      }
  },
  
} as ComponentMeta<typeof RdsDropdownList>;


const Template: ComponentStory<typeof RdsDropdownList> = (args) => <RdsDropdownList {...args} />;

export const Default = Template.bind({});

Default.args = {
    placeholder:"Filter",
    size: "mid",
    darkDropdown:false,
    label:"Dropdown Button",
    direction:"Drop-Down",
    role:"Dropdown-Button without split",
    listItems: [
      {
        value: "Export To Excel",
        id: "1",
        href: "",
      },
      {
        value: "Import From Excel",
        id: "2",
        href: "",
      },
      {
        value: "Click here download sample import file",
        id: "3",
        href: "",
      },
    ],
   
};


