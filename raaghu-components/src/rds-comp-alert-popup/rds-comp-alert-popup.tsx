import React from "react";
import { RdsModal, RdsIcon, RdsButton, RdsLabel } from "../rds-elements";
export interface RdsCompAlertPopupProps {
  ondelete?: React.MouseEventHandler<HTMLButtonElement>;
  alertbutton?: any;
  label?: string;
  id?: any;
}
const RdsCompAlertPopup = (props: RdsCompAlertPopupProps) => {
  const CancelClick = () => {};

  const modalContent = (
    <div className="text-center py-3 ">
      <>
        <RdsIcon
          height="40px"
          width="40px"
          name="delete"
          fill={false}
          stroke={true}
          colorVariant="danger"
        />
      </>
      <h5 className="text-dark">
        <RdsLabel label="Are you sure ?" />
      </h5>
      <span>
        <RdsLabel label="The record will be deleted permanently" />
      </span>
      <div className="mt-5 d-flex justify-content-evenly">
        <RdsButton
          onClick={CancelClick}
          class="px-2"
          databsdismiss="modal"
          arialabel="close"
          label="Cancel"
          size="'small'"
          type="button"
          tooltipTitle=""
          colorVariant="primary"
          outlineButton={true}
        />
        <RdsButton
          type="button"
          class="px-2"
          label="Delete"
          size="'small'"
          tooltipTitle=""
          colorVariant="primary"
          databsdismiss="modal"
          arialabel="close"
          onClick={props.ondelete}
        />
      </div>
    </div>
  );
  return (
    <div>
      <RdsModal
        id={props.id}
        modalbutton={props.alertbutton}
        staticbackdrop={true}
        label={props.label}
        showModalHeader={false}
        showModalFooter={false}
        verticallyCentered={true}
        modalData={{
          modalHeader: "Greetings",
          modalContent: modalContent,
        }}
      />
    </div>
  );
};

export default RdsCompAlertPopup;
