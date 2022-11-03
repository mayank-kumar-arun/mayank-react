import React, { useEffect} from "react";
import Chart from 'chart.js/auto';

export interface RdsBooleanChartProps {
  ChartLabels:any[],
  ChartOptions:any,
  chartDataSets:any[],
  chartWidth?: number,
  chartStyle:string,
  id:string,
  chartHeight?:number
}

const RdsBooleanChart = (props: RdsBooleanChartProps) => {
 const CanvasId = props.id;
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
      <canvas id={CanvasId} width={props.chartWidth} height={props.chartHeight} ref={ctx} />
    </div>
  );
};

export default RdsBooleanChart;
