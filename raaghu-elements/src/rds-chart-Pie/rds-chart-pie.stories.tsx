import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsPieChart from "./rds-chart-pie";


export default {
  title: "Charts/Pie Chart",
  component: RdsPieChart,
} as ComponentMeta<typeof RdsPieChart>;

const Template: ComponentStory<typeof RdsPieChart> = (args) => <RdsPieChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  id:"chart pie",
  width:300,
  height:300,
  labels:['Red',
  'Blue',
  'Yellow'],
  options: {},
  dataSets:[{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }],
  

};
