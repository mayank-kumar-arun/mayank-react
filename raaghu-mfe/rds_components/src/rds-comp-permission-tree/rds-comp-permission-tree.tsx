import "./rds-comp-permission-tree.scss";
import {
  useState,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";

export interface RdsPT {
  familyTree: any[];
}

const recursiveCheck = (state: any, action: any) => {
  if (action.type === "INITIAL_STATE") {
    return state.map((parents: any, index: any) => {
      if (
        parents.children.filter((child: any) => child?.isSelected == true)
          .length >= 1 &&
        parents.children.filter((child: any) => child?.isSelected == true)
          .length < parents.children.length
      ) {
        return { ...parents, isIntermediate: true, isSelected: false };
      } else if (
        parents.children.filter((child: any) => child?.isSelected == true)
          .length == parents.children.length
      ) {
        return { ...parents, isIntermediate: false, isSelected: true };
      } else {
        return { ...parents, isIntermediate: false, isSelected: false };
      }
    });
  } else if (action.type == "CHILD") {
    return state.map((user: any) => {
      if (user.id === action.payload.id) {
        let tempUser = user.children.map((child: any) => {
          return { ...child, isSelected: !user.isSelected };
        });
        return {
          ...user,
          isSelected: true,
          isIntermediate: false,
          children: tempUser,
        };
        // let selecteds = tempUser.filter(
        //   (child: any) => child.isSelected == true
        // ).length;

        // if (selecteds == parents.children.length) {

        // } else if (selecteds > 0 && selecteds < parents.children.length) {
        //   return { ...parents, isIntermediate: true, children: tempUser };
        // } else {
        //   return {
        //     ...parents,
        //     isSelected: false,
        //     isIntermediate: false,
        //     children: tempUser,
        //   };
        // }
      } else {
        return user;
      }
    });
  } else return state;
  // let newState = JSON.parse(JSON.stringify(state));

  // for (let k in defaultSettings) {
  //   if (!newState[k]) {
  //     // NOTE: 'in the event that a value is default set to TRUE'
  //     if (newState[k] !== false) {
  //       newState[k] = defaultSettings[k];
  //     }
  //   } else if (typeof defaultSettings[k] == 'object') {
  //     recursiveCheck(newState[k], defaultSettings[k]);
  //   }
  // }
  // return newState;
};
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "INITIAL_STATE":
      return state.map((parents: any, index: any) => {
        if (
          parents.children.filter((child: any) => child?.isSelected == true)
            .length >= 1 &&
          parents.children.filter((child: any) => child?.isSelected == true)
            .length < parents.children.length
        ) {
          return { ...parents, isIntermediate: true, isSelected: false };
        } else if (
          parents.children.filter((child: any) => child?.isSelected == true)
            .length == parents.children.length
        ) {
          return { ...parents, isIntermediate: false, isSelected: true };
        } else {
          return { ...parents, isIntermediate: false, isSelected: false };
        }
      });

    // case "PARENT":
    //   return state.map((parents: any) => {
    //     if (parents.id === action.p_id) {
    //       let tempUser = parents.children.map((child: any) => {
    //         return {
    //           ...child,
    //           isSelected: !parents.isSelected,
    //           isIntermediate: false,
    //         };
    //       });
    //       return {
    //         ...parents,
    //         isSelected: !parents.isSelected,
    //         children: tempUser,
    //         isIntermediate: false,
    //       };
    //     } else {
    //       return parents;
    //     }
    //   });

    case "CHILD":
      let TempState= state.map((user: any) => {
        // console.log("going to check --user.id "+ user.id, "    user.parent_id-- "+user.parent_id)
     
        if (user.id === action.id && user.parent_id==action.p_id) {
          console.log("match here --", user);
          let tempUser = user.children.map((child: any) => {
            console.log("match here tempUser");
            return { ...child, isSelected: !user.isSelected };
          });
          console.log("tempUser--", tempUser)
          return {
            ...user,
            isSelected: !user.isSelected,
            isIntermediate: false,
            children: tempUser,
          };
        } else {
          console.log("match not yet here --", user.id);
          return  reducer(user.children, action)
        }
       // return  reducer(user.children, action)
      })
      console.log("TempState", TempState)
      return {...state, state:TempState};
    default:
      return state;
  }
};

const RdsCompPermissionTree = (props: RdsPT) => {
  const [state, dispatch] = useReducer(reducer, props.familyTree);
  // console.log("familyTree ", props.familyTree);
  const TreeNode = ({ users }: any) => {
    const [isVisible, setIsVisible] = useState(true);
    const expand = () => {
      setIsVisible(!isVisible);
    };
    console.log("TreeNode users ", users);
    const onCheckHandler = (user: any) => {
      //console.log("onCheckhandler-- ", user)
      dispatch({ type: "CHILD", id: user.id, p_id:user.parent_id });
      console.log("onCheckhandler--user.id "+ user.id, "    user.parent_id-- "+user.parent_id)
    };

    // useEffect(() => {
    //   dispatch({ type: "INITIAL_STATE" });
    // }, []);
    return (
      <ul className=" p-0 m-0">
        {users.map((user: any, index: number) => (
          <li className="line1 d-flex p-0 m-0" key={index}>
            {user.children.length > 0 && isVisible && (
              <span className="me-2 expandstyle" onClick={expand}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
            )}
            {user.children?.length > 0 && isVisible == false && (
              <span className="me-2 expandstyle" onClick={expand}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </span>
            )}

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={user.name}
                id={user.id}
                checked={user.isSelected}
                onChange={() => onCheckHandler(user)}
              />

              <label className="form-check-label" htmlFor="flexCheckDefault">
                {user.name}
              </label>
              {isVisible ? (
                <>
                  <ul>
                    {user.children?.length > 0 && (
                      <TreeNode users={user?.children} />
                    )}
                  </ul>
                </>
              ) : (
                <></>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <form className="form  p-0 m-0 w-100">
      <TreeNode users={props.familyTree} />
    </form>
  );
};
export default RdsCompPermissionTree;
