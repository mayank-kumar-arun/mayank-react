import React, { Fragment, ReactNode } from "react";
import "./rds-feature-list.scss";

export interface RdsFeatureListProps {
    children: ReactNode;
    heading: string
    itemList: string[]
    columns: number
}

const RdsFeatureList = (props: RdsFeatureListProps) => {
    
    const noOfColumns = (props.columns > 0) ? props.columns : 1;
    const columnArray = (props.columns > 0) ? Array.from(Array(Math.min(props.columns, props.itemList.length)), (_: any, index: number) => index + 1) : [1];
    const listItemInEachRow = props.itemList.length / noOfColumns < 1 ? 1 : Math.ceil(props.itemList.length / noOfColumns)
    const ExtraListElements = props.itemList.length % noOfColumns

    return (
        <>
            <div>
                {props.heading && <div className="RdsFeatureList__Heading">{props.heading}</div>}
                <div className="row">
                    {columnArray.map(colNumber =>
                        <div key={"col-" + colNumber} className="col">
                            <ul className="RdsFeatureList__Ul">
                                {props.itemList.map((item, index) =>
                                    <Fragment key={"listitem" + index + "-col" + colNumber}>
                                        {index >= ((colNumber-1) * listItemInEachRow  -  ((colNumber-ExtraListElements>0&&ExtraListElements>0)?colNumber-ExtraListElements-1 :0 ) )
                                            && index < ((colNumber) * listItemInEachRow  -  ((colNumber-ExtraListElements>0&&ExtraListElements>0)?colNumber-ExtraListElements :0 ) )
                                            && <li>
                                                <span className="bullet">&bull;</span>
                                                <span>{item}</span>
                                            </li>
                                        }
                                    </Fragment>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default RdsFeatureList;
