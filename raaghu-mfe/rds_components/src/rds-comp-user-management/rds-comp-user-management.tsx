import React from "react";
import { RdsCheckboxGroup } from "../rds-elements";
export interface RdsCompUserManagementProps {
  Usermanagementsettings: any;
}
const RdsCompUserManagement = (props: RdsCompUserManagementProps) => {
  return (
    <>
      <div className="fw-normal">
        <RdsCheckboxGroup itemList={props.Usermanagementsettings} />
      </div>
    </>
  );
};
export default RdsCompUserManagement;
