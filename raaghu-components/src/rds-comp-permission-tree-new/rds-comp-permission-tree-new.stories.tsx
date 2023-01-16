
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompPermissionTreeNew from "./rds-comp-permission-tree-new";

export default {
  title: "Components/Permission Tree 2.0",
  component: RdsCompPermissionTreeNew,

} as ComponentMeta<typeof RdsCompPermissionTreeNew>;


const Template: ComponentStory<typeof RdsCompPermissionTreeNew> = (args) => 
  <RdsCompPermissionTreeNew {...args} />;


export const Default = Template.bind({});

Default.args ={
  checkboxData : [
    {
      key: "0",
      label: "Documents",
      checked: false,
      title: "Documents Folder",
      children: [
        {
          key: "0-0",
          label: "Document 1-1",
          checked: false,
          title: "Documents Folder",
          children: [
            {
              key: "0-1-1",
              label: "Document-0-1.doc",
              checked: false,
              title: "Documents Folder",
            },
            {
              key: "0-1-2",
              label: "Document-0-2.doc",
              checked: false,
              title: "Documents Folder",
            },
            {
              key: "0-1-3",
              label: "Document-0-3.doc",
              checked: false,
              title: "Documents Folder",
            },
            {
              key: "0-1-4",
              label: "Document-0-4.doc",
              checked: false,
              title: "Documents Folder",
            },
          ],
        },
      ],
    },
    {
      key: "1",
      label: "Desktop",
      checked: false,
      title: "Desktop Folder",
      children: [
        {
          key: "1-0",
          label: "document1.doc",
          checked: false,
          title: "Documents Folder",
        },
        {
          key: "0-0",
          label: "documennt-2.doc",
          checked: false,
          title: "Documents Folder",
        },
      ],
    },
    {
      key: "2",
      label: "Downloads",
      checked: false,
      title: "Downloads Folder",
      children: [],
    },
  ]
}