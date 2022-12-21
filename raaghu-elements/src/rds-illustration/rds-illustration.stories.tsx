import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsIllustration from "./rds-illustration";

export default {
  title: "Elements/Illustration",
  component: RdsIllustration,
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
      ],
      control: { type: "select" },
    },
  
  }
} as ComponentMeta<typeof RdsIllustration>;

const Template: ComponentStory<typeof RdsIllustration> = (args) => (
  <RdsIllustration {...args}/>
);

export const Default = Template.bind({});
Default.args = {
  label: " this djfdjfsdfj",
  subLabel:" here is djfff",
};
