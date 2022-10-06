import React from "react";

// import ReactPlayer from "react-player";



import Rdscomplogin from '../../../../rds_component/src/components/login/rds-comp-login'




var version = process.env.BUILD_DATE;



const Login = () => {

		


    return(



    <div>

        Latest Build Date:{version}

        <Rdscomplogin />

	</div>
	)
}

export default Login;