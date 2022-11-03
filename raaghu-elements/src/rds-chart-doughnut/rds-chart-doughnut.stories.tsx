import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsDoughnutChart from "./rds-chart-doughnut";


export default {
  title: "Charts/Doughnut Chart",
  component: RdsDoughnutChart,
} as ComponentMeta<typeof RdsDoughnutChart>;

const Template: ComponentStory<typeof RdsDoughnutChart> = (args) => <RdsDoughnutChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  id:1,
  chartHeight:200,
  chartWidth:255,
  chartLabels:['Red',
  'Blue',
  'Yellow'],
  chartOptions: { },
  chartDataSets:[{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }],

  titleText: "35 k",
  subTitleText:"deioj",

 
  
};
