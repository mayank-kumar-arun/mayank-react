import { useState } from 'react';
import {RdsNavbar} from '../rds-elements';
import {RdsDropdownList,RdsButton,RdsIcon,RdsBadge} from '../rds-elements'

const RdsCompTopNavigation = () =>{
    let bootstrap : any
    const [tabname , settabname] = useState('');
    const [showOffcanvas , setshowOffcanvas] = useState(false);
    const [offCanvasId , setoffCanvasId] = useState('')

   const redirectToSettings = () =>{

    }

   const viewOffcanvas = ():void =>{
    setshowOffcanvas(true);
    var offcanvas = document.getElementById(offCanvasId);
    var bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
    bsOffcanvas.show()
   }

   const redirect = (type:any)=>{

   }

    return (
        <div>
            <nav className="navbar navbar-expand-sm  p-0">
                <div className="container-fluid mobile-fluid">
                    <div className="navbar-brand p-0 m-0" style={{display:"flex", width:253}}>
                        <img className="image" src='raaghu_icon.png' style={{width:"70", height:"55.125"}} /><span className="title fw-bold text-lowercase" style={{marginTop:10}}><b>raaghu</b>
                                </span>
                    </div>
                    <button  className="navbar-toggler px-2" id="humbreger-btn" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="py-0 m-0 breadcrumbs">
                        <div>
                           <a className="nav-link active p-0" aria-current="page" href="#">
                              Dashboard {tabname && <span className="mx-2"><b className="text-primary pt-1">{tabname}</b></span>}
                            </a>
                        </div>
                        <div className="mob-description">
                           <a className="nav-link text-muted p-0 fs-6" href="#">Statistics and Report</a>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse ps-5 ms-4 py-0 m-0" id="navbarSupportedContent1">
                            <ul className="navbar-nav d-flex align-items-center ms-auto">
                                <RdsDropdownList placeholder={'Select theme'} size={'small'}  className="border-0" multiSelect={''} colorVariant={'grey'} listItems={[{value:"default"},
                                  {value:"blue"},{value:"green"},{value:"thunderbolt"}]}></RdsDropdownList>
                                 <RdsDropdownList placeholder={'Languages'} className="border-0" size={'small'} multiSelect={''} colorVariant={''} listItems={[{value:"default"},
                                  {value:"blue"},{value:"green"},{value:"thunderbolt"}]}></RdsDropdownList> 
                                {/* <rds-dropdownlist [placeholder]="'Select theme'" [value]="themes.value" [borderDropdown]="false"
                                [listItems]="themes" (onSelect)="onThemeSelect($event.item.value)"></rds-dropdownlist>
                                <rds-dropdownlist [placeholder]="'Languages'" [value]="selectedLanguage.language" [icon]="selectedLanguage.icon"
                                [borderDropdown]="false" [iconHeight]="'18px'" [iconWidth]="'18px'" [listItems]="languageItems"
                                (onSelect)="onLanguageSelect($event)">
                                </rds-dropdownlist> */}
                                <li className="nav-item dropdown border-end px-2">
                                    <a className="nav-link py-0" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <span>
                                            <RdsButton class="position-relative" tooltipTitle={''} type={'button'} roundedButton colorVariant='default'>
                                                <RdsIcon name={'notification'} width="20px" height='20px'></RdsIcon>
                                                {/* <RdsBadge label={''} number={0}  size="smallest" badgeType='primary' icon={''} buttonColor={''} badgeColor={''}></RdsBadge> */}
                                            </RdsButton>
                                        </span>
                                    </a>
                                    {/* <div className="
                                        dropdown-menu dropdown-menu-right
                                        notifications-dropdown
                                        w-md-375px
                                        border-0
                                        mt-2
                                        p-0
                                        ">
                                        <mfe-loader [config]="rdsNotoficationMfeConfig"></mfe-loader>
                                    </div> */}
                                </li>
                                {/* <li className="nav-item border-end px-2">
                                    <RdsButton tooltipTitle={''} type={'button'} size="small" roundedButton onClick={redirectToSettings}>
                                        <span>
                                            <RdsIcon name={'gear'} width="20px" height='20px'></RdsIcon>
                                        </span>
                                    </RdsButton>
                                </li> */}
                            </ul>
                    </div>

                    <div className="mobile-ms">
                        <ul className="navbar-nav d-flex align-items-center flex-row gap-2">
                            {/* <li className="nav-item dropdown px-2 mobile-notification">
                                <a className="nav-link py-0" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <span>
                                        <RdsIcon name={'alert_notification'} width="20px" height='20px'></RdsIcon>
                                    </span>
                                </a>
                                <div className="
                                    dropdown-menu dropdown-menu-right
                                    notifications-dropdown
                                    w-md-375px
                                    border-0
                                    mt-2
                                    p-0
                                    ">
                                    <mfe-loader [config]="rdsNotoficationMfeConfig"></mfe-loader>
                                </div>
                            </li> */}
                            <li className="nav-item cursor-pointer" onClick={viewOffcanvas}>
                                <div className="nav-link align-items-center d-flex">
                                    <div className="px-2">
                                        {/* <!-- <rds-icon name="profile_circle" height="20px" width="20px" [stroke]="true"></rds-icon> -->
                                        <!-- <rds-avatar [WithProfilePic]="true" [profilePic]="profilePic" [Size]="'small'"></rds-avatar> --> */}
                                        <img src='profile-picture-circle.svg' alt="" height="32px" width="32px"/>
                                    </div>
                                    <div className="pe-auto">
                                        <span className="text-decoration-none"  onClick={redirect}>
                                            <span>Host Admin</span>
                                            <RdsIcon name={'chevron_down_arrow'} height="15px" width='15px' class='ms-3'></RdsIcon>
                                            <p className="mb-0  text-muted user-role">
                                               admin
                                            </p>
                                        </span>
                                    </div>

                                </div>
                            </li>
                        </ul>
                     </div>
                </div>
            </nav>
        </div>
    )
}

export default RdsCompTopNavigation;

