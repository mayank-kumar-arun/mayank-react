import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Todos from "./rds-size";

export default {
  title: "Elements/Size11",
  component: Todos,
  argTypes: {
    colorVariant: {
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
    sizeType: {
      options: ["withoutDescription", "withDescription"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Todos>;

const Template: ComponentStory<typeof Todos> = (args) => (
  <Todos {...args} />
);

export const Default = Template.bind({});
Default.args = {
  sizeType: "withoutDescription",
  sizeData: [
    { value: "XL", id: 1 },
    { value: "L", id:2 },
    { value: "M" ,id:3},
    { value: "S" ,id:4},
    { value: "XS",id:5 },
  ],
  sizeDataWithDescription: [
    { value: "13", description: "impoity input " },
    { value: "15", description: "impoity input and ngonint" },
    { value: "14", description: " with the passanger" },
  ],
};
