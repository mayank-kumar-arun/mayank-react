import React, { Suspense } from "react";
import Main from "./Main";
import "../../../../raaghu-themes/themes/default.scss";
import { Link } from "react-router-dom";

const App = () => {
	return (
		<Suspense>
			<Main></Main>
		</Suspense>
	);
};

export default App;
