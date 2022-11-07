import React, { Suspense, useEffect } from "react";
import {  Route,useNavigate,Routes, Navigate} from "react-router-dom";
const DashboardCompo = React.lazy(() => import("Dashboard/Dashboard"));
const LoginCompo = React.lazy(() => import("Login/Login"));
const ForgotPassCompo = React.lazy(() => import("ForgotPassword/ForgotPassword"))

const Main = () =>{
    const navigate = useNavigate();
    var accessToken:string|undefined = undefined;
   
    useEffect(() => {
        const loginCredentials = localStorage.getItem('persist:root');
        if(loginCredentials != null){
        var credentials = JSON.parse(loginCredentials);
        var parsedCredentials = JSON.parse(credentials.login);
        accessToken = parsedCredentials.accessToken;
       
    }
        if(accessToken){
            navigate('/Dashboard');
        }
    },[accessToken]);
    
    
    return (
        <Suspense fallback="loading...">
            <Routes>
                {/* <Route path="/" element={accessToken && <Navigate to="/Dashboard" replace />} /> */}
                <Route path='/Dashboard' element={<DashboardCompo/>}></Route> :
                <Route path='/' element={<LoginCompo/>}></Route>
                <Route path='/forgot-password' element={<ForgotPassCompo/>}></Route>               
            </Routes>
        </Suspense>
    )
}

export default Main;


