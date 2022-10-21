import App from "./App";
import ReactDOM from "react-dom";
import React from "react";
import {store} from '../../../libs/public.api';
import { Provider } from 'react-redux';
ReactDOM.render(
	<Provider store = {store}>
		<div>
		<App />
	</div>
	</Provider>,
	document.getElementById("root")
);
