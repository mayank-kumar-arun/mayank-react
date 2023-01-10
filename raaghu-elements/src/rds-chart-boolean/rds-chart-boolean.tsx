import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { Buffer } from 'buffer';
import  {ChartIcons } from "./chart-icons";

export interface RdsBooleanChartProps {
  labels: any[];
  options: any;
  dataSets: any[];
  width?: number;
  chartStyle?: string;
  id: string;
  height?: number;
  centerIconName?:string;
}

const RdsBooleanChart = (props: RdsBooleanChartProps) => {
  const CanvasId = props.id;
  let ctx;
  
  
  const svg = ChartIcons[props.centerIconName || ""];
  const encodedSVG = Buffer.from(svg).toString('base64');
  const dataURL = `data:image/svg+xml;base64,${encodedSVG}`;


  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;

    let centerIcon = {
      id: "counter4",
      afterDraw(chart: any) {
        const ctx = chart.ctx;
        ctx.save();
        let myIconImage = new Image();
        myIconImage.src = dataURL;
        const iconSize = 50;
        const x = chart.width / 2 - iconSize / 2;
        const y = chart.height / 2 - iconSize / 2;
        ctx.drawImage(myIconImage, x, y, iconSize, iconSize);
        ctx.restore();
      },
    }

    const BoolCanvas = new Chart(ctx, {
      type: "doughnut",
      plugins: [
        centerIcon
      ],
      data: {
        labels: props.labels,
        datasets: props.dataSets,
      },
      options: props.options,
    });
    if (BoolCanvas !== null) {
     
      BoolCanvas.canvas.style.height = props.height + "px";
      BoolCanvas.canvas.style.width = props.width + "px";
     }
    return () => {
      BoolCanvas.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsBooleanChart;
