import React from 'react';
import './rds-popular-pages.scss';
import RdsIcon from '../rds-icon/rds-icon';

export interface RdsPopularPagesProps {
    popularPageItems: {
        title?: string
        subtitle?: string
        icon?: string
        route?: string
    }[]
}


const RdsPopularPages = (props: RdsPopularPagesProps) => {



    return (
        <>
            <label className="text-muted">
                POPULAR PAGES
            </label>
            <div>
                {props.popularPageItems.map(popularPageItem =>
                    <div className="border-bottom d-flex align-items-center py-2 gap-2">

                        <div className="p-3">
                            <RdsIcon
                                name={popularPageItem.icon?popularPageItem.icon:""}
                                height="23px"
                                fill={false}
                                stroke={true}
                                width="23px"
                            />
                        </div>

                        <div className="w-100">
                            <div className="fw-bold text-muted"> {popularPageItem.title} </div>
                            <div className="text-muted"> {popularPageItem.subtitle} </div>
                        </div>

                        <div>
                            <a href={popularPageItem.route}>
                                <RdsIcon
                                    height="47px"
                                    fill={false}
                                    stroke={true}
                                    width="7px"
                                    name="chevron_right"
                                    class="pointerStyle"
                                />
                            </a>
                        </div>

                    </div>
                )
                }
            </div >
        </>
    );
}

export default RdsPopularPages;