import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompProductList from "./rds-comp-product-list";

export default {
  title: "Components/Product List",
  component: RdsCompProductList
} as ComponentMeta<typeof RdsCompProductList>;

const Template: ComponentStory<typeof RdsCompProductList> = (args) => (
  <RdsCompProductList {...args} />
);

export const ProductListWithTitle = Template.bind({});

ProductListWithTitle.args = {
  items: [
    {
  imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  },
  
]
};


export const ProductListWithInfo = Template.bind({});

ProductListWithInfo.args = {
  items: [
    {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  colorLabel: "White",
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee",
  colorLabel: "White", 
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  colorLabel: "White",
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  colorLabel: "White",
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  colorLabel: "White",
  },
  
]
};


export const ProductListWithInlinePrice = Template.bind({});
ProductListWithInlinePrice.args = {
  items: [
    {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  colorLabel: "White",
  cost:"$35",
  badgeWithIcon: {badge: "Quality Assured", icon: "featured"},
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee",
  colorLabel: "White", 
  cost:"$35",
  badgeWithIcon: {badge: "Quality Assured", icon: "featured"},
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  colorLabel: "White",
  cost:"$35",
  badgeWithIcon: {badge: "Quality Assured", icon: "featured"},
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  colorLabel: "White",
  cost:"$35",
  badgeWithIcon: {badge: "Quality Assured", icon: "featured"},
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  colorLabel: "White",
  cost:"$35",
  badgeWithIcon: {badge: "Quality Assured", icon: "featured"},
  },
  
]
};


export const ProductListSimple = Template.bind({});
ProductListSimple.args = {
  items: [
    {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  cost:"$35",
  badgeWithIcon: {badge: "Quality Assured", icon: "featured"},
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee",
  cost:"$35",
  badgeWithIcon: {badge: "Quality Assured", icon: "featured"},
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  cost:"$35",
  badgeWithIcon: {badge: "Quality Assured", icon: "featured"},
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  cost:"$35",
  badgeWithIcon: {badge: "Quality Assured", icon: "featured"},
  },
  {
    imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
  productTitle:"Basic Tee", 
  cost:"$35",
  badgeWithIcon: {badge: "Quality Assured", icon: "featured"},
  },
  
]
};

export const ProductListCardWithFullDetails = Template.bind({});
ProductListCardWithFullDetails.args = {
  items: [
    {imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
    productTitle:"Basic Tee", 
    productDescription:"White tees stain easily, and black tees fade. This is going to be gray for a while.", 
    colorLabel: "White",
    cost:"$35",
    badgeWithIcon: {badge: "Quality Assured", icon: "featured"}},
    {imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
    productTitle:"Basic Tee", 
    productDescription:"White tees stain easily, and black tees fade. This is going to be gray for a while.", 
    colorLabel: "White",
    cost:"$35",
    badgeWithIcon: {badge: "Quality Assured", icon: "featured"}},
    {imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
    productTitle:"Basic Tee", 
    productDescription:"White tees stain easily, and black tees fade. This is going to be gray for a while.", 
    colorLabel: "White",
    cost:"$35",
    badgeWithIcon: {badge: "Quality Assured", icon: "featured"}},
    {imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
    productTitle:"Basic Tee", 
    productDescription:"White tees stain easily, and black tees fade. This is going to be gray for a while.", 
    colorLabel: "White",
    cost:"$35",
    badgeWithIcon: {badge: "Quality Assured", icon: "featured"}},
  ]
};

export const ProductListWithBorder = Template.bind({});
ProductListWithBorder.args = {
  items: [
    {imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
    productTitle:"Basic Tee", 
    rating: 3, 
  reviews:"See all 123 reviews", 
    cost:"$35",
  },
  {imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
    productTitle:"Basic Tee", 
    rating: 3, 
  reviews:"See all 123 reviews", 
    cost:"$35",
  },
  {imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
    productTitle:"Basic Tee", 
    rating: 3, 
  reviews:"See all 123 reviews", 
    cost:"$35",
  },
  {imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
    productTitle:"Basic Tee", 
    rating: 3, 
  reviews:"See all 123 reviews", 
    cost:"$35",
  },
  {imgUrl:"https://www.linkpicture.com/q/product_img_with_title_1.png", 
    productTitle:"Basic Tee",
    rating: 3, 
  reviews:"See all 123 reviews",  
    cost:"$35",
  },
    
  ],
  bordered: true,
  
};

