import {RdsNavbar} from '../rds-elements';
import {RdsDropdownList,RdsButton} from '../rds-elements'

const RdsCompTopNavigation = () =>{

    return (
        <div>
            {/* <RdsNavbar navbarItems={[{
                
                    label: "Home",
                    isActive: true,
                    navclass: 'z', 
                      
            },
            {
                label: "Features",
                isActive: true,
                navclass: '',
            },
            

            ]} title="Navbar" ></RdsNavbar> */}
            <nav className="navbar navbar-expand-sm fixed-top p-0">
                <div className="container-fluid mobile-fluid">
                    <span className="navbar-brand p-0 m-0" >
                    <img className="image" src='raaghu_icon.png' width="70" /><span className="title fw-bold text-lowercase"><b>raaghu
                            </b></span>
                    </span>
                    <button  className="navbar-toggler px-2" id="humbreger-btn" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="ps-3 ms-1 py-0 m-0 breadcrumbs">
                        <div>
                        <a className="nav-link active p-0" aria-current="page" href="#">
                            Dashboard
                            </a>
                        </div>
                        <div className="mob-description">
                        <a className="nav-link text-muted p-0 fs-6" href="#">Statistics and Report</a>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse ps-5 ms-4 py-0 m-0" id="navbarSupportedContent1">
                            <ul className="navbar-nav d-flex align-items-center ms-auto">
                                <RdsDropdownList placeholder={'Select theme'} size={''} multiSelect={''} colorVariant={''} listItems={[{value:"default"},
                                  {value:"blue"},{value:"green"},{value:"thunderbolt"}]}></RdsDropdownList>
                                 <RdsDropdownList placeholder={'Languages'} size={''} multiSelect={''} colorVariant={''} listItems={[{value:"default"},
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
                                        <RdsButton tooltipTitle={''} type={'button'}>
                                            
                                        </RdsButton>
                                        
                                    <rds-button class="position-relative" [size]="'small'" [id]="'notification'" [roundedButton]="true"
                                        [colorVariant]="'default'" type="button">
                                        <rds-icon name="notification" width="20px" height="20px"></rds-icon>
                                        <rds-badge class="notification-li" right size="smallest" Types="primary" [label]="getCount()"
                                        [pillBadges]="false" [positioned]="true" [iconBadge]="true">
                                        </rds-badge>
                                    </rds-button>
                                    <!-- <rds-icon name="notifications" width="20px"></rds-icon> -->
                                    </span>
                                </a>
                                <div class="
                                    dropdown-menu dropdown-menu-right
                                    notifications-dropdown
                                    w-md-375px
                                    border-0
                                    mt-2
                                    p-0
                                    ">
                                    <mfe-loader [config]="rdsNotoficationMfeConfig"></mfe-loader>
                                </div>
                                </li>
                                <li class="nav-item border-end px-2">
                                <rds-button [size]="'small'" [roundedButton]="true" (click)="redirectToSettings()">
                                    <span>
                                    <rds-icon name="gear" width="20px" height="20px"></rds-icon>
                                    </span>
                                </rds-button>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default RdsCompTopNavigation;

