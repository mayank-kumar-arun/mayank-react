import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsComporganizationTreeNew from "./rds-comp-organization-tree-new";

export default {
  title: "Components/Organization Tree",
  component: RdsComporganizationTreeNew,
} as ComponentMeta<typeof RdsComporganizationTreeNew>;

const Template: ComponentStory<typeof RdsComporganizationTreeNew> = (args) => (
  <RdsComporganizationTreeNew {...args} />
);

export const Default = Template.bind({});

Default.args = {
  inputLabel: "Organization Tree",
  AddUnitlabel: "Sub-Unit",
  CanvasTitle: "Edit Organization Unit",
  data: [
    {
      key: "0",
      label: "Documents",
      title: "Documents Folder",
      level: 1,
      children: [
        {
          key: "0-0",
          label: "Document 1-1",
          level: 2,
          title: "Documents Folder",
          children: [
            {
              key: "0-1-1",
              label: "Document-0-1.doc",
              level: 3,
              title: "Documents Folder",
            },
            {
              key: "0-1-2",
              label: "Document-0-2.doc",
              level: 3,
              title: "Documents Folder",
            },
            {
              key: "0-1-3",
              label: "Document-0-3.doc",
              level: 3,
              title: "Documents Folder",
            },
            {
              key: "0-1-4",
              label: "Document-0-4.doc",
              level: 3,
              title: "Documents Folder",
            },
          ],
        },
        {
          key: "0-1",
          label: "Document 1-1-1",
          level: 2,
          title: "Documents Folder",
        },
      ],
    },
    {
      key: "1",
      label: "Desktop",
      level: 1,
      title: "Desktop Folder",
      children: [
        {
          key: "1-0",
          label: "document1.doc",
          level: 2,
          title: "Documents Folder",
        },
        {
          key: "1-1",
          label: "documennt-2.doc",
          level: 2,
          title: "Documents Folder",
        },
      ],
    },
    {
      key: "2",
      label: "Downloads",
      level: 1,
      title: "Downloads Folder",
    },
  ],
};
