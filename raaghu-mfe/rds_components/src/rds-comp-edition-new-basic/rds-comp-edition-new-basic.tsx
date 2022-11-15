import React from "react";
import { RdsInput, RdsSelectList } from "../rds-elements";

export interface RdsCompEditionNewBasicProps {
  planList: any[];
}

const RdsCompEditionNewBasic = (props: RdsCompEditionNewBasicProps) => {
  return (
    <>
      <form //#editionBasicForm="ngForm"
      >
        <div className="row mt-2">
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <RdsInput
                label="Edition Name"
                placeholder="Edition Name"
                inputType="text"
                name="editionName"
                isRequired={true}
              ></RdsInput>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="form-group">
              <label htmlFor="Plan" className="mb-2">
                Plan <span className="text-danger">*</span>
              </label>
              <RdsSelectList
                label=""
                isDisabled={false}
                isMultiple={false}
               
                selectItems={props.planList}
              />
              {/* <rds-select-list
                    [isRequired]=true  ngDefaultControl
                    name="edition" [itemList]="PlanList" required [placeholder]="'Select Plan'"
                    [(ngModel)]="editionData.editionPlan" #editionPlan="ngModel">
               

                </rds-select-list> */}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default RdsCompEditionNewBasic;
