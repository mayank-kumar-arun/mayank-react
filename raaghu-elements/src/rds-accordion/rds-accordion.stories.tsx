import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsAccordion from "./rds-accordion";

export default {
  title: "Elements/Accordion",
  component: RdsAccordion,
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
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },
    role:{
      options:["button", "radio" , "checkbox"],
      control:{type: "select"}
    }
  },
}as ComponentMeta<typeof RdsAccordion>;

const Template: ComponentStory<typeof RdsAccordion> = (args) => (
  <RdsAccordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  
}
