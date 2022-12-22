
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompNewClaimType from "./rds-comp-new-claim-type";

export default {
  title: "Components/New Claim Type",
  component: RdsCompNewClaimType,

} as ComponentMeta<typeof RdsCompNewClaimType>;


const Template: ComponentStory<typeof RdsCompNewClaimType> = (args) => 
  <RdsCompNewClaimType />;


export const Default = Template.bind({});

Default.args ={
   
}

