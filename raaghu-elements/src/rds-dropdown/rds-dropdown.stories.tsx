import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsDropdown from "./rds-dropdown"


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Elements/Dropdown",
  component: RdsDropdown,
  argTypes: {
    size: {
        options: ["small","mid","large"],
        control: { type: "select" },
      },
      DropdownType: {
        options: ["rectangle","circle","pill"],
        control: { type: "select" },
      },
      buttonColor: {
        options: ["primary", "secondary","success","danger","warning","info","light","dark","white"],
        control: { type: "select" },
      },
      colorVariant: {
        options: ["primary", "secondary","success","danger","warning","info","light","dark","white"],
        control: { type: "select" },
      },
  }
} as ComponentMeta<typeof RdsDropdown>;


const Template: ComponentStory<typeof RdsDropdown> = (args) => <RdsDropdown {...args} />;

export const RdsDropdownDefault = Template.bind({});

RdsDropdownDefault.args = {
    label:"Button",
  number: 9,
  size: "Choose option...",
  buttonColor: "primary",
  DropdownColor: "secondary",
  DropdownType:"Choose option...",
};

export const RdsDropdownWithSplit = Template.bind({});


RdsDropdownWithSplit.args = {
//   icon:"Button",
//   number: 9,
//   size: "Choose option...",
//   DropdownType:"Choose option...",
//   buttonColor: "primary",
//   DropdownColor: "secondary",
  
};
