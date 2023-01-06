import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsDoughnutChart from "./rds-chart-doughnut";

export default {
  title: "Charts/Doughnut Chart",
  component: RdsDoughnutChart,
} as ComponentMeta<typeof RdsDoughnutChart>;

const Template: ComponentStory<typeof RdsDoughnutChart> = (args) =>
<RdsDoughnutChart {...args} />
 ;

export const Default = Template.bind({});
Default.args = {
  height:400,
  id:"myChart" ,
  width:400,
  labels:['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  options: {
    maintainAspectRatio: false,
    type: 'doughnut',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Doughnut Chart'
        }
      }
    },
  },
  dataSets:[
    {
      label: 'Dataset 1',
      data: [20, 10, 30, 40],
      backgroundColor: [
        '#ff6384',
        '#ff9f40',
        '#ffcd56',
        '#4bc0c0'
      ],
      borderColor: [
        '#fff',
      ],
    }
  ],
 
  titleText: "35 k",
  subTitleText:"deioj",
};