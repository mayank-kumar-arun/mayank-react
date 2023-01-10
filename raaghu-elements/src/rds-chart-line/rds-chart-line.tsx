import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import "./rds-chart-line.scss";

export interface Rdslineprops {
  labels: any[];
  options: any;
  dataSets: any[];
  height: number;
  width: number;
  id: string;
}

const RdsLineChart = (props: Rdslineprops) => {
  let CanvasId = props.id;
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
        datasets: props.dataSets,
      },
      options: props.options,
    });
    lineCanvas.canvas.style.height = props.height + "px";
    lineCanvas.canvas.style.width = props.width + "px";

    // var gradient = ctx.createLinearGradient(0, 25, 0, 210);
    // // console.log("gradient :", gradient);
    // gradient.addColorStop(0, "rgba(48,22,194,76%)");
    // // console.log("gradient 2",gradient);
    // gradient.addColorStop(1, "rgba(12,5,47,8%)");
    // // console.log("gradient 3",gradient);
    // lineCanvas.data.datasets[0].backgroundColor = gradient;
    
    // var gradient1 = ctx.createLinearGradient(0, 25, 0, 210);
    // gradient1.addColorStop(0, "rgba(25, 70, 186,76%)");
    // gradient1.addColorStop(1, "rgba(12,5,47,8%)");
    // lineCanvas.data.datasets[1].backgroundColor = gradient1;

    return () => {
      lineCanvas.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsLineChart;
