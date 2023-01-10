import React, { useEffect, useState} from "react";
import Chart from 'chart.js/auto';

export interface RdsBarChartProps {
  labels:any[],
  options:any,
  dataSets:any[],
  width: number,
  height:number,
  id:string,
  // isGradient: boolean;
}

const RdsBarChart = (props: RdsBarChartProps) => {
 const CanvasId = props.id;
  let ctx;
  // const [color, setColor] = useState()
 

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
      
      // var gradient = ctx.createLinearGradient(0, 50, 0, 300);
      // gradient.addColorStop(0, "rgba(54, 162, 235, 76%)");
      // gradient.addColorStop(1, "rgba(54, 162, 235, 8%)");
      // {props.isGradient ? (
      // BarCanvas.data.datasets[0].backgroundColor = gradient
      // ): null}
      
      return () => {
        BarCanvas.destroy()
      }
  },[]);

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsBarChart;
