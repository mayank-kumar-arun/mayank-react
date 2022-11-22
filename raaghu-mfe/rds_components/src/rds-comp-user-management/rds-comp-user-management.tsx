import React from 'react'
import { RdsCheckbox } from '../rds-elements';

export interface RdsCompUserManagementProps{
    Usermanagementsettings: any;
}

const RdsCompUserManagement=(props: RdsCompUserManagementProps)=>{

    return(
        <>
        <div className="pt-4">
            <div className="row mb-2">
                <div className="form-group">
                    <RdsCheckbox label="Email Confirmation Required For Login." checked={props.Usermanagementsettings.isEmailConfirmationRequiredForLogin}></RdsCheckbox>
                </div>
            </div>
            <div className="row mb-2">
                <div className="form-group">
                    <RdsCheckbox label="Phone Number Verification Enabled (Via SMS)" checked={props.Usermanagementsettings.smsVerificationEnabled}></RdsCheckbox>
                </div>
            </div >
            <div className="row mb-2">
                <div className="form-group">
                    <RdsCheckbox label="Use Security Image Question (Captcha) On Login." checked={props.Usermanagementsettings.useCaptchaOnLogin}></RdsCheckbox>
                </div>
            </div >
            <div className="row mb-2">
                <div className="form-group">
                    <RdsCheckbox label="Cookie Consent Enabled" checked={props.Usermanagementsettings.isCookieConsentEnabled}></RdsCheckbox>
                </div>
            </div>
            <div className="row mb-2">
                <div className="form-group">
                    <RdsCheckbox label="Session Timeout settings Enabled" checked={props.Usermanagementsettings.sessionTimeOutSettings}></RdsCheckbox>
                </div>
            </div>
            <div className="row mb-2">
                <div className="form-group">
                    <RdsCheckbox label="Allow Users To Use Gravatar Profile Picture" checked={props.Usermanagementsettings.allowUsingGravatarProfilePicture}></RdsCheckbox>
                </div>
            </div>
        </div>
        </>
    );
}

export default RdsCompUserManagement;