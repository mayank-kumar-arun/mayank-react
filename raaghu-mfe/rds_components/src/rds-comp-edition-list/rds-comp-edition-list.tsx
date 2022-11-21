import { MouseEvent } from 'react';
import RdsCompDatatable from '../rds-comp-data-table/rds-comp-data-table'
import { RdsButton, RdsIcon } from '../rds-elements'
export interface RdsCompEditionListProps {
    enablecheckboxselection?: boolean;
    tableHeaders: {
        displayName: string,
        key: string,
        datatype: string,
        dataLength?: number,
        required?: boolean,
        sortable?: boolean,
        colWidth?: string,
        disabled?: boolean
        isEndUserEditing?: boolean
    }[];
    actions: {
        displayName: string,
        id: string
    }[];
    tableData: any[];
    pagination: boolean;
    recordsPerPage?: number;
    recordsPerPageSelectListOption?: boolean
    onActionSelection(arg: any): void
    onSortSelection(arg: { sortClickEvent: MouseEvent<HTMLSpanElement, globalThis.MouseEvent>; sortOrder: string; }): void;
    onNewTenantClick(event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void
}
const RdsCompEditionList = (props: RdsCompEditionListProps) => {
    return (
        <div className='row'>

            <div className="col-md-12 text-end pb-3 desktop-btn">
                <RdsButton type="button" aria-controls="addEdition" colorVariant='primary' onClick={props.onNewTenantClick}>
                    <span className="me-2">
                        <RdsIcon name={"plus"} height="12px" width="12px" stroke={true} colorVariant='light' />
                    </span>
                    <span className="btn-text">NEW EDITION</span>
                </RdsButton>
            </div>
            <div className="col-md-12 pb-3 desktop-btn">
                <RdsCompDatatable
                    tableHeaders={props.tableHeaders}
                    actions={props.actions}
                    tableData={props.tableData}
                    pagination={props.pagination}
                    recordsPerPage={props.recordsPerPage}
                    onActionSelection={props.onActionSelection}
                    onSortSelection={props.onSortSelection}
                    recordsPerPageSelectListOption={props.recordsPerPageSelectListOption}
                ></RdsCompDatatable>
        </div>
        </div >

    );
};
export default RdsCompEditionList;