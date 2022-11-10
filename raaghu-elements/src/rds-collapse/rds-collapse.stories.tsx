import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCollapse from './rds-collapse'

export default {
  title: "Elements/Collapse",
  component: RdsCollapse,
  argTypes: {
    
  },
} as ComponentMeta<typeof RdsCollapse>;

const Template: ComponentStory<typeof RdsCollapse> = (args) => (
  <RdsCollapse {...args} />
);

export const Default = Template.bind({});
Default.args = {
  buttonList:
  [
    {
      "colorVariant": "primary",
      "label": "Toggle Element",
      "id": "collapseExample"
    }
  ],
};

export const HorizontalCollapse = Template.bind({});
HorizontalCollapse.args = {
  horizontalCollapse: true,
  children: <h1>Collapse</h1>,
  buttonList:
  [
    {
      "colorVariant": "primary",
      "label": "Toggle Element",
      "id": "collapseExample"
    }
  ],
}

export const MultiToggle = Template.bind({});
MultiToggle.args= {
  multitoggle:true,
  buttonList:[
    {
      "colorVariant": "primary",
      "label": "Toggle First Element",
      "id": "collapseExample"
    },
    {
      "colorVariant": "primary",
      "label": "Toggle Second Element",
      "id": "collapseExample1"
    },
    {
      "colorVariant": "primary",
      "label": "Toggle Both Element",
      "id": "collapseExample,collapseExample1"
    }
  ]
}
