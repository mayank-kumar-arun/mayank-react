import React from 'react';
import { RdsCheckbox, RdsInput, RdsLabel } from "../rds-elements";
import './rds-comp-email-settings-new.scss'

export interface RdsCompEmailSettingsNewProps{

}

const RdsCompEmailSettingsNew=(props:RdsCompEmailSettingsNewProps)=>{
    return(
        <>
            <form>
        <div className="row mb-3">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <div className="form-group">
              <RdsLabel
                label="Default From Display Name"
                className="mb-1"
                size="14px"
              ></RdsLabel>
              <RdsInput
                placeholder="Enter Name"
                customClasses="form-control"
                inputType="email"
              ></RdsInput>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <RdsLabel
              label="Default From Address"
              className="mb-1"
              size="14px"
            ></RdsLabel>
            <RdsInput
              placeholder="Enter Name"
              customClasses="form-control"
            ></RdsInput>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <div className="form-group">
              <RdsLabel label="Host" className="mb-1" size="14px"></RdsLabel>
              <RdsInput
                placeholder="Enter Name"
                customClasses="form-control"
              ></RdsInput>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <RdsLabel label="Port" className="mb-1" size="14px"></RdsLabel>
            <RdsInput placeholder="Enter Name" customClasses="form-control"></RdsInput>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-12 col-md-12 col-sm-12" style={{fontSize: "14px"}}>
            <RdsCheckbox label="Enable SSL"></RdsCheckbox>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-12 col-md-12 col-sm-12" style={{fontSize: "14px"}}>
            <RdsCheckbox label="Use Default Credentials"></RdsCheckbox>
          </div>
        </div>
      </form>
        </>
    );
}

export default RdsCompEmailSettingsNew;