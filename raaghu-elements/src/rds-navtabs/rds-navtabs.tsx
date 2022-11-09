import React, { Fragment, useState } from "react";
import { Colors, IconName, Placements } from "../Types";
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
        icon?: IconName,
        subText?: string,
        disabled?: boolean,
    }[]
    type?: "default" | "pills" | "tabs" | "vertical"
    fill?:boolean,
    justified?:boolean
}

const RdsNavtabs = (props: RdsNavtabsProps) => {

    // const ulClasses = "nav "+ "nav-" + props.type

    const [activeTabKey, setActiveTabKey] = useState(0)





    return (
        <div>
            <ul className={"nav"
                + (props.type === "pills" ? " nav-pills" :
                    (props.type==="tabs"? " nav-tabs-our-custom":
                        (props.type==="vertical"? " flex-column nav-pills col-3" : " nav-tabs")))
                + (props.fill?" nav-fill":"")
                + (props.justified?" nav-justified":"")}>
                {props.navtabsItems.map((navtabsItem, i) =>
                    <li className="nav-item pe-2 ps-2" key={i}>
                        <a className={"nav-link " + (i === activeTabKey ? "active " : "") + (navtabsItem.disabled ? "disabled " : "")}
                            aria-current="page"
                            data-bs-target={navtabsItem.tablink}
                            aria-controls={navtabsItem.ariacontrols}
                            onClick={() => { setActiveTabKey(i) }}
                        >
                            {navtabsItem.icon&&<span className="pe-3"><RdsIcon name={navtabsItem.icon} height="20px" width="20px" stroke={true} /></span>}
                            <span>{navtabsItem.label}</span>
                        </a>
                    </li>
                )}
            </ul>

            {/* <div className="tab-content" id="ex1-content">
                <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home"
                >
                    Tab 1 content
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile">
                    Tab 2 content
                </div>
                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact">
                    Tab 3 content
                </div><div className="tab-pane fade" id="nav-deabled" role="tabpanel" aria-labelledby="ex1-tab-4">
                    Tab 4 content
                </div>
            </div> */}



        </div>
    )


}

export default RdsNavtabs;
