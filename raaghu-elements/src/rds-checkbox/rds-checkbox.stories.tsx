import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCheckbox from "./rds-checkbox";

export default {
  title: "Elements/Checkbox",
  component: RdsCheckbox,
  argTypes:{
    state: {
      options:["Checkbox" ,"Indeterminate" , "ErrorCheckbox"],
      control: { type: "select" },
  }
  }
} as ComponentMeta<typeof RdsCheckbox>;

const Template: ComponentStory<typeof RdsCheckbox> = (args) => (
  <RdsCheckbox {...args} />
);
                                                                                                                                                                                              
export const Default = Template.bind({});
Default.args = {
  state: 'Checkbox',
  label: "default checkbox",
  checked:false,
  isDisabled:false,
  isSwitch:false,
  withlabel:true,
  id: 'id1',
  errorMessage:"error Message"
};



// import React from "react";
// import { ComponentStory, ComponentMeta } from "@storybook/react";
// import RdsCheckbox from "./rds-checkbox";

// export default {
//   title: "Elements/Checkbox",
//   component: RdsCheckbox,
//   argTypes: {
//     state: {
//       options: ["Checkbox", "Indeterminate", "ErrorCheckbox"],
//       control: { type: "select" },
//     },
//   },
// } as ComponentMeta<typeof RdsCheckbox>;

// const Template: ComponentStory<typeof RdsCheckbox> = (args) => (
//   <RdsCheckbox {...args} />
// );

// export const Default = Template.bind({});
// Default.args = {
//   label: "default checkbox",
//   checked: false,
//   isDisabled: false,
//   isSwitch: false,
//   withLabel: true,
//   state: "checkbox",
//   id: "id1",
//   focus: false,
// };
