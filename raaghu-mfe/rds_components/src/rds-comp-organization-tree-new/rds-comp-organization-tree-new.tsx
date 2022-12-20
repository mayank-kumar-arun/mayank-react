import { intlFormatDistance } from "date-fns";
import React, { useEffect, useState } from "react";
import RdsCompAlertPopup from "../rds-comp-alert-popup/rds-comp-alert-popup";
import { RdsIcon, RdsButton, RdsOffcanvas } from "../rds-elements";
import "./rds-comp-organization-tree-new.scss";

export interface RdsComporganizationTreeNewProps {
  data: any[];
}

const RdsComporganizationTreeNew = (props: RdsComporganizationTreeNewProps) => {
  const [Tdata, setTdata] = useState(props.data);

  const hasChild = props.data.length === 0 ? false : true;

  function addunit(e: any, key: any): void {
    console.log("unit added");
    console.log(key);
  }

  return (
    <>
      <ul className="parent" style={{ listStyle: "none" }}>
        {hasChild && <div className="vertical"></div>}
        {Tdata.map((tree) => (
          <>
            <TreeNode key={tree.key} node={tree}></TreeNode>
          </>
        ))}
        {hasChild && <div style={{ height: "40px" }}></div>}
      </ul>
      {hasChild && (
        <div className="add">
          {" "}
          <RdsButton
            type={"button"}
            icon={"Plus"}
            size={"small"}
            colorVariant={"primary"}
            iconColorVariant={"light"}
            label={"Sub-Unit"}
            onClick={(event) => addunit(event, Tdata[Tdata.length - 1])}
          ></RdsButton>
        </div>
      )}
    </>
  );
};

const TreeNode = ({ node }: { node: any }) => {
  const [Edit, setEdit] = useState("");
  const hasChild = node.children ? true : false;

  function editunit(key: any, label: any): void {
    console.log("edit value", Edit);
    console.log(key, "is being edited");
    console.log(label);
    setEdit(label);
  }
  function deleteunit(key: any): void {
    console.log(key, "is being deleted");
  }

  return (
    <>
      <div style={{ height: "20px" }}></div>
      <li key={node.key}>
        <div key={node.key}>
          <div
            className={`${node.key.length === 1 ? " " : "horizontal"}`}
          ></div>
          <div className="d-flex">
            <div>
              <RdsIcon
                name="circle"
                fill={false}
                stroke={true}
                width="10px"
                height="10px"
                colorVariant={`${
                  node.key.length === 1
                    ? "success"
                    : `${
                        node.key.length === 3
                          ? "primary"
                          : `${
                              node.key.length === 5
                                ? "warning"
                                : `${
                                    node.key.length === 7
                                      ? "danger"
                                      : "secondary"
                                  }`
                            }`
                      }`
                }`}
                background={`${
                  node.key.length === 1
                    ? "success"
                    : `${
                        node.key.length === 3
                          ? "primary"
                          : `${
                              node.key.length === 5
                                ? "warning"
                                : `${
                                    node.key.length === 7
                                      ? "danger"
                                      : "secondary"
                                  }`
                            }`
                      }`
                }`}
                borderRadius="28px"
              ></RdsIcon>
              {"    "}
              {node.label}
              {"  "}
            </div>
            {"  "}
            <div className="icons">
              {"  "}
              <div
                className="icon edit"
                // onClick={(event) => editunit(event, node.key, node.label)}
              >
                {" "}
                <RdsOffcanvas
                  iconname="pencil"
                  iconheight="15px"
                  iconwidth="15px"
                  placement="end"
                  canvasTitle="Edit Organization Unit"
                  width="500px"
                  onclick={() => editunit(node.key, node.label)}
                >
                  <label className="mb-1" htmlFor="input">
                    Organization Unit
                  </label>
                  <input
                    type="text"
                    id="input"
                    value={Edit}
                    // defaultValue={Edit}
                    className="form-control"
                  />
                  {Edit}
                  <div
                    className="d-flex"
                    style={{ position: "absolute", bottom: "5%" }}
                  >
                    <RdsButton
                      type={"button"}
                      label="cancel"
                      colorVariant="primary"
                    ></RdsButton>
                    <RdsButton
                      type={"button"}
                      label="save"
                      colorVariant="primary"
                    ></RdsButton>
                  </div>
                </RdsOffcanvas>
                {/* <RdsIcon
                  name={"pencil"}
                  fill={false}
                  stroke={true}
                  width="13px"
                  height="12px"
                ></RdsIcon> */}
              </div>
              {"   "}
              <div
                className="icon delete"
                // onClick={(event) => deleteunit(event, node.key)}
              >
                <RdsCompAlertPopup
                  iconname="delete"
                  iconheight="17px"
                  iconwidth="17px"
                  delete={() => deleteunit(node.key)}
                ></RdsCompAlertPopup>
                {/* <RdsIcon
                  name={"delete"}
                  fill={false}
                  stroke={true}
                  width="15px"
                  height="13px"
                ></RdsIcon> */}
              </div>
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
        </div>
      </li>
    </>
  );
};

export default RdsComporganizationTreeNew;
