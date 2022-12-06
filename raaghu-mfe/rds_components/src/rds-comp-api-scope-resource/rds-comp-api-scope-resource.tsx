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
  state.map((parent: any) => {});

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
    // ============================================================================================
    case "Child":
      return state.map((parent: any) => {
        if (parent.id === action.P_id) {
          let tempChi = parent.children.map((child: any) => {
            if (child.id === action.C_id) {
              return { ...child, selected: !child.selected };
            } else {
              return { ...child, selected: child.selected };
            }
          });

          let selected = tempChi.filter(
            (child: any) => child.selected == true
          ).length;

          if (selected === parent.children.length) {
            return {
              ...parent,
              select: true,
              selected: true,
              children: tempChi,
            };
          } else {
            return {
              ...parent,
              select: true,
              selected: false,
              children: tempChi,
            };
          }
        } else {
          return { ...parent, select: false };
        }
      });
    // ============================================================================================
    case "grand":
      return state.map((parent: any) => {
        let tempChi = parent.children.map((child: any) => {
          if (action.event.target.checked) {
            return { ...child, selected: true };
          } else {
            return { ...child, selected: false };
          }
        });
        let t = 1;
        let tempT = parent.children.map((chil: any) => {
          chil.selected ? t + 1 : t;
          return t;
        });

        let selected = tempChi.filter(
          (child: any) => child.selected == true
        ).length;

        if (selected === parent.children.length) {
          return {
            ...parent,
            select: true,
            selected: true,
            children: tempChi,
          };
        } else {
          return {
            ...parent,
            select: true,
            selected: false,
            children: tempChi,
          };
        }
      });

    default:
      return state;
  }
};

const RdsCompApiScopeResource = (props: RdsCompApiScopeResourceProps) => {
  const [Res, dispatch] = useReducer(reducer, props.resources);
  const [check, setcheck] = useState(false);

  useEffect(() => {
    let selected = Res.filter((Parent: any) => Parent.selected == true).length;

    if (selected === Res.length) {
      setcheck(true);
    } else {
      setcheck(false);
    }
  });

  const ChandleChange = (Child: any, Parent: any, e: any) => {
    dispatch({ type: "Child", P_id: Parent.id, C_id: Child.id });
  };
  const Phandlechange = (resource: any) => {
    dispatch({ type: "Parent", P_id: resource.id });
  };
  const Ghandlechange = (event: any) => {
    dispatch({ type: "grand", event: event });
    setcheck(!check);
  };

  return (
    <>
      <input
        type="checkbox"
        // label="select all"
        name="select all"
        checked={check}
        onChange={(event) => Ghandlechange(event)}
      ></input>{" "}
      <label htmlFor="">Select all</label>
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
                        <input
                          type="checkbox"
                          // label="select all"
                          name="select all"
                          checked={resource.selected}
                          onChange={(event) => Phandlechange(resource)}
                        ></input>{" "}
                        <label htmlFor="">{resource.displayName}</label>
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
                                ChandleChange(check, resource, event)
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
              select={22}
            ></RdsAccordion>
          );
        })}
      </div>
    </>
  );
};

export default RdsCompApiScopeResource;
