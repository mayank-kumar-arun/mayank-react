import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsRating from "./rds-rating";

export default {
  title: "Elements/Rating",
  component: RdsRating,
} as ComponentMeta<typeof RdsRating>;

const Template: ComponentStory<typeof RdsRating> = (args) => (
  <RdsRating {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rating: 2,
  colorVariant: "warning",
  reviewPosition: "right",
  noOfReviews: 123,
  seeAllOption: false
};
