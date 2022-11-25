import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsFileUploader from "./rds-file-uploader";

export default {
  title: "Elements/File Uploader",
  component: RdsFileUploader,
  argTypes: {
    size: {
      options: ["small", "mid", "large"],
      control: { type: "radio" },
    },
    colorVariant: {
      options: [
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "white",
      ],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof RdsFileUploader>;

const Template: ComponentStory<typeof RdsFileUploader> = (args) => (
  <RdsFileUploader {...args} />
);

export const Default = Template.bind({});

Default.args = {
  placeholder: "Filter",
  size: "mid",
  multiple: false,
};

export const Multiple = Template.bind({});

Multiple.args = {
  placeholder: "Filter",
  size: "mid",
  multiple: true,
};
