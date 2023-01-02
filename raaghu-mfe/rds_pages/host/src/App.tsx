import React, { Suspense } from "react";
import Main from "./Main";
import "../../../../raaghu-themes/themes/default.scss";
import { Link } from "react-router-dom";

const App = () => {
	return (
		<Suspense>
			<Link to="/Maintainance">hi</Link>
			<Main></Main>
		</Suspense>
	);
};

export default App;
