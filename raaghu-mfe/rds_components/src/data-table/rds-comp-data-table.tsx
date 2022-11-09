import {RdsIcon,RdsInput} from '../rds-elements'

const RdsCompDataTable = () =>{
    return(
        <div>
            <div className="sm-datatable table-responsive">
                <table className="table table-hover table-bordered h-100" id="sortTable" width="400px">
                    <thead>
                        <tr>
                        {/* <ng-container *ngFor="let header of tableHeaders"> */}
                            <th scope="col">
                            <div className="header d-flex">
                                <span>Tenant</span>
                                <div className="header-options mobile-header-option cursor-pointer ps-1">
                                    <span  className="text-right sort-icons mobile-sort" >
                                    <RdsIcon name={'up_arrow'} width="12px" height='12px'></RdsIcon> 
                                    <RdsIcon name={'down_arrow'} width="12px" height='12px'></RdsIcon> 
                                        {/* <rds-icon [name]="'up_arrow'" [width]="'12px'" [height]="'12px'"
                                        [ngClass]="getDescIconClass(header)"></rds-icon> */}
                                        {/* <rds-icon [name]="'down_arrow'" [width]="'12px'" [height]="'12px'"
                                        [ngClass]="getAscIconClass(header)"></rds-icon> */}
                                    </span>
                                    <div className="btn-group dropend">
                                        <span className="text-right sort-icons sortable" id="search-dropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                                            <RdsIcon name={'filter'} height="12px" width='12px'></RdsIcon>
                                        
                                        </span>
                                        <ul className="dropdown-menu searchModal p-1 border-0" aria-labelledby="dropdownMenuButton1">
                                            <div>
                                                <div>
                                                    <RdsInput placeholder='Search here ...' size='small'></RdsInput>
                                                {/* <rds-input [placeholder]="translate.instant('Search here')+' ...'"
                                                    [inputType]="header.dataType" [icon]="'search'" [name]="header.key" [size]="'small'"
                                                    [(ngModel)]="header[header.key+'Filter']" ngDefaultControl
                                                    (keyup)="onKeyup($event,header)"></rds-input> */}
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </th>
                           <th > "Actions"</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr >
                            <ng-container *ngFor="let column of tableHeaders">
                            <ng-container *ngIf="column.dataType.toLowerCase()==='html'&&!data.isEdit; else iconTemplate">
                                <td [innerHTML]="data[column.key]" class="align-middle"></td>
                            </ng-container>

                            <td>
                                <RdsIcon name={''} width="" height="" colorVariant='' ></RdsIcon>
                                <rds-icon [name]="data[column.key].icon" [width]="data[column.key].width"
                                [colorVariant]="data[column.key].colorVariant" [height]="data[column.key].height"></rds-icon>
                            </td>
                            <ng-template #iconTemplate>
                                <ng-container *ngIf="column.dataType.toLowerCase()==='icon'&&!data.isEdit; else nonTemplateData">
                                </ng-container>
                            </ng-template>

                            <ng-template #nonTemplateData>
                                <td className="align-middle" (click)="onSelectData(data)">
                                <ng-container *ngIf="!data.isEdit; else editTemplate">
                                    {{data[column.key]}}
                                </ng-container>
                                <ng-template #editTemplate>
                                    <ng-container [ngSwitch]="column.dataType.toLowerCase()">
                                    <ng-container *ngSwitchCase="'number'">
                                        <rds-input [(ngModel)]="data[column.key]" #numberField="ngModel" [disabled]="column.disabled"
                                        [value]="data[column.key]" [inputType]="'number'" ngDefaultControl>
                                        </rds-input>
                                        <small className="error"
                                        *ngIf="(numberField.dirty || numberField.touched)&&column.required&&(data[column.key]===''||data[column.key]===undefined)">
                                        {{translate.instant(column.displayName)}} {{translate.instant('is required')}}</small>
                                    </ng-container>
                                    <ng-container *ngSwitchCase="'text'">
                                        <rds-input required [(ngModel)]="data[column.key]" [value]="data[column.key]"
                                        [disabled]="column.disabled" [placeholder]=column.displayName #textField="ngModel"
                                        [inputType]="'text'" ngDefaultControl></rds-input>
                                        <small class="error"
                                        *ngIf="(textField.dirty || textField.touched)&&column.required&&(data[column.key]===''||!data[column.key])">
                                        {{translate.instant(column.displayName)}} {{translate.instant('is required')}}</small>

                                    </ng-container>
                                    <ng-container *ngSwitchCase="'html'">
                                        <rds-input required [(ngModel)]="data[column.key]" [value]="data[column.key]"
                                        [disabled]="column.disabled" [inputType]="'text'" ngDefaultControl>
                                        </rds-input>
                                        <small class="error" *ngIf="column.required&&(data[column.key]===''||!data[column.key])">
                                        {{translate.instant(column.displayName)}} {{translate.instant('is required')}}</small>

                                    </ng-container>
                                    </ng-container>
                                </ng-template>
                                </td>
                            </ng-template>
                            </ng-container>
                            <td *ngIf="actions.length>0" class="align-middle">
                            <div class="d-flex align-items-center">
                                <div class="dropdown" *ngIf="!data.isEdit; else editActionTemplate">
                                <rds-button [colorVariant]="'default'" [submit]="false" [block]="false" [size]="'small'"
                                    [iconFill]="true" [iconStroke]="false" [disabled]="false" [outlineButton]="true"
                                    [roundedButton]="true" icon="three_dots" [iconHeight]="'16px'" [iconWidth]="'16px'"
                                    [label]="data?.name+'_action'" tooltipTitle="" tooltipPlacement="bottom" (click)="openAction()"
                                    id="action-dropdown" data-bs-toggle="dropdown" aria-expanded="false"></rds-button>
                                <div class="dropdown-menu" aria-labelledby="action-dropdown">
                                    <ng-container *ngFor="let action of actions">
                                    <a class="dropdown-item" [attr.aria-label]="'Update'+action.displayName+data?.name"
                                        (click)="onActionSelect(action,data)">{{translate.instant(action.displayName)}}</a>
                                    </ng-container>
                                </div>
                                </div>
                                <ng-container *ngIf="showConfirmationPopup">
                                <app-rds-comp-alert-popup [alertID]="'deleteModal'" (onCancel)="close()" (onDelete)="delete()"
                                    [alertData]="alertData">
                                </app-rds-comp-alert-popup>
                                </ng-container>
                                <ng-template #editActionTemplate>
                                <rds-button class="action" [colorVariant]="'primary'" [roundedButton]="true" [size]="'medium'"
                                    [icon]="'check_mark'" [iconHeight]="'10px'" [iconWidth]="'20px'" (click)="saveChanges(data)">
                                </rds-button>

                                <rds-button class="ms-2" (click)="closeEdit(data)" [roundedButton]="true" [tooltipPlacement]="'top'"
                                    [colorVariant]="'danger'" [size]="'medium'" [icon]="'cross_mark'" [iconHeight]="'10px'"
                                    [iconWidth]="'20px'">
                                </rds-button>
                                </ng-template>
                            </div>
                            </td>

                        </tr>
                        </tbody>
                </table>
            </div>
        </div>
    )
}

export default RdsCompDataTable;