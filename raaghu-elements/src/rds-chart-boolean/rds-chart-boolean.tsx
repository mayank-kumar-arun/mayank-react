import React, { useEffect} from "react";
import Chart from 'chart.js/auto';

export interface RdsBooleanChartProps {
  labels:any[],
  options:any,
  dataSets:any[],
  width?: number,
  chartStyle?:string,
  id:string,
  height?:number
}

const RdsBooleanChart = (props: RdsBooleanChartProps) => {
 const CanvasId = props.id;
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    const BoolCanvas = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: props.labels,
        datasets:props.dataSets
      },
      options: props.options,
    });
      BoolCanvas.canvas.style.height = props.height + 'px';
      BoolCanvas.canvas.style.width = props.width + "px";
      return () => {
        BoolCanvas.destroy()
      }
  },[]);

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsBooleanChart;
