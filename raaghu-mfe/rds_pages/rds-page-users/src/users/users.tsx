import React from "react";
import { RdsCompDatatable } from "../../../rds-components";
import { RdsButton } from "../../../rds-elements";

const Users = () => {

  const tableHeaders= [
		{
			displayName: "User Name",
			key: "userName",
			datatype: "text",
			dataLength: 30,
			required: true,
			sortable: true,
		},
    {
			displayName: "Name",
			key: "name",
			datatype: "text",
			dataLength: 30,
			required: true,
			sortable: true,
		},
    {
			displayName: "Roles",
			key: "roles",
			datatype: "text",
			dataLength: 30,
			required: true,
			sortable: true,
		},
    {
			displayName: "Email Address",
			key: "emaiAddress",
			datatype: "text",
			dataLength: 30,
			required: true,
			sortable: true,
		},
		{
			displayName: "Email Confirm",
			key: "emailConfirm",
			datatype: "badge",
			dataLength: 5,
			required: true,
      sortable: true,
		},
    {
			displayName: "Status",
			key: "status",
			datatype: "badge",
			dataLength: 20,
			required: true,
      sortable: true,
		},
    {
			displayName: "Creation Time",
			key: "creationTime",
			datatype: "text",
			dataLength: 30,
			required: true,
			sortable: true,
		},
	]

  const tableData= [
		{ id: 1, userName: "tet04", name: "test04", roles:"Admin, HR", emaiAddress:"test04@yopmail.com", emailConfirm: { badgeColorVariant: "primary", content: "Yes" }, status:{badgeColorVariant:"success", content:"Active"}, creationTime:"01/04/2023, 09:20:51 AM" },
		{ id: 2, userName: "neethu", name: "neethu", roles:"Admin, Engineer11, HR", emaiAddress:"neethu@gmail.com", emailConfirm: { badgeColorVariant: "danger", content: "No" }, status:{badgeColorVariant:"primary", content:"Inactive"}, creationTime:"12/21/2022, 08:35:26 AM" },
		{ id: 3, userName: "nithya", name: "nithya1", roles:"Admin, HR, Manager, Role211", emaiAddress:"nithya.menon@gmaol.com", emailConfirm: "Yes", status:{badgeColorVariant:"success", content:"Active"}, creationTime:"12/19/2022, 09:14:44 AM" },
		{ id: 4, userName: "009", name: "test009", roles:"Admin, HR", emaiAddress:"009@yopmail.com", emailConfirm: "Yes", status:{badgeColorVariant:"success", content:"Active"}, creationTime:"12/15/2022, 06:50:15 AM" },
		{ id: 5, userName: "admin", name: "admin", roles:"Admin", emaiAddress:"admin@aspnetzero.com", emailConfirm: "Yes", status:{badgeColorVariant:"success", content:"Active"}, creationTime:"12/13/2022, 11:48:03 AM" },
	]

  const actions= [
		{ id: "delete", displayName: "Delete" },
		{ id: "edit", displayName: "Edit" },
	]


  return (
    <div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-end mb-2">
        <RdsButton
          type={"button"}
          size="small"
          label="FILTER BY PERMISSION"
          colorVariant="primary"
          outlineButton={true}
          class="me-2"
        ></RdsButton>
        <RdsButton
          type={"button"}
          size="small"
          label="EXPORT TO EXCEL"
          colorVariant="primary"
          outlineButton={true}
          class="me-2"
        ></RdsButton>
        <RdsButton
          type={"button"}
          size="small"
          label="NEW USER"
          icon="plus"
          iconColorVariant="light"
          iconFill={false}
          iconStroke={true}
          iconHeight="15px"
          iconWidth="15px"
          colorVariant="primary"
          class="me-2"
        ></RdsButton>
        </div>
        <div className="col-md-12 mb-3">
          <RdsCompDatatable
            tableHeaders={tableHeaders}
            tableData={tableData}
            actions={actions}
            tableBordered={false}
            pagination={true}
            recordsPerPage={5}
            recordsPerPageSelectListOption={true} onActionSelection={function (clickEvent: any, tableDataRow: any, tableDataRowIndex: number, action: { displayName: string; id: string; offId?: string | undefined; }): void {
              throw new Error("Function not implemented.");
            } }              ></RdsCompDatatable>
        </div>
      </div>
    </div>
  );
};

export default Users;
