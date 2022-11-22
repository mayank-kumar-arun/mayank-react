import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCounter from "./rds-counter"

export default {
    title: "Elements/Counter",
    component: RdsCounter,
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
        position: {
            options:[
                "top",
                "bottom",
                "start",
                "end"
            ],
            control: { type: "radio" },
        }
        // counterValue: {
        //     control:{type: "number"}
        // }
    }
} as ComponentMeta<typeof RdsCounter>;

const Template: ComponentStory<typeof RdsCounter> = (args) => (
    <RdsCounter {...args} />
);

export const Default = Template.bind({});
Default.args = {
    counterValue: 0,
    min: 0,
    max: 50,
    width: 125,
    colorVariant: 'primary',
    position: 'auto',
    label:"Counter",
};

