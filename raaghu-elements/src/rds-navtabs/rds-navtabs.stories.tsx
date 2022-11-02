import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsNavtabs from "./rds-navtabs"

export default {
    title: "Elements/Navtabs",
    component: RdsNavtabs,
    // argTypes: {
    //     colorVariant: {
    //         options: [
    //             "primary",
    //             "secondary",
    //             "success",
    //             "info",
    //             "warning",
    //             "danger",
    //             "dark",
    //             "light",
    //             "review",
    //         ],
    //         control: { type: "select" },
    //     },
    // }
} as ComponentMeta<typeof RdsNavtabs>;

const Template: ComponentStory<typeof RdsNavtabs> = (args) => (
    <RdsNavtabs {...args} />
);

export const Default = Template.bind({});
Default.args = {
    
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home', icon: 'administration', subText: 'Active subtext' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact', icon: 'setting', subText: 'Home subtext' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true", icon: 'users', subText: 'Disble subtext' },
    ]
};

