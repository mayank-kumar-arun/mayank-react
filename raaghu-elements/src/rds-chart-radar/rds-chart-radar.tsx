import React, { useEffect} from "react";
import Chart from 'chart.js/auto';
//import "./rds-chart-Radar.scss"

export interface RdsRadarprops {
  chartLabels:any[],
  chartOptions:any,
  chartDataSets:any[],
  
}

const RdsRadarChart = (props:RdsRadarprops) => {
 const CanvasId = "myChart";
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    const RadarCanvas = new Chart(ctx, {
      type: "radar",
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

export default RdsRadarChart;
