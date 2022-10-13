import React from "react";
import ReactPlayer from "react-player";
const RdsCompLogin = React.lazy(() => import("rds_component/RdsComplogin"));

var version = process.env.BUILD_DATE;

const Login = () => {

	return(

	<div>
		Latest Build Date:{version}
		<RdsCompLogin />	
		<ReactPlayer url="building_lights.mp4" width="50%" height="50%" controls autoplay/>				
	</div>
	)
};

export default Login;