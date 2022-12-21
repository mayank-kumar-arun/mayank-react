import RdsCompDatatable from '../rds-comp-data-table/rds-comp-data-table'
import { RdsButton } from '../rds-elements'


export interface RdsCompUserPermissionProps { 
    tableHeaders: {
        displayName: string;
        key: string;
        datatype: string;
        dataLength?: number | undefined;
        required?: boolean | undefined;
        sortable?: boolean | undefined;
        colWidth?: string | undefined;
        disabled?: boolean | undefined;
        isEndUserEditing?: boolean | undefined;
    }[],
    tableData: {}[],
    actions: {
        displayName: string;
        id: string;
    }[],
    pagination: boolean,
    onActionSelection(arg: any): any;

}

const RdsCompUserPermission = (props: RdsCompUserPermissionProps) => {
    return (
        <div>

            <div className="d-flex justify-content-end mb-3">
                <RdsButton type={"button"} colorVariant="primary" label="New User" icon="plus" iconColorVariant="light"/>
            </div>

            <RdsCompDatatable 
            tableHeaders={props.tableHeaders} 
            actions={props.actions} 
            tableData={props.tableData} 
            pagination={false} 
            onActionSelection={props.onActionSelection}
            ></RdsCompDatatable>

        </div>
    );
};

export default RdsCompUserPermission;
