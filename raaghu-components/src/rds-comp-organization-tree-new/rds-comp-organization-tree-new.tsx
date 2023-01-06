import { intlFormatDistance } from "date-fns";
import { useState, useEffect, useLayoutEffect, Key } from "react";
import RdsCompAlertPopup from "../rds-comp-alert-popup/rds-comp-alert-popup";
import { RdsIcon, RdsButton, RdsOffcanvas, RdsInput } from "../rds-elements";
import "./rds-comp-organization-tree-new.scss";

export interface RdsComporganizationTreeNewProps {
  data: any[];
  inputLabel?: string;
  CanvasTitle?: string;
  AddUnitlabel?: string;
  counter?: number;
}

const RdsComporganizationTreeNew = (props: RdsComporganizationTreeNewProps) => {
  const CancelClick = () => {};
  var { data, inputLabel, CanvasTitle, AddUnitlabel, counter = 0 } = props;

  const [Odata, setOdata] = useState(props.data);
  const [Tdata, setTdata] = useState(props.data);
  const hasChild = props.data.length === 0 ? false : true;

  useLayoutEffect(() => {
    console.log("parentjusrerendered");
    setTdata(Odata);
  });

  console.log(Odata);

  let name: string;
  const onChange = (e: any) => {
    name = e.target.value;
  };

  const addunit = (e: any, key: any) => {
    console.log(Odata);
    console.log("unit added");
    console.log(key);
    let level;
    level = Odata[0].level;
    setOdata([
      ...Odata,
      { key: new Date().getMilliseconds(), label: name, level: level },
    ]);
  };

  return (
    <>
      <ul className="parent" style={{ listStyle: "none" }}>
        {hasChild && <div className="vertical"></div>}
        {Tdata.map((tree: { key: Key | null | undefined }) => (
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
        <div>
          <div className="add">
            {" "}
            {Tdata[0].length !== 0 && (
              <div>
                {Tdata[Tdata.length - 1] && (
                  <RdsOffcanvas
                    placement="end"
                    canvasTitle="Add Organiztion Sub-Unit"
                    offcanvaswidth={500}
                    offcanvasbutton={
                      <RdsButton
                        iconHeight="10px"
                        iconWidth="10px"
                        iconColorVariant="dark"
                        type={"button"}
                        icon={"Plus"}
                        size={"small"}
                        colorVariant={"primary"}
                        label={props.AddUnitlabel}
                      ></RdsButton>
                    }
                    backDrop={false}
                    scrolling={false}
                    preventEscapeKey={false}
                    offId={`d${Tdata[Tdata.length - 1].key}`}
                  >
                    <RdsInput
                      label={"Add Organization name"}
                      labelPositon="top"
                      redAsteriskPresent={true}
                      size="medium"
                      onChange={onChange}
                    ></RdsInput>
                    <div
                      className="d-flex"
                      style={{ position: "absolute", bottom: "15%" }}
                    >
                      <div className="me-3">
                        <RdsButton
                          type={"button"}
                          label="cancel"
                          colorVariant="primary"
                          onClick={CancelClick}
                        ></RdsButton>
                      </div>
                      <RdsButton
                        type={"button"}
                        label="save"
                        colorVariant="primary"
                        onClick={(event) =>
                          addunit(event, Tdata[Tdata.length - 1])
                        }
                      ></RdsButton>
                    </div>
                  </RdsOffcanvas>
                )}
              </div>
            )}
          </div>
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


  const CancelClick = () => {};
  const [newData, setnewData] = useState(node);

  const [Edit, setEdit] = useState("");

  const hasChild = newData.children ? true : false;

  useEffect(() => {});

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

  
  const onaddsubunitHandler = (elementid: any) => {
    if (name) {
      let level: any;
      level = newData.level + 1;
      if (newData.children) {
        // setnewData((prevState: { children: any }) => ({
        //   ...prevState,
        //   children: [
        //     ...prevState.children,
        //     { label: name, level: level, key: new Date().getMilliseconds() },
        //   ],
        // }));

        setnewData((prevState: { children: any }) => {
          const newState = {
            ...prevState,
            children: [
              ...prevState.children,
              {
                label: name,
                level: level,
                key: new Date().getMilliseconds().toString(),
              },
            ],
          }; // update state as you did before.
          console.log("this is new chil array ", newState);

          return newState;
        });
      } else {
        setnewData({
          ...newData,
          children: [
            { label: name, level: level, key: new Date().getMilliseconds() },
          ],
        });
      }
    }
  };
  const onSaveHandler = (elementid: any) => {
    console.log("new name is ", name);
    console.log("id", elementid);
    if (name) {
      setnewData({ ...newData, label: name });
    }

    console.log("New data", newData);
  };

  const deleteunit = (key: any) => {
    console.log(key, "is being deleted");
    if (newData.key === key) {
      console.log("newDatakey", newData.key);
      setnewData("");
    }
  };

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
                  newData ? `${newData.level === 1 ? " " : "horizontal"}` : ""
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
                    // colorVariant={`${
                    //   newData.level === 1
                    //     ? "success"
                    //     : `${
                    //         newData.level === 2
                    //           ? "primary"
                    //           : `${
                    //               newData.level === 3
                    //                 ? "warning"
                    //                 : `${
                    //                     newData.level === 4
                    //                       ? "danger"
                    //                       : "secondary"
                    //                   }`
                    //             }`
                    //       }`
                    // }`}
                    background={`${
                      (newData.level + 4) % 4 === 3
                        ? "success"
                        : `${
                            (newData.level + 4) % 4 === 2
                              ? "primary"
                              : `${
                                  (newData.level + 4) % 4 === 1
                                    ? "warning"
                                    : `${
                                        (newData.level + 4) % 4 === 0
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
                  <div className="canvas icon edit">
                    {" "}
                    <div className="plus">
                      <RdsOffcanvas
                        placement="end"
                        canvasTitle="Add Sub-Organiztion"
                        offcanvaswidth={500}
                        offId={`a${node.key}`}
                        offcanvasbutton={
                          <RdsIcon
                            name={"plus"}
                            height="15px"
                            width="17px"
                            stroke={true}
                          ></RdsIcon>
                        }
                        backDrop={false}
                        scrolling={false}
                        preventEscapeKey={false}
                      >
                        <RdsInput
                          label={inputlabel}
                          labelPositon="top"
                          id={newData.key}
                          redAsteriskPresent={true}
                          name={Edit}
                          size="medium"
                          onChange={onChange}
                        ></RdsInput>
                        <div
                          className="d-flex"
                          style={{ position: "absolute", bottom: "15%" }}
                        >
                          <div className="me-3">
                            <RdsButton
                              type={"button"}
                              label="cancel"
                              colorVariant="primary"
                              onClick={CancelClick}
                            ></RdsButton>
                          </div>
                          <RdsButton
                            type={"button"}
                            label="save"
                            colorVariant="primary"
                            onClick={() => onaddsubunitHandler(newData.key)}
                          ></RdsButton>
                        </div>
                      </RdsOffcanvas>{" "}
                    </div>
                    <RdsOffcanvas
                      placement="end"
                      canvasTitle={canvasTitle}
                      offcanvaswidth={500}
                      offId={`b${node.key}`}
                      onclick={() => editunit(newData.key, newData.label)}
                      offcanvasbutton={
                        <RdsIcon
                          name={"pencil"}
                          width="15px"
                          height="15px"
                          stroke={true}
                        ></RdsIcon>
                      }
                      backDrop={false}
                      scrolling={false}
                      preventEscapeKey={false}
                    >
                      <RdsInput
                        inputType="text"
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
                        style={{ position: "absolute", bottom: "15%" }}
                      >
                        <div className="me-3">
                          <RdsButton
                            type={"button"}
                            label="cancel"
                            colorVariant="primary"
                            onClick={CancelClick}
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
                      id={newData.key}
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
              <div className="ms-3 text-muted fs-6">
                ({newData.children ? newData.children.length : 0} members)
              </div>
              {hasChild && (
                <div>
                  <ul key={newData.key}>
                    <RdsComporganizationTreeNew
                      data={newData.children}
                      key={newData.key}
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
