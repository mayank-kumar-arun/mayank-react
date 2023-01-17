import React, { ReactNode } from "react";
import { RdsModal, RdsIcon, RdsButton, RdsLabel } from "../rds-elements";
export interface RdsCompAlertPopupProps {
  alertID: any;
  iconUrl?: string;
  colorVariant?: string;
  alertConfirmation?: string;
  messageAlert?: string;
  cancelButtonLabel?: string;
  deleteButtonLabel?: string;

  onSuccess?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
}
const RdsCompAlertPopup = (props: RdsCompAlertPopupProps) => {
  let iconUrl = props.iconUrl || "delete";
  let colorVariant = props.colorVariant || "danger";
  let alertConfirmation = props.alertConfirmation || "Are you sure to Delete";
  let messageAlert =
    props.messageAlert || "The record will be deleted permanently";
  let CancelButtonLabel = props.cancelButtonLabel || "Cancel";
  let DeleteButtonLabel = props.deleteButtonLabel || "Delete";
  return (
    <div>
      <RdsModal
        modalId={props.alertID}
        modalBackdrop="static"
        preventEscapeKey={false}
        modalAnimation="modal fade"
        showModalFooter={false}
        showModalHeader={false}
        scrollable={false}
        size='small'
        verticallyCentered={true}
      >
        <div className="text-center py-3 ">
          <p className="">
            <RdsIcon
              height="40px"
              width="40px"
              name={iconUrl}
              fill={false}
              stroke={true}
              colorVariant={colorVariant}
            />
          </p>
          <h5 className="text-dark">
            <RdsLabel label={alertConfirmation} />
          </h5>
          <span>
            <RdsLabel label={messageAlert} />
          </span>
          <div className="mt-5 d-flex justify-content-evenly">
            <RdsButton
              onClick={props.onCancel}
              class="px-2"
              databsdismiss="modal"
              arialabel="close"
              label={CancelButtonLabel}
              size="'small'"
              type="button"
              tooltipTitle=""
              colorVariant="primary"
              outlineButton={true}
            />
            <RdsButton
              type="button"
              class="px-2"
              label={DeleteButtonLabel}
              size="'small'"
              tooltipTitle=""
              colorVariant="primary"
              databsdismiss="modal"
              arialabel="close"
              onClick={props.onSuccess}
            />
          </div>
        </div>
      </RdsModal>
    </div>
  );
};

export default RdsCompAlertPopup;
