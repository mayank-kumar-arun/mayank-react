import React from 'react'
import "./rds-side-nav-new.scss"
import RdsSideNavNew from './rds-side-nav-new'

export interface RdsSideNavMainPros{
    sideNavItems: any[]
}

const RdsSideNavMain = (props: RdsSideNavMainPros) => {
  return (
    <nav id="sidebar" className="bd-links position-relative">
        <RdsSideNavNew data={props.sideNavItems}></RdsSideNavNew>
    </nav>
  )
}

export default RdsSideNavMain
