import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsBigNumber from "./rds-big-number";

export default {
  title: "Elements/BigNumber",
  component: RdsBigNumber,
  argTypes: {
    // colorVariant: {
    //   options: [
    //     "primary",
    //     "secondary",
    //     "success",
    //     "info",
    //     "warning",
    //     "danger",
    //     "dark",
    //     "light",
    //     "review",
    //   ],
    //   control: { type: "select" },
    // },
    subTitleColorVariant: {
        options: [
          "primary",
          "secondary",
          "success",
          "info",
          "warning",
          "danger",
          "dark",
          "light",
          "review",
        ],
        control: { type: "select" },
      },
      textAalign:{
        options:[
            "start",
            "center",
            "end" ,
        ],
        control:{type :"select"},
      },
  }
} as ComponentMeta<typeof RdsBigNumber>;

const Template: ComponentStory<typeof RdsBigNumber> = (args) => (
  <RdsBigNumber {...args} >{args.children}</RdsBigNumber>
);

export const Default = Template.bind({});
Default.args = {
   // colorVariant:"primary",
    textAlign:"start",
  //  subTitleColorVariant:"danger",
   // children?:any,
   isBackground:true,
};

