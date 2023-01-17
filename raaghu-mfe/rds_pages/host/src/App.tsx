import React, { Suspense } from "react";

import "./App.scss";
import Main from "./Main";
// import "../../../../raaghu-themes/themes/default.scss";
// import "raaghu-themes/rds-themes/styles/default.scss";
import { Link } from "react-router-dom";
// import {RdsThemesService} from "raaghu-themes/rds-themes"

const App = () => {
	// console.log(RdsThemesService);
	document.documentElement.setAttribute('theme','light')
	return (
		<Suspense>
			<Main></Main>
		</Suspense>
	);
};

export default App;
