import React, { useEffect} from "react";
import Chart from 'chart.js/auto';
import "./rds-chart-line.scss"

export interface Rdslineprops {
  chartLabels:any[],
  chartOptions:any,
  chartDataSets:any[],
}

const RdsLineChart = (props:Rdslineprops) => {
 const CanvasId = "myChart";
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    const lineCanvas = new Chart(ctx, {
      type: "line",
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

export default RdsLineChart;
