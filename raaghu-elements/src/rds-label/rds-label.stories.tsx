import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsLabel from './rds-label'

export default {
    title: "Elements/Label",
    component: RdsLabel,
   
  } as ComponentMeta<typeof RdsLabel>;

  const Template: ComponentStory<typeof RdsLabel> = (args) => (
    <RdsLabel {...args} />
  );

export const Default = Template.bind({});
Default.args = {
    label:'',
    multiline: false,
    bold:false,
    italic:false,
}
  