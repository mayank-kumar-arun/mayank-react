import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompBillingAddress from "./rds-comp-billing-address";

export default {
  title: "Components/Billing Address",
  component: RdsCompBillingAddress,
  argTypes: {

  }
} as ComponentMeta<typeof RdsCompBillingAddress>;

const Template: ComponentStory<typeof RdsCompBillingAddress> = (args) => (
  <RdsCompBillingAddress {...args} />
);

export const Default = Template.bind({});
Default.args = {
    
};

