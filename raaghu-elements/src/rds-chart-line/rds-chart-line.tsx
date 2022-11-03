import React, { useEffect} from "react";
import Chart from 'chart.js/auto';
import "./rds-chart-line.scss"

export interface Rdslineprops {
  labels:any[],
  options:any,
  dataSets:any[],
  height:number,
  width:number
  id:string
}

const RdsLineChart = (props:Rdslineprops) => {
 const CanvasId = props.id;
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    let lineCanvas = new Chart(ctx, {
      type: "line",
      data: {
        labels: props.labels,
        datasets:props.dataSets
      },
      options: props.options,
    });

      lineCanvas.canvas.style.height = props.height + 'px';
      lineCanvas.canvas.style.width = props.width + "px";
  });
  

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsLineChart;
