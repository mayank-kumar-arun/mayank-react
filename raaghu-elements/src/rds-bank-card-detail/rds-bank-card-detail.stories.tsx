import React from 'react';
import { ComponentMeta, ComponentStory, Story } from '@storybook/react';
import RdsBankCardDetail from'./rds-bank-card-detail'

export default {
  title: 'Elements/Bank Card Detail',
  component: RdsBankCardDetail,
} as ComponentMeta<typeof RdsBankCardDetail>;

const Template: ComponentStory<typeof RdsBankCardDetail> = (args) => <RdsBankCardDetail {...args} />;


export const Default = Template.bind({});
Default.args = {
    cardData : {
        iconHeight: "30px",
        iconWidth: "30px",
        icon: 'editions',
        iconFill: false,
        iconstroke: true,
        iconColorVarient:"dark",
        cardID : "1011",
        cardName : "MasterCard",
        cardExpiry : "11/2027",
       
        cardNumber : 3596,
        isDefault : false,
       radioItems: [
            {
              "id": 1011,
              "checked": false,
              "name": "Radio-Button"
            }
          ]
        }
        ,
    isSelectable: false,
    label: "label card",
    isEditable:false,
    
};