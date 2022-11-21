import react, {createContext, useEffect, useState} from 'react';
import organizationchildren from './rds-organization-children';

const UserContext = createContext({})
const EmployeeContextProvider  = (props:any) => {
    const [user, setUser]=useState([organizationchildren])

    useEffect(()=> {
        setUser(JSON.parse(localStorage.getItem('user') as any))
    },[])

    useEffect(() => {
        	
        	localStorage.setItem("user", JSON.stringify(user));
    });

    const updateUser = (id:any, updatedUser:any) => {
        setUser(user.map((users) => users.id === id ? updatedUser : user))
    }

    return(
        <UserContext.Provider value={{updateUser}}>
        {props.children}
    </UserContext.Provider>
    )


}

export default UserContext
