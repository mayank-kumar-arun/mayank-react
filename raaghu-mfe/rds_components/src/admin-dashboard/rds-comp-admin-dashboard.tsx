import {RdsWidget} from '../rds-elements'
import {RdsLineChart , RdsBigNumber , RdsDoughnutChart, RdsBooleanChart, RdsBarChart} from '../rds-elements'
const RdsCompAdminDashboard = () =>{

    const monthlySummaryChartOptions = () =>{
        return 
 
    }
    return (
    <div>

        <div className="dark">
            <div className="row">
                <div className="col-md-6">
                    <RdsWidget headerTitle={'Monthly Summary'} className="card-stretch" >
                      <div  >
                        <RdsLineChart id='LineChart' height={250} width={458} labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']} options={[{radius: 0,
                                                                                                                                                                                                                pointStyle: 'circle',
                                                                                                                                                                                                                responsive: true,
                                                                                                                                                                                                                borderWidth:1,
                                                                                                                                                                                                                maintainAspectRatio: false,
                                                                                                                                                                                                                plugins: {
                                                                                                                                                                                                                title: {
                                                                                                                                                                                                                    display: false,
                                                                                                                                                                                                                },
                                                                                                                                                                                                                legend: {
                                                                                                                                                                                                                    position: 'top',
                                                                                                                                                                                                                    align: "end",
                                                                                                                                                                                                                    pointStyle: "circle",
                                                                                                                                                                                                                    labels: {
                                                                                                                                                                                                                    usePointStyle: true,
                                                                                                                                                                                                                    boxWidth: 8,
                                                                                                                                                                                                                    padding: 30,
                                                                                                                                                                                                                    height:10
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                },
                                                                                                                                                                                                                tooltip: { enabled: true },
                                                                                                                                                                                                                },
                                                                                                                                                                                                                scales:
                                                                                                                                                                                                                {
                                                                                                                                                                                                                y: {
                                                                                                                                                                                                                    beginAtZero:true, 
                                                                                                                                                                                                                    legend: {
                                                                                                                                                                                                                    labels: {
                                                                                                                                                                                                                    maxheight:10
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    },
                                                                                                                                                                                                                    grid: {
                                                                                                                                                                                                                    display: false
                                                                                                                                                                                                                    }   
                                                                                                                                                                                                                },
                                                                                                                                                                                                                x: {
                                                                                                                                                                                                                    grid: {
                                                                                                                                                                                                                    display: false
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                },
                                                                                                                                                                                                            },
                                                                                                                                                                                                                tooltip: {
                                                                                                                                                                                                                display: true,
                                                                                                                                                                                                                usePointStyle: true,
                                                                                                                                                                                                                },
                                                                                                                                                                                                            }]} dataSets={[{
                                        label: 'Sales',
                                        data: [190, 200, 133, 231, 112, 125, 135, 135.7, 266, 224, 122, 125],
                                        borderColor: '#4DCFFF',
                                        pointBackgroundColor: '#4DCFFF',
                                        backgroundColor: '#4DCFFF',
                                        fill: true,
                                        pointRadius: 3,
                                        fillColor: "rgba(195, 40, 96, 0.1)",
                                        tension: 0.4,
                                        },
                                        {
                                        label: 'Revenue',
                                        data: [290, 262, 205, 162, 150, 180, 206, 220, 240, 190, 275, 211],
                                        borderColor: '#863BFF',
                                        pointBackgroundColor: '#863BFF',
                                        backgroundColor: '#ECEEF4',
                                        fill: true,
                                        pointRadius: 3,
                                        tension: 0.4,
                                        }]}
                                ></RdsLineChart>

                      </div>
                    </RdsWidget>
                </div>

                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <RdsWidget headerTitle={'Sales'} className="card-stretch-half">
                                
                                        <RdsBigNumber className='border-0'  bigNumberItems={[{"icon":"triangle_up","iconHeight":"12px","iconWidth":"12px","iconFill":true ,}]} bigNumber={'$ 3,32,230.00'} subTitle={'+$ 2203.00'} subTitleColorVariant="success" textAlign="start" colorVariant='white' ></RdsBigNumber>
                                    
                                </RdsWidget>
                                {/* <rds-widget [isRefreshRequired]="false" [headerTitle]="translate.instant('Sales')" cardheight = 'card-stretch-half'
                                    (onRefresh)="LoadSalesData()">  
                                    <div body>
                                        <rds-big-number-widget [bigNumber]="'$' +SalesPrice"  [subText]="'+$' +SalesProfit"
                                        [icon]="'triangle_up'" [iconHeight]="'12px'" [iconWidth]="'12px'" [iconFill]="true" [iconStroke]="true" [textAlign]="'text-start'" subTitleColorVariant="success"
                                        ></rds-big-number-widget>
                                    </div>
                                </rds-widget> */}
                            </div>
                            <div>
                                <RdsWidget headerTitle={'Revenue'} >
                                    <div>
                                    <RdsBigNumber  bigNumberItems={[{"icon":"triangle_down","iconHeight":"12px","iconWidth":"12px","iconFill":true}]} bigNumber={'$ 9,72,900'} colorVariant="primary" subTitle="-$ 1203.00" textAlign="start" subTitleColorVariant='warning' ></RdsBigNumber>

                                    </div>
                                </RdsWidget>
                                    
                            </div>
                        </div>
                        <div className="col-md-6">
                            <RdsWidget headerTitle={'Profit Share'}>
                                <div>
                                    < RdsBigNumber bigNumber={'$ 39,330'} textAlign="start" bigNumberItems={[]}  ></RdsBigNumber>
                                    <div className="col col-sm-12">
                                       <RdsDoughnutChart id="doughnutId"  chartHeight={200} chartWidth={255} chartLabels={['Total Sales - 60 %', 'Revenue - 25 %', 'Expenses - 15 %']} chartOptions={{cutoutPercentage: 40,legend: {display: false },responsive: true,  maintainAspectRatio: false,
                                                                                                                                                        plugins: {

                                                                                                                                                        series: {
                                                                                                                                                            label: {
                                                                                                                                                            position: "inside",
                                                                                                                                                            text: 'total', // or "inside" | "outside"
                                                                                                                                                            display: false
                                                                                                                                                            }
                                                                                                                                                        },
                                                                                                                                                        doughnutlabel: {
                                                                                                                                                            labels: [{
                                                                                                                                                            text: '550',
                                                                                                                                                            font: {
                                                                                                                                                                size: 20,
                                                                                                                                                                weight: 'bold'
                                                                                                                                                            }
                                                                                                                                                            }, {
                                                                                                                                                            text: 'total'
                                                                                                                                                            }
                                                                                                                                                            ]
                                                                                                                                                        },
                                                                                                                                                        legend: {
                                                                                                                                                            display: true,
                                                                                                                                                            align: "middle",
                                                                                                                                                            position: 'right',
                                                                                                                                                            labels: {
                                                                                                                                                            boxWidth: 15,
                                                                                                                                                            padding: 20
                                                                                                                                                            },
                                                                                                                                                        },
                                                                                                                                                        }
                                                                                                                                                        }} chartDataSets={[{
                                                                                                        label: 'Dataset 1',
                                                                                                        data: [60,25,15],
                                                                                                        backgroundColor: [
                                                                                                            '#ff6384',
                                                                                                            '#BF00BB',
                                                                                                            '#4bc0c0'
                                                                                                        ],
                                                                                                        fillStyle: 'blue',
                                                                                                        fillRect: [200, 100, 140, 100],

                                                                                                        borderColor: [
                                                                                                            '#fff',
                                                                                                        ],
                                                                                                        borderWidth: 1,
                                                                                                        cutout: '80%',
                                                                                                        title: {
                                                                                                            text: "Doughnut Chart",
                                                                                                            verticalAlign: "center",
                                                                                                            dockInsidePlotArea: true
                                                                                                        },
                                                                                                        }]}>  </RdsDoughnutChart>

                                    </div> 
                                </div>
                            </RdsWidget>                                       
                        </div>
                     </div>
                 </div>
             </div>

             <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <RdsWidget headerTitle={'call Overview'}>
                                    <div>
                                        <div className="d-flex align-items-center"> 
                                            <div className="">
                                                <RdsBooleanChart id='Boolean1' chartHeight={100} chartWidth={100} ChartLabels={['Total Connected calls', 'Total calls']} ChartOptions={{
                                                                                                                                                elements: {
                                                                                                                                                center: {
                                                                                                                                                    text: '50%'  //set as you wish
                                                                                                                                                }
                                                                                                                                                },
                                                                                                                                                cutoutPercentage: 75,
                                                                                                                                                legend: {
                                                                                                                                                display: false
                                                                                                                                                },
                                                                                                                                                maintainAspectRatio: false,
                                                                                                                                                responsive: true,
                                                                                                                                                plugins: {
                                                                                                                                                series: {
                                                                                                                                                    label: {
                                                                                                                                                    position: "inside",
                                                                                                                                                    text: 'total', // or "inside" | "outside"
                                                                                                                                                    display: false
                                                                                                                                                    }
                                                                                                                                                },
                                                                                                                                                doughnutlabel: {
                                                                                                                                                    labels: [{
                                                                                                                                                    text: '550',
                                                                                                                                                    font: {
                                                                                                                                                        size: 20,
                                                                                                                                                        weight: 'bold'
                                                                                                                                                    }
                                                                                                                                                    }, {
                                                                                                                                                    text: 'total'
                                                                                                                                                    }
                                                                                                                                                    ]
                                                                                                                                                },
                                                                                                                                                legend: {
                                                                                                                                                    display: false,
                                                                                                                                                    align: "start",
                                                                                                                                                    position: 'right',
                                                                                                                                                },
                                                                                                                                                tooltip: { enabled: false },
                                                                                                                                                }
                                                                                                                                            }} chartDataSets={[{
                                                                                                                    label: 'Dataset 1',
                                                                                                                    data: [80, 100 - 80],
                                                                                                                    fillStyle: '#E1E1E1',
                                                                                                                    fillRect: [200, 100, 40, 10],
                                                                                                                    backgroundColor: [
                                                                                                                        '--chartColor1',
                                                                                                                        '--chartColor7'
                                                                                                                        
                                                                                                                    ],
                                                                                                                    borderColor: [
                                                                                                                        '#fff',
                                                                                                                    ],
                                                                                                                    borderWidth: 1,
                                                                                                                    cutout: '80%',
                                                                                                                    title: {
                                                                                                                        text: "Doughnut Chart",
                                                                                                                        verticalAlign: "center",
                                                                                                                        dockInsidePlotArea: true
                                                                                                                    },
                                                                                                                    }]}  chartStyle={''} ></RdsBooleanChart>
                                            </div>
                                            <div className="ms-2">
                                                <h5 className="custom-title">80%</h5>
                                                <p className="custom-desc mb-0">Total Calls Connected</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mt-3">
                                            <div className="">
                                                <RdsBooleanChart id='Boolean2' chartHeight={100} chartWidth={100} ChartLabels={['Total Client calls connected', 'Total Client calls disconnected']} ChartOptions={{
                                                                                                                                                                                                                        elements: {
                                                                                                                                                                                                                        center: {
                                                                                                                                                                                                                            text: '50%'  //set as you wish
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        cutoutPercentage: 75,
                                                                                                                                                                                                                        legend: {
                                                                                                                                                                                                                        display: false
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        responsive: true,
                                                                                                                                                                                                                        maintainAspectRatio: false,
                                                                                                                                                                                                                        plugins: {
                                                                                                                                                                                                                        series: {
                                                                                                                                                                                                                            label: {
                                                                                                                                                                                                                            position: "inside",
                                                                                                                                                                                                                            text: 'total', // or "inside" | "outside"
                                                                                                                                                                                                                            display: true
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        doughnutlabel: {
                                                                                                                                                                                                                            labels: [{
                                                                                                                                                                                                                            text: '550',
                                                                                                                                                                                                                            font: {
                                                                                                                                                                                                                                size: 20,
                                                                                                                                                                                                                                weight: 'bold'
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                            }, {
                                                                                                                                                                                                                            text: 'total'
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                            ]
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        legend: {
                                                                                                                                                                                                                            display: false,
                                                                                                                                                                                                                            align: "start",
                                                                                                                                                                                                                            position: 'right',
                                                                                                                                                                                                                            "fontSize": 20,
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                        tooltip: { enabled: false },
                                                                                                                                                                                                                        },
                                                                                                                                                                                                                    }} chartDataSets={[{
                                                            
                                                                label: 'Dataset 1',
                                                                data: [65, 100 - 65],
                                                                fillStyle: '#D0D7DD',
                                                                fillRect: [200, 100, 40, 10],
                                                                backgroundColor: [
                                                                  '--chartColor9',
                                                                  '--chartColor7' 
                                                          
                                                                ],
                                                                borderColor: [
                                                                  '#fff',
                                                                ],
                                                                borderWidth: 1,
                                                                cutout: '80%',
                                                                title: {
                                                                  text: "Doughnut Chart",
                                                                  verticalAlign: "center",
                                                                  dockInsidePlotArea: true
                                                                },
                                                              
                                                            }]}  chartStyle={''} ></RdsBooleanChart>

                                            </div>
                                            <div className="ms-2">
                                                    <h5 className="custom-title">20%</h5>
                                                    <p className="custom-desc mb-0">"Total Clients Called"</p>
                                            </div>
                                        </div>
                                    </div>
                                </RdsWidget>
                            </div>
                            <div>
                                <RdsWidget headerTitle={'Sales'}>
                                    <div>
                                    <RdsBigNumber  bigNumberItems={[{"icon":"triangle_up","iconHeight":"12px","iconWidth":"12px","iconFill":true}]} subTitle='-$2203.00' subTitleColorVariant='success' bigNumber={'$3,32,230.00'} textAlign="start"  ></RdsBigNumber>
                                    </div>
                                </RdsWidget>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <RdsWidget headerTitle={'Daily Sales Growth'}>
                                <div >
                                   <RdsBigNumber  bigNumberItems={[{"icon":"triangle_down","iconHeight":"12px","iconWidth":"12px","iconFill":true}]} bigNumber={'$3,73,960.412'} subTitle="-$5850.75" subTitleColorVariant='danger' textAlign="start"  ></RdsBigNumber>
                                    <RdsBarChart id='Bar' chartLabels={['10k', '20k','25k', '30k', '40k', '50k', '60k', '70k', '75k', '80k', '90k', '95k']} chartOptions={{
                                                                                                                                                                            indexAxis: 'x',
                                                                                                                                                                            elements: {
                                                                                                                                                                            bar: {
                                                                                                                                                                                borderWidth: 0,
                                                                                                                                                                                width: 1
                                                                                                                                                                            }
                                                                                                                                                                            },
                                                                                                                                                                            responsive: true,
                                                                                                                                                                            maintainAspectRatio: false,    
                                                                                                                                                                            plugins: {
                                                                                                                                                                            legend: {
                                                                                                                                                                                position: '',
                                                                                                                                                                                pointStyle: "line",
                                                                                                                                                                                labels: {
                                                                                                                                                                                usePointStyle: true
                                                                                                                                                                                }
                                                                                                                                                                            },
                                                                                                                                                                            scales:
                                                                                                                                                                            {
                                                                                                                                                                                y: {
                                                                                                                                                                                beginAtZero:true,    
                                                                                                                                                                                }
                                                                                                                                                                            },
                                                                                                                                                                            tooltip: {
                                                                                                                                                                                usePointStyle: true,
                                                                                                                                                                            },
                                                                                                                                                                            title: {
                                                                                                                                                                                display: false,
                                                                                                                                                                                text: 'Daily Sales Growth'
                                                                                                                                                                            }
                                                                                                                                                                            },
                                                                                                                                                                        }} chartDataSets={[{
                                                                                                                                                                            label: 'Sales Growth',
                                                                                                                                                                            data: [15, 67, 34, 78, 45, 87, 76, 32, 50, 14, 35, 22],
                                                                                                                                                                            backgroundColor: 'rgba(54, 162, 235, 1)',
                                                                                                                                                                            borderColor: 'rgba(54, 162, 245, 1)',
                                                                                                                                                                            borderWidth: 1,
                                                                                                                                                                            borderRadius: 10,
                                                                                                                                                                            barThickness : 7,
                                                                                                                                                                            borderSkipped: false,
                                                                                                                                                                          }]} chartHeight={300} chartWidth={300} chartStyle={''}></RdsBarChart>
                                </div>
                            </RdsWidget>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <RdsWidget headerTitle={'Member Activity'}>
                        <div>
                               Rds Data Table
                        </div>
                        
                    </RdsWidget>
                        
                </div>
            </div>
        </div>
    </div>
    )   
 }

export default RdsCompAdminDashboard;