import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompProductImage from "./rds-comp-product-image";

export default {
  title: "Components/Product Image",
  component: RdsCompProductImage,
} as ComponentMeta<typeof RdsCompProductImage>;

const Template: ComponentStory<typeof RdsCompProductImage> = (args) => (
  <RdsCompProductImage {...args} />
);

export const Default = Template.bind({});

Default.args = {};
