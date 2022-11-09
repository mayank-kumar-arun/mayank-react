import {RdsButton,RdsIcon,RdsFabMenu,RdsOffcanvas} from '../rds-elements';
import RdsCompDataTable from '../data-table/rds-comp-data-table';

const RdsCompTenantList =() =>{
    return (
    <div>
        <div>
            <div className="row">
                <div className="col-md-12 text-end pb-3 desktop-btn">
                    <RdsButton label='New Tenant' size='small' colorVariant='primary' tooltipTitle={''} type={'button'}>
                        <RdsIcon height='12px' width='12px' name={'plus'}></RdsIcon>
                    </RdsButton>
                    {/* <rds-button [label]="translate.instant('New Tenant')" [size]="'small'" [colorVariant]="'primary'"
                        (click)="newTenant($event, true)" [showLoadingSpinner]="buttonSpinnerForNewUser">
                        <rds-icon left name="plus" height="12px" width="12px"></rds-icon>
                    </rds-button> */}
                </div>
                <div className="col-md-12">
                    <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
                        <RdsCompDataTable></RdsCompDataTable>
                        {/* <app-rds-data-table [tableData]="tableData" [inlineEdit]="false" [pagination]="true"
                            [recordsPerPage]="10" [actions]="actions" (onActionSelection)="onActionSelect($event)"
                            noDataTitle="Currently you do not have tenant" [tableHeaders]="tenantHeaders"
                            [isShimmer]="isShimmer"></app-rds-data-table> */}
                    </div>
                </div>
            </div>
            <div className="mobile-btn position-absolute bottom-0 end-0 my-5 me-5">
                <RdsFabMenu listItems={[{ value: 'New Tenant', some: 'value', key: 'new', icon: 'plus', iconWidth: '20px', iconHeight: '20px' },]} colorVariant="primary" menuiconHeight='12px' menuiconWidth='12px' menuIcon='plus' onClick={}></RdsFabMenu>
                {/* <rds-fab-menu [listItems]="listItems" [menuicon]="'plus'" [colorVariant]="'primary'" [menuiconWidth]="'12px'"
                    [menuiconHeight]="'12px'" (onSelect)="onSelectMenu($event)"></rds-fab-menu> */}
            </div>
        </div>
        <RdsOffcanvas canvasTitle='New Tenant' width='650px' placement='end'>
            <
            
        </RdsOffcanvas>
        <rds-offcanvas [canvasTitle]="translate.instant(canvasTitle)" [offId]="'tenantOffcanvas'" [offcanvaswidth]="650"
            [placement]="'end'" *ngIf="viewCanvas" [bodySpacing]="true" (onClose)="close()">
            <rds-nav-tab [navtabsItems]="navtabsItems" (onClicktab)="getSelectedNavTab($event)" [activepage]="activePage"
                [horizontalAlignment]="'start'" [verticalAlignment]="false" [pills]="false" [tabs]="true" [fill]="false"
                [justified]="false">
                <div naveContent class="row tab-content m-2" id="nav-tabContent">
                    <div class="tab-pane fade px-0" [ngClass]="{'show active': activePage === 0}" id="tenant-information"
                        role="tabpanel" aria-labelledby="nav-home-tab">
                        <app-rds-comp-tenant-information (tenantInfo)="getTenantData($event)" [editionList]="editionList"
                            [tenantData]="tenantData" (onCancel)="close()" [editShimmer]="editShimmer"
                            [showEmail]="showEmailList">
                        </app-rds-comp-tenant-information>
                    </div>
                    <div class="tab-pane fade px-0" [ngClass]="{'show active': activePage === 1}" id="settings" role="tabpanel"
                        aria-labelledby="nav-home-tab">
                        <app-rds-comp-tenant-settings (tenantSettings)="getTenantSettings($event)"
                            [isTenantInfoValid]="isTenantInfoValid" [tenantSettingsInfo]="tenantSettingsInfo"
                            [showEditData]="showEditData" (onCancel)="close()">
                        </app-rds-comp-tenant-settings>
                    </div>
                    <div class="tab-pane fade" [ngClass]="{'show active': activePage === 2}" id="features" *ngIf="selectedId"
                        role="tabpanel" aria-labelledby="nav-home-tab">
                        <div class="tab-content features py-4">
                            <app-rds-comp-permission-tree [treeData]="tenantFeatures" [selectedItems]="tenantFeatureValues"
                                (getAllselectedPermissions)="getSelectedFeaturesList($event)"
                                [selectAllLabel]="'Select Features'">
                            </app-rds-comp-permission-tree>
                        </div>
                        <div class="footer-buttons">
                            <div class="col-md-12 ">
                                <rds-button [label]="translate.instant('Cancel')" [colorVariant]="'outline-primary'"
                                    [size]="'small'" (click)="close()" data-bs-dismiss="offcanvas">
                                </rds-button>
                                <rds-button [label]="translate.instant('Save')" [size]="'small'"
                                    [showLoadingSpinner]="buttonSpinnerForSave"
                                    [disabled]="!selectedFeatureList||selectedFeatureList.length===0" class="ms-2"
                                    [colorVariant]="'primary'" (click)="save()">
                                </rds-button>
                            </div>
                        </div>
                    </div>
                </div>
            </rds-nav-tab>
        </rds-offcanvas>
    </div>
    )
}