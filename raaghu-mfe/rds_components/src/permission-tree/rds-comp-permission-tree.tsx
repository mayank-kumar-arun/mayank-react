import { Fragment, ReactNode } from 'react';
import {RdsSearch,RdsCheckbox, RdsIcon, RdsCounter} from '../rds-elements'

const RdsCompPermissionTree = () =>{
   let list : any =[];
   let Permissions : any=[]
    let multiselectTree = true;
    return (
        <div >
            <div className="checkedstyle flush-border treeview-flush ">
                <div className="col-md-12 mt-3 pt-1">
                    <RdsSearch placeholder='Search' size='small'></RdsSearch>
                    {/* <rds-search-input placeholder="Search" icon="search" size="small"> </rds-search-input> */}
                </div>
                
                {multiselectTree && <div className="d-flex align-items-center checkedstyle mt-3">

                    <div className="node-dot position-relative">
                        <RdsCheckbox label={''} ></RdsCheckbox>
                        {/* <rds-checkbox  [attr.id]="'Selectall'" (onChange)="selectAllFeature($event)"
                            [checked]="checkSelectAll(treeData)" class="position-absolute" [disabled]="false" [switch]="false"
                            [inline]="false" [id]="'checkSelectAll'">
                        </rds-checkbox> */}
                    </div>
                    <span className="node-label"><span className="mr-4">selectAllLabel</span></span>
                    </div> }

                
                {list.map((a:any,i:any)=>{
                    <div className='position-relative'> 
                        <div className='vertical-dotted-line'></div>
                        <div className='d-flex align-items-center position-relative' >
                            <RdsIcon name={'cheveron_down'} height="13px" width='13px' ></RdsIcon>
                            <div className="node-dot position-relative" >
                                <RdsCheckbox label={''}></RdsCheckbox>
                                <div className='horizontal-dotted-line'></div>
                            </div>
                            <span  className="node-label text-nowrap cursor-pointer ms-2">
                                <span className='mr-4' ></span>
                            </span>
                            <div>
                                {Permissions.map((b: any,i: any)=>{
                                    <div className="mx-3 mt-2  sm-ms-3">
                                        <RdsCounter colorVariant='primary' counterValue={b} min={0} max={26} width={124}></RdsCounter>
                                    </div>
                                })}
                            </div>

                        </div>

                    </div>})}

                
                {/* <ng-container *ngTemplateOutlet="recursiveNodeTemplate; context: { list: treeData }"></ng-container> */}
                {/* <ng-template #recursiveNodeTemplate let-list="list">
                    
                    <div *ngFor="let node of list; let i = index" class="position-relative"
                        [ngStyle]="{'margin-left': list[0].level === 1 ? '24px' : node.children&&node.children.length>0? '30px':'50px'}">
                        <div class="vertical-dotted-line" *ngIf="setStateBasedOnMutable(i === list.length - 1, node)"></div>
                        <div class="d-flex align-items-center position-relative"
                            [ngClass]="{ 'active' : activepage===i, 'child' :  !collapsed }"
                            (click)="onMenuWithChildrenClick(i,node.children[0])" [id]="'menuWithChildren'+i">
                            <rds-icon [stroke]="true" class="mt-3 me-2" [name]="node.expanded?'chevron_down':'chevron_right'"
                                [height]="'13px'" [width]="'13px'" (click)="node.expanded=!node.expanded"
                                *ngIf="node.children.length>0"></rds-icon>
                            <div class="node-dot position-relative" *ngIf="TreeType.checkbox">
                                <rds-checkbox [checked]="node.selected" [disabled]="false" [switch]="false" [inline]="false"
                                    (onChange)="selectNode(node,$event)" [id]="'selectNode'"></rds-checkbox>
                                <div *ngIf="node.level !== 1" class="horizontal-dotted-line"></div>
                            </div>
                            <span #nodeLabel class="node-label text-nowrap cursor-pointer ms-2">
                                <span class="mr-4" (click)="onClicknode(node.data.displayName)">{{ node.data.displayName
                                    }}</span>
                            </span>
                            <ng-container *ngIf="node.data.inputType && node.data.inputType.name=='SINGLE_LINE_STRING'">
                                <div class="mx-3 mt-2  sm-ms-3" *ngFor="let item of permissions">
                                    <rds-counter colorVariant="primary" ngDefaultControl *ngIf="node.data.name==item.name" [min]="0"
                                        [max]="26" [width]="124" name="countervalue" [counterValue]="item.value"
                                        (counterChange)="getCounterData($event,node.data.name)">
                                    </rds-counter>
                                </div>
                            </ng-container>
                        </div>
                        <ng-container *ngIf="node.children && node.expanded">
                            <ng-container *ngTemplateOutlet="recursiveNodeTemplate; context: { list: node.children }">
                            </ng-container>
                        </ng-container>
                    </div>
                </ng-template> */}
            </div>
         </div>
                
    )
}

export default RdsCompPermissionTree;