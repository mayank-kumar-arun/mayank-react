import React from 'react'
import { RdsInput, RdsTextArea } from '../rds-elements'

export interface RdsCompInvoiceProps {

}

const RdsCompInvoice = () => {
  return (
    <>

<div>
    <h5 className='mt-1 mb-4'> Invoice Information</h5>
    <div className='mb-3'> 
        <RdsInput label="Legal Name" placeholder='Enter Legal name' />
    </div>
    <div className='mb-3' >
        <RdsTextArea  placeholder ="" rows={4}  label="Address" />
    </div>
</div>
    </>
  )
}

export default RdsCompInvoice;