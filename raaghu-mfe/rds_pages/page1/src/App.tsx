
import React, { Suspense } from "react";


const CompoOne = React.lazy(() => import("rds_component/ComponentOne"));

var version = process.env.BUILD_DATE;

const App = () => (
	<Suspense>
		Latest Build Date:{version}
		<CompoOne />					
	</Suspense>
);

export default App;
