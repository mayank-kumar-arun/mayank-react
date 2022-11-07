import React from "react";
import { ValidateTenantName,trial, Authenticate, RootState, AppDispatch, useAppDispatch,loginActions,getUserConfiguration } from '../../../../libs/public.api'
import { IsTenantAvailableInput,TokenAuthServiceProxy,AuthenticateModel,AuthenticateResultModel } from '../../../../libs/public.api';
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
const RdsCompLogin = React.lazy (() => import("rds_components/RdscompLogin"));

const Login = (props: JSX.IntrinsicAttributes | (JSX.IntrinsicAttributes & React.RefAttributes<React.Component<{}, any, any>>)) => {
	const dispatch: any = useAppDispatch();
	const accessToken:any = useSelector((state: RootState) =>state.login.accessToken);
	const navigate = useNavigate();
		if(accessToken != undefined){
			// dispatch(loginActions.getProfilePicture());
			// dispatch(loginActions.GetSubscriptionExpiringData());
			getUserConfiguration('login');
			navigate('/Dashboard');
		}

	
		const loginHandler = (email:string , password : string)=>{	
		localStorage.setItem("email", JSON.stringify(email));
		localStorage.setItem("password", JSON.stringify(password));
		const authenticateModal = new AuthenticateModel();
		authenticateModal.userNameOrEmailAddress = email;
		authenticateModal.password = password;
		authenticateModal.rememberClient = true;
	    dispatch(Authenticate(authenticateModal));				
    }

	
	return(	
		<div  style={{backgroundImage: "url(/body-backgroud.svg)"}}>
			{/* {accessToken!=undefined && <h1>Loggedin</h1>} */}
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
				 <div className="raghu1" style={{zIndex:3 ,  backgroundImage: "url(raaghu_icon.png)" , backgroundSize: "cover"}}></div>
			  </div>	

			</div>
		  </div>
		</div>
		</div>


	)
};

export default Login;