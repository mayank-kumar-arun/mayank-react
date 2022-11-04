import React, { Suspense, useEffect } from "react";
import {  Route,useNavigate,Routes} from "react-router-dom";
const DashboardCompo = React.lazy(() => import("Dashboard/Dashboard"));
const LoginCompo = React.lazy(() => import("Login/Login"));
const Main = () =>{
    const navigate = useNavigate();
    const loginCredentials = localStorage.getItem('persist:root');
    if(loginCredentials != null){
        var credentials = JSON.parse(loginCredentials);
        var parsedCredentials = JSON.parse(credentials.login);
        var accessToken = parsedCredentials.accessToken;
    }
    // if( accessToken){
    //     navigate('/Dashboard');
    // }
    useEffect(() => {
        if( accessToken){
            navigate('/Dashboard');
        }
    },[]);
    
    
    return (
        <Suspense fallback="loading...">
            <Routes>
                {/* <Route path="/" element={accessToken && <Navigate to="/Dashboard" replace />} /> */}
                <Route path='/Dashboard' element={<DashboardCompo/>}></Route> :
                 <Route path='/' element={<LoginCompo/>}></Route>               
            </Routes>
        </Suspense>
    )

    
}

export default Main;


