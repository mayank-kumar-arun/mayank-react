import App from "./App";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from '../../../libs/public.api'


ReactDOM.render(
	<Provider store={store}>
	<div>
		<BrowserRouter>
		   <App />
		</BrowserRouter>
		
	</div>
	</Provider>,
	document.getElementById("root")
);
