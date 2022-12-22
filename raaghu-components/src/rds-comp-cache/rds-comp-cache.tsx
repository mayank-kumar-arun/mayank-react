import React, { useState } from "react";
import "./rds-comp-cache.scss";
import {RdsIcon, RdsPagination} from "../rds-elements";
import { useEffect } from "react";

export interface RdsCacheProps {
  cachedata: any[];
  recordsperpage: number;
  pagination: boolean;
  onclick: (event: React.MouseEvent<HTMLDivElement>, id: number) => void;
  alignment: string;
}

const RdsCompCache = (props: RdsCacheProps) => {
  const [pagecache, setpagecache] = useState([props.cachedata]);
  const [records, setrecords] = useState(props.recordsperpage);

  const [rowStatus, setRowStatus] = useState({
    startingRow: 0,
    endingRow: props.recordsperpage,
  });

  useEffect(() => {
    let tempCAche = props.cachedata.filter((element: any, i: number) => {
      if (i >= rowStatus.startingRow && i < rowStatus.endingRow) {
        return { element };
      } else {
        return;
      }
    });

    setpagecache(tempCAche);
  }, [rowStatus]);

  const pagination = (currentPage: number, recordsPerPage: number) => {
    setRowStatus({
      startingRow: (currentPage - 1) * recordsPerPage, //0-index
      endingRow: currentPage * recordsPerPage, //considering that 1st element has '0' index
    });

    let tempCache = props.cachedata.filter((element: any, i: number) => {
      if (i >= rowStatus.startingRow && i < rowStatus.endingRow) {
        return { element };
      }
    });

    setpagecache(tempCache);
    tempCache = [];
  };
  return (
    <>
      {props.pagination === true ? (
        <div>
          <div>
            {pagecache.map((element: any, i) => (
              <div key={i} className="contentbox border-bottom">
                <div>{element.name}</div>
                <div
                  className="icon"
                  onClick={(event) => props.onclick(event, element.id)}
                >
                  <RdsIcon
                    name="delete"
                    fill={false}
                    stroke={true}
                    height="17px"
                    width="17px"
                  ></RdsIcon>
                </div>
              </div>
            ))}
          </div>

          <RdsPagination
            totalRecords={props.cachedata.length}
            recordsPerPage={props.recordsperpage}
            paginationType="advance"
            alignmentType={props.alignment}
            onPageChange={pagination}
          ></RdsPagination>
        </div>
      ) : (
        <div>
          {props.cachedata.map((element: any, i) => (
            <div key={i} className="contentbox border-bottom">
              <div>{element.name}</div>
              <div className="icon">
                <RdsIcon
                  name="delete"
                  fill={false}
                  stroke={true}
                  height="17px"
                  width="17px"
                ></RdsIcon>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default RdsCompCache;
