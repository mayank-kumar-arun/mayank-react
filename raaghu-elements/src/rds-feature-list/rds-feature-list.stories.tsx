import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsFeatureList from './rds-feature-list'

export default {
    title: "Elements/Feature List",
    component: RdsFeatureList,
    argTypes: {

    },
} as ComponentMeta<typeof RdsFeatureList>;

const Template: ComponentStory<typeof RdsFeatureList> = (args) => (
    <RdsFeatureList {...args} />
);

export const Default = Template.bind({});
Default.args = {
    heading: "Features",
    itemList: [
        "Only the best materials",
        "Ethically and locally made",
        "Pre-washed and pre-shrunk",
        "Machine wash cold with similar colors",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant"
    ]
};

export const With_multiple_column = Template.bind({});
With_multiple_column.args = {
    heading: "Features",
    itemList: [
        "Only the best materials",
        "Ethically and locally made",
        "Pre-washed and pre-shrunk",
        "Machine wash cold with similar colors",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant"
    ],
    columns: 2
};