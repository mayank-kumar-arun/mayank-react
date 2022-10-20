import React, { Suspense } from "react";
const RdsCompLogin = React.lazy(() => import("rds_component/Rdscomplogin"));
// import RdsCompLogin from '../../../../rds_component/src/components/login/rds-comp-login';
import {AuthenticateModel,TokenAuthServiceProxy} from '../../../../libs/public.api'
import ReactPlayer from 'react-player';
var version = process.env.BUILD_DATE;

const Login = () => {
	const TokenAuthService = new TokenAuthServiceProxy();
	const loginHandler =(email:string,password:string)=>{
		
	};
	 const authenticate =async(email:string,password:string) =>{
		const authenticateModal = new AuthenticateModel();
		authenticateModal.userNameOrEmailAddress = email;
		authenticateModal.password = password;
		const result = await TokenAuthService.authenticate(authenticateModal);
	
		if(result?.accessToken != undefined){
			console.log("user is present");
		}
	}
	return(
	 <div>
		Latest Build Date:{version}
		<RdsCompLogin onLogin = {loginHandler}/>	
		<ReactPlayer url="building_lights.mp4" width="50%" height="50%" controls autoplay/>

	 </div>
	);
		
};

export default Login;