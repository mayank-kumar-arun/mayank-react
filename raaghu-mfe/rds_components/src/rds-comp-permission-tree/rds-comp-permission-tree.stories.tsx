import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompPermissionTree from "./rds-comp-permission-tree";

export default {
	title: "Components/Permission Tree",
	component: RdsCompPermissionTree,
} as ComponentMeta<typeof RdsCompPermissionTree>;

const Template: ComponentStory<typeof RdsCompPermissionTree> = (args) => (
	<RdsCompPermissionTree {...args} />
);

export const Default = Template.bind({});

Default.args = {
	toppingOptions :[
		{
		  name: "Pepperoni",
		  id: 1,
		  subOptions: [
			{
			  name: "Spicy",
			  id: 1,
			  subOptions: []
			},
			{
			  name: "Regular",
			  id: 2,
			  subOptions: []
			}
		  ]
		},
		{
		  name: "Chicken",
		  id:2,
		  subOptions: [
			{
			  name: "Buffalo",
			  id: 1,
			  subOptions: [
				{
				  name: "Mild",
				  id: 1,
				  subOptions: [],
				},
				{
				  name: "Hot",
				  id: 1,
				  subOptions: [
					{
					  name: 'Jalapeño',
					  id: 1,
					  subOptions: []
					},
					{
					  name: 'Cayenne',
					  id: 2,
					  subOptions: []
					}
				  ],
				},
			  ]
			},
			{
			  name: "BBQ",
			  id:2,
			  subOptions: [],
			}
		  ]
		},
	  ]
};
