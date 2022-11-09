import App from "./App";
import ReactDOM from "react-dom";
import React, { Suspense } from "react";
import {store, persistor} from '../../../libs/public.api';
import { Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
ReactDOM.render(

		<Suspense>
			<Provider store = {store}>
				<PersistGate loading={null} persistor={persistor}>	

						<App />
				</PersistGate>
			</Provider>
		</Suspense>,	
			 
	document.getElementById("root")
);
