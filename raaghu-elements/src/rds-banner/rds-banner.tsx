import React, { Fragment } from "react";
import "./rds-banner.scss";
import RdsIcon from "../rds-icon";

export interface RdsBannerProps {
    alignCenter?: boolean,
    bannerText?: string,
    sticky?: boolean,
    position?: "top" | "bottom",
    colorVariant?: "primary" |"secondary" |"success" | "danger" | "warning" | "info" | "light" |"dark",
    icon?: string,
    closeButton?: boolean
}

const RdsBanner = (props: RdsBannerProps) => {

    const bannerColor = " bannerStyle bg-" + (props.colorVariant || 'primary');

   const text=(props.colorVariant != "light")?" text-white ":" text-dark ";
   const iconColor =(props.colorVariant != "light")?"light":"dark";
    const classesCss: string =
        "RdsBanner d-flex justify-content-between "
        + bannerColor + text +
        + " rounded-0 "
        + (props.sticky ?
            (props.position === 'top' ? ' fixed-top' : ' fixed-bottom bottom-0')
            : (props.position === 'top' ? ' sticky-top' : ' sticky-bottom')
        );
    

    return (
        <Fragment>
            <div className={classesCss} role="alert">
                <div className={props.alignCenter ? 'w-100 d-flex justify-content-center align-items-center' : 'd-flex align-items-center'}>
                    {props.icon && <span style={{ marginRight: "12px" }} className='d-flex align-items-center'>
                        <RdsIcon name={props.icon ? props.icon : ''}
                            stroke={true}
                            colorVariant={iconColor}
                            height="18px"
                            width="18px"
                        />
                    </span>}
                    <span>{props.bannerText}</span>
                </div>
                {props.closeButton && <div className="close-button-box d-flex justify-content-center align-items-center" >
                    <button type="button" className="btn-close p-0" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>}
            </div>
        </Fragment>
    );
};

export default RdsBanner;
