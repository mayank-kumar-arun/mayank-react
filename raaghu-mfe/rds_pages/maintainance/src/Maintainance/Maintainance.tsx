import React, {useState} from 'react'
const WebsiteLogCompo = React.lazy(() => import("rds_components/RdsCompWebsiteLog"));
const AlertPopupCompo = React.lazy(() => import("rds_components/RdsCompAlertPopup"));
const Maintainance = () => {
  // const [isDeleteClicked, setIsDeleteClicked] = useState(false);
  // const AlertHandler = () => {
  //     setIsDeleteClicked(true);
  // }
  return (
	<div>
    <WebsiteLogCompo/>
    
  <AlertPopupCompo/>
  </div>

  )
}

export default Maintainance