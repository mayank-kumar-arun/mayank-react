import React, { useEffect} from "react";
import Chart from 'chart.js/auto';
import "./rds-chart-radar.scss";

export interface RdsRadarprops {
  labels:any[],
  options:any,
  dataSets:any[],
  height?:number,
  width?:number,
  id:string
}

const RdsRadarChart = (props:RdsRadarprops) => {
 const CanvasId = props.id;
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    const RadarCanvas = new Chart(ctx, {
      type: "radar",
      data: {
        labels: props.labels,
        datasets:props.dataSets
      },
      options: props.options,
    });
      RadarCanvas.canvas.style.height = props.height + 'px';
      RadarCanvas.canvas.style.width = props.width + "px";
  });

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsRadarChart;
