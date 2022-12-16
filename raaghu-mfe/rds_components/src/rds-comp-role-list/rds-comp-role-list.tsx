import React from "react";
import RdsCompDatatable from "../rds-comp-data-table/rds-comp-data-table";
import { RdsButton, RdsIcon, RdsSearch } from "../rds-elements";

export interface RdscompRoleListProps {
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
  }[];
  tableData: {}[];
  actions: {
    displayName: string;
    id: string;
  }[];
  pagination: boolean;
  enablecheckboxselection?: boolean;
  onActionSelection(arg: any): any;
  onRefresh?:(Event:React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onSearch?:(Event:React.MouseEvent<HTMLDivElement, MouseEvent>)=>void;
  onFilterByPermissions?:(id:any)=>void;
  onNewRole?:(Event:React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const RdscompRoleList = (props: RdscompRoleListProps) => {
  return (
    <>
      <div>
        <div className="d-flex justify-content-between mt-2 mb-4">
            <div className="mt-2" onClick={props.onSearch}>

          <RdsSearch size="small" placeholder="search role"></RdsSearch>
            </div>

          <div className="d-flex justify-content-end">
            <div className="me-3" onClick={props.onRefresh}>
              <RdsIcon
                name="refresh"
                fill={false}
                stroke={true}
                width="20px "
                height="20px "
                colorVariant="primary"
              ></RdsIcon>
            </div>
            <RdsButton
            onClick={props.onFilterByPermissions}
              class="me-3"
              type={"button"}
              colorVariant="primary"
              label="FILTER BY PERMISSIONS"
            />{" "}
            <RdsButton
             onClick={props.onNewRole}
              type={"button"}
              colorVariant="primary"
              label="New User"
              icon="plus"
              iconColorVariant="light"
            />
          </div>
        </div>

        <RdsCompDatatable
          tableHeaders={props.tableHeaders}
          actions={props.actions}
          tableData={props.tableData}
          classes="table"
          pagination={false}
          onActionSelection={props.onActionSelection}
          enablecheckboxselection={props.enablecheckboxselection}
        ></RdsCompDatatable>
      </div>
    </>
  );
};
export default RdscompRoleList;
