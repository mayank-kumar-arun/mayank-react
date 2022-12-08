import { intlFormatDistance } from "date-fns";
import React, { useState } from "react";
import { RdsIcon } from "../rds-elements";
import "./rds-comp-organization-tree-new.scss";

export interface RdsComporganizationTreeNewProps {
  data: any[];
}

const RdsComporganizationTreeNew = (props: RdsComporganizationTreeNewProps) => {
  return (
    <>
      <div>
        <ul style={{ listStyle: "none" }}>
          {props.data.map((tree) => (
            <>
              <TreeNode key={tree.key} node={tree}></TreeNode>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

const TreeNode = ({ node }: { node: any }) => {
  const hasChild = node.children ? true : false;

  return (
    <>
      <li>
        <div className="d-flex">
          <div>
            <RdsIcon
              name="circle"
              fill={false}
              stroke={true}
              width="10px"
              height="10px"
            ></RdsIcon>
            {node.label}
          </div>
        </div>

        {hasChild && (
          <div>
            <ul>
              <RdsComporganizationTreeNew
                data={node.children}
              ></RdsComporganizationTreeNew>
            </ul>
          </div>
        )}
      </li>
    </>
  );
};

export default RdsComporganizationTreeNew;
