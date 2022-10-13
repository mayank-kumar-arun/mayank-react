
import React from "react";
import Rdscomplogin from "./login/rds-comp-login";

const App = () => {

    const loginHandler =(email:string,password:string)=>{
        console.log(email);
        console.log(password);
    }
    return (

    <div>
        <Rdscomplogin onLogin = {loginHandler}></Rdscomplogin>

    </div>
    )
		

    };

export default App;
