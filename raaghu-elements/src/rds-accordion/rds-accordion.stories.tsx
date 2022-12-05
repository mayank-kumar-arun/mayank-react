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
        "light",
        "review",
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
    },
    {
      id: "accordiontwo",
      bId: "collapseTwo",
      Bodyheading: "",
      title: "Section 2 title",
      content: "content2",
      state: false,
    },
    {
      id: "accordionThree",
      bId: "collapseThree",
      Bodyheading: "",
      title: "Section 3 title",
      content: "content3",
      state: false,
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
    },
    {
      id: "accordiontwo",
      bId: "collapseTwo",
      hId: "headingTwo",
      title: "Section 2 title",
      state: false,
      content: "content2",
    },
    {
      id: "accordionThree",
      bId: "collapseThree",
      hId: "headingThree",
      title: "Section 3 title",
      state: false,
      content: "content3",
    },
  ],
};
