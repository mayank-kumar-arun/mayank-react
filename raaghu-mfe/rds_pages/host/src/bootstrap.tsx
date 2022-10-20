import App from "./App";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
	<div>
		<BrowserRouter>
		   <App />
		</BrowserRouter>
		
	</div>,
	document.getElementById("root")
);
