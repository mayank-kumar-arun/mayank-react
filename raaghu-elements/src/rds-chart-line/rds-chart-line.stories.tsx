import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsLineChart from "./rds-chart-line";


export default {
  title: "Charts/Line Chart",
  component: RdsLineChart,
} as ComponentMeta<typeof RdsLineChart>;

const Template: ComponentStory<typeof RdsLineChart> = (args) => <RdsLineChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  ChartLabels:["January", "February", "March", "April", "May", "Jun", "July"],
  ChartOptions: {
    pointStyle: "star",
    radius: 7,
    responsive: true,
    maintainAspectRatio:false,
    aspectRatio:1,
    plugins: {
      legend: {
        position: 'top',
        align: "center",
        pointStyle: "bottom",
        labels: {
          usePointStyle: true
        },

      },
      tooltip: {
        usePointStyle: true,
      },
      filler: {
        propagate: false,
      },
      title: {
        display: true,
        text: 'Area Chart with boundries'
      }
    },
    interaction: {
      intersect: false,
    }
  },
  chartDataSets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
  
  chartWidth:600 ,
  chartStyle:"light",
};
