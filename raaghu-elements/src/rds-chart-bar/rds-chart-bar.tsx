import React, { useEffect} from "react";
import Chart from 'chart.js/auto';

export interface RdsBarChartProps {
  chartLabels:any[],
  chartOptions:any,
  chartDataSets:any[],
  chartWidth: number,
  chartHeight:number,
  chartStyle:string,
  id:string
}

const RdsBarChart = (props: RdsBarChartProps) => {
 const CanvasId = props.id;
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    const lineCanvas = new Chart(ctx, {
      type: "bar",
      data: {
        labels: props.chartLabels,
        datasets:props.chartDataSets
      },
      options: props.chartOptions,
    });
  });

  return (
    <div>
      <canvas id={CanvasId} height={props.chartHeight} width={props.chartWidth} ref={ctx} />
    </div>
  );
};

export default RdsBarChart;
