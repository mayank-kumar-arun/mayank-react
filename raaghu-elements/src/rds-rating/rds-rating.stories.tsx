import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsRating from "./rds-rating";

export default {
  title: "Elements/Rating",
  component: RdsRating,
  argTypes: {
    rating: {
      options: [0, 1, 2, 3, 4, 5],
      control: { type: "select" },
    },
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
    reviewPosition: {
      options: ["left", "right", "none"],
      control: { type: "radio" },
    },
  },
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
