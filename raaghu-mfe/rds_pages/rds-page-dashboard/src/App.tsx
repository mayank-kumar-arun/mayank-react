import { Suspense } from "react";
import React from "react";
import "raaghu-themes/rds-themes/styles/default.scss";
import Dashboard from "./Dashboard/Dashboard"



const App = () => (
	<Suspense>
		<Dashboard></Dashboard>				
	</Suspense>
);

export default App;