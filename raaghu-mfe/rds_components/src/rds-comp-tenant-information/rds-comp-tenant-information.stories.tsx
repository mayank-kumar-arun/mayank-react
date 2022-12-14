import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompTenantInformation from "./rds-comp-tenant-information";

export default {
  title: "Components/Tenant Information",
  component: RdsCompTenantInformation,
} as ComponentMeta<typeof RdsCompTenantInformation>;

const Template: ComponentStory<typeof RdsCompTenantInformation> = (args) => (
  <RdsCompTenantInformation {...args} />
);

export const Default = Template.bind({});

Default.args = {
  editionList: [
    {
      option: "Not assigned",
    },
    {
      option: "Standard",
    },
    {
      option: "apple",
    },
    {
      option: "Apple1",
    },
    //   {isFree: null, value: '', displayText: 'Not assigned', isSelected: true},
    // {isFree: true, value: '1', displayText: 'Standard', isSelected: false},
    // {isFree: false, value: '5', displayText: 'apple', isSelected: false},
    // {isFree: false, value: '6', displayText: 'Apple1', isSelected: false},
  ],
};
