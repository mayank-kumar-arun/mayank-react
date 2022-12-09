import React from "react";
import { RdsTextArea, RdsButton, RdsLabel } from "../rds-elements";
export interface RdsCompEditLanguageTextProps {}
const RdsCompEditLanguageText = (props: RdsCompEditLanguageTextProps) => {
  return (
    <div>
      <form>
        <div className="mb-4">
          <RdsTextArea
            label="Base Language"
            placeholder="Enter Base Value"
            isDisabled={true}
          ></RdsTextArea>
        </div>
        <div className="mb-4">
          <RdsTextArea
            label="Target Language"
            placeholder="Enter Target Language"
          ></RdsTextArea>
        </div>
        <div className="row">
          <div className="col-2">
            <RdsButton
              label="Cancel"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="submit"
              outlineButton={true}
            />
          </div>
          <div className="col-2">
            <RdsButton
              label="Save"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RdsCompEditLanguageText;
