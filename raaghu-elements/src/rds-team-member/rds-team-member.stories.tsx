import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsTeamMember from './rds-team-member'

export default {
  title: "Elements/Team Member",
  component: RdsTeamMember,
  argTypes: {
    
  },
} as ComponentMeta<typeof RdsTeamMember>;

const Template: ComponentStory<typeof RdsTeamMember> = (args) => (
  <RdsTeamMember {...args} />
);

export const Default = Template.bind({});
Default.args = {
    teamItem :[
        {
          title: 'Tina',
          subTitle: 'Web Developer',
          imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
          twitterIcon: 'star',
          linkdineIcon: 'star',
          description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
        } 
      ]
};
