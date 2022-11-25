import React, { useContext, useState } from 'react'
import RdsButton from '../../../../../raaghu-elements/src/rds-button';
import {UserContext} from "./usercontext"

const Updateorganizationtree = ({theUser}:any) => {
   
    const id = theUser.id;

    const [name, setName] = useState(theUser.name);
    const {updateUser}:any = useContext(UserContext);
    const updatedUser = {id, name}

    const handleSubmit = (e:Event) => {
        e.preventDefault();
        updateUser(id, updatedUser)
    }
  return (
    <div>
      <form action="" >
        <div className='form-group'>
        <input className="form-control" type="text" placeholder="Name" aria-label="default input example" value={name} onChange={(e)=> setName(e.target.value)} required/>
        </div>
        
        <RdsButton type={'submit'} colorVariant={'success'} ></RdsButton>
      </form>
    </div>
  )
}

export default Updateorganizationtree
