import React from 'react'
import { RdsRadioButton, RdsInput, RdsButton, RdsSpinner } from '../rds-elements';
import "./rds-comp-payment-detail.scss"

export interface RdsCompPaymentDetailProps {
    cvc?:number,
    cardNumber?:number,
    name?:string,
    expirationDate?:Date;
    buttonSpinner?:boolean;
    paymentModeList?:any[];
    onContinue?:(Event:React.MouseEvent<HTMLButtonElement>)=>void,
    onBack?:(Event:React.MouseEvent<HTMLButtonElement>)=>void
}
const RdsCompPaymentDetail = (props:RdsCompPaymentDetailProps) => {
  return (
    <>

<div className="contact-information">
    <p className="heading">
        Payment details
    </p>
    <div className="row">
        <div className="col-md-4">
            <RdsRadioButton itemList={props.paymentModeList}  //[switch]="false" [inline]="false" [isInputGroup]="false" [itemList]="paymentModeList"
            />
          
        </div>
    </div>

    <div className="my-3">
        <RdsInput label="Card Number"// [labelPosition]="'top'" [isRequired]=true [(ngModel)]="cardNumber"
        required size="medium" name="cardNumber"
            id="txtCardNumber"  />
    </div>

    <div className="my-3">
        <RdsInput label="Name On Card" // [(ngModel)]="name"  [labelPosition]="'top'" [isRequired]=true 
         required size="medium" name="name"
            id="txtName" />
    </div>

    <div className="my-3 row">
        <div className="col-9">
            <RdsInput label="Expiration Date (MM/YY)" // [labelPosition]="'top'" [isRequired]=true[(ngModel)]="expirationDate"
             required size="medium" name="expirationDate" id="txtExpirationDate" />
            
        </div>
        <div className="col-3">
            <RdsInput label="CVV" // [(ngModel)]="cvc"[labelPosition]="'top'" [isRequired]=true required size="medium" name="cvc"
                id="txtCvc"  required />
        </div>
    </div>


    <div className="my-4 pt-4 row">
            <div className="col-6">
            <RdsButton
              label="Cancel"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="button"
              onClick={props.onBack}
              isOutline={true}
            />
            </div>
            <div className="col-6">
           {props.buttonSpinner? <RdsButton
              children={
                <RdsSpinner spinnerType="border" height='22px' borderWidth="medium" width="22px" colorVariant="light"/>
                              }
              colorVariant="primary"
              isDisabled={false}
              block={true}
              tooltipTitle={""}
              type="submit"
             // onClick={continueHandler}
            />:
            <RdsButton
              label="Confirm"
              colorVariant="primary"
              isDisabled={true}
              block={true}
              tooltipTitle={""}
              type="submit"
              onClick={props.onContinue}
            />}
             </div>
          </div>
    {/* <div className="my-4 pt-4 row">
        <div className="col-6">
            <RdsButton type={} //[block]="true" [size]="'medium'" [isOutline]="true" [colorVariant]="'primary'"
                //[label]="translate.instant('cancel')" (click)="back()"
                />
           
        </div>
        <div className="col-6">
            <RdsButton type={}  //[block]="true" [size]="'medium'" [colorVariant]="'primary'" [showLoadingSpinner]="buttonSpinner"
                //[label]="translate.instant('confirm')" (click)="continue()"
                />
           
        </div>


    </div> */}
</div>
 
    </>
  )
}

export default RdsCompPaymentDetail