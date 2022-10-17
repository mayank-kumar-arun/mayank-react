import { Link, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Main from "./Main";


import Login from '../../login/src/Login/Login'

const App = () => {
	return (
		

      <div>
        {/* <ul>
        
          <li><Link to='/Dashboard'>Dashboard</Link></li>
          <li><Link to='/'>Login</Link></li>
        </ul>
        <hr /> */}


        <Main />     


      </div>  
		
		
		

	)

}

	


export default App;