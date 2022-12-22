import RdsCompDatatable from "../rds-comp-data-table/rds-comp-data-table";
import RdsCompSubscription from "../rds-comp-subscription/rds-comp-subscription";
import { RdsButton } from "../rds-elements";

export interface RdsCompBillingProp {
  subscriptionData: any[];
  billingData: any[];
  billingHeaders: any;
  actions: any;
  onActionSelection(arg: any): any;
}

const RdsCompBilling = (props: RdsCompBillingProp) => {
  return (
    <>
      <div className="p-4">
        <div>
          <RdsCompSubscription subscriptionData={props.subscriptionData} />
          <hr></hr>
        </div>

        <div className="mt-3">
          <div className="d-flex justify-content-between">
            <div>
              <h4>Billing History</h4>
            </div>
            <div>
              <RdsButton
                label="DOWNLOAD All "
                colorVariant="primary"
                block={false}
                tooltipTitle={""}
                type="submit"
              />
            </div>
          </div>
          <p>Check your billing history.</p>
          <div>
            <RdsCompDatatable
              tableHeaders={props.billingHeaders}
              actions={props.actions}
              tableData={props.billingData}
              pagination={false}
              onActionSelection={props.onActionSelection}
            ></RdsCompDatatable>
          </div>
        </div>
      </div>
    </>
  );
};
export default RdsCompBilling;
