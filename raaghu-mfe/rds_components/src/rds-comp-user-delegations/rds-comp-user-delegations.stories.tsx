import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsUserDelegations from "./rds-comp-user-delegations";

export default {
  title: "Components/User Delegations",
  component: RdsUserDelegations,
  argTypes: {
    onSubmit: { action: "Saved" },
  },
} as ComponentMeta<typeof RdsUserDelegations>;

const Template: ComponentStory<typeof RdsUserDelegations> = (args) => (
  <RdsUserDelegations {...args} />
);

export const Default = Template.bind({});
Default.args = {
  selectuser: [
    { name: "Vikrant", id: 1 },
    { name: "Harjeet", id: 2 },
    { name: "seep", id: 3 },
    { name: "Deep", id: 4 },
    { name: "Harpreet", id: 5 },
    { name: "Amardeep", id: 6 },
    { name: "Greet", id: 7 },
    { name: "Preet", id: 8 },
    { name: "Geet", id: 9 },
    { name: "Jeet", id: 10 },
  ],
};
