import React, { ReactNode } from "react";
import RdsIcon from "../rds-icon";
import "./rds-modal.scss";

export interface RdsModalProps {
  label?: string;
  showModalFooter?: boolean;
  showModalHeader?: boolean;
  modalData?: any;
  scrollable?: boolean;
  staticbackdrop?: boolean;
  verticallyCentered?: boolean;
  iconname?: string;
  iconwidth?: any;
  iconheight?: any;
}

const RdsModal = (props: RdsModalProps) => {
  return (
    <>
      {props.iconname?.length === 0 && (
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target={`${
            props.staticbackdrop ? "#staticBackdrop" : "#exampleModal"
          }`}
        >
          {props.label}
        </button>
      )}

      {props.iconname?.length !== 0 && (
        <div
          data-bs-toggle="modal"
          data-bs-target={`${
            props.staticbackdrop ? "#staticBackdrop" : "#exampleModal"
          }`}
        >
          <RdsIcon
            name={props.iconname!}
            fill={false}
            stroke={true}
            width={props.iconwidth}
            height={props.iconheight}
          ></RdsIcon>
        </div>
      )}

      {!props.staticbackdrop && (
        <div
          className="modal fade"
          id={`${props.staticbackdrop ? "staticBackdrop" : "exampleModal"}`}
          // data-bs-backdrop={`${props.staticbackdrop?"static":""}`}
          // data-bs-keyboard={`${props.staticbackdrop?"false":"true"}`}
          tabIndex={-1}
          aria-labelledby={`${
            props.staticbackdrop ? "staticBackdropLabel" : "exampleModalLabel"
          }`}
          aria-hidden="true"
        >
          <div
            className={`modal-dialog ${
              props.scrollable ? "modal-dialog-scrollable" : ""
            } ${props.verticallyCentered ? " modal-dialog-centered" : ""}`}
          >
            <div className="modal-content">
              {props.showModalHeader && (
                <div className="modal-header">
                  <h5
                    className="modal-title"
                    id={`${
                      props.staticbackdrop
                        ? "staticBackdropLabel"
                        : "exampleModalLabel"
                    }`}
                  >
                    {props.modalData.modalHeader}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              )}
              <div className="modal-body">{props.modalData.modalContent}</div>
              {props.showModalFooter && (
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {props.staticbackdrop && (
        <div
          className="modal fade"
          id={`${props.staticbackdrop ? "staticBackdrop" : "exampleModal"}`}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby={`${
            props.staticbackdrop ? "staticBackdropLabel" : "exampleModalLabel"
          }`}
          aria-hidden="true"
        >
          <div
            className={`modal-dialog ${
              props.scrollable ? "modal-dialog-scrollable" : ""
            } ${props.verticallyCentered ? " modal-dialog-centered" : ""}`}
          >
            <div className="modal-content">
              {props.showModalHeader && (
                <div className="modal-header">
                  <h5
                    className="modal-title"
                    id={`${
                      props.staticbackdrop
                        ? "staticBackdropLabel"
                        : "exampleModalLabel"
                    }`}
                  >
                    {props.modalData.modalHeader}
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
              )}
              <div className="modal-body">{props.modalData.modalContent}</div>
              {props.showModalFooter && (
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RdsModal;
