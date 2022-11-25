import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsWidget from "./rds-widget";

export default {
  title: "Elements/Widget",
  component: RdsWidget,
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
        'gradient-primary'
      ],
      control: { type: "select" },
    },
  }
} as ComponentMeta<typeof RdsWidget>;

const Template: ComponentStory<typeof RdsWidget> = (args) => (
  <RdsWidget {...args}>{args.children}</RdsWidget>
);

export const Default = Template.bind({});
Default.args = {
  headerTitle: "Widget",
  isRefreshIcon: true, 
  children: <div> Hello</div>,
};
