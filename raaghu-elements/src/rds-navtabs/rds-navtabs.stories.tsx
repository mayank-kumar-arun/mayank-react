import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsNavtabs from "./rds-navtabs"
import { IconName } from "../Types";

export default {
    title: "Elements/Navtabs",
    component: RdsNavtabs
} as ComponentMeta<typeof RdsNavtabs>;

const Template: ComponentStory<typeof RdsNavtabs> = (args) => (
    <><RdsNavtabs  {...args} />
        {/* <div className="tab-content" id="ex1-content">
            <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home"
            >
                Tab 1 content
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile">
                Tab 2 content
            </div>
            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact">
                Tab 3 content
            </div><div className="tab-pane fade" id="nav-deabled" role="tabpanel" aria-labelledby="ex1-tab-4">
                Tab 4 content
            </div>
        </div> */}
    </>
);

export const Default = Template.bind({});
Default.args = {
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home', subText: 'Active subtext' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact', subText: 'Home subtext' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true", subText: 'Disble subtext' },
    ],
    type: "default",
    fill: false,
    justified: false
};

export const Pills = Template.bind({});
Pills.args = {
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home', subText: 'Active subtext' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact', subText: 'Home subtext' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true", subText: 'Disble subtext' },
    ],
    type: "pills",
    fill: false,
    justified: false
};

export const Tabs = Template.bind({});
Tabs.args = {
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home', subText: 'Active subtext' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact', subText: 'Home subtext' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true", subText: 'Disble subtext' },
    ],
    type: "tabs",
    fill: false,
    justified: false
};

export const Vertical = Template.bind({});
Vertical.args = {
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home', subText: 'Active subtext' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact', subText: 'Home subtext' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true", subText: 'Disble subtext' },
    ],
    type: "vertical",
    fill: false,
    justified: false
};

export const Fill = Template.bind({});
Fill.args = {
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home', subText: 'Active subtext' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact', subText: 'Home subtext' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true", subText: 'Disble subtext' },
    ],
    type: "default",
    fill: true,
    justified: false
};

export const Justified = Template.bind({});
Justified.args = {
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home', subText: 'Active subtext' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact', subText: 'Home subtext' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true", subText: 'Disble subtext' },
    ],
    type: "default",
    fill: false,
    justified: true
};

export const WithIcon = Template.bind({});
WithIcon.args = {
    navtabsItems: [
        { label: 'Home', tablink: '#nav-home', icon: 'home', ariacontrols: 'nav-home' },
        { label: 'Administration', tablink: '#nav-profile', icon: 'administration', ariacontrols: 'nav-profile' },
        { label: 'Contact', tablink: '#nav-contact', icon: 'phone', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', icon: 'users', disabled: "true" },
    ],
    type: "default",
    fill: false,
    justified: false
};
