import React from "react";
import "./rds-table.scss";
import RdsIcon from "../rds-icon/rds-icon";

export interface RdsTableProps {
  headerDatas: any[];
  tableDatas: any[];
  colorVariant?: string;
  striped?: boolean;
  bordered?: boolean;
  iconColorVariant?: string;
  width?: number;
}

const RdsTable = (props: RdsTableProps) => {
  return (
    <table
      className={`table table-${props.colorVariant} ${
        props.striped ? "table-striped" : ""
      } ${props.bordered ? "table-bordered" : ""}`}
      width={props.width}
    >
      <thead style={{ backgroundColor: "#5C82E3" }}>
        <tr>
          {props.headerDatas.map((headerData) => (
            <th
              scope="col"
              className="text-white pl-4"
              style={{ fontWeight: "400", paddingLeft: "16px" }}
            >
              {headerData.displayName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.tableDatas.map((tableData) => (
          <>
            <tr className = "normal-rows">
              {props.headerDatas.map((headerData) => (
                <>
                  {headerData.dataType == "text" ? (
                    <td width="40%">{tableData[headerData.key]}</td>
                  ) : headerData.dataType == "icon" ? (
                    <td width="20%" style={{ borderLeft: "solid 1px #E2E2E3" }}>
                      <RdsIcon
                        name={tableData.icon}
                        height="15px"
                        width="15px"
                        fill={true}
                        stroke={false}
                        colorVariant={tableData.iconColorVariant}
                      ></RdsIcon>
                    </td>
                  ) : headerData.dataType == "textNumber" ? (
                    <td width="20%">{tableData[headerData.key]}</td>
                  ) : (
                    <td>{tableData[headerData.key]}</td>
                  )}
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
