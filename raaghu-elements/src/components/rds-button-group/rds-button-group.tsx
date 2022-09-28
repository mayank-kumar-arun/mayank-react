import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Colors } from '../Types';

export interface RdsButtonGroupProps {
    vertical?: boolean;
    size?:string;
    colorVariant?:Colors;
    outlineButton?:boolean;
    role?: 'checkbox' | 'radio' |'button';
    buttonGroupItems: any[];
}

const RdsButtonGroup = (props: RdsButtonGroupProps) => {

  const outlineColorVariant =
    `${props.outlineButton === true ? "outline-" : ""}` + props.colorVariant;


    return (
      <div>
        <ToggleButtonGroup name="options" type={props.role} vertical={props.vertical} 
        size={
          props.size === "small" ? "sm" : props.size === "large" ? "lg" : ""
        }
         aria-label="Basic example">
          {
            props.buttonGroupItems.map((buttonGroupItem, idx)=>
            <ToggleButton 
            variant={outlineColorVariant}
            key={idx}
            id={buttonGroupItem.id}
            value={buttonGroupItem.id}
            >
              {buttonGroupItem.icon}{buttonGroupItem.label}
            </ToggleButton>
            )
          }
        </ToggleButtonGroup>

      </div>
      );
}

export default RdsButtonGroup;