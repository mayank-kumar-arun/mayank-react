import { MouseEvent, useEffect, useState } from "react";
import RdsCompDatatable from "../rds-comp-data-table/rds-comp-data-table";
import { RdsButton, RdsDatePicker } from "../rds-elements";
import "./rds-comp-notification-settings.scss";

export interface RdsCompNotificationSettingsProps {
  onSave: (event: React.MouseEvent, data: any) => void;
  onCancel: (event: React.MouseEvent) => void;
  default: any[];
}

const RdsCompNotificationSettings = (
  props: RdsCompNotificationSettingsProps
) => {
  useEffect(() => {
    console.log(props.default);
    setdata(props.default);
  });
  const [data, setdata] = useState(props.default);

  const enabler = (event: any) => {
    if (event.target.id === "notification") {
      setdata([...data, (data[0].enabled = !data[0].enabled)]);
    }
    if (event.target.id === "newuser") {
      setdata([...data, (data[0].NewUser = !data[0].NewUser)]);
    }
    if (event.target.id === "newtenant") {
      setdata([...data, (data[0].NewTenant = !data[0].NewTenant)]);
    }
  };
  return (
    <>
      {" "}
      <h4>Receive Notifications</h4>
      <div className="form-switch switch mt-2 mb-4 ">
        <input
          onChange={enabler}
          className="form-check-input me-2"
          type="checkbox"
          id="notification"
          checked={props.default[0].enabled}
        />

        <label className="form-check-label" htmlFor="notification">
          (This option can be used to completely Enable/Disable the
          notifications)
        </label>
      </div>
      <h4>Notification Types</h4>
      <div className="form-check mt-3">
        <input
          onChange={enabler}
          className="form-check-input"
          type="checkbox"
          id="newuser"
          checked={props.default[0].NewUser}
        />
        <label className="form-check-label" htmlFor="newuser">
          On a New User Registered to the Application
        </label>
      </div>
      <div className="form-check">
        <input
          onChange={enabler}
          className="form-check-input"
          type="checkbox"
          id="newtenant"
          checked={props.default[0].NewTenant}
        />
        <label className="form-check-label" htmlFor="newtenant">
          On a New Tenant Registered to the Application
        </label>
      </div>
      <div className="buttongrp">
        <div>
          <button
            className="btn buttonname btn-outline-primary me-3"
            onClick={props.onCancel}
          >
            Cancel
          </button>
        </div>
        <div>
          <button
            className="btn buttonname btn-primary"
            onClick={(event) => props.onSave(event, data)}
          >
            save
          </button>
        </div>
      </div>
    </>
  );
};

export default RdsCompNotificationSettings;
