import React, { useState } from "react";
import { RdsButton, RdsIcon } from "../../../../raaghu-elements/src";

export interface RdsCompOrganizationTreeProps{
  organizationTreeData : any [];
}

const RdsCompOrganizationTree = (props:RdsCompOrganizationTreeProps) => {
  return (

    
    <div>
      <>
      {props.organizationTreeData?.map((node:any)=>{
        <>
        <div style={{marginLeft:28}}>
            <div className="position-relative" style={{ marginLeft: 6 }}>
              <div className="d-flex align-items-center">
                <div className="dot"></div>
                <span className="mt-1 d-flex align-items-center">
                  <span className="mr-5">qwerty</span>
      
                  <RdsIcon
                    name={"plus"}
                    stroke={true}
                    colorVariant={"success"}
                    height={"15px"}
                    width={"15px"}
                    class={"mx-2"}
                  ></RdsIcon>
                  <RdsIcon
                    name={"pencil"}
                    stroke={true}
                    colorVariant={"success"}
                    height={"15px"}
                    width={"15px"}
                    class={"mx-2"}
                  ></RdsIcon>
                  <RdsIcon
                    name={"delete"}
                    stroke={true}
                    colorVariant={"success"}
                    height={"15px"}
                    width={"15px"}
                    class={"mx-2"}
                  ></RdsIcon>
                </span>
              </div>
              <span className="text-muted">(0 Member)</span>
      
              <div>
                <div
                  className="position-relative"
                  style={{ marginLeft: 35, marginTop: 10 }}
                >
                  <div className="d-flex align-items-center">
                    <div className="dot"></div>
                    <span className="mt-1 d-flex align-items-center">
                      <span className="mr-5">test</span>
      
                      <RdsIcon
                        name={"plus"}
                        stroke={true}
                        colorVariant={"success"}
                        height={"15px"}
                        width={"15px"}
                        class={"mx-2"}
                      ></RdsIcon>
                      <RdsIcon
                        name={"pencil"}
                        stroke={true}
                        colorVariant={"success"}
                        height={"15px"}
                        width={"15px"}
                        class={"mx-2"}
                      ></RdsIcon>
                      <RdsIcon
                        name={"delete"}
                        stroke={true}
                        colorVariant={"success"}
                        height={"15px"}
                        width={"15px"}
                        class={"mx-2"}
                      ></RdsIcon>
                    </span>
                  </div>
                  <span className="text-muted">(14 Members)</span>
                  <div>
                    <div
                      className="position-relative"
                      style={{ marginLeft: 35, marginTop: 10 }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="dot"></div>
                        <span className="mt-1 d-flex align-items-center">
                          <span className="mr-5">child</span>
      
                          <RdsIcon
                            name={"plus"}
                            stroke={true}
                            colorVariant={"success"}
                            height={"15px"}
                            width={"15px"}
                            class={"mx-2"}
                          ></RdsIcon>
                          <RdsIcon
                            name={"pencil"}
                            stroke={true}
                            colorVariant={"success"}
                            height={"15px"}
                            width={"15px"}
                            class={"mx-2"}
                          ></RdsIcon>
                          <RdsIcon
                            name={"delete"}
                            stroke={true}
                            colorVariant={"success"}
                            height={"15px"}
                            width={"15px"}
                            class={"mx-2"}
                          ></RdsIcon>
                        </span>
                      </div>
                      <span className="text-muted">(0 Member)</span>
                      <div>
                        <div
                          className="position-relative"
                          style={{ marginLeft: 35, marginTop: 10 }}
                        >
                          <div className="d-flex align-items-center">
                            <div className="dot"></div>
      
                            <span className="mt-1 d-flex align-items-center">
                              <span className="mr-5">child</span>
      
                              <RdsIcon
                                name={"plus"}
                                stroke={true}
                                colorVariant={"success"}
                                height={"15px"}
                                width={"15px"}
                                class={"mx-2"}
                              ></RdsIcon>
                              <RdsIcon
                                name={"pencil"}
                                stroke={true}
                                colorVariant={"success"}
                                height={"15px"}
                                width={"15px"}
                                class={"mx-2"}
                              ></RdsIcon>
                              <RdsIcon
                                name={"delete"}
                                stroke={true}
                                colorVariant={"success"}
                                height={"15px"}
                                width={"15px"}
                                class={"mx-2"}
                              ></RdsIcon>
                            </span>
                          </div>
                          <span className="text-muted">(0 Member)</span>
                        </div>
                      </div>
                      <div>
                        <div
                          className="position-relative"
                          style={{ marginLeft: 35, marginTop: 10 }}
                        >
                          <div className="d-flex align-items-center">
                            <div className="dot"></div>
      
                            <span className="mt-1 d-flex align-items-center">
                              <span className="mr-5">child 1</span>
      
                              <RdsIcon
                                name={"plus"}
                                stroke={true}
                                colorVariant={"success"}
                                height={"15px"}
                                width={"15px"}
                                class={"mx-2"}
                              ></RdsIcon>
                              <RdsIcon
                                name={"pencil"}
                                stroke={true}
                                colorVariant={"success"}
                                height={"15px"}
                                width={"15px"}
                                class={"mx-2"}
                              ></RdsIcon>
                              <RdsIcon
                                name={"delete"}
                                stroke={true}
                                colorVariant={"success"}
                                height={"15px"}
                                width={"15px"}
                                class={"mx-2"}
                              ></RdsIcon>
                            </span>
                          </div>
                          <span className="text-muted">(0 Member)</span>
                        </div>
      
                        <div className="position-relative" style={{ marginTop: 10 }}>
                          <RdsButton tooltipTitle={"top"} type={"button"}>
                            <button className="btn btn-primary btn-sm">
                              <span className="me-2 align-middle">
                                <RdsIcon
                                  name={"plus"}
                                  height="12px"
                                  width="12px"
                                  colorVariant="light"
                                  stroke={true}
                                  fill={true}
                                ></RdsIcon>
                              </span>
                              <span className="btn-text">SUB-UNIT</span>
                            </button>
                          </RdsButton>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="position-relative"
                    style={{ marginLeft: 35, marginTop: 10 }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="dot"></div>
                      <span className="mt-1 d-flex align-items-center">
                        <span className="mr-5">122</span>
      
                        <RdsIcon
                          name={"plus"}
                          stroke={true}
                          colorVariant={"success"}
                          height={"15px"}
                          width={"15px"}
                          class={"mx-2"}
                        ></RdsIcon>
                        <RdsIcon
                          name={"pencil"}
                          stroke={true}
                          colorVariant={"success"}
                          height={"15px"}
                          width={"15px"}
                          class={"mx-2"}
                        ></RdsIcon>
                        <RdsIcon
                          name={"delete"}
                          stroke={true}
                          colorVariant={"success"}
                          height={"15px"}
                          width={"15px"}
                          class={"mx-2"}
                        ></RdsIcon>
                      </span>
                    </div>
                    <span className="text-muted">(0 Member)</span>
                  </div>
                  <div
                    className="position-relative"
                    style={{ marginLeft: 35, marginTop: 10 }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="dot"></div>
                      <span className="mt-1 d-flex align-items-center">
                        <span className="mr-5">test1</span>
      
                        <RdsIcon
                          name={"plus"}
                          stroke={true}
                          colorVariant={"success"}
                          height={"15px"}
                          width={"15px"}
                          class={"mx-2"}
                        ></RdsIcon>
                        <RdsIcon
                          name={"pencil"}
                          stroke={true}
                          colorVariant={"success"}
                          height={"15px"}
                          width={"15px"}
                          class={"mx-2"}
                        ></RdsIcon>
                        <RdsIcon
                          name={"delete"}
                          stroke={true}
                          colorVariant={"success"}
                          height={"15px"}
                          width={"15px"}
                          class={"mx-2"}
                        ></RdsIcon>
                      </span>
                    </div>
                    <span className="text-muted">(0 Member)</span>
                  </div>
                  <div className="position-relative" style={{ marginTop: 10 }}>
                    <RdsButton tooltipTitle={"top"} type={"button"}>
                      <button className="btn btn-primary btn-sm">
                        <span className="me-2 align-middle">
                          <RdsIcon
                            name={"plus"}
                            height="12px"
                            width="12px"
                            colorVariant="light"
                            stroke={true}
                            fill={true}
                          ></RdsIcon>
                        </span>
                        <span className="btn-text">SUB-UNIT</span>
                      </button>
                    </RdsButton>
                  </div>
                </div>
                <div
                  className="position-relative"
                  style={{ marginLeft: 35, marginTop: 10 }}
                >
                  <div className="d-flex align-items-center">
                    <div className="dot"></div>
                    <span className="mt-1 d-flex align-items-center">
                      <span className="mr-5">admin</span>
      
                      <RdsIcon
                        name={"plus"}
                        stroke={true}
                        colorVariant={"success"}
                        height={"15px"}
                        width={"15px"}
                        class={"mx-2"}
                      ></RdsIcon>
                      <RdsIcon
                        name={"pencil"}
                        stroke={true}
                        colorVariant={"success"}
                        height={"15px"}
                        width={"15px"}
                        class={"mx-2"}
                      ></RdsIcon>
                      <RdsIcon
                        name={"delete"}
                        stroke={true}
                        colorVariant={"success"}
                        height={"15px"}
                        width={"15px"}
                        class={"mx-2"}
                      ></RdsIcon>
                    </span>
                  </div>
                  <span className="text-muted">(0 Member)</span>
                </div>
                <div className="position-relative" style={{ marginTop: 10 }}>
                    <RdsButton tooltipTitle={"top"} type={"button"}>
                      <button className="btn btn-primary btn-sm">
                        <span className="me-2 align-middle">
                          <RdsIcon
                            name={"plus"}
                            height="12px"
                            width="12px"
                            colorVariant="light"
                            stroke={true}
                            fill={true}
                          ></RdsIcon>
                        </span>
                        <span className="btn-text">SUB-UNIT</span>
                      </button>
                    </RdsButton>
                  </div>
              </div>
            </div>
            <div className="position-relative" style={{ marginLeft: 6 }}>
              <div className="d-flex align-items-center">
                <div className="dot"></div>
                <span className="mt-1 d-flex align-items-center">
                  <span className="mr-5">test 1</span>
      
                  <RdsIcon
                    name={"plus"}
                    stroke={true}
                    colorVariant={"success"}
                    height={"15px"}
                    width={"15px"}
                    class={"mx-2"}
                  ></RdsIcon>
                  <RdsIcon
                    name={"pencil"}
                    stroke={true}
                    colorVariant={"success"}
                    height={"15px"}
                    width={"15px"}
                    class={"mx-2"}
                  ></RdsIcon>
                  <RdsIcon
                    name={"delete"}
                    stroke={true}
                    colorVariant={"success"}
                    height={"15px"}
                    width={"15px"}
                    class={"mx-2"}
                  ></RdsIcon>
                </span>
              </div>
              <span className="text-muted">(0 Member)</span>
            </div>
        </div>
        <div className="position-relative" style={{ marginTop: 10}}>
                <RdsButton tooltipTitle={"top"} type={"button"}>
                  <button className="btn btn-primary btn-sm">
                    <span className="me-2 align-middle">
                      <RdsIcon
                        name={"plus"}
                        height="12px"
                        width="12px"
                        colorVariant="light"
                        stroke={true}
                        fill={true}
                      ></RdsIcon>
                    </span>
                    <span className="btn-text">NEW-ROOT-UNIT</span>
                  </button>
                </RdsButton>
        </div>
        </>
      })}
      
            </>
    </div>
  );
};

export default RdsCompOrganizationTree;
