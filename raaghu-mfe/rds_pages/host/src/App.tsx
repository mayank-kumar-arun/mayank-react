import React, { Suspense } from "react";

import "./App.scss";
import Main from "./Main";
import { Link } from "react-router-dom";

const App = () => {
	document.documentElement.setAttribute('theme','light')
	return (
		<Suspense>
			<Main></Main>
		</Suspense>
	);
};

export default App;
