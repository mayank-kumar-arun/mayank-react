import React, { useState } from "react";
import RdsIcon from "../rds-icon";
import "./rds-popular-page.scss";

export interface RdsPopularPageProps {
  // header: string;
  itemList: any;
}

const RdsPopularPage = (props: RdsPopularPageProps) => {
  return (
    <>
      <div>
        <label className="text-muted">POPULAR PAGES</label>
        <div>
          {props.itemList.map((item: any, index: any) => (
            <div className="border-bottom d-flex align-items-center py-2 gap-2">
              <div className="p-3">
                <RdsIcon
                  name={item.icon}
                  height="23px"
                  width="23px"
                  fill={false}
                  stroke={true}
                  colorVariant="dark"
                />
              </div>

              <div className="w-100">
                <div className="fw-bold text-muted">{item.title}</div>
                <div className="text-muted">{item.subtitle}</div>
              </div>
              <div>
                <a href={item.route} className = "pointerStyle">
                  <RdsIcon
                    name="chevron_right"
                    height="47px"
                    width="7px"
                    fill={false}
                    stroke={true}
                    colorVariant="dark"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RdsPopularPage;
