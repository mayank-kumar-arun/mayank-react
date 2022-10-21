import {RdsSideNav} from '../rds-elements'

const RdsCompAdminDashboard = () =>{
    return (
    <div>
       Admin dashboard page
       <RdsSideNav sidenavItems={[{
        label: "Dashboard",
        icon: "home",
        path: "home"
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
    }]}></RdsSideNav>
    </div>
    )
}


export default RdsCompAdminDashboard;