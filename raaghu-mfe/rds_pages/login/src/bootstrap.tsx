import App from "./App";
import ReactDOM from "react-dom";
import React from "react";
import {store} from '../../../libs/public.api';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
	<Provider store = {store}>
		<div>
			<BrowserRouter>
		           <App />
			</BrowserRouter>
	</div>
	</Provider>,
	document.getElementById("root")
);
