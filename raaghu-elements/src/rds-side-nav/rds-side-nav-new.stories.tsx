import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsSideNav from "./rds-side-nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default {
  title: "Elements/Side Navigation",
  component: RdsSideNav,
} as ComponentMeta<typeof RdsSideNav>;

const Template: ComponentStory<typeof RdsSideNav> = (args) => (
  <BrowserRouter>
    <RdsSideNav {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  sideNavItems: [
    {
      key: "0",
      label: "Dashboard",
      icon: "home",
      path: "/dashboard",
    },
    {
      key: "1",
      label: "Tenant",
      icon: "tenant",
      path: "",
    },
    {
      key: "2",
      label: "Administration",
      icon: "administration",
      children: [
        {
          key: "2-0",
          label: "Role",
          icon: "roles",
          path:""
        },
        {
          key: "2-1",
          label: "Users",
          icon: "users",
          path: "",
        },
      ],
    },
    {
      key: "3",
      label: "DEMO Components",
      icon: "demo_ui",
      path: "",
    },
  ],
};
