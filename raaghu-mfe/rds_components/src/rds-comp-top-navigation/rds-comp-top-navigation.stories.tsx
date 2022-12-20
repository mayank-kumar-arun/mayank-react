import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompTopNavigation from "./rds-comp-top-navigation";

export default {
  title: "Components/Top Navigation",
  component: RdsCompTopNavigation,
} as ComponentMeta<typeof RdsCompTopNavigation>;

const Template: ComponentStory<typeof RdsCompTopNavigation> = (args) => (
  <RdsCompTopNavigation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  navbarTitle:"Dashboard",
  navbarSubTitle: "Statistics and reports",
  notifications: [
    {
      status: "success",
      title: "Tenant added",
      urlTitle: "hello",
      // url:" " ,
      time: "a month ago",
      state: 1,
      userNotificationId: 0,
      selected: false,
    },

    {
      status: "error",
      title: "Tenant deleted",
      urlTitle: "hello",
      time: "a month ago",
      state: 1,
      userNotificationId: 1,
      selected: false,
    },

    {
      status: "warn",
      title: "Tenant added  warn",
      urlTitle: "hello",
      time: "a month ago",
      state: 1,
      userNotificationId: 2,
      selected: false,
    },

    {
      status: "info",
      title: "Tenant deleted info",
      urlTitle: "hello",
      time: "a month ago",
      state: 1,
      userNotificationId: 3,
      selected: false,
    },
  ],
  languageItems: [
    {
      value: "Deutsch",
      some: "value",
      key: "new",
      icon: "de",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      value: "English(IND)",
      some: "value",
      key: "refresh",
      icon: "in",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      value: "English (Default)",
      some: "value",
      key: "export",
      icon: "us",
      iconWidth: "20px",
      iconHeight: "20px",
    },
  ],
};
