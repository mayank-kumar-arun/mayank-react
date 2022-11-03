import React, { useEffect} from "react";
import Chart from 'chart.js/auto';
//import "./rds-chart-doughnut.scss"

export interface RdsDoughnutprops {
  chartLabels:any[],
  chartOptions:any,
  chartDataSets:any[],
  titleText:string,
  subTitleText:string,
}

const RdsDoughnutChart = (props:RdsDoughnutprops) => {
 const CanvasId = "myChart";
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
        labels: props.chartLabels,
        datasets:props.chartDataSets
      },
      options: props.chartOptions,
    });
  });

  return (
    <div>
      <canvas id={CanvasId} ref={ctx} />
    </div>
  );
};

export default RdsDoughnutChart;
