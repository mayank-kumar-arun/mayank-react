import { intlFormatDistance } from "date-fns";
import React, { useEffect, useState } from "react";
import RdsCompAlertPopup from "../rds-comp-alert-popup/rds-comp-alert-popup";
import { RdsIcon, RdsButton, RdsOffcanvas, RdsInput } from "../rds-elements";
import "./rds-comp-organization-tree-new.scss";

export interface RdsComporganizationTreeNewProps {
  data: any[];
  inputLabel?: string;
  CanvasTitle?: string;
  AddUnitlabel?: string;
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
            <TreeNode
              key={tree.key}
              node={tree}
              inputlabel={props.inputLabel}
              canvasTitle={props.CanvasTitle}
              addUnitlabel={props.AddUnitlabel}
            ></TreeNode>
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
            label={props.AddUnitlabel}
            onClick={(event) => addunit(event, Tdata[Tdata.length - 1])}
          ></RdsButton>
        </div>
      )}
    </>
  );
};

const TreeNode = ({
  node,
  inputlabel,
  canvasTitle,
  addUnitlabel,
}: {
  node: any;
  inputlabel: any;
  canvasTitle: any;
  addUnitlabel: any;
}) => {
  const [newData, setnewData] = useState(node);
  const [Edit, setEdit] = useState("");
  const hasChild = newData.children ? true : false;

  function editunit(key: any, label: any): void {
    console.log("edit value", Edit);
    console.log(key, "is being edited");
    console.log(label);
    setEdit(label);
  }

  let name: string;
  const onChange = (e: any) => {
    name = e.target.value;
  };
  const onSaveHandler = (elementid: string) => {
    console.log("new name is ", name);
    console.log("id", elementid);
    if (name) {
      setnewData({ ...newData, label: name });
    }

    // var tempData = newData.filter((element: any) => {
    //   if (element.id === elementid) {
    //     return { ...element, label: name };
    //   } else {
    //     return element;
    //   }
    // });

    console.log("New data", newData);
  };

  function deleteunit(key: any): void {
    console.log(key, "is being deleted");
    if (newData.key === key) {
      setnewData("");
    }
  }

  return (
    <>
      {" "}
      {newData && (
        <div>
          {" "}
          <div style={{ height: "20px" }}></div>
          <li key={newData.key}>
            <div>
              <div
                className={`${
                  newData
                    ? `${newData.key.length === 1 ? " " : "horizontal"}`
                    : ""
                }`}
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
                      newData.key.length === 1
                        ? "success"
                        : `${
                            newData.key.length === 3
                              ? "primary"
                              : `${
                                  newData.key.length === 5
                                    ? "warning"
                                    : `${
                                        newData.key.length === 7
                                          ? "danger"
                                          : "secondary"
                                      }`
                                }`
                          }`
                    }`}
                    background={`${
                      newData.key.length === 1
                        ? "success"
                        : `${
                            newData.key.length === 3
                              ? "primary"
                              : `${
                                  newData.key.length === 5
                                    ? "warning"
                                    : `${
                                        newData.key.length === 7
                                          ? "danger"
                                          : "secondary"
                                      }`
                                }`
                          }`
                    }`}
                    borderRadius="28px"
                  ></RdsIcon>
                  {"    "}
                  {newData.label}
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
                      placement="end"
                      canvasTitle={canvasTitle}
                      width="500px"
                      id={`${node.key}`}
                      onclick={() => editunit(newData.key, newData.label)}
                      offcanvasbutton={
                        <RdsIcon
                          name={"pencil"}
                          width="15px"
                          height="15px"
                          stroke={true}
                        ></RdsIcon>
                      }
                    >
                      <RdsInput
                        label={inputlabel}
                        labelPositon="top"
                        id={newData.key}
                        redAsteriskPresent={true}
                        name={Edit}
                        value={Edit}
                        size="medium"
                        onChange={onChange}
                      ></RdsInput>
                      <div
                        className="d-flex"
                        style={{ position: "absolute", bottom: "5%" }}
                      >
                        <div className="me-3">
                          <RdsButton
                            type={"button"}
                            label="cancel"
                            colorVariant="primary"
                          ></RdsButton>
                        </div>
                        <RdsButton
                          type={"button"}
                          label="save"
                          colorVariant="primary"
                          onClick={() => onSaveHandler(newData.key)}
                        ></RdsButton>
                      </div>
                    </RdsOffcanvas>
                  </div>
                  {"   "}
                  <div className="icon delete">
                    <RdsCompAlertPopup
                      alertbutton={
                        <RdsIcon
                          name={"delete"}
                          height="16px"
                          width="20px"
                          stroke={true}
                        ></RdsIcon>
                      }
                      ondelete={() => deleteunit(newData.key)}
                    ></RdsCompAlertPopup>
                  </div>
                </div>
              </div>

              {hasChild && (
                <div>
                  <ul key={newData.key}>
                    <RdsComporganizationTreeNew
                      data={newData.children}
                      inputLabel={inputlabel}
                      CanvasTitle={canvasTitle}
                      AddUnitlabel={addUnitlabel}
                    ></RdsComporganizationTreeNew>
                  </ul>
                </div>
              )}
            </div>
          </li>{" "}
        </div>
      )}
    </>
  );
};

export default RdsComporganizationTreeNew;
