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
  <RdsBigNumber {...args} ></RdsBigNumber>
);

export const Default = Template.bind({});
Default.args = {
  bigNumberItems:[
  ],
  colorVariant: "light",
  textAlign: "center",
  subTitleColorVariant: "secondary",
  bigNumber:"$1300" ,
  subTitle:"~13",
   
};

