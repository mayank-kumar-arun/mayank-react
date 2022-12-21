import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsLinkedAccount from "./rds-comp-linked-account";

export default {
  title: "Components/Linked Account",
  component: RdsLinkedAccount,
} as ComponentMeta<typeof RdsLinkedAccount>;

const Template: ComponentStory<typeof RdsLinkedAccount> = (args) => (
  <RdsLinkedAccount {...args} />
);

export const Default = Template.bind({});
Default.args = {
    
}
