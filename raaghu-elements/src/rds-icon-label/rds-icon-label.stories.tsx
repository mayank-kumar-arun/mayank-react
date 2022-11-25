import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsIconLabel from './rds-icon-label'

export default {
    title: "Elements/Icon Label",
    component: RdsIconLabel,
    argTypes:{
        size: {
            options: ["small", "medium", "large"],
            control: { type: "select" },
          },
          iconSize: {
            options: ["small", "medium", "large"],
            control: { type: "select" },
          },
    }
   
  } as ComponentMeta<typeof RdsIconLabel>;

  const Template: ComponentStory<typeof RdsIconLabel> = (args) => (
    <RdsIconLabel {...args} />
  );

export const Default = Template.bind({});
Default.args = {
    label:'User Name',
    icon: 'users',
    size:'medium',
    iconSize:"medium",
}
  