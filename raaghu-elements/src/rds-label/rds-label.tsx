import React from 'react';
import './rds-label.scss';

export interface RdsLabelProps{
    label?: string;
    multiline?: boolean;
    bold?: boolean;
    italic?: boolean;
}


const RdsLabel = (props: RdsLabelProps) => {



    return(
        <p className={`${!props.multiline?"singleLine":""} ${props.bold ? "bold":""} ${props.italic? "italic":""}`} 
        ><label>{props.label}</label></p>
    );
}

export default RdsLabel;