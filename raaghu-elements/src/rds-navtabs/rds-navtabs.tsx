import React, { Fragment, ReactNode, useState } from "react";

import "./rds-navtabs.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import RdsIcon from "../rds-icon";



export interface RdsNavtabsProps {
    children?: ReactNode;
    // type?: "default" | "pills" | "tabs" | "vertical"
    navtabsItems: {
        label: string,
        tablink?: string,
        ariacontrols?: string,
        icon?: string,
        subText?: string,
        disabled?: boolean,
    }[]
    type?: "default" | "pills" | "tabs" | "vertical"
    fill?:boolean,
    justified?:boolean
    activeNavtabOrder(arg:number):number

}

const RdsNavtabs = (props: RdsNavtabsProps) => {


    const [activeTabKey, setActiveTabKey] = useState(0)


    return (
        <div className="navtabs-wrapper-div">
            <ul className={"nav"
                + (props.type === "pills" ? " nav-pills" :
                    (props.type==="tabs"? " nav-tabs-our-custom":
                        (props.type==="vertical"? " flex-column nav-pills col-3" : " nav-tabs")))
                + (props.fill?" nav-fill":"")
                + (props.justified?" nav-justified":"")}>
                {props.navtabsItems.map((navtabsItem, i) =>
                    <li className="nav-item" key={i}>
                        <a className={"nav-link pe-4 ps-4 " + (i === activeTabKey ? "active " : "") + (navtabsItem.disabled ? "disabled " : "")}
                            aria-current="page"
                            data-bs-target={navtabsItem.tablink}
                            aria-controls={navtabsItem.ariacontrols}
                            onClick={() => { setActiveTabKey(i); props.activeNavtabOrder(i) }}
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

             {props.children}
        </div >
    )


}

export default RdsNavtabs;
