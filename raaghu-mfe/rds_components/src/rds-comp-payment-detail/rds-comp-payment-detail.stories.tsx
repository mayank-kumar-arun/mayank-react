import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RdsCompPaymentDetail from "./rds-comp-payment-detail";

export default {
  title: "Components/Payment Detail",
  component: RdsCompPaymentDetail,

} as ComponentMeta<typeof RdsCompPaymentDetail>;


const Template: ComponentStory<typeof RdsCompPaymentDetail> = (args) => 
  <RdsCompPaymentDetail {...args} />;


export const Default = Template.bind({});

Default.args ={
    cvc:123,
    cardNumber:12345666,
    name:"Saniya Sonkaria",
    //expirationDate:Date;
    buttonSpinner:true,
    paymentModeList:[
        {
          "id": 1,
          "label": "Credit Card",
          "checked": true,
          "name": "Radio-Button"
        },
        {
          "id": 2,
          "label": "Paypal",
          "checked": false,
          "name": "Radio-Button"
        },
        {
          "id": 3,
          "label": "eTransfer",
          "checked": false,
          "name": "Radio-Button"
        }
      ]

}

