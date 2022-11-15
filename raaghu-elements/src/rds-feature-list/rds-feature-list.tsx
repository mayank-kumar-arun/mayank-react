import React, { ReactNode } from "react";
import "./rds-feature-list.scss";

export interface RdsFeatureListProps {
    children: ReactNode;
    heading: string
    itemList: string[]
}

const RdsFeatureList = (props: RdsFeatureListProps) => {



    return (
        <>
            <div>
                {props.heading && <div className="RdsFeatureList__Heading">{props.heading}</div>}
                <ul className="RdsFeatureList__Ul">
                    {props.itemList.map(item =>
                        <li>
                            <span>
                                &bull;&nbsp;&nbsp;
                                {item}
                            </span>
                            <div>{props.children}</div>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default RdsFeatureList;
