import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompNotificationSettings from "./rds-comp-notification-settings";

export default {
  title: "Components/Notification Setting",
  component: RdsCompNotificationSettings,

  argTypes: {
    onCancel: { action: "Cancelled" },
    onSave: { action: "Saved" },
  },
} as ComponentMeta<typeof RdsCompNotificationSettings>;

const Template: ComponentStory<typeof RdsCompNotificationSettings> = (args) => (
  <RdsCompNotificationSettings {...args} />
);

export const Default = Template.bind({});

Default.args = {
  default: [{ enabled: false, NewUser: false, NewTenant: false }],
};
