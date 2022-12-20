import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsAccordion from "./rds-accordion";

export default {
  title: "Elements/Accordion",
  component: RdsAccordion,
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
      ],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof RdsAccordion>;

const Template: ComponentStory<typeof RdsAccordion> = (args) => (
  <RdsAccordion {...args} />
);

export const Default = Template.bind({});
Default.args = {
  colorVariant: "primary",

  buttonGroupItems: [
    {
      id: "accordionOne",
      bId: "collapseOne",
      Bodyheading: "",
      title: "Section 1 title",
      content: "content1",
      state: false,
      select: null,
    },
    {
      id: "accordiontwo",
      bId: "collapseTwo",
      Bodyheading: "",
      title: "Section 2 title",
      content: "content2",
      state: false,
      select: null,
    },
    {
      id: "accordionThree",
      bId: "collapseThree",
      Bodyheading: "",
      title: "Section 3 title",
      content: "content3",
      state: false,
      select: null,
    },
  ],
};

export const outline = Template.bind({});
outline.args = {
  colorVariant: "primary",
  outline: true,
  buttonGroupItems: [
    {
      id: "accordionOne",
      bId: "collapseOne",
      hId: "headingOne",
      title: "Section 1 title",
      state: false,
      content: "content1",
      select: null,
    },
    {
      id: "accordiontwo",
      bId: "collapseTwo",
      hId: "headingTwo",
      title: "Section 2 title",
      state: false,
      content: "content2",
      select: null,
    },
    {
      id: "accordionThree",
      bId: "collapseThree",
      hId: "headingThree",
      title: "Section 3 title",
      state: false,
      content: "content3",
      select: null,
    },
  ],
};

export const Flush = Template.bind({});
Flush.args = {
  colorVariant: "primary",
  Flush: true,
  buttonGroupItems: [
    {
      id: "accordionOne",
      bId: "collapseOne",
      hId: "headingOne",
      title: "Section 1 title",
      state: false,
      content: "content1",
      select: null,
    },
    {
      id: "accordiontwo",
      bId: "collapseTwo",
      hId: "headingTwo",
      title: "Section 2 title",
      state: false,
      content: "content2",
      select: null,
    },
    {
      id: "accordionThree",
      bId: "collapseThree",
      hId: "headingThree",
      title: "Section 3 title",
      state: false,
      content: "content3",
      select: null,
    },
  ],
};

export const AlwaysOpen = Template.bind({});
AlwaysOpen.args = {
  colorVariant: "primary",
  AlwaysOpen: true,
  buttonGroupItems: [
    {
      id: "accordionOne",
      bId: "collapseOne",
      hId: "headingOne",
      title: "Section 1 title",
      state: true,
      content: "content1",
      select: 2,
    },
    {
      id: "accordiontwo",
      bId: "collapseTwo",
      hId: "headingTwo",
      title: "Section 2 title",
      state: true,
      content: "content2",
      select: 2,
    },
    {
      id: "accordionThree",
      bId: "collapseThree",
      hId: "headingThree",
      title: "Section 3 title",
      state: true,
      content: "content3",
      select: 2,
    },
  ],
};
