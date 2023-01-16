import { ContentBlock } from "draft-js";
import React, { useState } from "react";
import { RdsIcon } from "../rds-elements";


const RdsCompPermissionTreeNewChild = ( {data} :{data: any[]}
) => {
  return (
    <>
      <div className="d-tree">
        <ul className="d-tree d-tree-container flex-column">
          {data && data.map((tree) => (
            <TreeNode node={tree}></TreeNode>
          ))}
        </ul>
      </div>
    </>
  );
};

const TreeNode = ({ node }: { node: any }) => {
  const [childVisibility, setChildVisibility] = useState(false);
  const hasChild = node.children ? true : false;

  return (
    <>
      <li className="d-tree-node border-0">
        <div className="d-flex" >
          {hasChild && (
            <div
              className={`d-inline d-tree-toggler me-2${
                childVisibility ? "active" : ""
              }`}
              onClick={(prev)=>setChildVisibility((prev)=>(!prev))}
            >
              <RdsIcon
                name="chevron_right"
                fill={false}
                stroke={true}
                colorVariant="dark"
                height="15px"
                width="15px"
              ></RdsIcon>
            </div>
          )}

          <div className="col d-tree-head">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id={node.key}
            />
            <label className="form-check-label" htmlFor={node.key}>
              {node.label}
            </label>
          </div>
        </div>

        {
            hasChild && childVisibility && (
                <div className="d-tree-content">
                    <ul className="d-tree-container d-flex flex-column">
                        <RdsCompPermissionTreeNewChild data={node.children} />
                    </ul>
                </div>
            )
        }
      </li>
    </>
  );
};

export default RdsCompPermissionTreeNewChild;
