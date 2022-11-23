import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsAlert from "./rds-alert";

export default {
	title: "Elements/Alert",
	component: RdsAlert,
	argTypes: {
		colorVariant: {
			options: [
				"primary",
				"secondary",
				"success",
				"info",
				"warning",
				"danger",
				"dark",
				"light",
				"review",
			],
			control: { type: "select" },
		},
	},
} as ComponentMeta<typeof RdsAlert>;

const Template: ComponentStory<typeof RdsAlert> = (args) => (
	<RdsAlert {...args} />
);

export const Default = Template.bind({});
Default.args = {
	alertmessage: "This is close alert",
	dismisable: false,
	//delay:10000,
	icon: "information",
	iconFill: false,
	iconStroke: true,
	iconHeight: "20px",
	iconWidth: "20px",
	position:"top",
	iconColor: "info",
};
