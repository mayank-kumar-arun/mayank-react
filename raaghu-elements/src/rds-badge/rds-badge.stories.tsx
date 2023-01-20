import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsBadge from "./rds-badge";
import RdsIcon from '../rds-icon/rds-icon'
import RdsButton from "../rds-button/rds-button";

export default {
  title: "Elements/Badge",
  component: RdsBadge,
  argTypes: {
    size: {
      options: ["small", "smaller", "smallest", "medium", "large", "xlg"],
      control: { type: "select" },
    },
    badgeType: {
      options: ["rectangle", "circle", "pill"],
      control: { type: "select" },
    },
    colorVariant: {
      options: [
        "primary",
        "success",
        "danger",
        "warning",
        "light",
        "info",
        "secondary",
        "dark",
      ],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof RdsBadge>;

const Template: ComponentStory<typeof RdsBadge> = (args) => (
  <RdsBadge {...args} />
);

export const TextBadge = Template.bind({});
TextBadge.args = {
  size: "medium",
  label: "Badge",
  colorVariant: "danger",
  badgeType: "rectangle",
};

const Button: ComponentStory<typeof RdsBadge> = (args) => (
  <>
    <RdsButton type="button" colorVariant="primary" label="Button">
      <RdsBadge {...args}></RdsBadge>
    </RdsButton>
  </>
);

export const button = Button.bind({});
button.args = {
  size: "medium",
  label: "9",
  colorVariant: "danger",
  badgeType: "rectangle",
};

const Positioned: ComponentStory<typeof RdsBadge> = (args) => (
  <RdsButton
    type="button"
    colorVariant="primary"
    size="medium"
    class="position-relative"
    label="Button"
  >
    <RdsBadge {...args}></RdsBadge>
  </RdsButton>
);

export const LabelWithOverlay = Positioned.bind({});
LabelWithOverlay.args = {
  size: "medium",
  label: "99",
  colorVariant: "danger",
  badgeType: "rectangle",
  positioned: true,
};

const WithIcon: ComponentStory<typeof RdsBadge> = (args) => (
 

<span   className='position-relative'>
<RdsIcon
  name='notification'
  width="33px"
  height="33px"
  fill={false}
  stroke={true}
  isAnimate={false}
 />
<RdsBadge {...args}></RdsBadge>
</span>
);

export const IconWithOverlay = WithIcon.bind({});
IconWithOverlay.args = {
  size: "medium",
  label: "9",
  colorVariant: "danger",
  badgeType: "circle",
  positioned: true,
};
