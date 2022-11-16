import React from 'react'
import {RdsModal, RdsIcon, RdsButton, RdsLabel} from '../rds-elements'
export interface RdsCompAlertPopupProps {
    
   };
const RdsCompAlertPopup = (props:RdsCompAlertPopupProps) => {
    const CancelClick = () =>{

    }
    const DeleteClick = () => {

    }
    const modalContent = 
        <div  className="text-center py-3 " >
        <p>
            <RdsIcon height="40px" width="40px" name="delete" fill={false}
                  stroke={true} colorVariant = "danger"/>
        </p>
        <h5 className="text-dark"><RdsLabel label="Are you sure ?"/></h5>
        <p className="text-dark"><RdsLabel label="The record will be deleted permanently"/></p>
        <div className="mt-5 d-flex justify-content-evenly">
            <RdsButton onClick ={CancelClick} class = "px-2"databsdismiss="modal" arialabel='close' label="Cancel" size="'small'" type = "button" tooltipTitle = ""
                 colorVariant="primary" outlineButton={true}  />
            <RdsButton type = "button" class = "px-2" label="Delete" size="'small'" tooltipTitle = "" colorVariant="primary" databsdismiss="modal" arialabel='close'
                onClick={DeleteClick}/>
        </div>
    </div>
  return (
    <div>
        <RdsModal staticbackdrop={true} label="Delete" showModalHeader={false} showModalFooter={false}
          verticallyCentered={true} modalData={{
              modalHeader: 'Greetings',
              modalContent: modalContent
          }}/>
    </div>
  )
}

export default RdsCompAlertPopup;