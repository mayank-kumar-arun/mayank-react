import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompPermissionTree from "./rds-comp-permission-tree";

export default {
  title: "Components/Permission Tree",
  component: RdsCompPermissionTree,

} as ComponentMeta<typeof RdsCompPermissionTree>;


const Template: ComponentStory<typeof RdsCompPermissionTree> = (args) => 
  <RdsCompPermissionTree {...args} />;


export const Default = Template.bind({});

Default.args ={

   multiselectTree :true

}

