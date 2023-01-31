import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsBreadcrumb from "./rds-breadcrumb";

export default {
  title: "Elements/Breadcrumb",
  component: RdsBreadcrumb,
  argTypes: {
    // role: {
    //   options: [
    //     "default",
    //     "advance",
    //     "arrow"
    //   ],
    //   control: { type: "radio" },
    // },
  },
} as ComponentMeta<typeof RdsBreadcrumb>;

const Template: ComponentStory<typeof RdsBreadcrumb> = (args) => (
  <RdsBreadcrumb {...args} />
);

// export const Default = Template.bind({});
// Default.args = {
//   role: "default",
//   breadItems: [{
//     label: "Home",
//     route: "#",
//     disabled: true
//   },
//   {
//     label: "Library",
//     route: "#",
//     disabled: true
//   },
//   {
//     label: "Data",
//     active: true,
//     disabled: true
//   }]
// };

export const Default = Template.bind({});
Default.args = {
  role: "advance",
  breadItems: [
    {
      label: "Home",
      id: 1,
      route: "#",
      disabled: false,
      icon: "home",
      iconFill: false,
      iconstroke: true,
      iconWidth: "15px",
      iconHeight: "15px",
      iconColor: "primary",
      active: false,
    },
    {
      label: "About",
      id: 2,
      route: "#",
      disabled: false,
      icon: "information",
      iconFill: false,
      iconstroke: true,
      iconWidth: "15px",
      iconHeight: "15px",
      iconColor: "primary",
      active: false,
    },
    {
      label: "Contact",
      id: 3,
      active: false,
      disabled: true,
      icon: "phone",
      iconFill: false,
      iconstroke: true,
      iconWidth: "15px",
      iconHeight: "15px",
      iconColor: "primary",
    },
  ],
};

// export const Arrow = Template.bind({});
// Arrow.args = {
//   role: 'arrow',
//   breadItems: [{
//     label: "Home",
//     route: "#",
//     disabled: true
//   },
//   {
//     label: "Library",
//     route: "#",
//     disabled: true
//   },
//   {
//     label: "Data",
//     active: true,
//     disabled: true
//   }]
// };
