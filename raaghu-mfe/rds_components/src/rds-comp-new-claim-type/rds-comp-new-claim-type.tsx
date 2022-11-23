import React from 'react'
import { RdsInput, RdsTextArea } from '../rds-elements'

export interface RdsCompNewClaimTypeProps {

}

const RdsCompNewClaimType = () => {
  return (
    <>

<div>
    <div className='mb-3 row'>
        <RdsInput label="Name" placeholder='Enter  name'  redAsteriskPresent={true} />
    </div>
    <div className="mb-3 row">
        <div className="col-6">  <RdsInput label="Regex"   redAsteriskPresent={true} /></div>
        <div className="col-6">  <RdsInput label="Value Type"  redAsteriskPresent={true} placeholder='Enter a value' /></div>
    </div>
    <div className='mb-3 row'>
        <RdsInput label="Regex Description"   redAsteriskPresent={true} />
    </div>
    <div className='mb-3 row'>
        <RdsInput label="Description"  redAsteriskPresent={true}  />
    </div>
</div>
    </>
  )
}

export default RdsCompNewClaimType;