import React from 'react';
import { Fragment, ReactNode } from 'react';
import {RdsSearch,RdsCheckbox, RdsIcon, RdsCounter} from '../rds-elements'
import { PermissionNode , TreeType} from './pemission.model';

export interface RdsCompPermissionTreeProps {
    selectAllLabel? : string;
    selectedItems? : PermissionNode[] ;
    treeData : PermissionNode[];
    permissions? : any;
    TreeType? : TreeType[];
    mutable?:boolean;
    multiselectTree?:boolean;
    getAllselectedPermissions: React.EventHandler<any>
}

const RdsCompPermissionTree = (props:RdsCompPermissionTreeProps) =>{
    const setStateBasedOnMutable=(lastNode: boolean, node: PermissionNode) =>{
        if(!props.mutable && lastNode && node.children.length === 0){
            return false;
        }
        return true;
    }
    
    return (
        <div >
            <div className="checkedstyle flush-border treeview-flush ">
                <>
                    <div className="col-md-12 mt-3 pt-1">
                        <RdsSearch placeholder='Search' size='small'></RdsSearch>
                        {/* <rds-search-input placeholder="Search" icon="search" size="small"> </rds-search-input> */}
                    </div>
                    
                    {props.multiselectTree && <div className="d-flex align-items-center checkedstyle mt-3">

                        <div className="node-dot position-relative">
                            <RdsCheckbox label={''}  ></RdsCheckbox>
                            {/* <rds-checkbox  [attr.id]="'Selectall'" (onChange)="selectAllFeature($event)"
                                [checked]="checkSelectAll(treeData)" class="position-absolute" [disabled]="false" [switch]="false"
                                [inline]="false" [id]="'checkSelectAll'">
                            </rds-checkbox> */}
                        </div>
                        <span className="node-label"><span className="mr-4">{props.selectAllLabel}</span></span>
                        </div> }

                    
                    {props.treeData?.map((node:any,i:any)=>{
                        <div className='position-relative'> 
                            {setStateBasedOnMutable(i === props.treeData.length-1,node) &&  <div className='vertical-dotted-line'></div>}
                            <div className='d-flex align-items-center position-relative' >
                                {node.children.length>0 && <RdsIcon name={'cheveron_down'} height="13px" width='13px' ></RdsIcon>}
                                
                                {props.TreeType && <div className="node-dot position-relative" >
                                    <RdsCheckbox label={''}></RdsCheckbox>
                                    <div className='horizontal-dotted-line'></div>
                                </div>}
                                
                                <span  className="node-label text-nowrap cursor-pointer ms-2">
                                    <span className='mr-4' >{node.data.displayName}</span>
                                </span>


                                {node.data.inputType && node.data.inputType.name == "SINGLE_LINE_STRING" &&  <div>{props.permissions.map((item: any)=>{
                                        <div className="mx-3 mt-2  sm-ms-3">
                                            <RdsCounter colorVariant='primary' counterValue={item.value} min={0} max={26} width={124}></RdsCounter>
                                        </div>
                                    })}</div>}
                                
                            </div>

                        </div>})}
                </>
            </div>
         </div>
                
    )
}

export default RdsCompPermissionTree;