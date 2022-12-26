import React from 'react';
import {RdsSideNav} from '../rds-elements'
import { useTranslation } from "react-i18next";

const RdsCompSideNavigation =() =>{

    const {t} = useTranslation();

    return (
    <RdsSideNav sidenavItems={[{
        label: t("Dashboard"),
        icon: "home",
        path: ""
    },
    {
        label: t("Tenant"),
        icon: "tenant",
        path: "tenant"
    },
    {
        label: t("Administration"),
        icon: "administration",
        path: "administration",
        children: [
            {
                label: t("Role"),
                icon: "roles",
                pat: "role"
            },
            {
                label: t("Users"),
                icon:"users",
                path: "users"
            }
        ]
    },
    {
        label: t("DEMO Components"),
        icon: "demo_ui",
        path: "demoComponents"
    }]}></RdsSideNav>)
} 



export default RdsCompSideNavigation;