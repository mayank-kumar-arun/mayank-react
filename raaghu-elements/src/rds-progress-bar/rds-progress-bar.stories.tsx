import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsProgressBar from "./rds-progress-bar";

export default {
  title: "Elements/ProgressBar",
  component: RdsProgressBar,
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
      ],
      control: { type: "select" },
    },
    striped: {
      options: ["default", "progress-bar-striped"],
      control: { type: "radio" },
    },
    role: {
      options: ["single", "multiple"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof RdsProgressBar>;

const Template: ComponentStory<typeof RdsProgressBar> = (args) => (
  <RdsProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  role:"single",
  colorVariant: "primary",
  striped: "default",
  progressWidth: 40,
  animation: false,
  height: 15,
};

export const MultiProgressBar = Template.bind({});
MultiProgressBar.args = {
  role:"multiple",
  height: 15,
  progressValues:[
    {
      "progressWidth": 50,
      "colorVariant": "success",
      "stripe": "progress-bar-striped",
      "animation": "progress-bar-animated"
    },
    {
      "progressWidth": 20,
      "colorVariant": "danger"
    },
    {
      "progressWidth": 30,
      "colorVariant": "info"
    }
  ]
}
