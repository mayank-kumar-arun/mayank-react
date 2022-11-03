import React, { ReactNode, useEffect} from "react";
import Chart from 'chart.js/auto';
//import "./rds-chart-doughnut.scss"

export interface RdsDoughnutprops {
  children: ReactNode;
  chartLabels:any[],
  chartOptions:any,
  chartDataSets:any[],
  id:string,
  chartHeight?:number,
  chartWidth?:number,
  
}

const RdsDoughnutChart = (props:RdsDoughnutprops) => {
 const CanvasId = props.id;
  let ctx;
 

  useEffect(() => {
    const canvasElm = document.getElementById(
      CanvasId
    ) as HTMLCanvasElement | null;
    ctx = canvasElm?.getContext("2d") as CanvasRenderingContext2D;
    
    const DoughnutCanvas = new Chart(ctx, {
      type:'doughnut',
      data: {
        labels: props.chartLabels,
        datasets:props.chartDataSets
      },
      options: props.chartOptions,
    });
  });

  return (
    <div>
      <canvas id={CanvasId}  ref={ctx} height={props.chartHeight} width={props.chartWidth}>{props.children}</canvas>
    </div>
  );
};

export default RdsDoughnutChart;
