import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompPermissionTree from "./rds-comp-permission-ree";

export default {
  title: "Components/Permission Tree 2.0",
  component: RdsCompPermissionTree,
} as ComponentMeta<typeof RdsCompPermissionTree>;

const Template: ComponentStory<typeof RdsCompPermissionTree> = (args) => (
  <RdsCompPermissionTree {...args}/>
);

export const Default = Template.bind({});

Default.args = {
  checkboxData:[
    {
      "id": 1,
      "name": "Select All",
      "parentId": 0
    },
    {
      "id": 2,
      "name": "[Test edition scope feature]",
      "parentId": 1
    },
    {
      "id": 3,
      "name": "Chat",
      "parentId": 1
    },
    {
      "id": 4,
      "name": "Chat with host",
      "parentId": 3
    },
    {
      "id": 5,
      "name": "Chat with other tenants",
      "parentId": 3
    },
    {
      "id": 6,
      "name": "Maximum user count",
      "parentId": 1
    },
    {
      "id": 7,
      "name": "Test check feature",
      "parentId": 1
    },
    {
      "id": 8,
      "name": "Test check feature 2",
      "parentId": 1
    }
  ]
  // checkboxData: [
  //   {
  //     key: "0",
  //     label: "Documents",
  //     checked: false,
  //     title: "Documents Folder",
  //     children: [
  //       {
  //         key: "0-0",
  //         label: "Document 1-1",
  //         checked: false,
  //         title: "Documents Folder",
  //         children: [
  //           {
  //             key: "0-1-1",
  //             label: "Document-0-1.doc",
  //             checked: false,
  //             title: "Documents Folder",
  //           },
  //           {
  //             key: "0-1-2",
  //             label: "Document-0-2.doc",
  //             checked: false,
  //             title: "Documents Folder",
  //             children: [
  //               {
  //                 key: "0-1-2-0",
  //                 label: "Document-0-1.doc",
  //                 checked: false,
  //                 title: "Documents Folder",
  //               },
  //               {
  //                 key: "0-1-2-1",
  //                 label: "Document-0-1.doc",
  //                 checked: false,
  //                 title: "Documents Folder",
  //               },
  //               {
  //                 key: "0-1-2-2",
  //                 label: "Document-0-1.doc",
  //                 checked: false,
  //                 title: "Documents Folder",
  //               },
  //             ],
  //           },
  //           {
  //             key: "0-1-3",
  //             label: "Document-0-3.doc",
  //             checked: false,
  //             title: "Documents Folder",
  //           },
  //           {
  //             key: "0-1-4",
  //             label: "Document-0-4.doc",
  //             checked: false,
  //             title: "Documents Folder",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     key: "1",
  //     label: "Desktop",
  //     checked: false,
  //     title: "Desktop Folder",
  //     children: [
  //       {
  //         key: "1-0",
  //         label: "document1.doc",
  //         checked: false,
  //         title: "Documents Folder",
  //       },
  //       {
  //         key: "1-1",
  //         label: "documennt-2.doc",
  //         checked: false,
  //         title: "Documents Folder",
  //       },
  //     ],
  //   },
  //   {
  //     key: "2",
  //     label: "Downloads",
  //     checked: false,
  //     title: "Downloads Folder",
  //     children: [],
  //   },
  // ],
};
