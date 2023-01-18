import React, { Suspense, useState } from "react";

// import "./App.scss";
import "../../../../raaghu-themes/themes/default.scss";
import Main from "./Main";
import { Link } from "react-router-dom";

const App = () => {
	

	const [themes, setThemes] = useState("light");

	const toggleTheme = (e: any)=>{
		// console.log("Button Clicked!!2", e.target.checked);
		if(e.target.checked){
			setThemes("dark");
		}
		else {
			setThemes("light");
		}
	}

	document.documentElement.setAttribute('theme',themes)

	return (
		<Suspense>
			<Main toggleTheme={toggleTheme}></Main>
		</Suspense>
	);
};

export default App;
