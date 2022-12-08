import React, { useState } from "react";
import "./rds-comp-cache.scss";
import rdsIcon from "../../../../raaghu-elements/src/rds-icon";
import RdsIcon from "../../../../raaghu-elements/src/rds-icon";
import { RdsPagination } from "../../../../raaghu-elements/src";

export interface RdsCacheProps {
  cachedata: any[];
}

let item : number

const RdsCompCache = (props: RdsCacheProps) => {
  const [pagecache, setpagecache] = useState([]);
  const [items,setitems]=useState(item)

  const pagination = () => {
  
  };
  return (
    <>
      <div>
        <div>
          {props.cachedata.map((element: any) => (
            <div className="contentbox">
              <div>{element.name}</div>
              <RdsIcon
                name="delete"
                fill={false}
                stroke={true}
                height="17px"
                width="17px"
              ></RdsIcon>
            </div>
          ))}
        </div>

        <RdsPagination
          totalRecords={props.cachedata.length}
          recordsPerPage={10}
          paginationType="advance"
          alignmentType="end"
          onPageChange={()=>pagination()}
        ></RdsPagination>
      </div>
    </>
  );
};

export default RdsCompCache;
