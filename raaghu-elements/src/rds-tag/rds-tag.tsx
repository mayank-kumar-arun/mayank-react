import React, { useState } from "react";
import RdsIcon from "../rds-icon";
import "./rds-tag.scss";

export interface RdsTagProps {
  tagType: "square" | "round";
  tagArray?: any[];
  inputText?: string;
  fillClose?: boolean;
  role: "basic" | "tagWithScroll";
  colorVariant:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark";
}

const RdsTag = (props: RdsTagProps) => {
  const [tagAr, setTagArr] = useState<string[]>(props.tagArray || []);
  // const [inputText, setInputText] = useState(props.inputText);
  let closeFill = props.fillClose || false;
  let classes: any;
  const tagColor = "tag-" + `${props.colorVariant}`;
  const borderColor = "border border-" + `${props.colorVariant}`;
  classes = `bd-example ${tagColor} ${borderColor}`;

  if (props.tagType === "square") {
    classes = `bd-example square-tags  ${tagColor} ${borderColor}`;
  }
  if (props.tagType === "round") {
    classes = `bd-example rounded-pill  ${tagColor} ${borderColor}`;
  }

  const tagtextcolor = "text-" + `${props.colorVariant}`;

  const addTag = (e: any) => {
    if (e.key === "Enter" && e.target.value.trim().length != 0) {
      setTagArr((prev) => [...prev, e.target.value]);
      e.targe.value = ""
    }
  
  };

  const mystyle = {
    backgroundColor: props.colorVariant,
    borderRadius: "50%",
  };
  const deleteTag = (i: number) => {
    let newArr = tagAr.filter((item: any) => {
      return tagAr.indexOf(item) != i;
    });
    setTagArr(newArr);
  };

  return (
    <>
        <div>
          <div className="binding-tags border p-2">
            <div className="d-flex">
              <div className="rds-tags res-class" style={{ width: "100%" }}>
                <div className=" " style={{ float: "left" }}>
                  <div
                    className={
                      props.role == "basic"
                        ? "p-0"
                        : "scroll-type d-block m-1 mb-2"
                    }
                    id="inserTag"
                  >
                    {tagAr.map((item, i) => {
                      console.log(item);
                      return (
                        <span className="d-inline-block m-1 mb-2" key={i}>
                          <div className={classes}>
                            <div
                              className="tags tags-dismissible align-items-center fade show tagcorners"
                              role="alert"
                              aria-live="assertive"
                              aria-atomic="true"
                            >
                              <div className="d-flex align-items-center">
                                <div className={`tags-body ${tagtextcolor}`}>
                                  {item}
                                </div>
                                <span
                                  onClick={() => deleteTag(i)}
                                  className={tagtextcolor}
                                  style={{
                                    cursor: "pointer",
                                    marginLeft: "14px",
                                    paddingBottom: "2px",
                                  }}
                                >
                                  <RdsIcon
                                    name="cancel"
                                    fill={false}
                                    stroke={true}
                                    width="15"
                                    height="15"
                                    background={
                                      closeFill == true
                                        ? props.colorVariant
                                        : " "
                                    }
                                    borderRadius={
                                      closeFill == true
                                        ? "50%"
                                        : "props.colorVariant"
                                    }
                                    colorVariant={
                                      closeFill == true
                                        ? "light"
                                        : props.colorVariant
                                    }
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </span>
                      );
                    })}
                  </div>
                </div>
                <span>
                  <input
                    type="text"
                    className="form-control form-control-sm border-0"
                    name="inputText"
                    onKeyDown={addTag}
                    placeholder="+ Add Tag"
                    aria-label="+Tag"
                    aria-describedby="basic-addon1"
                    // value={inputText}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};
export default RdsTag;
