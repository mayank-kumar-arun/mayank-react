import { id } from "date-fns/locale";
import { AnyArray } from "immer/dist/internal";
import React, { useState, useEffect, Children, useReducer } from "react";
import { RdsAccordion } from "../rds-elements";
import "./rds-comp-claim.scss";

export interface RdsCompClaimProps {
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
          };
        } else {
          return {
            ...parent,
          };
        }
      });
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
              selected: true,
              children: tempChi,
            };
          } else {
            return {
              ...parent,
              selected: false,
              children: tempChi,
            };
          }
        } else {
          return {
            ...parent,
          };
        }
      });
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
            selected: true,
            children: tempChi,
          };
        } else {
          return {
            ...parent,
            selected: false,
            children: tempChi,
          };
        }
      });

    case "statechange":
      return state.map((parent: any) => {
        if (parent.id === action.P_id) {
          return { ...parent, select: !parent.select };
        } else {
          return parent;
        }
      });

    default:
      return state;
  }
};

const RdsCompClaim = (props: RdsCompClaimProps) => {
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

  const onClickHandler = (parent: any) => {
    dispatch({ type: "statechange", P_id: parent.id });
  };

  return (
    <>
      <div className="form">
        <input
          type="checkbox"
          name="select all"
          checked={check}
          onChange={(event) => Ghandlechange(event)}
          id="flexCheckDefault3"
          className="form-check-input"
        ></input>{" "}
        <label htmlFor="flexCheckDefault3" className="form-check-label">
          Select all
        </label>
        <div className="col-md-12 mt-3">
          {Res.map((resource: any, i: number) => {
            return (
              <div key={i}>
                <>
                  <h6 className="mt-4">{resource.displayName}</h6>
                  <hr />
                  <div className="mt-2">
                    {" "}
                    <input
                      type="checkbox"
                      name="select everything"
                      checked={resource.selected}
                      onChange={(event) => Phandlechange(resource)}
                      id="flexCheckDefault"
                      className="form-check-input"
                    ></input>{" "}
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Select all
                    </label>
                  </div>

                  <div className="accbodycheck mt-3">
                    {resource.children.map((check: any, idd: number) => (
                      <div key={idd} className="col-md-4">
                        <input
                          id="flexCheckDefault1"
                          className="form-check-input"
                          type="checkbox"
                          name={check.displayName}
                          checked={check.selected}
                          onChange={(event) =>
                            ChandleChange(check, resource, event)
                          }
                        ></input>{" "}
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault1"
                        >
                          {check.displayName}
                        </label>
                      </div>
                    ))}
                  </div>
                </>
              </div>
            );
          })}
        </div>
        <br />
        <div className="buttongrp">
          <div>
            <button className="btn buttt btn-outline-primary me-3">
              Cancel
            </button>
          </div>
          <div>
            <button className="btn buttt btn-primary ">Create</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RdsCompClaim;
