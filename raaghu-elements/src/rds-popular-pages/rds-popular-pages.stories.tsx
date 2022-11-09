import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsPopularPages from "./rds-popular-pages";

export default {
  title: "Elements/Popular pages",
  component: RdsPopularPages,

} as ComponentMeta<typeof RdsPopularPages>;

const Template: ComponentStory<typeof RdsPopularPages> = (args) => (
  <RdsPopularPages {...args} />
);

export const Default = Template.bind({});
Default.args = {
  popularPageItems: [
    { title: 'Documentation', subtitle: 'Learn how to integrate our tools with your app', icon: 'folder', route: '/home' },
    { title: 'API References', subtitle: 'A Complete API references of our libraries', icon: 'code_computer', route: '/home' },
    { title: 'Guides', subtitle: 'Installation guides that cover popular setups', icon: 'features', route: '/home' },
    { title: 'Blog', subtitle: 'Read our latest news and articles', icon: 'blog', route: '/home' }
  ]

}
