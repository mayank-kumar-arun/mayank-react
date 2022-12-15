import React, { Fragment, ReactNode, useEffect, useState } from "react";

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
        id:any
    }[]
    type: "default" | "pills" | "tabs" | "vertical"
    fill?:boolean,
    justified?:boolean
  activeNavtabOrder?:(id:any)=>void;

}

const RdsNavtabs = (props: RdsNavtabsProps) => {


    const [activeTabKey, setActiveTabKey] = useState(props.navtabsItems[0].id)
   
    useEffect(()=>{
        props.activeNavtabOrder!=undefined && props.activeNavtabOrder(activeTabKey)
    },[activeTabKey , props.navtabsItems])
    
   

    return (
        <div className="navtabs-wrapper-div">
            <ul className={"nav"
                + (props.type === "pills" ? " nav-pills" :
                    (props.type==="tabs"? " nav-tabs-our-custom":
                        (props.type==="vertical"? " flex-column nav-pills col-3" : " nav-tabs")))
                + (props.fill?" nav-fill":"")
                + (props.justified?" nav-justified":"")}>
                {props.navtabsItems.map((navtabsItem) =>
                    <li className="nav-item" key={navtabsItem.id}>
                        <a className={"nav-link pe-4 ps-4 " + (navtabsItem.id === activeTabKey ? "active " : "inactive") + (navtabsItem.disabled ? "disabled " : "")}
                            aria-current="page"
                            data-bs-target={navtabsItem.tablink}
                            aria-controls={navtabsItem.ariacontrols}
                            onClick={()=>setActiveTabKey(navtabsItem.id)}
                        >
                            {navtabsItem.icon&&<span className="pe-3"><RdsIcon name={navtabsItem.icon} height="20px" width="20px" stroke={true} /></span>}
                            <span>{navtabsItem.label}</span>
                        </a>
                    </li>
                )}
            </ul>
             {props.children}
        </div >
    )


}

export default RdsNavtabs;
