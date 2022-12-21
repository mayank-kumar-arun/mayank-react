import React, { useState } from 'react';
import {RdsButton,RdsFabMenu,RdsNavtabs} from '../../../../../raaghu-elements/src/index'
import {RdsCompUserManagement, RdsCompOtherSettings} from "../../../rds-components"


const Settings = () => {
    const [PaneShowOrder, setPaneShowOrder] = useState(0);
    let navtabsItems : any = [
        {
          label: 'Tenant Management',
          tablink: '#tenant-management',
          ariacontrols: 'tenant-management',
        },
        {
          label: 'User Management',
          tablink: '#user-management',
          ariacontrols: 'user-management',
        },
        {
          label: 'Security',
          tablink: '#security',
          ariacontrols: 'settings',
        },
        {
          label: 'Email(SMTP)',
          tablink: '#email',
          ariacontrols: 'email',
        },
        {
          label: 'Invoice',
          tablink: '#invoice',
          ariacontrols: 'invoice',
        },
        {
          label: 'Other-settings',
          tablink: '#other-settings',
          ariacontrols: 'other-settings',
        },
      ];

    //   const getNavtabItems=()=>{
    //     return 
    //   }
    const onSelectMenu =(event : any)=>{
        if (event.key === 'saveall') {
            onSave();
          }
    }

    const onSave=():void=>{

    }

    const NavPaneHandler = (order : number) => {
        setPaneShowOrder(order)
        return order
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12  pb-3 desktop-btn">
                    <div className="d-flex justify-content-end">
                        <RdsButton type={'button'} tooltipPlacement="bottom" tooltipTitle='SAVE ALL' label='SAVE ALL' size='small' colorVariant='primary' outlineButton={false}></RdsButton>
                        {/* <rds-button [tooltipPlacement]="'bottom'" [tooltipTitle]="translate.instant('SAVE ALL')"
                        [label]="translate.instant('SAVE ALL')" type="button" [size]="'small'" [colorVariant]="'primary'"
                        [outlineButton]="false" (click)="onSave()" icon="save" iconHeight="15px" iconWidth="15px"></rds-button> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="mobile-btn position-absolute bottom-0 end-0 my-5 me-5">
                        <RdsFabMenu onClick={onSelectMenu} listItems={[{ value: 'Save All', some: 'value', key: 'saveall', icon: 'plus', iconWidth: '20px', iconHeight: '20px' }]} menuIcon="plus" colorVariant='primary' menuiconWidth='12px' menuiconHeight='12px'></RdsFabMenu>
                    {/* <rds-fab-menu [listItems]="listItems1" [menuicon]="'plus'" [colorVariant]="'primary'" [menuiconWidth]="'12px'"
                        [menuiconHeight]="'12px'" (onSelect)="onSelectMenu($event)"></rds-fab-menu> */}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="card border-0 py-2 px-4 h-100 rounded-0 card-full-stretch ">

                        {/* <!--<ng-container *ngIf="currentAlerts&&currentAlerts.length>0">
                        <mfe-loader [config]="rdsAlertMfeConfig"></mfe-loader>
                        </ng-container>--> */}
                        <div>

                        </div>
                        <RdsNavtabs activeNavtabOrder={NavPaneHandler} fill={false} justified={false} navtabsItems={navtabsItems} type={'default'} >
                            <div  className="row tab-content" id="nav-tabContent">
                                <div className={PaneShowOrder===0?"tab-pane fade show active":"tab-pane fade"} id="tenant-management" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="row">
                                        {/* <mfe-loader [config]="rdsCompTenantManageMfeConfig"></mfe-loader> */}
                                    </div>
                                </div>
                                <div className={PaneShowOrder===1?"tab-pane fade show active":"tab-pane fade"} id="user-management" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="row">
                                        <RdsCompUserManagement Usermanagementsettings={undefined}></RdsCompUserManagement>
                                    </div>
                                </div>
                                <div className={PaneShowOrder===2?"tab-pane fade show active":"tab-pane fade"} id="security" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="row">
                                        {/* <mfe-loader [config]="rdsCompSecurityMfeConfig"></mfe-loader> */}
                                    </div>
                                </div>
                                <div className={PaneShowOrder===3?"tab-pane fade show active":"tab-pane fade"} id="email" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="row">
                                        {/* <mfe-loader [config]="rdsCompEmailMfeConfig"></mfe-loader> */}
                                    </div>
                                </div>
                                <div className={PaneShowOrder===4?"tab-pane fade show active":"tab-pane fade"} id="invoice" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="row">
                                        {/* <mfe-loader [config]="rdsCompInvoiceMfeConfig"></mfe-loader> */}
                                    </div>
                                </div>
                                <div className={PaneShowOrder===5?"tab-pane fade show active":"tab-pane fade"} id="other-settings" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="row">
                                        <RdsCompOtherSettings></RdsCompOtherSettings>
                                    </div>
                                </div>
                            </div>

                        </RdsNavtabs>
                        {/* <rds-nav-tab [navtabsItems]="getNavtabItems()" [horizontalAlignment]="'start'" [verticalAlignment]="false"
                            [pills]="false" [tabs]="true" [fill]="false" [justified]="false" (onClicktab)="onClicktab($event)"></rds-nav-tab> */}

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Settings