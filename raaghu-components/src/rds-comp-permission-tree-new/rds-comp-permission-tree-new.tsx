import React from 'react'
import RdsCompPermissionTreeNewChild from './rds-comp-permission-tree-new-child'

export interface RdsCompPermissionTreeNewProps {
    checkboxData : any[];
    checkedValue?: any[];
}

const RdsCompPermissionTreeNew =(props: RdsCompPermissionTreeNewProps)=>{
    return(
        <div>
            <RdsCompPermissionTreeNewChild data={props.checkboxData}></RdsCompPermissionTreeNewChild>
        </div>
    )
}

export default RdsCompPermissionTreeNew;