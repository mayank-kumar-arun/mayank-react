
import React from "react";
import Rdscomplogin from "./components/login/rds-comp-login";
const loginHandler =(email:string,password:string)=>{
    console.log(email);
    console.log(password);
}
const App = () => {
    return(
    <div>
        <Rdscomplogin onLogin = {loginHandler}></Rdscomplogin>

    </div>
    );	

};

export default App;
