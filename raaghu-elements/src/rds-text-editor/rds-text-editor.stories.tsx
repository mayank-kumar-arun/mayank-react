import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsTextEditor from "./rds-text-editor";

export default {
	title: "Elements/Text Editor",
	component: RdsTextEditor,
} as ComponentMeta<typeof RdsTextEditor>;

const Template: ComponentStory<typeof RdsTextEditor> = (args) => (
	<RdsTextEditor {...args} />
);

export const Default = Template.bind({});

Default.args = {
	width: 800,
};
