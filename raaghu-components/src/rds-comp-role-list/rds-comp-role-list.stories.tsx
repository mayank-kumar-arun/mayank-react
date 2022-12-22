import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompRoleList from './rds-comp-role-list'

export default {
  title: "Components/Role List",
  component: RdsCompRoleList,

} as ComponentMeta<typeof RdsCompRoleList>;


const Template: ComponentStory<typeof RdsCompRoleList> = (args) => 
  <RdsCompRoleList {...args} />;


export const Default = Template.bind({});

Default.args ={
    enablecheckboxselection:true, 
    tableHeaders: [
      {
        displayName: "Role Name",
        key: "role",
        datatype: "text",
        dataLength: 30,
        required: true,
        sortable: true,
      },
      {
        displayName: "Creation Time",
        key: "ctime",
        datatype: "text",
        dataLength: 5,
        required: false,
        sortable: true,
      },
    ],
    tableData: [
      { id: 1,  selected: false, role: "Admin", ctime: "11/15/2021, 2:44:51 PM", },
      { id: 2,  selected: false, role: "Team", ctime: "11/15/2021, 2:44:51 PM", },
      { id: 3,  selected: false, role: "Manager", ctime: "11/15/2021, 2:44:51 PM",  },
      { id: 4,  selected: false, role: "Software Developer", ctime: "11/15/2021, 2:44:51 PM",  },
      { id: 5,  selected: false, role: "UI/UX designer", ctime: "11/15/2021, 2:44:51 PM",},
      { id: 6,  selected: false, role: "Associate", ctime: "11/15/2021, 2:44:51 PM",},
    ],
    actions: [
        { id: "edit", displayName: "Edit" },
      { id: "delete", displayName: "Delete" },
    ],
    pagination: false,

}