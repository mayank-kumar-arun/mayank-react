import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useReducer } from "react";
import "./rds-checkbox-parent-child.scss";

export interface RdsCheckboxParentChildProps {
  userData: any[];
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INITIAL_STATE":
      return state.map((parents: any, index: any) => {
        if (
          parents.childList.filter((child: any) => child?.isSelected == true)
            .length >= 1 &&
          parents.childList.filter((child: any) => child?.isSelected == true)
            .length < parents.childList.length
        ) {
          return { ...parents, isIntermediate: true, isSelected: false };
        } else if (
          parents.childList.filter((child: any) => child?.isSelected == true)
            .length == parents.childList.length
        ) {
          return { ...parents, isIntermediate: false, isSelected: true };
        } else {
          return { ...parents, isIntermediate: false, isSelected: false };
        }
      });

    case "PARENT":
      return state.map((parents: any) => {
        if (parents.id === action.p_id) {
          let tempUser = parents.childList.map((child: any) => {
            return {
              ...child,
              isSelected: !parents.isSelected,
              isIntermediate: false,
            };
          });
          return {
            ...parents,
            isSelected: !parents.isSelected,
            childList: tempUser,
            isIntermediate: false,
          };
        } else {
          return parents;
        }
      });

    case "CHILD":
      return state.map((parents: any) => {
        if (parents.id === action.p_id) {
          let tempUser = parents.childList.map((child: any) => {
            if (child.id === action.c_id) {
              return { ...child, isSelected: !child.isSelected };
            } else {
              return child;
            }
          });
          let selecteds = tempUser.filter(
            (child: any) => child.isSelected == true
          ).length;

          if (selecteds == parents.childList.length) {
            return {
              ...parents,
              isSelected: true,
              isIntermediate: false,
              childList: tempUser,
            };
          } else if (selecteds > 0 && selecteds < parents.childList.length) {
            return { ...parents, isIntermediate: true, childList: tempUser };
          } else {
            return {
              ...parents,
              isSelected: false,
              isIntermediate: false,
              childList: tempUser,
            };
          }
        } else {
          return parents;
        }
      });
    default:
      return state;
  }
};
const RdsCheckboxParentChild = (props: RdsCheckboxParentChildProps) => {
  const [users, dispatch] = useReducer(reducer, props.userData);
  const parentHandleChange = (parents: any) => {
    dispatch({ type: "PARENT", p_id: parents.id });
  };
  const childHandleChange = (child: any) => {
    dispatch({ type: "CHILD", c_id: child.id, p_id: child.parent_id });
  };

  useEffect(() => {
    dispatch({ type: "INITIAL_STATE" });
  }, []);
  return (
    <>
      <div className="container p-0 m-0">
        <form className="form  p-0 m-0 w-100">
          <ul className=" p-0 m-0">
            {users.map((parents: any, index: number) => {
              return (
                <li className="line1  p-0 m-0" key={index}>
                  <div className="form-check  ">
                    <label className="form-check-label ms-2">
                      <input
                        type="checkbox"
                        className={`${
                          parents?.isIntermediate
                            ? "form-check-input-intermediate"
                            : "form-check-input"
                        }`}
                        name={parents?.label}
                        checked={parents?.isSelected}
                        disabled={parents?.disabled}
                        onChange={() => parentHandleChange(parents)}
                      />
                      {parents?.label}
                    </label>
                  </div>
                  <ul>
                    {parents.childList.map((child: any, idx: any) => {
                      return (
                        <li className="line1" key={idx}>
                          <div className="form-check">
                            <label className="form-check-label ms-2">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name={child?.id}
                                disabled={child?.disabled}
                                checked={child?.isSelected}
                                onChange={() => childHandleChange(child)}
                              />
                              {child?.label}
                            </label>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    </>
  );
};
export default RdsCheckboxParentChild;
