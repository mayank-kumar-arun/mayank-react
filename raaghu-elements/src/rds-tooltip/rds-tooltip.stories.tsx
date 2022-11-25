import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tooltip from './rds-tooltip'

export default {
  title: "Elements/Tooltip",
  component: Tooltip,
  argTypes: {
    
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => (
  <Tooltip {...args} />
);

export const Default = Template.bind({});
Default.decorators= [
    (Story) => (
      <div style={{ padding:'10% 50%' ,
      }}>
        <Story/>
      </div>
    ),
  ],
Default.args = {
    text: "This is tooltip",
    place: "right",
    children:<button className="btn btn-primary" >Button</button>
};
