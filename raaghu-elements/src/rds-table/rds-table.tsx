import React from "react";
import "./rds-table.scss";
import RdsIcon from "../rds-icon/rds-icon";

export interface RdsTableProps {
  headerDatas: any[];
  tableDatas: any[];
  tableClass?: string |  "table-hover";
  tableRowClass?: string ;
}

const RdsTable = (props: RdsTableProps) => {
  return (
    <table className={`table ${props.tableClass}`}>
      <thead>
        <tr className={props.tableRowClass}>
          {props.headerDatas.map((headerData) => (
            <th scope="col">{headerData.displayName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.tableDatas.map((tableData) => (
          <>
            <tr className={props.tableRowClass}>
              {props.headerDatas.map((headerData) => (
                <>
                {headerData.dataType=="text" ? 
                <td >{tableData[headerData.key]}</td> :
                headerData.dataType=="icon" ? 
                <td ><RdsIcon name={tableData.icon} height="15px" width="15px" fill={true} stroke={true} colorVariant="primary"></RdsIcon></td> :
                headerData.dataType=="textNumber" ?
                <td >{tableData[headerData.key]}</td> : 
                <td >{tableData[headerData.key]}</td>
                }
                </>
              ))}
            </tr>
          </>
        ))}
      </tbody>
    </table>
  );
};

export default RdsTable;
