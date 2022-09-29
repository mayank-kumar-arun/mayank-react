import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const DashboardCompo = React.lazy(() => import("Dashboard/Dashboard"));
const LoginCompo = React.lazy(() => import("Login/Login"));


const Main = () =>{
    return (
        <Suspense>
    <Routes>	
    <Route path='/Dashboard' element={<DashboardCompo/>}/>
    <Route path='/Login' element={<LoginCompo/>}></Route>
     </Routes>

        </Suspense>
    
    )

    
}

export default Main;