import { id } from "date-fns/locale";
import { AnyArray } from "immer/dist/internal";
import React, { useState, useEffect, Children, useReducer } from "react";
import rdsAccordion from "../../../../raaghu-elements/src/rds-accordion";
import { RdsAccordion, RdsCheckbox } from "../rds-elements";
import "./rds-comp-api-scope-resource.scss";

export interface RdsCompApiScopeResourceProps {
  resources: any[];
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "Parent":
      return state.map((parent: any, i: any) => {
        if (parent.id === action.P_id) {
          let tempRes = parent.children.map((child: any) => {
            return { ...child, selected: !parent.selected };
          });

          return {
            ...parent,
            selected: !parent.selected,
            children: tempRes,
            select: true,
          };
        } else {
          return { ...parent, select: false };
        }
      });

    case "Child":
      return state;

    default:
      return state;
  }
};

const RdsCompApiScopeResource = (props: RdsCompApiScopeResourceProps) => {
  const [Res, dispatch] = useReducer(reducer, props.resources);
  const [open, setopen] = useState(0);

  const handleChange = (Child: any, Parent: any, e: any) => {
    dispatch({ type: "Child", P_id: Parent.id, C_id: Child.id });
  };
  const Phandlechange = (resource: any, event: any) => {
    dispatch({ type: "Parent", P_id: resource.id });
  };

  return (
    <>
      <input type="checkbox" name="Select all" />

      <div className="col-md-12 mt-3">
        {Res.map((resource: any, i: number) => {
          return (
            <RdsAccordion
              key={i}
              buttonGroupItems={[
                {
                  id: "accordionOne",
                  bId: "collapseOne",
                  Bodyheading: "",
                  title: resource.displayName,
                  content: (
                    <>
                      <div className="mt-2">
                        {" "}
                        <RdsCheckbox
                          label="select all"
                          name="select all"
                          checked={resource.selected}
                          onChange={(event) => Phandlechange(resource, event)}
                        ></RdsCheckbox>{" "}
                      </div>

                      <div className="accbodycheck mt-3">
                        {resource.children.map((check: any, idd: number) => (
                          <div key={idd} className="col-md-4">
                            <input
                              type="checkbox"
                              // label={check.displayName}
                              name={check.displayName}
                              checked={check.selected}
                              onChange={(event) =>
                                handleChange(check, resource, event)
                              }
                            ></input>
                            <label htmlFor="">{check.displayName}</label>
                          </div>
                        ))}
                      </div>
                    </>
                  ),
                  state: resource.select,
                },
              ]}
              colorVariant={"primary"}
              size={"small"}
              outline={false}
              select={null}
            ></RdsAccordion>
          );
        })}
      </div>
    </>
  );
};

export default RdsCompApiScopeResource;
