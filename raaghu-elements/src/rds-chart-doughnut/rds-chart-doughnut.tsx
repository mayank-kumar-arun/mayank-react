import React, { useEffect} from "react";
import Chart from 'chart.js/auto';
//import "./rds-chart-doughnut.scss"

export interface RdsDoughnutprops {
  chartLabels:any[],
  chartOptions:any,
  chartDataSets:any[],
}

const RdsDoughnutChart = (props:RdsDoughnutprops) => {
 const CanvasId = "myChart";
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    const DoughnutCanvas = new Chart(ctx, {
      type:'doughnut',
      data: {
        labels: props.chartLabels,
        datasets:props.chartDataSets
      },
      options: props.chartOptions,
    });
  });

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsDoughnutChart;
