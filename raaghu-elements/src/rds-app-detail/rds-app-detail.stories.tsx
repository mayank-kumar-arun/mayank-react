import React from 'react';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import RdsAppDetail from'./rds-app-detail'

export default {
  title: 'Elements/App Detail',
  component: RdsAppDetail,
} as ComponentMeta<typeof RdsAppDetail>;

const Template: ComponentStory<typeof RdsAppDetail> = (args) => <RdsAppDetail {...args} />;


export const Default = Template.bind({});
Default.args = {
  title: 'Zapier', 
  subtitle: 'Build custom automation and intefrations with app', 
  icon: 'zapier',
  route: '/home',
  selected:true,
  iconHeight:'30px',
  iconWidth:'30px',
  iconFill:false,
  iconColor:"dark",
  iconStroke:true
};