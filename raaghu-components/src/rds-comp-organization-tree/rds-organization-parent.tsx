import React, { useState } from "react";
import {RdsIcon} from "../rds-elements";
import TreeUser from "./Edit/user";
import UserContextProvider from "./Edit/usercontext";

const OrganizationParent = ({ organizationchildren }: any) => {
  const [treeunits, setTreeunits] = useState([organizationchildren]);
  const removeElement = (index: any) => {
    const newTreeunits = treeunits.filter((_, i) => i !== index);
    setTreeunits(newTreeunits);
  };
  const [childtreeunits, setChildTreeunits] = useState([organizationchildren]);
  const removeChildUnits = (id: any) => {
    const newChildTreeunits = childtreeunits.filter((childTreeSubUnit) => childTreeSubUnit.id !== id);
    setChildTreeunits(newChildTreeunits);
  };
  const [isVisible, setIsVisible] = useState(true);
  const expand = () => {
    setIsVisible(!isVisible);
  };

  const edit=()=>{
    <UserContextProvider>
            <TreeUser />
          </UserContextProvider>
         
  }
  return (
    <div className="position-relative" style={{ paddingLeft: 10 }}>
      <div className="d-flex align-items-center">
        <div>
          {treeunits.map((treeunit, index) => (
            <div key={index}>
              <div>
                <span style={{ marginRight: 10 }} onClick={() => removeElement(index)}>
                  {organizationchildren.name}
                </span>
                <button className="btn btn-primary" onClick={edit}>Edit</button>
                <span style={{ paddingRight: 12 }}>
                  <RdsIcon class={"px-4"} name={"plus"} stroke={true} colorVariant={"primary"} height={"15px"} width={"15px"}></RdsIcon>
                </span>
                <span style={{ paddingRight: 12 }}>
                  <RdsIcon name={"pencil"}  stroke={true} colorVariant={"primary"} height={"15px"}width={"15px"} class={"mx-2"}></RdsIcon>
                </span>
                <span>
                  <RdsIcon name={"delete"} stroke={true} colorVariant={"primary"} height={"15px"} width={"15px"} class={"mx-2"}
                  ></RdsIcon>
                </span>
              </div>
              <div>
                <span className="text-muted">(0 Member)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isVisible ? (
        organizationchildren.children.map((child: any) => {
          return (
            <div style={{ paddingLeft: 35, paddingTop: 10 }}>
              <div>{childtreeunits.map((childTreeSubUnit) => (
                 <div key={childTreeSubUnit.id}>
                  <div>
              <span style={{ marginRight: 10 }} onClick={() => removeChildUnits(childTreeSubUnit.id)}>
                {child.name}
              </span>
              
              <span style={{ paddingRight: 12 }}>
                <RdsIcon
                  class={"px-4"}
                  name={"plus"}
                  stroke={true}
                  colorVariant={"primary"}
                  height={"15px"}
                  width={"15px"}
                ></RdsIcon>
              </span>
              <span style={{ paddingRight: 12 }}>
                <RdsIcon
                  name={"pencil"}
                  stroke={true}
                  colorVariant={"primary"}
                  height={"15px"}
                  width={"15px"}
                  class={"mx-2"}
                ></RdsIcon>
              </span>
              <span>
                <RdsIcon
                  name={"delete"}
                  stroke={true}
                  colorVariant={"primary"}
                  height={"15px"}
                  width={"15px"}
                  class={"mx-2"}
                ></RdsIcon>
              </span></div>
              <div>
                <span className="text-muted">(0 Member)</span>
              </div>
            </div>
          ))}
        </div>

              {child?.children?.map((subChild: any) => {
                return (
                  <div style={{ paddingLeft: 35, paddingTop: 10 }}>
                    <span style={{ marginRight: 10 }} onClick={expand}>
                      {subChild?.name}
                    </span>
                    <span style={{ paddingRight: 12 }}>
                      <RdsIcon
                        class={"px-4"}
                        name={"plus"}
                        stroke={true}
                        colorVariant={"primary"}
                        height={"15px"}
                        width={"15px"}
                      ></RdsIcon>
                    </span>
                    <span style={{ paddingRight: 12 }}>
                      <RdsIcon
                        name={"pencil"}
                        stroke={true}
                        colorVariant={"primary"}
                        height={"15px"}
                        width={"15px"}
                        class={"mx-2"}
                      ></RdsIcon>
                    </span>
                    <span>
                      <RdsIcon
                        name={"delete"}
                        stroke={true}
                        colorVariant={"primary"}
                        height={"15px"}
                        width={"15px"}
                        class={"mx-2"}
                      ></RdsIcon>
                    </span>
                    {subChild.children?.map((subChildInner: any) => {
                      return (
                        <div style={{ paddingLeft: 35, paddingTop: 10 }}>
                          <span style={{ marginRight: 10 }} onClick={expand}>
                            {subChildInner?.name}
                          </span>

                          <span style={{ paddingRight: 12 }}>
                            <RdsIcon
                              class={"px-4"}
                              name={"plus"}
                              stroke={true}
                              colorVariant={"primary"}
                              height={"15px"}
                              width={"15px"}
                            ></RdsIcon>
                          </span>
                          <span style={{ paddingRight: 12 }}>
                            <RdsIcon
                              name={"pencil"}
                              stroke={true}
                              colorVariant={"primary"}
                              height={"15px"}
                              width={"15px"}
                              class={"mx-2"}
                            ></RdsIcon>
                          </span>
                          <span>
                            <RdsIcon
                              name={"delete"}
                              stroke={true}
                              colorVariant={"primary"}
                              height={"15px"}
                              width={"15px"}
                              class={"mx-2"}
                            ></RdsIcon>
                          </span>
                          {subChildInner.childrenren?.map(
                            (subChildInner2: any) => {
                              return (
                                <div>
                                  <span>{subChildInner2.name}</span>
                                </div>
                              );
                            }
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};
export default OrganizationParent;
