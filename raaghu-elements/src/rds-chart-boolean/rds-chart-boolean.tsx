import React, { useEffect} from "react";
import Chart from 'chart.js/auto';

export interface RdsBooleanChartProps {
  ChartLabels:any[],
  ChartOptions:any,
  chartDataSets:any[],
  chartdata: any[],
  chartWidth: number,
  chartStyle:string,
}

const RdsBooleanChart = (props: RdsBooleanChartProps) => {
 const CanvasId = "myChart";
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    const lineCanvas = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: props.ChartLabels,
        datasets:props.chartDataSets
      },
      options: props.ChartOptions,
    });
  });

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsBooleanChart;
