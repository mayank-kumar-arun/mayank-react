import React, { ReactNode, useEffect} from "react";
import Chart from 'chart.js/auto';
//import "./rds-chart-doughnut.scss"

export interface RdsDoughnutprops {

  labels:any[],
  options:any,
  dataSets:any[],
  id:string,
  height?:number,
  width?:number,
  titleText?:string,
  subTitleText?:string,
}

const RdsDoughnutChart = (props:RdsDoughnutprops) => {
 const CanvasId = props.id;
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    const title = props.titleText;
    const subTitle = props.subTitleText;
    let centerText = {
      id: 'counter3',
      beforeDraw(chart:any, args:any, options:any) {
        const { ctx, chartArea: { top, right, bottom, left, width, height } } = chart;
        ctx.save();
        ctx.font = '500 1.4rem Poppins';
        ctx.textAlign = 'center';
        ctx.fillText(title, width / 2, top + (height / 2.0));
        ctx.restore();

        ctx.font = '400 0.8rem Poppins';
        ctx.textAlign = 'center';
        ctx.fillText(subTitle, width / 2, (height / 0.85) / 2.0 + top);
        ctx.restore();
      }
    }
    const DoughnutCanvas = new Chart(ctx, {
      type:'doughnut',
      plugins:[centerText] ,
      data: {
        labels: props.labels,
        datasets:props.dataSets
      },
      options: props.options,
    });
    if (DoughnutCanvas !== null) {
     
      DoughnutCanvas.canvas.style.width = props.width + "px";
      DoughnutCanvas.canvas.style.height = props.height + "px";
     }
      return () => {
        DoughnutCanvas.destroy()
      }
  },[]);

  return (
    <div>
      <canvas id={CanvasId}  ref={ctx}></canvas>
    </div>
  );
};

export default RdsDoughnutChart;
