import React from 'react';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import RdsBanner, { RdsBannerProps } from './rds-banner'

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
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
        align: {
          options: ['start', 'center', 'end'],
          control: { type: 'select' }
        },
}} as ComponentMeta<typeof RdsBanner>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof RdsBanner> = (args) => <RdsBanner {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
    alignCenter: false,
    bannerText: "Hi, this is a banner." ,
    sticky: false,
    position: "top" ,
    colorVariant: "primary"
};