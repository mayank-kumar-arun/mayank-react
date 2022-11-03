import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsWidget from "./rds-widget";
import "./rds-widget.scss";

export default {
  title: "Elements/Widget",
  component: RdsWidget,
} as ComponentMeta<typeof RdsWidget>;

const Template: ComponentStory<typeof RdsWidget> = (args) => (
  <RdsWidget {...args}>{args.content}</RdsWidget>
);

export const Default = Template.bind({});
Default.args = {
  headerTitle: "Widget",
  content: <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>,
};
