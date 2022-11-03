import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsAccordionTrial from './rds-accordion-trial'

export default {
  title: "Elements/Accordion trial",
  component: RdsAccordionTrial,
  argTypes: {
    
  },
} as ComponentMeta<typeof RdsAccordionTrial>;

const Template: ComponentStory<typeof RdsAccordionTrial> = (args) => (
  <RdsAccordionTrial {...args} />
);

export const Default = Template.bind({});
Default.args = {
  
};
