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
  const [count, setcount] = useState(counter);
  const hasChild = props.data.length === 0 ? false : true;

  useLayoutEffect(() => {
    console.log("parentjusrerendered");
    setTdata(Odata);
    console.log("counter", props.counter);
  });

  let name: string;
  const onChange = (e: any) => {
    name = e.target.value;
  };

  const addunit = (e: any, key: any) => {
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
              count={count}
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
                    width="500px"
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
                    canvasid={3}
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
                      style={{ position: "absolute", bottom: "5%" }}
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
  count,
}: {
  node: any;
  inputlabel: any;
  canvasTitle: any;
  addUnitlabel: any;
  count: any;
}) => {
  const CancelClick = () => {};
  const [newData, setnewData] = useState(node);
  const [Edit, setEdit] = useState("");
  const hasChild = newData.children ? true : false;

  // const addunit = (e: any, key: any) => {
  //   console.log("unit added");
  //   console.log(key);
  //   console.log("data remain", newData);

  //   setnewData({
  //     ...newData,
  //     children: [
  //       ...newData.children,
  //       { key: "0-1-5", label: "Document-0-5.doc", title: "Documents Folder" },
  //     ],
  //   });

  //   // setnewData([...newData.children, { key: "3-1", label: "hello", title: "Documents Folder" },
  //   // ]);
  // };

  useEffect(() => {
    console.log(node);
    console.log("child has rendered");
  });

  // useEffect(() => {
  //   console.log("child console run", newData);
  // }, newData);

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
    console.log("new name is ", name);
    console.log("id", elementid);
    let level;
    level = newData.level + 1;
    if (name) {
      setnewData({
        ...newData,
        children: [
          { label: name, level: level, key: new Date().getMilliseconds() },
        ],
      });
    }

    console.log("New data", newData);
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
                  <div
                    className="icon edit"
                    // onClick={(event) => editunit(event, node.key, node.label)}
                  >
                    {" "}
                    <div className="plus">
                      <RdsOffcanvas
                        placement="end"
                        canvasTitle="Add Sub-Organiztion"
                        width="500px"
                        id={`${node.key}`}
                        onclick={() => editunit(newData.key, newData.label)}
                        offcanvasbutton={
                          <RdsIcon
                            name={"plus"}
                            height="15px"
                            width="17px"
                            stroke={true}
                          ></RdsIcon>
                        }
                        canvasid={0}
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
                          style={{ position: "absolute", bottom: "5%" }}
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
                      canvasid={1}
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
                        style={{ position: "absolute", bottom: "5%" }}
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

              {/* <div>
                <div className="add">
                  {" "}
                  <div>
                    <div>
                      <div className="add">
                        {" "}
                        <RdsButton
                          type={"button"}
                          icon={"Plus"}
                          size={"small"}
                          colorVariant={"primary"}
                          iconColorVariant={"light"}
                          label="hello"
                          onClick={(event) => addunit(event, node.children)}
                        ></RdsButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {hasChild && (
                <div>
                  <ul key={newData.key}>
                    <RdsComporganizationTreeNew
                      counter={count}
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
