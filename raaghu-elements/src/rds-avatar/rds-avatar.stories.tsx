import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RdsAvatar from "./rds-avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Elements/Avatar",
  component: RdsAvatar,
  argTypes: {
    titleAlign: {
      options: [
        "horizontal",
        "vertical"
      ],
      control: { type: "select" },
    },
}
  
} as ComponentMeta<typeof RdsAvatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RdsAvatar> = (args:any) => <RdsAvatar {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    colorVariant: 'yellow',
    firstName: 'sania',
    lastName:'sonkaria',
    role:"developer",
    isTitle:true,
   // titleAlign:"horizontal",
    withProfilePic:true,
    profilePic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU"
};
