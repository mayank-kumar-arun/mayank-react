import React, { Fragment, useState } from "react";
import { Colors, Placements } from "../Types";
import RdsButton from "../rds-button/rds-button";

import "./rds-navtabs.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import RdsIcon from "../rds-icon";



export interface RdsNavtabsProps {
    // type?: "default" | "pills" | "tabs" | "vertical"
    navtabsItems: {
        label: string,
        tablink?: string,
        ariacontrols?: string,
        icon?: string,
        subText?: string,
    }[]
}

const RdsNavtabs = (props: RdsNavtabsProps) => {

    // const ulClasses = "nav "+ "nav-" + props.type




    return (
        <div>
            <ul className="nav nav-tabs">
                {props.navtabsItems.map((navtabsItem) =>
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                            data-bs-target={navtabsItem.tablink}
                            aria-controls={navtabsItem.ariacontrols}
                        >
                            <span><RdsIcon name={navtabsItem.icon?navtabsItem.icon:""} height="20px" width="20px" stroke={true}/></span>
                            <span>{navtabsItem.label}</span>                            
                        </a>
                    </li>
                )}
            </ul>

            <hr/>


        </div >
    )


}

export default RdsNavtabs;
