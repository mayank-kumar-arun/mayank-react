import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompWebsiteLog from "./rds-comp-website-log";

export default {
	title: "Components/Website Log",
	component: RdsCompWebsiteLog,
} as ComponentMeta<typeof RdsCompWebsiteLog>;

const Template: ComponentStory<typeof RdsCompWebsiteLog> = () => (
	<RdsCompWebsiteLog />
);

export const Default = Template.bind({});

Default.args = {};
