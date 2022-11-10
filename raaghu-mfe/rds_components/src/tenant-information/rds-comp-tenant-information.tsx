import {RdsInput , RdsSelectList ,RdsCheckbox ,RdsDatePicker , RdsButton} from '../rds-elements'

const RdsCompTenantInformation = () =>{
    return (
        <div>
            <div className="tab-content py-4">
                <form >
                <div className="row align-items-center">
                    <div className="col-md-3 text-center cursor-pointer sm-p-0">
                        <img width="100" src="edit-pic.png" />

                        <input type="file" accept="image/*" style={{display: "none"}} />

                    </div>
                    <div className="col-md-9 sm-p-0">
                    <div className="form-group mb-3">
                        <RdsInput inputType='text' title='Tenancy Name' titleType='Top' name='tenancy_name' placeholder='Tenancy Name' ></RdsInput>
                        
                        <div className="form-control-feedback" >
                           
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <RdsInput inputType='text' title='Tenant Name' titleType='Top' name='tenant_name' placeholder='TenantName' ></RdsInput>
                        
                        {/* <div className="form-control-feedback" *ngIf="tenantName.errors && (tenantName.dirty || tenantName.touched)">
                        <span class="text-danger" *ngIf="tenantName.errors.required">{{"Tenant Name is
                            required"|translate}}</span>
                        </div> */}
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 sm-p-0">
                    <div className="form-group mb-3">
                        <RdsInput inputType='email' title='Admin Email' titleType='Top' placeholder='Admin Email' name='email' ></RdsInput>
                        {/* <rds-input [inputType]="'email'" [Title]="translate.instant('Admin Email')" [TitleType]="'Top'"
                        [(ngModel)]="tenantData.adminEmailAddress" [pattern]="emailPattern" name="email"
                        [placeholder]="translate.instant('Admin Email')" #adminEmailAddress="ngModel" [isRequired]=true required>
                        </rds-input> */}
                        {/* <div className="form-control-feedback"
                        *ngIf="adminEmailAddress.errors && (adminEmailAddress.dirty || adminEmailAddress.touched)">
                        <span class="text-danger" *ngIf="adminEmailAddress.errors.required">{{"Admin email is
                            required"|translate}}</span>
                        <span class="text-danger" *ngIf="adminEmailAddress.errors.pattern">{{"Please enter valid admin
                            email"|translate}}</span>
                        </div> */}
                    </div>
                    </div>
                    <div className="col-md-6 sm-p-0">
                    <div className="form-group mb-3">
                        <RdsSelectList label={'Edition'} selectItems={[]} ></RdsSelectList>
                        {/* <rds-select-list [(ngModel)]="tenantData.edition" [labelText]="translate.instant('Edition')" [isRequired]=true
                        [value]="tenantData.edition" ngDefaultControl LabelType="Top" name="edition" [itemList]="editionList" [placeholderText]="'Select Edition'">
                        </rds-select-list> */}
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 sm-p-0">
                    <div className="form-group mb-3">
                        <RdsCheckbox label={'Unlimited Time Subscription'} isDisabled checked ></RdsCheckbox>
                        
                    </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-md-6 sm-p-0">
                    <div className="form-group mb-3">
                        <RdsDatePicker DatePickerLabel={''} ></RdsDatePicker>
                        {/* <rds-datepicker name="date-picker" [disabled]="tenantData.unlimitedSubscription" [Label]="''"
                        [(ngModel)]="tenantData.subscriptionEndDate" (change)="onDateChange($event)"
                        [value]="tenantData.subscriptionEndDate"></rds-datepicker> */}
                    </div>
                    </div>
                </div>
                </form>
            </div>
            <div className="footer-buttons my-2 sm-p-0">
                {/* <RdsButton tooltipTitle={''} type={'button'} label="Cancel" colorVariant='outline-primary' size='small' onClick={}></RdsButton>
                <rds-button [label]="translate.instant('Cancel')" [colorVariant]="'outline-primary'" [size]="'small'"
                (click)="onCanceled()" data-bs-dismiss="offcanvas">
                </rds-button> */}
                <RdsButton label='Next' size='small' class='ms-2' colorVariant='primary' tooltipTitle={''} type={'button'}></RdsButton>
                {/* <rds-button [label]="translate.instant('Next')"
                [disabled]="!tenantCreationForm.valid"
                [size]="'small'" class="ms-2" [colorVariant]="'primary'" (click)="next(tenantCreationForm)" [showLoadingSpinner]="buttonSpinner">
                </rds-button> */}
            </div>

        </div>
    )
}

export default RdsCompTenantInformation