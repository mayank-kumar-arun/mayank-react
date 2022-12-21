import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompProfile from "./rds-comp-profile";

export default {
  title: "Components/Profile",
  component: RdsCompProfile,
} as ComponentMeta<typeof RdsCompProfile>;

const Template: ComponentStory<typeof RdsCompProfile> = (args) => (
  <RdsCompProfile {...args} />
);

export const Default = Template.bind({});

Default.args = {
    navtabItems:[
        {
          "label": "Manage Linked Accounts",
          "icon": "manage_linked",
          "subText": "Manage accounts linked to your account",
          "id":"nav-LinkAccount" ,
        },
        {
          "label": "Manage Authority Delegation",
          "icon": "manage_authority",
          "subText": "Manage authority accounts",
          "id": "nav-Deligation",
        },
        {
          "label": "Login Attempts",
          "icon": "login_attempts",
          "subText": "See recent login attempts for your account",
          "id":"nav-Attempts",
        },
        {
          "label": "My Settings",
          "icon": "my_settings",
          "subText": "Change your account settings",
          "id":"nav-Settings",
        },
        {
          "label": "Download Collected Data",
          "icon": "download_data",
          "subText": "Download data belongs to your account",
          "id": "nav-DownLoad",
        }
      ],
      profilePic: "https://www.freeiconspng.com/thumbs/profile-icon-png/account-profile-user-icon--icon-search-engine-10.png",
      userName: "Saniya Sonkaria",
      userRole: ' Admin',
};
