import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompCardDetailList from "./rds-comp-card-detail-list";

export default {
  title: "Components/Card Detail List ",
  component: RdsCompCardDetailList,
} as ComponentMeta<typeof RdsCompCardDetailList>;

const Template: ComponentStory<typeof RdsCompCardDetailList> = (args) => (
  <RdsCompCardDetailList {...args} />
);

export const Default = Template.bind({});

Default.args = {
    cardDatas: [
    {  id:1,
      cardData: {
        iconHeight: "30px",
        iconWidth: "30px",
        icon: "editions",
        iconFill: false,
        iconstroke: true,
        iconColorVarient: "dark",
        cardID: "1011",
        cardName: "MasterCard",
        cardExpiry: "11/2027",

        cardNumber: 3596,
        isDefault: false,
        radioItems: [
          {
            id: 1011,
            checked: false,
            name: "Radio-Button",
          },
        ],
      },
      isSelectable: true,
      label: "label card",
      isEditable: false,
    },
    {
        id:2,
      cardData: {
        iconHeight: "30px",
        iconWidth: "30px",
        icon: "editions",
        iconFill: false,
        iconstroke: true,
        iconColorVarient: "dark",
        cardID: "1011",
        cardName: "MasterCard",
        cardExpiry: "11/2027",
        cardNumber: 3596,
        isDefault: false,
        radioItems: [
          {
            id: 1011,
            checked: false,
            name: "Radio-Button",
          },
        ],
      },
      isSelectable: true,
      label: "label card",
      isEditable: false,
    },
    { id:3,
      cardData: {
        iconHeight: "30px",
        iconWidth: "30px",
        icon: "editions",
        iconFill: false,
        iconstroke: true,
        iconColorVarient: "dark",
        cardID: "1011",
        cardName: "MasterCard",
        cardExpiry: "11/2027",

        cardNumber: 3596,
        isDefault: false,
        radioItems: [
          {
            id: 1011,
            checked: false,
            name: "Radio-Button",
          },
        ],
      },
      isSelectable: true,
      label: "label card",
      isEditable: false,
    },
  ],
};
