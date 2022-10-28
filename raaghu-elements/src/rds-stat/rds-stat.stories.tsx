import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsStat from "./rds-stat";

export default {
  title: "Elements/Stat",
  component: RdsStat,
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
    displayType:{
        options:[
            "basic",
            "advance",
        ],
        control: { type: "select" },
    }
  }
} as ComponentMeta<typeof RdsStat>;

const Template: ComponentStory<typeof RdsStat> = (args) => (
  <RdsStat {...args}/>
);

export const Default = Template.bind({});
Default.args = {
    displayType:"basic",
    items: [
        {
          "title": "SAM SMITH",
          "value": "2370",
          "icon": "star",
          "iconHeight": "80px",
          "iconWidth": "80px",
          "iconFill": true,
          "colorFill": "#7e2eef",
          "strokeColor":"#7e2eef"
        },
      ]
};
