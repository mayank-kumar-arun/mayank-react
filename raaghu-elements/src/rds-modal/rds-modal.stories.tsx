import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsModal from "./rds-modal";

export default {
  title: "Elements/Modal",
  component: RdsModal,
  argTypes: {},
} as ComponentMeta<typeof RdsModal>;

const Template: ComponentStory<typeof RdsModal> = (args) => (
  <RdsModal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Show Modal",
  showModalHeader: true,
  showModalFooter: true,
  iconname: "",
  iconwidth: "",
  iconheight: "",
  modalData: {
    modalHeader: "Header",
    modalContent: "Content",
  },
};

export const LongContentModal = Template.bind({});
LongContentModal.args = {
  label: "Long Content Modal",
  showModalHeader: true,
  showModalFooter: true,
  iconname: "",
  iconwidth: "",
  iconheight: "",
  scrollable: true,
  modalData: {
    modalHeader: "Header",
    modalContent:
      "This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.",
  },
};

export const StaticBackdrop = Template.bind({});
StaticBackdrop.args = {
  label: "Backdrop Modal",
  showModalHeader: true,
  showModalFooter: true,
  iconname: "",
  iconwidth: "",
  iconheight: "",
  staticbackdrop: true,
  modalData: {
    modalHeader: "Header",
    modalContent: "Content",
  },
};

export const VerticallyCentered = Template.bind({});
VerticallyCentered.args = {
  label: "Vertically Centered Modal",
  showModalHeader: true,
  showModalFooter: true,
  iconname: "",
  iconwidth: "",
  iconheight: "",
  verticallyCentered: true,
  modalData: {
    modalHeader: "Header",
    modalContent: "Content",
  },
};
