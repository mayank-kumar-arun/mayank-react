import React, { useEffect} from "react";
import Chart from 'chart.js/auto';
import "./rds-chart-pie.scss"

export interface RdsPieprops {
  chartLabels:any[],
  chartOptions:any,
  chartDataSets:any[],
  
}

const RdsPieChart = (props:RdsPieprops) => {
 const CanvasId = "myChart";
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    const pieCanvas = new Chart(ctx, {
      type: "pie",
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

export default RdsPieChart;
