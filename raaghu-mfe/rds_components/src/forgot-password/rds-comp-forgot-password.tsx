import { useState } from 'react';
import {RdsInput,RdsButton} from '../rds-elements'

const RdsCompForgotPassword = () =>{

    let showmailsuccess = false;

    const [validEmail,setValidEmail] = useState(false);

    const isEmailValid = (email: any) => {
		if (!email || email.length === 0) {
			return false;	  
		}
		return true;
	}

    const onSubmit = () =>{

    }
    return (
     <div>

        <div className="text-center">
           {!showmailsuccess && <div >
                <h2 className="pb-3"> <b>Forgot Password? </b> </h2>
                <div>
                <form >
                    <div className="form-group mb-3 text-start">
                     <RdsInput label='Enter email to receive reset password link' size='default' onChange={isEmailValid} inputType='email' placeholder='Email' ></RdsInput>
                    {/* <rds-input size="default" [TitleType]="'Top'" [disabled]="false" [readonly]="false"
                        [Title]="translate.instant('Enter email to receive reset password link')" value="" [inputType]="'email'"
                        [placeholder]="translate.instant(Email)" [isRequired]=true  id="txtUsermail" floatinginputLabel="" formControlName="email"
                        [(ngModel)]="mailID" ngDefaultControl (keyup)="emailValidator(mailID)" (mouseup)="checkIsEmailEmpty()">
                    </rds-input> */}
                    {/* <small class="text-danger" *ngIf="showMailValidityMessage">{{"Entered invalid"|translate}}{{Email}}</small>
                    <small class="text-danger" *ngIf="showMailRequiredMessage">{{Email}} {{"is Required"|translate}}</small> */}
                    <div className="row d-flex justify-content-between mt-2">
                        <div className="col-md-12">
                        <div>Remember Password ? <a href={'/'} className="text-decoration-none">Login</a></div>
                        </div>
                    </div>
                    </div>
                    <br/>
                    <div className="mb-2">
                      <RdsButton class='d-grid mb-3'label='Submit' block size='medium' colorVariant='primary' tooltipTitle={''} onClick={onSubmit} type={'submit'}></RdsButton>
                    {/* <rds-button class="d-grid mb-3" [colorVariant]="buttonColorType" [block]="true" size="'medium'"
                        [label]="translate.instant(buttonLabel)" (click)="submit()"></rds-button> */}
                    </div>
                </form>
                </div>
            </div>} 
            {showmailsuccess && <div className="container" >
                    <img src="https://www.nicepng.com/png/full/362-3624869_success-image-png.png" className="mt-4 mb-4 w-25"/>
                    <h3 className="pb-3">Email has been sent !</h3>
                    <div>
                      Please check your inbox and click in the received link to reset a password
                    </div>
                    <br/>
                    <div>
                      "Didn't receive the link" ? <a href={'/Dashboard'} className="text-decoration-none" >Resend</a>
                    </div>
            </div> }
        </div>
    </div>
    )
}

export default RdsCompForgotPassword