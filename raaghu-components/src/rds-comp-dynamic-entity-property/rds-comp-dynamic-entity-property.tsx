import React, { useState } from "react";
import { RdsDropdownList, RdsSelectList, RdsButton } from "../rds-elements";
import RdsCompDatatable from "../rds-comp-data-table/rds-comp-data-table";
import "./rds-comp-dynamic-entity-property.scss"
import { useEffect } from "react";

export interface RdsCompDynamicEntityPropertyProp {
  entityNames: any[];
  reset?: boolean;
  parameterList: any[];
  onSelectedItems(selectedItems: any): any;
  offcanvasId?:string;
}

const RdsCompDynamicEntityProperty = (
  props: RdsCompDynamicEntityPropertyProp
  ) => {
    const [entityProps, setEntityProps] = useState({
      entity: "",
      parameter: [],
    });
    const [isReset, setIsReset] =useState(false)
    const onSelectEntityValue = (e: any) => {
      setEntityProps({ ...entityProps, entity: e.target.innerText });
    };

  const onselectParameter = (selectedItems: any) => {
    setEntityProps({ ...entityProps, parameter: selectedItems });
  };
  const isFormValid =
    entityProps.entity != "" && entityProps.parameter.length != 0;

  const submitHandler = (event: any) => {
    event.preventDefault();
    props.onSelectedItems != undefined && props.onSelectedItems(entityProps);
    setIsReset(!isReset)
    setEntityProps({ entity: "", parameter: [] });

  };

  return (
    <>
      <form
        onSubmit={submitHandler} 
      >
        <div className="tab-content px-2 navsm-p-0">
          <div className="form-group mb-3">
            <label className="mb-2">Entity</label>
            <RdsDropdownList
              placeholder="Filter"
              width="100px"
              multiSelect={false}
              withBorder={true}
              reset={isReset}
              darkVariant={false}
              listItems={props.entityNames}
              onClick={onSelectEntityValue}
              />

            <div className="form-group mb-3">
              <div className="mb-2 mt-4">
                <label className="mb-2">Parameter</label>
                <RdsDropdownList
                  placeholder="Filter"
                  width="100px"
                  multiSelect={true}
                  withBorder={true}
                  darkVariant={false}
                  reset={isReset}
                  listItems={props.parameterList}
                  selectedItems={onselectParameter}
                />
              </div>
            </div>
          </div>
          <div className="footer-buttons my-2">
            <div className="row">
              <div className="col-2">
                <RdsButton
                  label="Cancel"
                  colorVariant="primary"
                  block={true}
                  tooltipTitle={""}
                  type="submit"
                  size="small"
                  outlineButton={true}
                  databstoggle="offcanvas"
                  databstarget={`#${props.offcanvasId}`}
                  ariacontrols={props.offcanvasId}
                />
              </div>
              <div className="col-2 ms-2">
                <RdsButton
                  label="Save"
                  colorVariant="primary"
                  isDisabled={!isFormValid}
                  block={true}
                  tooltipTitle={""}
                  type="submit"
                  size="small"
                  databstoggle="offcanvas"
                  databstarget={`#${props.offcanvasId}`}
                  ariacontrols={props.offcanvasId}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default RdsCompDynamicEntityProperty;
