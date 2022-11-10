import React from "react";

const TenantListcompo = React.lazy (() => import("rds_components/RdsCompTenantList"));

const Tenant = () =>{
    return (
        <div>
            <TenantListcompo></TenantListcompo>
        </div>
    )
}

export default Tenant;