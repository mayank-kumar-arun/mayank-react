import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsDropdownList from "./rds-dropdown-list";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Elements/DropdownList",
  component: RdsDropdownList,
} as ComponentMeta<typeof RdsDropdownList>;

const Template: ComponentStory<typeof RdsDropdownList> = (args) => (
  <RdsDropdownList {...args} />
);

export const Default = Template.bind({});

Default.args = {
  width: "100px",
  withBorder: true,
  darkVariant: false,
  listItems: [
    {
      label: "EN(US)",
      val: "en",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "English(IND)",
      val: "en",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Français",
      val: "fr",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Deutsch",
      val: "de",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Português (Brasil)",
      val: "pt-BR",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Türkçe",
      val: "tr",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Italiano",
      val: "it",
      iconWidth: "20px",
      iconHeight: "20px",
    },
  ],
};

export const WithIcons = Template.bind({});

WithIcons.args = {
  width: "100px",
  withBorder: true,
  darkVariant: false,
  displaynamesize: "12px",
  displayiconheight: "20px",
  displayiconwidth: "20px",
  listItems: [
    {
      label: "EN(US)",
      val: "en",
      icon: "us",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "English(IND)",
      val: "en",
      icon: "in",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Français",
      val: "fr",
      icon: "fr",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Deutsch",
      val: "de",
      icon: "de",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Português (Brasil)",
      val: "pt-BR",
      icon: "br",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Türkçe",
      val: "tr",
      icon: "tr",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Italiano",
      val: "it",
      icon: "it",
      iconWidth: "20px",
      iconHeight: "20px",
    },
  ],
};
