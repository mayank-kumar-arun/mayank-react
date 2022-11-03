import React, { Fragment, useState } from "react";
import { Colors, Placements } from "../Types";
import RdsButton from "../rds-button/rds-button";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./rds-counter.scss";



export interface RdsNavtabsProps {
    type?: string
    navtabsItems: {
        label: string,
        tablink?: string,
        ariacontrols?: string,
        icon?: string,
        subText?: string,
    }[]
}

const RdsNavtabs = (props: RdsNavtabsProps) => {





    // return (
        // <Fragment>
        // <div>
        //     <span> This is navtabs </span>


        (props.navtabsItems).map(
            (navtabsItem: any) => {
                return(
                <div></div>
                )
            }
        )
            

         {/* </Fragment> */ }
        // </div>
    // )
}

export default RdsNavtabs;
