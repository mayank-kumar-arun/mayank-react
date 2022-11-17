import { useState } from 'react';
import RdsDropdown from '../../../../raaghu-elements/src/rds-dropdown';
import { RdsIcon, RdsInput, RdsCheckbox, RdsButton, RdsPagination, RdsLabel } from '../rds-elements'

import './rds-comp-data-table.scss'

export interface RdsCompDatatableProps {
    enablecheckboxselection?: boolean;
    tableHeaders: {
        displayName: string,
        key: string,
        datatype: string,
        dataLength?: number,
        required?: boolean,
        sortable?: boolean,
        filterable?: boolean,
        colWidth?: string,
        disabled?: boolean
        isEndUserEditing?: boolean
    }[];
    actions: {
        displayName: string,
        id: string
    }[];
    tableData: any[];
    nodatatitle?: string;
    pagination?: boolean;
    recordsPerPage?: number;

    onActionSelection?: React.EventHandler<any>
}

const RdsCompDatatable = (props: RdsCompDatatableProps) => {



    const [rowStatus, setRowStatus] = useState({
        startingRow: 0,
        endingRow: props.recordsPerPage
    })


    const onPageChangeHandler = (event:
        | React.MouseEvent<HTMLAnchorElement>
        | React.ChangeEvent<HTMLSelectElement>,
        currentPage: number,
        recordsPerPage: number) => {

        setRowStatus({
            startingRow: (currentPage - 1) * recordsPerPage,    //0-index
            endingRow: (currentPage) * recordsPerPage         //considering that 1st element has '0' index
        })

    }


    return (<>

        <div>
            <div className="sm-datatable table-responsive">
                <table className="table table-hover table-bordered h-100" id="sortTable" width="400px">

                    <>


                        <thead>
                            <tr>
                                <>
                                    {props.enablecheckboxselection &&
                                        <th><RdsCheckbox label={''}></RdsCheckbox></th>
                                    }
                                    {props.tableHeaders.map( (tableHeader, index) =>
                                        <th key={"tableHeader-"+index}>
                                            <span >{tableHeader.displayName}</span>
                                            {tableHeader.sortable&&<span className='btn btn-sm'><RdsIcon name={'up_down_arrow'} height='12px' width='12px' stroke={true} /></span>}
                                            {tableHeader.sortable&&<span className='btn btn-sm'><RdsIcon name={'funnel'} height='12px' width='12px' stroke={true} /></span>}
                                        </th>
                                    )}
                                    {(props.tableHeaders && props.tableHeaders.length > 0 && props.actions && props.actions.length > 0) &&
                                        <th className="text-center">Actions</th>
                                    }
                                </>
                            </tr>
                        </thead>

                        <tbody>
                            {props.tableData.map((tableDataRow, index) =>
                                (props.pagination && index >= rowStatus.startingRow && (typeof rowStatus.endingRow != "undefined") && index < rowStatus.endingRow) && <tr key={"tableRow-"+index}>
                                    {props.tableHeaders.map( (tableHeader, tableHeaderIndex) =>
                                        <td key={"column-"+tableHeaderIndex+"-inside-tableRow"+index}>{tableDataRow[tableHeader.key]}</td>
                                    )}
                                    {props.actions.length > 0 &&
                                        <td className='align-middle text-center'>

                                            {/* <div className='dropdown'>
                                                <RdsButton colorVariant='default' size='small' icon='three_dots' databstoggle='dropdown' tooltipTitle={''} type={'button'} />
                                                <div className='dropdown-menu' aria-labelledby='action-dropdown'>
                                                    <>
                                                        {props.actions.map((action) =>
                                                            <li><a className='dropdown-item'>{action.displayName}</a></li>
                                                        )}
                                                    </>
                                                </div>
                                            </div> */}

                                            {/* <RdsDropdown colorVariant={''} size={'medium'} darkDropdown={false} label={<RdsIcon name={'three-dots'} />} direction={''} role={''} listItems={[]} splitButton={false} /> */}

                                            {!tableDataRow.isEndUserEditing ?
                                                <div className="dropdown">
                                                    <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        {/* <RdsIcon name={'three-dots'} height={"16px"} width={"16px"} stroke={true} fill={true} colorVariant='secondary '/> */}
                                                        {/* {threeDotsIcon} */}
                                                        <RdsIcon name={'three_dots'} height="14px" width='14px' stroke={true} fill={true} class="bi bi-three-dots-vertical" />
                                                    </button>
                                                    <ul className="dropdown-menu RdsCompDataTable__Actions__Ul">
                                                        {props.actions.map((action, actionIndex) =>
                                                            <li key={"action-"+actionIndex+"-inside-tableRow"+index}><a className='dropdown-item'>{action.displayName}</a></li>
                                                        )}
                                                    </ul>
                                                </div>
                                                :
                                                <div className='d-flex'>
                                                    <RdsButton class='action' colorVariant='primary' size='medium' tooltipTitle={''} type={'button'} >
                                                        <RdsIcon name={'check'} height="14px" width='14px' stroke={true} fill={true} class="bi bi-check2" />
                                                    </RdsButton>
                                                    <RdsButton class="ms-2 text-white" colorVariant='danger' tooltipPlacement='top' size='medium' tooltipTitle={''} type={'button'} >
                                                        <RdsIcon name={'close'} height="14px" width='14px' stroke={true} fill={true} class="bi bi-close" />
                                                    </RdsButton>
                                                </div>
                                            }

                                        </td>
                                    }
                                </tr>

                            )}

                        </tbody>

                    </>


                </table>
            </div>
        </div>



        <div className='RdsCompDataTable__RdsPagination'>
            {props.pagination && <RdsPagination totalRecords={props.tableData.length} recordsPerPage={5} onPageChange={onPageChangeHandler}></RdsPagination>}
        </div>

        



    </>)
}


export default RdsCompDatatable;