import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCard from "./rds-card";

export default {
  title: "Elements/Card",
  component: RdsCard,
  argTypes: {
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
      ],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof RdsCard>;

const Template: ComponentStory<typeof RdsCard> = (args) => (
  <RdsCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  colorVariant: "primary",
  cardTitle: "Card title",
  cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  buttonLabel: 'Button',
  showFooter: true,
 
  
};
export const CardWithImage = Template.bind({});
CardWithImage.args = {
  colorVariant: "primary",
  cardTitle: "Card title",
  cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  buttonLabel: 'Button',
  
  showFooter: true,
  isImage: true,
  imageUrl: "http://www.loc.gov/static/portals/free-to-use/public-domain/bridges/1.jpg",
 
  centerAlign: true,
  
  
};
export const Avatar = Template.bind({});
Avatar.args = {
  colorVariant: "primary",
  cardTitle: "Card title",
  cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  buttonLabel: 'Button',
  
  showFooter: true,
  isImage: true,
  imageUrl: "http://www.loc.gov/static/portals/free-to-use/public-domain/bridges/1.jpg",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0m5Cy4lXCbuyG54L0vuo3i5-ALavHe9KmhWA_wDM&s",
  centerAlign: false,
  isAvatar: true,
  
};
export const WithCenteredAvatar = Template.bind({});
WithCenteredAvatar.args = {
  colorVariant: "primary",
  cardTitle: "Card title",
  cardText: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  buttonLabel: 'Button',
  
  showFooter: true,
  isImage: true,
  imageUrl: "http://www.loc.gov/static/portals/free-to-use/public-domain/bridges/1.jpg",
  avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0m5Cy4lXCbuyG54L0vuo3i5-ALavHe9KmhWA_wDM&s",
  centerAlign: true,
  isAvatar: true,
  
};
