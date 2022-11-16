import React,{useState, useEffect} from 'react'
import {RdsBadge, RdsPagination, RdsIcon} from '../rds-elements'
var dataSource: any = [];
const RdsCompWebsiteLog = () => {
    const websiteLogData:any=["Websitelog1","Websitelog2","Websitelog3","Websitelog4","Websitelog5",
    "Websitelog6","Websitelog7","Websitelog8","Websitelog9","Websitelog10","Websitelog11","Websitelog12"
]
    const role: any = 'Advanced';
    const alignmentType: any = "end";
    const resetPagination: boolean = false;
    const totalRecords: number = 12;
    const recordsPerPage: number = 4;
    
    
    const [currentPage, setcurrentPage] = useState(0);
    if(currentPage === 1)
        for(let i = 0;i <= recordsPerPage; i++){
            dataSource.push(websiteLogData[i]);
        }
    const onPagination = (e:any, currentPage : number,recordsPerPage : number) => {
      let data: any = [];
      data = websiteLogData;
       dataSource = [];
      const activepage: number = currentPage;
      setcurrentPage(currentPage);
      const startingIndex: number = (activepage - 1) * recordsPerPage;
      const endingIndex: number = startingIndex + recordsPerPage - 1;
    //   console.log(startingIndex);
    //     console.log(endingIndex);
    console.log(currentPage);
      for (let i = startingIndex; i <= endingIndex; i++) {
        if (i < data.length) {
          dataSource.push(data[i]);
        }
      }
     
    }
    console.log(dataSource)
  return (
    <div>
    {websiteLogData.length > 0?  
    <div>
    <div className="px-3" >
        {dataSource.map((item:string) => (
            <div className = "d-flex align-items-center gap-3 border-bottom py-3">
            <div>
                <RdsBadge size = "small" label = "'WARN'" buttonColor = 'primary' badgeColor='secondary' icon='rectangle' number={1}></RdsBadge>
            </div>
            <div>
                <small className="text-break">
                    {item}
                </small>
            </div>
        </div>
        ))}       
    </div>
    <div className="pt-2">
        <RdsPagination totalRecords={12} recordsPerPage = {4} onPageChange = {onPagination}></RdsPagination>
    </div>
</div>:
    <div className="my-5 py-5 d-flex align-items-center justify-content-center">
        <div className="text-center">
            <div className="mb-3">
                {/* <RdsIcon name="file_plus" width="100px" height="100px"></RdsIcon> */}
            </div>
            <div>
                <h5> Currently you do not have website log </h5>
            </div>
        </div>
    </div>
}
    </div>
  )
}
export default RdsCompWebsiteLog;