import React from "react";
import { RdsButton, RdsIcon } from "../rds-elements";
import "./rds-comp-hierarcy.scss";

export interface RdsCompHierarcyProps {
  treeData: any[];
  nodeColor: any;
  ButtonLabel: string;
  mutable?: boolean;
  TreeType?: string;
}

const RdsCompHierarcy = (props: RdsCompHierarcyProps) => {
  const TreeNode = ({ node, key }: any) => {
    const setStateBasedOnMutable = (lastNode: boolean, node: any) => {
      console.log(
        "lastNode  " + lastNode,
        " props.mutable- " + props.mutable,
        " node.children.length- " + node.children.length
      );
      if (!props.mutable && lastNode && node.children.length === 0) {
        console.log("setStateBasedOnMutable false");
        return false;
      }
      console.log("setStateBasedOnMutable true");
      return true;
    };
    const getNodeColor = () => {};
    //  console.log("TreeNode ", users);
    return (
      <>
        <div>
          <div className="d-flex align-items-center">
            <div
              className="node-dot"
              style={{ backgroundColor: "green" }} //style={{backgroundColor:getNodeColor(node.level)}}
              >
              {node.level !== 1 && (
                <div //*ngIf="node.level !== 1"
                className="horizontal-dotted-line"
                ></div>
              )}

              <span
                className={
                  node.level !== 1
                    ? "node-dote-icon"
                    : "node-dote-icon_with_horizontal_line"
                  }
              >
                {" "}
                <RdsIcon
                  name={node.children.length > 0 ? "minus" : "plus"}
                  width="10px"
                  height="10px"
                  colorVariant="light"
                  fill={false}
                  stroke={true}
                />{" "}
              </span>
            </div>

            <span
              className="my-1 node-label" //#nodeLabel
              >
              <span
                className="mr-4" //(click)="onClicknode(node.ItemDescription)"
              >
                {node.ItemDescription}
              </span>
              {(props.mutable === true && props.TreeType == "IconLabel") ||
                (props.TreeType == "Normal" && (
                  <i //*ngIf="mutable === true  && TreeType.Normal===true||TreeType.IconLabel===true"
                  data-bs-toggle="offcanvas"
                    data-bs-target="#addNestedNodeModal"
                    // (addNestedElement)="addNestedNode(node)" [nestGroup]="nodeLabel"
                    className="pl-3 nest-icon bi bi-plus-circle-fill text-secondary font-size-lg pointer"
                    ></i>
                    ))}

              {(props.mutable === true && props.TreeType == "IconLabel") ||
                (props.TreeType == "Normal" && (
                  <i
                  //*ngIf="mutable === true && TreeType.IconLabel==true||TreeType.Normal===true" (click)="getNodeByID(node)"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#EditNodeModal"
                  className="bi bi-pencil m-2" // [nestGroup]="nodeLabel"
                  ></i>
                  ))}

              {(props.mutable === true && props.TreeType == "IconLabel") ||
                (props.TreeType == "Normal" && (
                  <i
                  //*ngIf="mutable === true && TreeType.IconLabel==true||TreeType.Normal===true" (click)="deleteNode(node)" [nestGroup]="nodeLabel"
                  className="bi bi-trash"
                  ></i>
                ))}
            </span>
          </div>
          {setStateBasedOnMutable(key === node.length - 1, node) && (
            <div className="vertical-dotted-line"></div>
          )}

          {node.children?.length > 0 && (
            <div //</div>*ngIf="node.children?.length > 0"
            >
              <div
                className="position-relative"
                style={{ marginLeft:"20px" }}
                >
                {node.children.map((node: any, i: number) => {
                  console.log("users.length- ", node.length);
                  return (<>
                  <TreeNode node={node} key={i} />
                  </>
                  )
                })}
              </div>
            </div>
          )}
        </div>

        {/* {props.mutable === true && props.TreeType=="Normal" && <div style={{marginLeft: users[0].level === 1 ? '0px' : '20px'}}
                className="position-relative btn p-0" //</>*ngIf="mutable === true && TreeType.Normal===true" [ngStyle]="{'margin-left': list[0].level === 1 ? '0px' : '20px'}" data-bs-toggle="offcanvas"
                data-bs-target="#addNodeModal"
                aria-controls="addNodeModal"
              >
                <i //(click)="addNode(list)"
                  className="bi bi-plus-circle-fill position-relative text-primary font-size-lg pointer"
                ></i>
              </div>}

              {props.mutable === true && props.TreeType=="IconLabel" &&<div
                className="position-relative mb-2" //</>*ngIf="props.mutable === true && TreeType.IconLabel==true"
                style={{ marginLeft: users[0].level === 1 ? "0px" : "20px" }}
                data-bs-toggle="offcanvas"
                data-bs-target="#addNodeModal"
                aria-controls="addNodeModal"
              >
            <RdsButton
              label={props.ButtonLabel}
              colorVariant="primary"
              block={false}
              tooltipTitle={""}
              type="submit"
              size="small"
            />
              </div>} */}
      </>
    );
  };

  //  console.log("familyTree ", props.treeData);
  return (
    <>
      <div
        className="position-relative"
        style={{ marginLeft: props.treeData[0].level === 1 ? "0px" : "20px" }}
      >
        {props.treeData.map((node: any, i: number) => (
          <TreeNode node={node} />
        ))}
      </div>
    </>
  );
};

export default RdsCompHierarcy;
