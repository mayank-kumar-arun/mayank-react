import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompInformation from "./rds-comp-information";

export default {
  title: "Components/Information",
  component: RdsCompInformation,
} as ComponentMeta<typeof RdsCompInformation>;

const Template: ComponentStory<typeof RdsCompInformation> = (args) => (
  <RdsCompInformation {...args} />
);

export const Default = Template.bind({});

Default.args = {
  inputTypeList: [
    {
      label: "One",
    },
    {
      label: "two",
    },
    {
      label: "three",
    },
    {
      label: "four",
    },
  ],
  informationItemInitial: {
    propertyName: "demo",
    displayName: "demo",
    inputValue: "demo",
  },

  reset: false,
};
