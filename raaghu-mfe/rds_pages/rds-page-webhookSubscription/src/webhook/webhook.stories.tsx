import React from "react";
import { ComponentStory, ComponentMeta, addDecorator } from "@storybook/react";
import RdsPageWebhookSubscription from "./webhook";
import { Provider } from "react-redux";
import { store } from "../../../../libs/public.api";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Pages/Webhook Subscription",
  component: RdsPageWebhookSubscription,
} as ComponentMeta<typeof RdsPageWebhookSubscription>;

const Template: ComponentStory<typeof RdsPageWebhookSubscription> = (args) => (
  <RdsPageWebhookSubscription {...args} />
);

export const Default = Template.bind({});

Default.args = {};
