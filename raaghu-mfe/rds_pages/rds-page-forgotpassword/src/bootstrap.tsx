import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import { store, persistor } from "../../../libs/public.api";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../../../../raaghu-themes/themes/default.scss";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<div>
					<App />
				</div>
			</PersistGate>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
