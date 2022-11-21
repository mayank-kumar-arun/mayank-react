import {RdsCheckbox,RdsLabel} from '../rds-elements'

export interface RdsCompUserManagementProps {
    
};

const RdsCompUserManagement = (props:RdsCompUserManagementProps) =>{
    return (
        <ul className="list-unstyled pt-4">
            <li>
                <div className="form-group mb-3">
                    <RdsCheckbox label={'Email Confirmation Required For Login.' }></RdsCheckbox>
                    {/* <rds-checkbox [disabled]="false" [label]="translate.instant('Email Confirmation Required For Login.')" [checked]="Usermanagementsettings.isEmailConfirmationRequiredForLogin"
                [(ngModel)]="Usermanagementsettings.isEmailConfirmationRequiredForLogin" name="isEmailConfirmationRequiredForLogin" [withLabel]="true" [switch]="false"
                [inline]="false" [id]="'emailConfirm'"(onChange)="selectAllFeature($event,'emailConfirm')"></rds-checkbox> */}
                </div>
            </li>
            <li>
                <div className="form-group mb-3">
                    <RdsCheckbox label={'Phone Number Verification Enabled (Via SMS)'}></RdsCheckbox>
                {/* <rds-checkbox [label]="translate.instant('Phone Number Verification Enabled (Via SMS)')" [checked]="Usermanagementsettings.smsVerificationEnabled" [disabled]="false"
                [switch]="false" [inline]="false" [withLabel]="true" [isInputGroup]="false" name="smsVerificationEnabled"
                [(ngModel)]="Usermanagementsettings.smsVerificationEnabled" ngDefaultControl (onChange)="selectAllFeature($event,'phoneVerify')"
                [id]="'phoneVerify'"></rds-checkbox> */}
                </div>
            </li>
            <li>
                <div className="form-group mb-3">
                    <RdsCheckbox label={'Use Security Image Question (Captcha) On Login.'}></RdsCheckbox>
                {/* <rds-checkbox [label]="translate.instant('Use Security Image Question (Captcha) On Login.')" [checked]="Usermanagementsettings.useCaptchaOnLogin"
                [disabled]="false" [switch]="false" [inline]="false" [withLabel]="true" [isInputGroup]="false" name="useCaptchaOnLogin"
                [(ngModel)]="Usermanagementsettings.useCaptchaOnLogin" ngDefaultControl (onChange)="selectAllFeature($event,'securityImage')"
                ></rds-checkbox> */}
                </div>
            </li>

            <li>
                <div className="form-group mb-3">
                    <div className="mb-1 fw-medium">
                        <RdsLabel label='Cookie Consent'></RdsLabel>
                    </div>
                    <RdsCheckbox label={'Cookie Consent Enabled'}></RdsCheckbox>
                {/* <rds-checkbox [label]="translate.instant('Cookie Consent Enabled')" [checked]="Usermanagementsettings.isCookieConsentEnabled" [disabled]="false" [switch]="false"
                    [inline]="false" [withLabel]="true" [isInputGroup]="false" [(ngModel)]="Usermanagementsettings.isCookieConsentEnabled" name="isCookieConsentEnabled"
                    ngDefaultControl (onChange)="selectAllFeature($event,'cookieConsent')" [id]="'cookieConsent'"></rds-checkbox> */}
                </div>
            </li>
            
            <li>
                <div className="form-group mb-3">
                
                    <div className="mb-1 fw-medium">
                        <RdsLabel label='Session Timeout Control'></RdsLabel>
                    </div>
                    <RdsCheckbox label={'Cookie Consent Enabled'}></RdsCheckbox>
                {/* <rds-checkbox [label]="translate.instant('Cookie Consent Enabled')" [checked]="Usermanagementsettings.sessionTimeOutSettings" [disabled]="false"
                    [switch]="false" [inline]="false" [withLabel]="true" [isInputGroup]="false" name="sessionTimeOutSettings"
                    [(ngModel)]="Usermanagementsettings.sessionTimeOutSettings" ngDefaultControl (onChange)="selectAllFeature($event,'sessionTimeout')"
                    [id]="'sessionTimeout'"></rds-checkbox> */}
                </div>

            </li>

            <li>
                <div className="form-group mb-3">
                
                    <div className="mb-1 fw-medium">
                        <RdsLabel label='Profile'></RdsLabel>
                    </div>
                    <RdsCheckbox label={'Allow Users To Use Gravatar Profile Picture'}></RdsCheckbox>
                {/* <rds-checkbox [label]="translate.instant('Allow Users To Use Gravatar Profile Picture')" [checked]="Usermanagementsettings.allowUsingGravatarProfilePicture" [disabled]="false"
                    [switch]="false" [inline]="false" [withLabel]="true" [isInputGroup]="false" name="allowUsingGravatarProfilePicture"
                    [(ngModel)]="Usermanagementsettings.allowUsingGravatarProfilePicture" ngDefaultControl (onChange)="selectAllFeature($event,'allowUser')"
                    [id]="'allowUser'"></rds-checkbox> */}
                </div>
            </li>
        </ul>
    )
}

export default RdsCompUserManagement;