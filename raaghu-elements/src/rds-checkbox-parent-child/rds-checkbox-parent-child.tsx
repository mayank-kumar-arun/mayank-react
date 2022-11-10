// import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useEffect, useState } from "react";
import './rds-checkbox-parent-child.scss';



export interface RdsCheckboxParentChildProps {
  Checked?: boolean;
  userData:any[]
}

const RdsCheckboxParentChild = (props: RdsCheckboxParentChildProps) => {
  const [users, setUsers] = useState<typeof props.userData>([]);
  

  useEffect(() => {
    setUsers(props.userData);
  }, []);

  const handleChange = (e: any) => {

    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      
      setUsers(tempUser);
    }

    // users.map((user) =>{
    // if(name!= "allSelect" && user.isChecked==checked)
    // {

    //   if (name === "allSelect") {
        
    //     let x =  e.target.indeterminate = true
    //     console.log(x)
    //   }
    // }} )
  };
  

  return (
    <Fragment>
      <div className="container my-4" style={{ width: "500px" }}>
        <form className="form w-100">
          <ul>
            <li>
            {users.map((user, index) => (
              <div className="form-check">
                <label className="form-check-label ms-2" key={index}>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="allSelect"
                    checked={ users.filter((user) => user?.isChecked !== true).length <
                        1 || props.Checked === true }
                    // checked={!users.some((user) => user?.isChecked !== true)}
                    onChange={handleChange}
                  />
                  {user.name}
                </label>
              </div> ))}
              <ul>
                <li>
                  {users.map((user, index) => (
                    <div className="form-check" key={index}>
                      <label className="form-check-label ms-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name={user.name}
                          checked={user?.isChecked || props.Checked}
                          onChange={handleChange}
                        />
                        {user.name}
                      </label>
                    </div>
                  ))}
                </li>
              </ul>
            </li>
          </ul>
        </form>
      </div>
    </Fragment>
  );
};

export default RdsCheckboxParentChild;
/*
import React, { Fragment, useEffect, useState } from "react";
import './rds-checkbox-parent-child.scss';



export interface RdsCheckboxParentChildProps {
  Checked?: boolean;
  userData:any[]
}

const RdsCheckboxParentChild = (props: RdsCheckboxParentChildProps) => {
  const [users, setUsers] = useState<typeof props.userData>([]);
  ///const [users2, setUsers2] = useState<typeof props.userData.childList>([]);
  //  const [child, setChild] = useState<typeof users.childList>()
  useEffect(() => {
    setUsers(props.userData);
  }, []);


  //let x =  e.target.indeterminate = true
  //     console.log(x)
  const handleChange = (user: any, index:any ) => {

   // const { name, checked } = e.target;

    // console.log("user.label-   " + user.label )
    // console.log("user.isChecked-   " + user.isChecked )

    // if (user.label = users[index].label) {
      
    let tempchild= user.childList.map((child:any) => {
        return { ...child , isChecked: true };
      }); 
    let tempuser=  user.map((user:any)=>{
        return {...tempchild ,...user}
      })

      //console.log(" tempuser- " +tempUser)
      setUsers(tempuser);

    // }// else {
    //   let tempUser = users.map((user) =>
    //     user.name === name ? { ...user, isChecked: true } : user
    //   );
    //     setUsers(tempUser);
    // }
  };
  

  return (
    <Fragment>
      <div className="container my-4" style={{ width: "500px" }}>
        <form className="form w-100">
         
            {users.map((user, index) => ( <>
              
              <div className="form-check ms-2" key={index}>
                <label className="form-check-label ms-2"  htmlFor={user.id}>
                  <input
                    type="checkbox"
                    //className="form-check-input form-check-input-intermediate"
                    className='form-check-input '
                    name={user.id}
                    // checked={ users[index].childList.filter((child:any) => child?.isChecked!== true).length <
                    //      1 || props.Checked === true }
                    // checked={!users.some((user) => user?.isChecked !== true)}
                   // onChange={()=>handleChange(user, index)}
                  />
                  {user.label}
                </label>
              </div> 
             
                  {user.childList.map((child:any, idx:any) => (
                      <div className="form-check ms-5"  key={idx}>
                          <label className="form-check-label ms-2" >
                            <input
                              type="checkbox"
                              className="form-check-input"
                              name={child.label}
                              checked={child?.isChecked || props.Checked}
                             // onChange={()=>handleChange(child, idx)}
                            />
                            {child.label}
                          </label>
                      </div>
                    
                    ))}
            
            </>  ))}
        
        </form>
      </div>
    </Fragment>
  );
};

export default RdsCheckboxParentChild;
*/