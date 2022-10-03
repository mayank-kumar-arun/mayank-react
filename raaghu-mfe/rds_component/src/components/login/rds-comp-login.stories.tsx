import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompLogin from "./rds-comp-login";

export default {
  title: "Components/Login",
  component: RdsCompLogin,
  //,
  // argTypes: {
  //   colorVariant: {
  //     options: [
  //       "primary",
  //       "secondary",
  //       "success",
  //       "info",
  //       "warning",
  //       "danger",
  //       "dark",
  //       "light",
  //       "review",
  //     ],
  //     control: { type: "select" },
  //   },
  // }
} as ComponentMeta<typeof RdsCompLogin>;

const Template: ComponentStory<typeof RdsCompLogin> = (args: JSX.IntrinsicAttributes) => (
  <RdsCompLogin {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // alertmessage:"this is close alert",
  // dismisable:false
};

