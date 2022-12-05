import { AnyArray } from "immer/dist/internal";
import React, { useState, useEffect, Children } from "react";
import rdsAccordion from "../../../../raaghu-elements/src/rds-accordion";
import {
  RdsAccordion,
  RdsCheckbox,
  RdsCheckboxGroup,
  RdsCheckboxParentChild,
} from "../rds-elements";
import "./rds-comp-api-scope-resource.scss";

export interface RdsCompApiScopeResourceProps {
  resources: {
    displayName: string;
    selected: boolean;
    children: {
      displayName: string;
      selected: boolean;
    }[];
  }[];
}

const RdsCompApiScopeResource = (props: RdsCompApiScopeResourceProps) => {
  const [Res, setRes] = useState<typeof props.resources>([]);
  const [CHILD, setCHILD] = useState([]);

  useEffect(() => {
    setRes(props.resources);
  });

  const handleChange = (e: any, id: number) => {
    const { name, checked } = e.target;
    let tempRES: { selected: boolean; displayName: string }[];
    if (name === "select all" && checked === true) {
      tempRES = Res[id].children.map((child, i) => {
        return { ...child, selected: true };
      });
      console.log(tempRES);
      setRes((prev) => ({ ...prev, children: tempRES }));
      console.log(Res[0].children[0].selected);

      // (setRes((prev)=>({...prev,children:[...prev.children,{name:props.resources[id].children[i].displayName,selected:true}]}))));
    }
  };

  return (
    <>
      <RdsCheckbox
        name="Select all"
        checked={false}
        label="select all"
      ></RdsCheckbox>

      <div className="col-md-12 mt-3">
        {props.resources.map((resource: any, i: number) => {
          return (
            <RdsAccordion
              key={i}
              buttonGroupItems={[
                {
                  id: "accordionOne",
                  bId: "collapseOne",
                  Bodyheading: "",
                  title: resource.displayName,
                  content: (
                    <>
                      <div className="mt-2">
                        {" "}
                        <RdsCheckbox
                          label="select all"
                          name="select all"
                          checked={false}
                          onChange={(event) => handleChange(event, i)}
                        ></RdsCheckbox>{" "}
                      </div>

                      <div className="accbodycheck mt-3">
                        {resource.children.map((check: any, idd: number) => (
                          <div key={idd} className="col-md-4">
                            <RdsCheckbox
                              label={check.displayName}
                              name={check.displayName}
                              checked={check.selected}
                            ></RdsCheckbox>
                          </div>
                        ))}
                      </div>
                    </>
                  ),
                  state: false,
                },
              ]}
              colorVariant={"primary"}
              size={"small"}
              outline={false}
            ></RdsAccordion>
          );
        })}
      </div>
    </>
  );
};

export default RdsCompApiScopeResource;
