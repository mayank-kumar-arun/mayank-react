
import React, { useState } from 'react'

const OrganizationParent = ( organizationChild : any ) => {
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div style={{ paddingLeft: 10 }}>
      <span onClick={expand}>{organizationChild.name}</span>
      {isVisible ? (
        organizationChild.child.map((children:any) => {
          return (
            <div style={{ paddingLeft: 10 }}>
              <span>{children.name}</span>
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


