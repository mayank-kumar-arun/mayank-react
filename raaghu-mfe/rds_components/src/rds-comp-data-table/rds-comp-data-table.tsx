import {RdsIcon,RdsInput,RdsCheckbox,RdsButton,RdsPagination,RdsLabel} from '../rds-elements'

export interface RdsCompDataTableProps{
    tableHeaders :{displayName:string,key:string,datatype:string,dataLength?: number,required?: boolean,sortable?: boolean,filterable?: boolean,colWidth?: string,disabled?: boolean}[];
    actions : {displayName:string,id:string}[];
    tableData: any[];
    nodatatitle? : string;
    pagination? : boolean;
    recordsPerPage? : number
}

const RdsCompDataTable = (props:RdsCompDataTableProps) =>{
    var datasubtitle : boolean =  true;
    var datasource : any = [];
    var enablecheckboxselection : boolean = false;
    let filteredarray : any = [];
    const gettotalrecords = () =>{
        if(filteredarray && filteredarray.length>0){
            return filteredarray.length;
        }
        if(props.tableData){
            return props.tableData.length
        }
    };
    const onPagination =() =>{

    }
    return(
        <div>
        
            {(props.tableData && props.tableData.length>0) ? 
                <div>
                    <div className="sm-datatable table-responsive">
                        <table className="table table-hover table-bordered h-100" id="sortTable" width="400px">
                            <thead>
                                <tr>
                                    <>
                                        {enablecheckboxselection && 
                                        <th>
                                            <RdsCheckbox label={''}></RdsCheckbox>
                                        </th>} 
                                    
                                     
                                        {props.tableHeaders?.map((a:any)=>{
                                            <th scope="col">
                                            <div className="header d-flex">
                                                <span>{a.displayname}</span>
                                                <div className="header-options mobile-header-option cursor-pointer ps-1">
                                                    {a.sortable && <span  className="text-right sort-icons mobile-sort" >
                                                    <RdsIcon name={'up_arrow'} width="12px" height='12px'></RdsIcon> 
                                                    <RdsIcon name={'down_arrow'} width="12px" height='12px'></RdsIcon> 
                                                    </span> }
                                                    
                                                    <div className="btn-group dropend">
                                                        {a.filterable && <span className="text-right sort-icons sortable" id="search-dropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                                                            <RdsIcon name={'filter'} height="12px" width='12px'></RdsIcon>
                                                        
                                                        </span>}
                                                        
                                                        <ul className="dropdown-menu searchModal p-1 border-0" aria-labelledby="dropdownMenuButton1">
                                                            <div>
                                                                <div>
                                                                    <RdsInput placeholder='Search here ...' size='small' name={a.key}></RdsInput>
                                                                </div>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>

                                        })}
                                    <div>

                                    {props.tableHeaders && props.tableHeaders.length>0 && props.actions && props.actions.length>0 && <th className="text-center">Actions</th>}
                                        </div>
                                
                                   </>
                                </tr>
                            </thead>

                            {props.tableData && props.tableData.length>0 && 
                            <tbody>
                            {datasource.map((data:any)=>{
                                <tr >
                                    <>
                                    {enablecheckboxselection && 
                                    <th>
                                    <RdsCheckbox label={''}></RdsCheckbox>

                                    </th>}
                                    {props.tableHeaders.map((column)=>{
                                        {column.datatype.toLowerCase()==="html" && !data.isEdit ? <td className='align-middle'></td> : 
                                        <>{column.datatype.toLowerCase()==="icon" && !data.isEdit ? <td> <RdsIcon name={data[column.key].icon} width={data[column.key].width} colorVariant={data[column.key].colorVariant} height={data[column.key].height}></RdsIcon></td> : 
                                        <td className='align-middle'>
                                            {!data.isEdit ? <div>{data[column.key]}</div> :  <>switch(column.datatype.toLowerCase()){<>
                                                case 'number': return <div><RdsInput isDisabled={column.disabled} inputType="number" value={data[column.key]}></RdsInput>{column.required && (data[column.key]===""||data[column.key]===undefined) && <small className='error'>{column.displayName} is Reqiured</small>}</div> break;
                                                case 'text': return <div><RdsInput isDisabled={column.disabled} inputType="text" value={data[column.key]}></RdsInput>{column.required && (data[column.key]===""||!data[column.key]) && <small className='error'>{column.displayName} is Reqiured</small>}</div>;
                                                case 'html': return <div><RdsInput isDisabled={column.disabled} inputType="number" value={data[column.key]}></RdsInput>{column.required && (data[column.key]===""||!data[column.key]) && <small className='error'>{column.displayName} is Reqiured</small>}</div>;
                                                
                                            </>}</>}
                                        </td>}</>}})
                                    }

                                    {props.actions.length>0 && 
                                    <td className='align-middle text-center'>
                                            {!data.isEdit ? <div className='dropdown'><RdsButton colorVariant='default' size='small' icon='tree_dots' tooltipTitle={''} type={'button'} ></RdsButton> <div className='dropdown-menu' aria-labelledby='action-dropdown'><>{props.actions.map((action)=>{<li><a className='dropdown-item'>{action.displayName}</a></li>})}</> </div></div> : 
                                            <div className='d-flex'><RdsButton class='action' colorVariant='primary' icon='check' size='medium' tooltipTitle={''} type={'button'}></RdsButton><RdsButton class="ms-2 text-white" colorVariant='danger' tooltipPlacement='top' icon='close' size='medium' tooltipTitle={''} type={'button'}></RdsButton></div>}
                                        

                                        </td>}
                                    </>
                                </tr>} )}
                            </tbody>}
                        </table>
                    </div> <div> {props.pagination && props.tableData && <RdsPagination alignmentType='end' onPageChange={onPagination} totalRecords={gettotalrecords()} recordsPerPage={props.recordsPerPage}></RdsPagination>} </div> 
                </div>
                : 
        
            <div className="my-5 py-5 d-flex align-items-center justify-content-center">
                <div className="text-center">
                    <div className="mb-3">
                        <RdsIcon name={'file_plus'} height="100px" width='100px'></RdsIcon>
                    </div>
                    <div>
                        <h5><RdsLabel label={props.nodatatitle}></RdsLabel></h5>
                        {datasubtitle && <small className='text-muted'>Click on the button above to add</small>}
                    </div>
                </div>
            </div>}   

    </div>    
    )
}


export default RdsCompDataTable;