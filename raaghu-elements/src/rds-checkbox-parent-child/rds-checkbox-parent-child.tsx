import "bootstrap/dist/css/bootstrap.min.css";
import React, { useReducer} from "react";
import "./rds-checkbox-parent-child.scss";

export interface RdsCheckboxParentChildProps {
  userData: any[];
  role?: "ParentChild" | "individual";
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "PARENT_IND":
      return state.map((parents: any) => {
        if (parents.id === action.p_id ) {
          let tempUser = parents.childList.map((child: any) => {
           return { ...child, isSelected: !parents.isSelected , isIntermediate:false};
         });
        return { ...parents, isSelected: !parents.isSelected , childList:tempUser, isIntermediate:false }
        }else {
          return parents;
        }
      
      });

    case "CHILD_IND":
      return state.map((parents: any) => {
       if(parents.id === action.p_id){
        let tempUser = parents.childList.map((child: any) => {
          if (child.id === action.c_id) {
            return { ...child, isSelected: !child.isSelected };
          } else {
            return child;
          }
        });
      let selecteds =tempUser.filter( (child: any) => child.isSelected == true).length 
      console.log("total checked  children ", selecteds)
    
      if(selecteds==parents.childList.length ){
        console.log("all checked  children ", selecteds)
        return{...parents, isSelected: true , isIntermediate:false ,childList: tempUser}
      }
       else if(selecteds > 0 && selecteds< parents.childList.length){
        console.log("intermediat  children ", selecteds)
        return { ...parents , isIntermediate:true, childList: tempUser }
       } 
       else {
        console.log(" 0 checked  children ", selecteds)
        return { ...parents, isSelected: false,  isIntermediate:false ,childList: tempUser }}
      }
      else {
        return parents
      }}
      );
    default:
      return state;
  }
};
const RdsCheckboxParentChild = (props: RdsCheckboxParentChildProps) => {
  const [users, dispatch] = useReducer(reducer, props.userData);
  let role = props.role || "individual";
  console.log("render");
  const parentHandleChange = (parents: any) => {
    dispatch({ type: "PARENT_IND", p_id: parents.id });
  };
  const childHandleChange = (child: any) => {
    dispatch({ type: "CHILD_IND", c_id: child.id, p_id: child.parent_id });
  };
  return (
    <>
      <div className="container p-0 m-0">
        <form className="form  p-0 m-0 w-100">
          <ul className=" p-0 m-0">
            {users.map((parents: any, index: number) => {
               console.log("parents---", parents)
              return (
                <li className="line1  p-0 m-0" key={index}>
                  <div className="form-check  ">
                    <label className="form-check-label ms-2">
                      <input
                        type="checkbox"
                         className={`${ parents?.isIntermediate
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