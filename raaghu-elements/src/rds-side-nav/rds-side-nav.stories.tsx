import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsSideNav from './rds-side-nav'

export default {
    title: "Elements/Side Nav",
    component: RdsSideNav,
   
  } as ComponentMeta<typeof RdsSideNav>;

  const Template: ComponentStory<typeof RdsSideNav> = (args) => (
    <RdsSideNav {...args} />
  );

export const Default = Template.bind({});
Default.args = {
sidenavItems:[
    {
        label: "Dashboard",
        icon: "home",
        path: "home"
    },
    {
        label: "Tenant",
        icon: "tenant",
        path: "tenant"
    },
    {
        label: "Administration",
        icon: "administration",
        path: "administration",
        children: [
            {
                label: "Role",
                icon: "roles",
                pat: "role"
            },
            {
                label: "Users",
                icon:"users",
                path: "users"
            }
        ]
    },
    {
        label: "DEMO Components",
        icon: "demo_ui",
        path: "demoComponents"
    }
]
}
  