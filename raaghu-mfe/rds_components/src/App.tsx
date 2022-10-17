
import React from "react";
import RdsCompLogin from "./login/rds-comp-login";

const App = () => {

    const loginHandler =(email:string,password:string)=>{
        console.log(email);
        console.log(password);
    }
    return (

    <div>
        <RdsCompLogin ></RdsCompLogin>

    </div>
    )
		

    };

export default App;
