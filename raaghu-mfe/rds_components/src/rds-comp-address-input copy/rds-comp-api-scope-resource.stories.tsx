import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompApiScopeResource from "./rds-comp-api-scope-resource";

export default {
  title: "Components/ApiScopeResource",
  component: RdsCompApiScopeResource,
} as ComponentMeta<typeof RdsCompApiScopeResource>;

const Template: ComponentStory<typeof RdsCompApiScopeResource> = (args) => (
  <RdsCompApiScopeResource {...args} />
);

export const Default = Template.bind({});

Default.args = {
  resources: [
    {
      displayName: "A - E",
      selected: false,
      children: [
        {
          displayName: "Availability",
          selected: false,
        },
        {
          displayName: "Apiopolis",
          selected: false,
        },
        {
          displayName: "Apigenix",
          selected: false,
        },
        {
          displayName: "Best Selector",
          selected: false,
        },
        {
          displayName: "Best Selector",
          selected: false,
        },
        {
          displayName: "Creative",
          selected: false,
        },
        {
          displayName: "ALT Genix Api",
          selected: false,
        },
        {
          displayName: "Dev Support Api",
          selected: false,
        },
      ],
    },
    {
      displayName: "F - O",
      selected: false,
      children: [
        {
          displayName: "Availability",
          selected: false,
        },
        {
          displayName: "Apiopolis",
          selected: false,
        },
        {
          displayName: "Apigenix",
          selected: false,
        },
        {
          displayName: "Best Selector",
          selected: false,
        },
        {
          displayName: "Best Selector",
          selected: false,
        },
        {
          displayName: "Creative",
          selected: false,
        },
        {
          displayName: "ALT Genix Api",
          selected: false,
        },
        {
          displayName: "Dev Support Api",
          selected: false,
        },
      ],
    },
    {
      displayName: "P - Z",
      selected: false,
      children: [
        {
          displayName: "Availability",
          selected: false,
        },
        {
          displayName: "Apiopolis",
          selected: false,
        },
        {
          displayName: "Apigenix",
          selected: false,
        },
        {
          displayName: "Best Selector",
          selected: false,
        },
        {
          displayName: "Best Selector",
          selected: false,
        },
        {
          displayName: "Creative",
          selected: false,
        },
        {
          displayName: "ALT Genix Api",
          selected: false,
        },
        {
          displayName: "Dev Support Api",
          selected: false,
        },
      ],
    },
  ],
};
