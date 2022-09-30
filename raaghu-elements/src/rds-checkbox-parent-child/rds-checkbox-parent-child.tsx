import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useEffect, useState } from "react";
import './rds-checkbox-parent-child.scss';

const userData = [
  { name: "Child checkbox 1", isChecked: false },
  { name: "Child checkbox 2", isChecked: false },
  { name: "Child checkbox 3", isChecked: false },
  { name: "Child checkbox 4", isChecked: false },
];

export interface RdsCheckboxParentChildProps {
  Checked?: boolean;
}

const RdsCheckboxParentChild = (props: RdsCheckboxParentChildProps) => {
  const [users, setUsers] = useState<typeof userData>([]);
  
  


  useEffect(() => {
    setUsers(userData);
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
  };

  return (
    <Fragment>
      <div className="container my-4" style={{ width: "500px" }}>
        <form className="form w-100">
          <ul>
            <li>
              <div className="form-check">
                <label className="form-check-label ms-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="allSelect"
                    checked={
                      users.filter((user) => user?.isChecked !== true).length <
                        1 || props.Checked === true
                    }
                    // checked={!users.some((user) => user?.isChecked !== true)}
                    onChange={handleChange}
                  />
                  Parent checkbox 1
                </label>
              </div>
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
