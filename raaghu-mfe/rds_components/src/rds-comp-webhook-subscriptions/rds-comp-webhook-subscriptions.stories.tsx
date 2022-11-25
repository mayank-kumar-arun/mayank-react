import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompWebhookSubscription from "./rds-comp-webhook-subscriptions";

export default {
  title: "Components/Webhook Subscription",
  component: RdsCompWebhookSubscription,

} as ComponentMeta<typeof RdsCompWebhookSubscription>;


const Template: ComponentStory<typeof RdsCompWebhookSubscription> = (args) => 
  <RdsCompWebhookSubscription {...args} />;


export const Default = Template.bind({});

Default.args ={


}

