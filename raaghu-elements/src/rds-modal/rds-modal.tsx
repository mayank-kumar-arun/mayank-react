import React, { ReactNode } from "react";
import RdsIcon from "../rds-icon";
import "./rds-modal.scss";

export interface RdsModalProps {
  showModalFooter?: boolean;
  showModalHeader?: boolean;
  modalData?: any;
  scrollable?: boolean;
  staticbackdrop?: boolean;
  verticallyCentered?: boolean;
  modalbutton?: any;
  label?: string;
  children?: ReactNode;
  id?: any;
}

const RdsModal = (props: RdsModalProps) => {
  let autoid: any;
  if (props.id) {
    autoid = props.id;
  } else {
    let d = new Date();
    autoid = `${d.getMilliseconds()}${d.getSeconds()}`;
  }

  return (
    <>
      <div
        data-bs-toggle="modal"
        data-bs-target={`${
          props.staticbackdrop
            ? `#staticBackdrop${autoid}`
            : `#exampleModal${autoid}`
        }`}
      >
        {props.label && (
          <button className="btn btn-primary">{props.label}</button>
        )}
        {!props.label && props.modalbutton}
      </div>

      {!props.staticbackdrop && (
        <div
          className="modal fade"
          id={`${
            props.staticbackdrop
              ? `#staticBackdrop${autoid}`
              : `#exampleModal${autoid}`
          }`}
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

              <div className="modal-body">
                {props.children && props.children}

                {!props.children && props.modalData.modalContent}
              </div>

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
          id={`${
            props.staticbackdrop
              ? `staticBackdrop${autoid}`
              : `exampleModal${autoid}`
          }`}
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
