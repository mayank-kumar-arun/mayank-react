import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsAreaChart from "./rds-chart-area";


export default {
  title: "Charts/Area Chart",
  component: RdsAreaChart,
} as ComponentMeta<typeof RdsAreaChart>;

const Template: ComponentStory<typeof RdsAreaChart> = (args) => <RdsAreaChart {...args} />;

export const Default = Template.bind({});
Default.args = {
  id:"area chart",
  width:300,
  height:300,
  labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  options: {
    radius: 0,
    pointStyle: 'circle',
    responsive: true,
    borderWidth: 2,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: 'top',
        align: "end",
        pointStyle: "circle",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          padding: 30,
          height: 10
        },
      },
      tooltip: { enabled: true },
    },
    scales:
    {
      y: {
        beginAtZero: true,
        legend: {
          labels: {
            maxheight: 10
          },
        },
        grid: {
          display: false
        }
      },
      x: {
        grid: {
          display: false
        }
      },
    },
    tooltip: {
      display: true,
      usePointStyle: true,
    },
  },
  dataSets: [
    {
      label: 'Sales',
      data: [600, 462, 405, 362, 350, 350.5, 320.8, 318, 605, 689, 352, 354],
      borderColor: '#4DCFFF',
      pointBackgroundColor: '#4DCFFF',
      backgroundColor: '--chart-line-color1',
      fill: true,
      pointRadius: 3,
      // fillColor: "rgba(195, 40, 96, 0.1)",
      tension: 0.4,
    },
    {
      label: 'Revenue',
      data: [250, 780.2, 780.4, 650, 455, 455.5, 455.8, 456, 610, 455, 250, 254],
      borderColor: '#863BFF',
      pointBackgroundColor: '#863BFF',
      backgroundColor: '--chart-line-color2',
      fill: true,
      pointRadius: 3,
      tension: 0.4,
    }
  ],
  isGradient:true,
  chartWidth:600 ,
  chartStyle:"light",
};
