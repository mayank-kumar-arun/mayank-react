import { Link, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Main from "./Main";




const App = () => {
	return (
		

      <div>
        <ul>
        
          <li><Link to='/Dashboard'>Dashboard</Link></li>
          <li><Link to='/Login'>Login</Link></li>
        </ul>
        <hr />


        <Main />     


      </div>  
		
		
		

	)

}

	


export default App;