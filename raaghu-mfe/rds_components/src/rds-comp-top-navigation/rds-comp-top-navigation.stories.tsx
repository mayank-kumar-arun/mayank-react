import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompTopNavigation from "./rds-comp-top-navigation";

export default {
	title: "Components/Top Navigation",
	component: RdsCompTopNavigation,
} as ComponentMeta<typeof RdsCompTopNavigation>;

const Template: ComponentStory<typeof RdsCompTopNavigation> = (args) => (
	<RdsCompTopNavigation {...args} />
);

export const Default = Template.bind({});
Default.args = {};
