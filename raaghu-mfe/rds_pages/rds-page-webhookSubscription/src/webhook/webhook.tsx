import React, { useEffect, useState } from "react";
import {
  RdsCompWebhookSubscription,
  RdsCompDatatable,
} from "../../../rds-components";
import {
  RdsIllustration,
  RdsButton,
  RdsAlert,
  RdsOffcanvas,
} from "../../../rds-elements";

export interface RdsPageWebhookSubscriptionProps {
}

const Webhook = (props: RdsPageWebhookSubscriptionProps) => {
  let nextId = 0;
  const [webhookItem, setWebhookItem] = useState<any>([]);
  const onNewWebhookSubscription = () => {};
  const tableHeaders = [
    {
      displayName: "Webhook Endpoint",
      key: "endpoint",
      datatype: "text",
      sortable: true,
      isEndUserEditing: true,
    },
    {
      displayName: "Webhook Events",
      key: "event",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Active",
      key: "active",
      datatype: "badge",
      sortable: true,
    },
  ];

  const onWebhookItem = (item: any) => {

    webhookItem.push({
      id: nextId++,
      endpoint: item.endpoint,
      event: item.event,
      active: { badgeColorVariant: "success", content: "Yes" },
    });
    setWebhookItem([...webhookItem]);
  };
  const onActionSelection = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: { displayName: string; id: string }
  ) => {};

  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <RdsOffcanvas
          onclick={onNewWebhookSubscription}
          buttonname="button"
          placement="end"
          canvasTitle="NEW WEBHOOK SUBSCRIPTION"
          width="650px"
          offcanvasbutton={
            <RdsButton
              onClick={onNewWebhookSubscription}
              type={"button"}
              colorVariant="primary"
              label="NEW WEBHOOK SUBSCRIPTIONS"
            />
          }
          id="offcanvas"
        
          children={<RdsCompWebhookSubscription webhookItem={onWebhookItem} />}
        ></RdsOffcanvas>
      </div>
      <div className="m-4">
        {webhookItem.length == 0 && (
          <div>
            <RdsAlert
              alertmessage="Webhooks allow external services to be notified when certain events happen. "
              colorVariant="primary"
              dismisable={false}
              //delay:10000,
              icon="information"
              iconFill={false}
              iconStroke={true}
              iconHeight="20px"
              iconWidth="20px"
              position="top"
            />

            <RdsIllustration
              label="Currently you do not have Webhook Subscriptions"
              subLabel="Click on the button above to add."
              colorVariant="light"
            />
          </div>
        )}

        {webhookItem.length > 0 && (
          <RdsCompDatatable
            classes="table__userTable"
            tableHeaders={tableHeaders}
            tableData={webhookItem}
            pagination={true}
            recordsPerPage={5}
            onActionSelection={onActionSelection}
            recordsPerPageSelectListOption={true}
          ></RdsCompDatatable>
        )}
      </div>
    </div>
  );
};

export default Webhook;
