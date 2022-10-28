import {RdsWidget} from '../rds-elements'
import {RdsLineChart , RdsBigNumber} from '../rds-elements'
const RdsCompAdminDashboard = () =>{
    return (
    <div>

        <div className="dark">
            <div className="row">
                <div className="col-md-6">
                    <RdsWidget headerTitle={'Monthly Summary'} >
                      <div >
                        <RdsLineChart chartLabels={["monthlySummaryLabels"]} chartOptions={"monthlySummarychartOptions"} chartDataSets={["monthlySummaryDataSets"]}></RdsLineChart>

                      </div>
                    </RdsWidget>
                </div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <RdsWidget headerTitle={'Sales'}>
                                    <div>
                                        <RdsBigNumber >1500</RdsBigNumber>
                                    </div>
                                </RdsWidget>
                                <rds-widget [isRefreshRequired]="false" [headerTitle]="translate.instant('Sales')" cardheight = 'card-stretch-half'
                                    (onRefresh)="LoadSalesData()">  
                                    <div body>
                                        <rds-big-number-widget [bigNumber]="'$' +SalesPrice"  [subText]="'+$' +SalesProfit"
                                        [icon]="'triangle_up'" [iconHeight]="'12px'" [iconWidth]="'12px'" [iconFill]="true" [iconStroke]="true" [textAlign]="'text-start'" subTitleColorVariant="success"
                                        ></rds-big-number-widget>
                                    </div>
                                </rds-widget>
                           </div>
                          <div>
                            <rds-widget [isRefreshRequired]="false" [headerTitle]="translate.instant('Revenue')" [colorVariant]="'primary'" cardheight = 'card-stretch-half'>
                            <div body>
                                <rds-big-number-widget  [iconFill]="true" [iconStroke]="true" [bigNumber]="'$' +RevenuePrice" [textAlign]="'text-start'" subTitleColorVariant="warning" [colorVariant]="'primary'"
                                [subText]="'-$' +RevenueProfit" [icon]="'triangle_down'" [iconHeight]="'12px'" [iconWidth]="'12px'" 
                                ></rds-big-number-widget>
                            </div>
                            </rds-widget>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <rds-widget [isRefreshRequired]="true"
                            [headerTitle]="translate.instant('Profit Share')" cardheight = 'card-stretch' (onRefresh)="LoadProfitShare()">
                            <div body>
                            <rds-big-number-widget [bigNumber]="'$' +ProfitSharePrice" [textAlign]="'text-start'"></rds-big-number-widget>
                            <div class="col col-sm-12">
                                <rds-chart-doughnut [ChartDataSets]="pschartDatasets" [titleText]="'35 K'" [subTitleText]="'Profit'" chartId="psChart"
                                [chartWidth]="pschartWidth" [chartHeight]="pschartHeight" [chartLabels]="pschartLabels"
                                [chartOptions]="pschartOptions" chartType="doughnut">
                                </rds-chart-doughnut>
                            </div>
                            </div>
                          </rds-widget>
                        </div>
                     </div>
                 </div>
            </div>
        </div>
    </div>
    
       
    )
}


export default RdsCompAdminDashboard;

