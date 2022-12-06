import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompProductImage from "./rds-comp-product-image";

export default {
  title: "Components/Product Image",
  component: RdsCompProductImage,
  argTypes: { item: { control: "object" } },
} as ComponentMeta<typeof RdsCompProductImage>;

const Template: ComponentStory<typeof RdsCompProductImage> = (args) => (
  <RdsCompProductImage {...args} />
);

export const Default = Template.bind({});

Default.args = {
  item: {
    imgUrl: "https://www.linkpicture.com/q/product_img_with_title_1.png",
    rating: 3,
    reviews: "See all 123 reviews",
    productTitle: "Basic Tee",
    productDescription:
      "White tees stain easily, and black tees fade. This is going to be gray for a while.",
    colorLabel: "White",
    cost: "$35",
    badgeWithIcon: { badge: "Quality Assured", icon: "featured" },
    ColorSwitcherList: [
      { id: 1, color: "#FFFFFF" },
      { id: 2, color: "#FDD2FF" },
      { id: 3, color: "#BFEAFF" },
    ],
  },
  showAddToBagButton: true,
  bordered: true,
};
