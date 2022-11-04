import React, { useEffect} from "react";
import Chart from 'chart.js/auto';
import "./rds-chart-pie.scss"

export interface RdsPieprops {
  labels:any[],
  options:any,
  dataSets:any[],
  height?:number
  width?:number
  id:string
}

const RdsPieChart = (props:RdsPieprops) => {
 const CanvasId = props.id;
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    const pieCanvas = new Chart(ctx, {
      type: "pie",
      data: {
        labels: props.labels,
        datasets:props.dataSets
      },
      options: props.options,
    });
      pieCanvas.canvas.style.height = props.height + 'px';
      pieCanvas.canvas.style.width = props.width + "px";
  });

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsPieChart;
