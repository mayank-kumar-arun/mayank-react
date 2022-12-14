import React from 'react';
import {RdsSideNav} from '../rds-elements'

const RdsCompSideNavigation =() =>{
    return (
    <RdsSideNav sidenavItems={[{
        label: "Dashboard",
        icon: "home",
        path: ""
    },
    {
        label: "Tenant",
        icon: "tenant",
        path: "tenant"
    },
    {
        label: "Administration",
        icon: "administration",
        path: "administration",
        children: [
            {
                label: "Role",
                icon: "roles",
                pat: "role"
            },
            {
                label: "Users",
                icon:"users",
                path: "users"
            }
        ]
    },
    {
        label: "DEMO Components",
        icon: "demo_ui",
        path: "demoComponents"
    }]}></RdsSideNav>)
} 



export default RdsCompSideNavigation;