
import { RdsInput, RdsButton, RdsSelectList } from '../rds-elements'

export interface RdsCompBillingAddressProps { 
    countryList: {option:string}[],
    IndianStateList: {option:string}[]
}

const RdsCompBillingAddress = (props: RdsCompBillingAddressProps) => {

    const onSubmitHandler = (e: any) => { }


    return (
        <>
            <div className="contact-information">
                <h3 className="pb-2">Billing Address</h3>
                <form id="billingAddressForm" onSubmit={onSubmitHandler}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <RdsInput label="First Name" titleType="top" size="medium" inputType="text" name="firstName"
                                // isRequired={true}  
                                placeholder="Enter First Name" 
                                // required 
                                />
                            {/* <div className="form-control-feedback" *ngIf="firstName.errors&&(firstName.dirty||firstName.touched)">
                    <span className="text-danger" *ngIf="firstName.errors.required">{{
                        "First Name is
                        required"|translate}}</span>
                </div> */}
                        </div>
                        <div className="col-md-6 mb-3">
                            <RdsInput label="Last Name" titleType="top" size="medium" inputType="text" name="lastName"
                                //  [isRequired]="true" 
                                // required
                                placeholder="Enter Last Name" />
                            {/* <div className="form-control-feedback" *ngIf="lastName.errors&&(lastName.dirty||lastName.touched)">
                            <span className="text-danger" *ngIf="lastName.errors.required">{{
                                "Last Name is
                        required"|translate}}</span>
                </div> */}
                        </div >
                    </div >
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <RdsInput label="Company" titleType="top" size="medium" name="company" id="txtCompany" placeholder="Enter Company" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <RdsInput label="Phone" titleType="top" 
                            // isRequired={true} 
                            size="medium" name="phone"
                                id="txtPhone" 
                                // isRequired={true} 
                                // required
                                placeholder="Enter phone" />
                            {/* <div className="form-control-feedback" * ngIf="phone.errors&&(phone.dirty||phone.touched)" >
                    <span className="text-danger" * ngIf="phone.errors.required" > {{
                        "Phone Number is
                        required"|translate}}</span>
                </div > */}
                        </div >
                    </div >
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <RdsInput label="Address" titleType="top" 
                            // isRequired={true} 
                            size="medium" name="address"
                                id="txtAddress" 
                                // required 
                                />
                            {/* <div className="form-control-feedback" *ngIf="address.errors&&(address.dirty||address.touched)">
                        <span className="text-danger" *ngIf="address.errors.required">{{ "address is required"| translate }}</span>
            </div > */}
                        </div >
                    </div >
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <RdsInput label="City" titleType="top" 
                            // isRequired={true} 
                            size="medium" name="city"
                                id="txtCompany" placeholder="Enter City" 
                                // required 
                                />
                            {/* <div className="form-control-feedback" *ngIf="city.errors && (city.dirty || city.touched)">

        <span className="text-danger" *ngIf="city.errors.required">City is required</span>

                </div > */}
                        </div >
                        <div className="col-md-6 mb-3">
                            <div className="label mb-2">
                                Country <span className="text-danger">*</span>
                            </div>
                            <RdsSelectList
                                label="Select Country"
                                // (change)="SelectCountry($event)" 
                                // name="countryInfo" 
                                // required
                                selectItems={props.IndianStateList}
                            />
                            {/* <div className="form-control-feedback" * ngIf= "country.errors && (country.dirty || country.touched)" >

        <span className="text-danger" * ngIf="country.errors.required" > Country is required</span >

                </div > */}
                        </div >
                    </div >
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="label mb-2">
                                State/Province <span className="text-danger">*</span>
                            </div>
                            <RdsSelectList
                                // value=state
                                label="Select State/Province"
                                // (change)="SelectState($event)" 
                                // name="countryInfo" 
                                // required 
                                selectItems={props.IndianStateList} 
                                />
                            {/* <div className="form-control-feedback" *ngIf="state.errors && (state.dirty || state.touched)">

        <span className="text-danger" *ngIf="state.errors.required">State is required</span>

                </div > */}
                        </div >
                        <div className="col-md-6 mb-3">
                            <RdsInput title="Postal Code" titleType="top" 
                            // isRequired={true} 
                            // required 
                            // size="medium"
                                name="postalCode" id="txtPostalCode"
                                placeholder="Enter Postal code" 
                                // required 
                                />
                            {/* <div className="form-control-feedback"
                    * ngIf="postalCode.errors && (postalCode.dirty || postalCode.touched)" >

    <span className="text-danger" * ngIf="postalCode.errors.required" > Postal code is required</span >

                </div > */}
                        </div >
                    </div >

                    <div className="pt-4 row">
                        <div className="col-md-6 mb-3">
                            <RdsButton block={true} size="medium" outlineButton={true} colorVariant="primary"
                            label='back' tooltipTitle={''} type={'button'}                            // (click)="back()" 
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <RdsButton block={true} size="medium"
                            // [disabled]="billingAddressForm.invalid" 
                            // submit={true}
                            colorVariant="primary"
                            label='Continue' tooltipTitle={''} type={'button'} />
                        </div>
                    </div >
                </form >
            </div >
        </>
    )
}

export default RdsCompBillingAddress