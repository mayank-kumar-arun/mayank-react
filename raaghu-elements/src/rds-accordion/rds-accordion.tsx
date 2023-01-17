import React, { ReactNode, useState } from "react";
import "./rds-accordion.scss";
import "../style.scss";
import { anyTypeAnnotation } from "@babel/types";
import { colors } from "../../libs/types";
import RdsAccordionItem from "./rds-accordion-item";

export interface RdsAccordionProps {
  buttonGroupItems: any[];
  colorVariant: colors;
  size: string;
  outline: boolean;
  accordiontype:string;
  select?: any;
  Flush?: boolean;
  AlwaysOpen?: boolean;
  children?: ReactNode;
  onclick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const RdsAccordion = (props: RdsAccordionProps) => {
  let [selected, setselected] = useState(props.select);
  

  const onClickhandler = (id: any) => {
    if (props.AlwaysOpen !== true) {
      if (selected == id) {
        props.buttonGroupItems[id].state = !props.buttonGroupItems[id].state;
        return setselected(null);
      } else {
        props.buttonGroupItems[id].state = !props.buttonGroupItems[id].state;
        return setselected(id);
      }
    }
  };

  return (
    <>
      {props.buttonGroupItems.map((element) => (
        <div className={` accordion accordion-${props.accordiontype} `} id={element.id}>
          <RdsAccordionItem id={element.bId} title={element.title}  open={false}>
            {!props.children && (
              <>
                <div>
                  <h6>{element.content}</h6>
                </div>
              </>
            )}
            {props.children && props.children}
          </RdsAccordionItem>
        </div>
      ))}
    </>
  );
};

export default RdsAccordion;
