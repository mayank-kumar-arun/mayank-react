import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompTenantSettings from "./rds-comp-tenant-settings";

export default {
  title: "Components/Tenant Settings",
  component: RdsCompTenantSettings,

} as ComponentMeta<typeof RdsCompTenantSettings>;


const Template: ComponentStory<typeof RdsCompTenantSettings> = (args) => 
  <RdsCompTenantSettings {...args} />;


export const Default = Template.bind({});

Default.args ={
    tenantSettingInfo: {},
    isTenantInfoValid:false,
    showEditData:true

}

