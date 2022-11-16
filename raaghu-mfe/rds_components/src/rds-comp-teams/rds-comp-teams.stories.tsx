import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompTeams from './rds-comp-teams'

export default {
  title: "Components/Teams",
  component: RdsCompTeams,

} as ComponentMeta<typeof RdsCompTeams>;


const Template: ComponentStory<typeof RdsCompTeams> = (args) => 
  <RdsCompTeams {...args} />;


export const Default = Template.bind({});
Default.args ={
    teamItem : [
        [{
          title: 'Tina',
          subTitle: 'Web Developer',
          imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
          twitterIcon: 'twitter',
          linkdineIcon: 'linkedin',
          description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
        },],
        [{
          title: 'Wily',
          subTitle: 'Web Developer',
          imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
          twitterIcon: 'twitter',
          linkdineIcon: 'linkedin',
          description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
        } ,],
        [{
          title: 'Vivek',
          subTitle: 'Web Developer',
          imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
          twitterIcon: 'twitter',
          linkdineIcon: 'linkedin',
          description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
        } ,],
        [{
          title: 'Riya',
          subTitle: 'Web Developer',
          imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
          twitterIcon: 'twitter',
          linkdineIcon: 'linkedin',
          description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
        }    ] 
      ]
}