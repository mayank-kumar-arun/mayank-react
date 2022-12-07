import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompAdminDashboard from "./rds-comp-admin-dashboard";

export default {
	title: "Components/Admin Dashboard",
	component: RdsCompAdminDashboard,
} as ComponentMeta<typeof RdsCompAdminDashboard>;

const Template: ComponentStory<typeof RdsCompAdminDashboard> = () => (
	<RdsCompAdminDashboard />
);

export const Default = Template.bind({});

Default.args = {};
