

import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompEdition  from "./rds-comp-edition";

export default {
  title: "Components/Edition  ",
  component: RdsCompEdition ,

} as ComponentMeta<typeof RdsCompEdition >;


const Template: ComponentStory<typeof RdsCompEdition > = (args) => 
  <RdsCompEdition  {...args} />;



export const Default = Template.bind({});

Default.args ={
    
  EditionData:[{

    EditionName: "Corporate",
    EditionTitle: "Strong Application for large team",
    Price: "45",
    Plan:"Per month",

  },]
 

}