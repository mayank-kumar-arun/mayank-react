import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment, useEffect, useState } from "react";
import "./rds-checkbox-parent-child.scss";

export interface RdsCheckboxParentChildProps {
  parentName: string;
  userData: any[];
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
  };

  return (
    <Fragment>
      <div className="container my-4" style={{ width: "500px" }}>
        <form className="form w-100">
          <ul>
            <li className="line1">
              <div className="form-check">
                <label className="form-check-label ms-2">
                  <input
                    type="checkbox"
                    className={`${
                      users.filter((user) => user?.isChecked == true).length >=
                        1 &&
                      users.filter((user) => user?.isChecked == true).length <
                        users.length
                        ? "form-check-input-intermediate"
                        : "form-check-input"
                    }`}
                    name="allSelect"
                    checked={
                      users.filter((user) => user?.isChecked == true).length ==
                      users.length
                    }
                    onChange={handleChange}
                  />
                  {props.parentName}
                </label>
              </div>
              <ul>
                <li className="line1">
                  {users.map((user, index) => (
                    <div className="form-check" key={index}>
                      <label className="form-check-label ms-2">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          name={user.name}
                          checked={user?.isChecked}
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
