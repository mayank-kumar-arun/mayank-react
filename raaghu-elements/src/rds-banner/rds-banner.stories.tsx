import React from 'react';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import RdsBanner, { RdsBannerProps } from './rds-banner'

export default {
  title: 'Elements/Banner',
  component: RdsBanner,
  argTypes: {
    position: {
      options: ['top', 'bottom'],
      control: { type: 'radio' }
    },
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
  }
} as ComponentMeta<typeof RdsBanner>;

const Template: ComponentStory<typeof RdsBanner> = (args) => <RdsBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  alignCenter: false,
  bannerText: "Hi, this is a banner.",
  sticky: false,
  position: "top",
  colorVariant: "primary"
};

export const With_icon = Template.bind({});
With_icon.args = {
  alignCenter: false,
  bannerText: "Hi, this is a banner.",
  sticky: false,
  position: "top",
  colorVariant: "primary",
  icon: "information",
};

export const With_close_button = Template.bind({});
With_close_button.args = {
  alignCenter: false,
  bannerText: "Hi, this is a banner.",
  sticky: false,
  position: "top",
  colorVariant: "primary",
  icon: "information",
  closeButton: true
};