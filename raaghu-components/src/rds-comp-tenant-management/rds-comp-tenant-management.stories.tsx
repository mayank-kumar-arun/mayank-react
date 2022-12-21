
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompTenantManagement from "./rds-comp-tenant-management";

export default {
  title: "Components/Tenant Management",
  component: RdsCompTenantManagement,

} as ComponentMeta<typeof RdsCompTenantManagement>;


const Template: ComponentStory<typeof RdsCompTenantManagement> = (args) => 
  <RdsCompTenantManagement {...args} />;


export const Default = Template.bind({});

Default.args ={
  settingsTenantEditionList: [
    { option: "one" },
     { option: "two" },
    { option: "three" },
   ],
   allowSelfRegistration: false,
     isNewRegisteredTenantActiveByDefault: false,
     useCaptchaOnRegistration: false

}


