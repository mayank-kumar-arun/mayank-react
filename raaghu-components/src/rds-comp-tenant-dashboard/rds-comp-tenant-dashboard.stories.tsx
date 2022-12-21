import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompTenantDashboard from "./rds-comp-tenant-dashboard";

export default {
	title: "Components/Tenant Dashboard",
	component: RdsCompTenantDashboard,
} as ComponentMeta<typeof RdsCompTenantDashboard>;

const Template: ComponentStory<typeof RdsCompTenantDashboard> = () => (
	<RdsCompTenantDashboard />
);

export const Default = Template.bind({});

Default.args = {};
