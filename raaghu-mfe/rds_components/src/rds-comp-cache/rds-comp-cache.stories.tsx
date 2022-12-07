import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompCache from "./rds-comp-cache";

export default {
  title: "Components/Cache",
  component: RdsCompCache,
} as ComponentMeta<typeof RdsCompCache>;

const Template: ComponentStory<typeof RdsCompCache> = (args: any) => (
  <RdsCompCache {...args} />
);

export const Default = Template.bind({});

Default.args = {
  cachedata: [
    { name: "AbpUserSettingsCache" },
    { name: "AbpZeroRolePermissions" },
    { name: "AbpZeroTenantCache" },
    { name: "AbpZeroEditionFeatures" },
    { name: "AbpTenantSettingsCache" },
    { name: "token_validity_key" },
    { name: "AbpZeroMultiTenantLocalizationDictionaryCache" },
    { name: "AspNet.Identity.SecurityStamp" },
    { name: "TempFileCacheName" },
    { name: "AbpApplicationSettingsCache" },
    { name: "AbpZeroUserPermissions" },
    { name: "AbpZeroLanguages" },
  ],
};
