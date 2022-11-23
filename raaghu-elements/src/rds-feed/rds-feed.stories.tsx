import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsFeed from "./rds-feed";

export default {
  title: "Elements/Feed",
  component: RdsFeed,
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
        "review",
      ],
      control: { type: "select" },
    },
    FeedType: {
      options: ["border", "grow"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof RdsFeed>;

const Template: ComponentStory<typeof RdsFeed> = (args) => (
  <RdsFeed {...args} />
);

export const Default = Template.bind({});
Default.args = {
  FeedType: "spinner",
  colorVariant: "primary",
  itemList: [
    {
      actor: "Jijo Fleshman",
      username: "@jijolife123",
      date: "5d",
      feedIcon: "avatar",
      profilePic:
        "https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1",
      description:
        "This bag is of the quality expected for the price. The lining inside the bag seems like satin and it is very strong one It has huge space inside inside as the zipper can be opened in either side.",
    },
  ],
};
