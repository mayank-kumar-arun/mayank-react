import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsBadge from "./rds-badge";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Elements/Badge",
  component: RdsBadge,
  argTypes: {
    size: {
        options: ["small","mid","large"],
        control: { type: "select" },
      },
      colorVariant: {
        options: ["primary", "secondary","success","danger","warning","info","light","dark","white"],
        control: { type: "select" },
      },
  }
} as ComponentMeta<typeof RdsBadge>;


const Template: ComponentStory<typeof RdsBadge> = (args) => <RdsBadge {...args} />;

export const RdsBadgeAsButton = Template.bind({});

RdsBadgeAsButton.args = {
    label:"Button",
  number: 9,
  size: "Choose option...",
  colorVariant: "primary"
};
