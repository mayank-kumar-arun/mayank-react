import React from "react";
import "./rds-popover.scss";

export interface RdsPopoverProps {}

const RdsPopover = (props: RdsPopoverProps) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-container={`body`}
        data-bs-toggle={`popover`}
        data-bs-placement={`right`}
        data-bs-content={`Right popover`}
      >
        Popover on right
      </button>
    </>
  );
};

export default RdsPopover;
