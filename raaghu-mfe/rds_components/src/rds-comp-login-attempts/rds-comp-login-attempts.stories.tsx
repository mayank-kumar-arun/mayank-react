import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompLoginAttempts from "./rds-comp-login-attempts";

export default {
  title: "Components/Login Attempts",
  component: RdsCompLoginAttempts,
} as ComponentMeta<typeof RdsCompLoginAttempts>;

const Template: ComponentStory<typeof RdsCompLoginAttempts> = (args) => (
  <RdsCompLoginAttempts {...args} />
);

export const Default = Template.bind({});

Default.args = {
  selectvalue: [
    { value: "Success", some: "Success" },
    {
      value: "InvalidUserNameOrEmailAddress",
      some: "Invalid Username or email Address",
    },
    { value: "InvalidPassword", some: "Invalid Password" },
    { value: "UserIsNotActive", some: "User is Not Active" },
    { value: "InvalidTenancyName", some: "Invalid Tenancy name" },
    { value: "TenantIsNotActive", some: "Tenant Is Not Active" },
    { value: "UserEmailIsNotConfirmed", some: "User Email Is Not Confirmed" },
    { value: "UnknownExternalLogin", some: "Unknown External Login" },
    { value: "LockedOut", some: "Locked Out" },
    {
      value: "UserPhoneNumberIsNotConfirmed",
      some: "User PhoneNumber IsNot Confirmed",
    },
  ],

  tableHeaders: [
    {
      displayName: "IP Address",
      key: "ipaddress",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Clients",
      key: "icon",
      datatype: "icon",
      //   sortable: true,
    },
    {
      displayName: "Name",
      key: "name",
      datatype: "avatarTitleInfo",
      sortable: true,
    },
    {
      displayName: "Date&Time",
      key: "time",
      datatype: "number",
      sortable: true,
    },
    { displayName: "Result", key: "result", datatype: "text", sortable: true },
  ],

  tableData: [
    {
      id: 1,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 60,
      icon: "computer",
      time: new Date("12/03/2022").toISOString(),
      result: "InvalidPassword",
    },
    {
      id: 2,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 120,
      icon: "phone",
      time: new Date("12/04/2022").toISOString(),
      result: "UserIsNotActive",
    },
    {
      id: 3,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 250,
      icon: "computer",
      time: new Date("12/05/2022").toISOString(),
      result: "InvalidPassword",
    },
    {
      id: 4,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 60,
      icon: "phone",
      time: new Date("12/06/2022").toISOString(),
      result: "Success",
    },
    {
      id: 5,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 100,
      icon: "computer",
      time: new Date("12/07/2022").toISOString(),
      result: "UserIsNotActive",
    },
    {
      id: 6,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 60,
      icon: "phone",
      time: new Date("12/08/2022").toISOString(),
      result: "Success",
    },
    {
      id: 7,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 100,
      icon: "computer",
      time: new Date("11/03/2022").toISOString(),
      result: "Success",
    },
    {
      id: 8,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 100,
      icon: "computer",
      time: new Date("11/04/2022").toISOString(),
      result: "UserIsNotActive",
    },
    {
      id: 9,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 100,
      icon: "phone",
      time: new Date("11/05/2022").toISOString(),
      result: "Success",
    },
    {
      id: 10,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 100,
      icon: "computer",
      time: new Date("12/02/2022").toISOString(),
      result: "Success",
    },
    {
      id: 11,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 100,
      icon: "phone",
      time: new Date("12/01/2022").toISOString(),
      result: "Success",
    },
    {
      id: 12,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 100,
      icon: "computer",
      time: new Date("11/09/2022").toISOString(),
      result: "Success",
    },
    {
      id: 13,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 100,
      icon: "computer",
      time: new Date("12/03/2022").toISOString(),
      result: "Success",
    },
    {
      id: 14,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 100,
      icon: "phone",
      time: new Date("12/03/2022").toISOString(),
      result: "Success",
    },
    {
      id: 15,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 100,
      icon: "computer",
      time: new Date("12/03/2022").toISOString(),
      result: "UserEmailIsNotConfirmed",
    },
    {
      id: 16,
      name: {
        avatar:
          "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
        title: "Firefox",
        info: "Window NT 10",
      },
      ipaddress: 100,
      icon: "phone",
      time: new Date("12/03/2022").toISOString(),
      result: "UserEmailIsNotConfirmed",
    },
  ],
};
