import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsToast from "./rds-toast";


export default {
  title: "Elements/Toast",
  component: RdsToast,
  argTypes: {
    colorVariant: {
      options: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "danger",
        "dark",
        "light",
      ],
      control: { type: "select" },
    }, borderColor: {
        options: [
          "primary",
          "secondary",
          "success",
          "info",
          "warning",
          "danger",
          "dark",
          "light",
        ],
        control: { type: "select" },
      },
  }
} as ComponentMeta<typeof RdsToast>;

const Template: ComponentStory<typeof RdsToast> = (args) => (
  <RdsToast {...args}> </RdsToast>
);


export const Default = Template.bind({});
Default.args = {
  headerTitle: 'Toast',
  message: 'This is a sample toast',
  headerColorVariant: 'light',
  showHeader:true,
};

export const withBorderDisplay = Template.bind({});
withBorderDisplay.args = {
  headerTitle: 'Toast',
  colorVariant: 'light',
  borderColor:"primary",
  message: 'This is a sample toast',
  showHeader:true,
  
};

export const toastWithAutohide = Template.bind({});
toastWithAutohide.args = {
  headerTitle: 'Toast',
  message: 'This is a sample toast',
  autohide: true,
  showHeader:true,
  colorVariant: 'light'
};

export const toastWithDelay = Template.bind({});
toastWithDelay.args = {
  headerTitle: 'Toast',
  autohide: true,
  showHeader:true,
  message: 'This is a sample toast',
  delay: 5000,
  colorVariant: 'light'
};


export const toastWithoutHeader = Template.bind({});
toastWithoutHeader.args = {
  headerTitle: 'Toast',
  showHeader: false,
  message: 'This is a sample toast',
  colorVariant: 'light',
};
