import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsOffcanvas from "./rds-offcanvas";

export default {
  title: "Elements/Offcanvas",
  component: RdsOffcanvas,
  argTypes: {
    placement: {
      options: ["top", "bottom", "end", "start"],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof RdsOffcanvas>;
const Template: ComponentStory<typeof RdsOffcanvas> = (args) => (
  <>{/*we can use button anywhere as we want, like below */}
    {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#canvasExample"
  aria-controls="canvasExample">
   Button
  </button> */}
    <RdsOffcanvas {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  offId: "canvasExample",
  canvasTitle: "Offcanvas Title",
  scrolling: false,
  placement: "end",
  backDrop: "static",
  offcanvaswidth: 650,
  children: (
    <h2 className="p-3">
      Hello Offcanvas Lorem ipsum dolor sit amet consectetur adipisicing elit. A
      ipsam illum natus impedit similique iusto, ut inventore officia ullam
      blanditiis accusantium suscipit voluptates reiciendis explicabo provident 
      cumque est ab qui. Lorem ipsum dolor sit amet consectetur adipisicing .
    </h2>
  ),
  offcanvasbutton: (
    <a
      className="btn btn-primary"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#canvasExample"
      aria-controls="canvasExample"
    >
      Button
    </a>
  ),
};
