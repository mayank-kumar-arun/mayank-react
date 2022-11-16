import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";
import React, { Suspense } from "react";
import Main from "./Main";

const App = () => {
	return (
      <div>
        
          <Link to={"/forgot-password"} > hi</Link>
        
        <Main />     
      </div>  
	)
}

export default App;
