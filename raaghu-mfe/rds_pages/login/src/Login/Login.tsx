import React, { Suspense } from "react";
import ReactPlayer from "react-player";
import { ValidateTenantName,trial, Authenticate, RootState, AppDispatch, useAppDispatch } from '../../../../libs/public.api'
import { IsTenantAvailableInput,TokenAuthServiceProxy,AuthenticateModel,AuthenticateResultModel } from '../../../../libs/public.api';
import { useSelector } from 'react-redux'
// import RdsCompLogin from '../../../../rds_components/src/login/rds-comp-login'
const RdsCompLogin = React.lazy (() => import("rds_components/RdscompLogin"));

// export interface Loginprops  {
//   onLogin : {email : string  , password : string}
// }
const Login = (props: JSX.IntrinsicAttributes | (JSX.IntrinsicAttributes & React.RefAttributes<React.Component<{}, any, any>>)) => {
	const dispatch = useAppDispatch();
	const authenticateModal = new AuthenticateModel();
	authenticateModal.userNameOrEmailAddress = 'admin';
	authenticateModal.password = 'raaghu123';
	const name:any = useSelector((state: RootState) => state.validateTenant.tenancyName);
	const accessToken:any = useSelector((state: RootState) =>state.validateTenant.accessToken);
	const loginHandler =(email?:string , password? : string)=>{
		dispatch(Authenticate(authenticateModal)).then(()=>console.log(accessToken))
		dispatch(ValidateTenantName('admin')).then(()=>console.log(name))	
		
    }

	
	return(	
		<div  style={{backgroundImage: "url(/body-backgroud.svg)"}}>
			<h1>{name}</h1>
			<h1>{accessToken}</h1>
		    <div className="align-items-center d-flex justify-content-center login m-auto" style={{width: 900, height: '100%'}} >
		      <div className="container-fluid m-2">
			    <div className="bg-white row rounded-3 ">
			      <div className="col-md-6">
                     <div className="py-4 px-3">
                          <div className="pb-2">
				            <div  className="text-center">
					         <img src="Raaghu-logo-mfe-black.png"></img>
					        </div>
				         </div>					 
		                 <RdsCompLogin  onLogin = {loginHandler}/>
	                 </div>
			 </div>
			  <div className="col-md-6 order-1 order-sm-2 rounded-end position-relative align-items-center p-0" 
			    style={{backgroundImage: "url(/bg_1.png)" , backgroundSize: "cover" ,  backgroundPosition: "bottom" ,  backgroundRepeat: "no-repeat" ,  backgroundColor: "#000"}}>
         		{/* <ReactPlayer url="building_lights.mp4" autoplay muted loop/>				 */}
				 <div className="raghu1" style={{zIndex:3 ,  backgroundImage: "url(raaghu_icon.png)" , backgroundSize: "cover"}}></div>
			  </div>	

			</div>
		  </div>
		</div>
		</div>


	)
};

export default Login;