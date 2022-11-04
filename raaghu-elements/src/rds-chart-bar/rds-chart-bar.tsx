import React, { useEffect} from "react";
import Chart from 'chart.js/auto';

export interface RdsBarChartProps {
  labels:any[],
  options:any,
  dataSets:any[],
  width: number,
  height:number,
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
    
    const BarCanvas = new Chart(ctx, {
      type: "bar",
      data: {
        labels: props.labels,
        datasets:props.dataSets
      },
      options: props.options,
    });
      BarCanvas.canvas.style.height = props.height + 'px';
      BarCanvas.canvas.style.width = props.width + "px";
  });

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsBarChart;
