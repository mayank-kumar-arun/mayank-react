
import React, { useState } from 'react'
import RdsIcon from '../../../../raaghu-elements/src/rds-icon';

const OrganizationParent = ( {organizationchildren}:any ) => {
  const [isVisible, setIsVisible] = useState(true);
  const expand = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="position-relative"  style={{ paddingLeft: 10 }}>
       <div className="d-flex align-items-center">
       {/* <span className="mt-1 d-flex align-items-center"> */}
      <span  style={{marginRight:10}} onClick={expand}>{organizationchildren.name}</span>
      
      <RdsIcon
                  class={"px-4"}
                  name={"plus"}
                  stroke={true}
                  colorVariant={"primary"}
                  height={"15px"}
                  width={"15px"}
                  
                ></RdsIcon>
                <RdsIcon
                  name={"pencil"}
                  stroke={true}
                  colorVariant={"primary"}
                  height={"15px"}
                  width={"15px"}
                  class={"mx-2"}
                ></RdsIcon>
                <RdsIcon
                  name={"delete"}
                  stroke={true}
                  colorVariant={"primary"}
                  height={"15px"}
                  width={"15px"}
                  class={"mx-2"}
                ></RdsIcon>
      {/* </span> */}
      </div>
      {isVisible ? (
        organizationchildren.children.map((child:any) => {
          return (
            <div style={{ paddingLeft: 35, paddingTop:10 }}>
            <span onClick={expand}>{child.name}</span>
            {child?.children?.map((subChild:any) => {
              return (
                <div style={{ paddingLeft: 35, paddingTop:10}}>
                  <span onClick={expand}>{subChild?.name}</span>
                  {subChild.children?.map((subChildInner:any) => {
                    return (
                      <div style={{ paddingLeft: 35, paddingTop:10 }}>
                        <span onClick={expand}>{subChildInner?.name}</span>
                        {subChildInner.childrenren?.map((subChildInner2:any) => {
                          return (
                            <div>
                              <span>{subChildInner2.name}</span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  )
}
export default OrganizationParent


