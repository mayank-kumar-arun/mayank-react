import React from "react";
import { ValidateTenantName,trial, Authenticate, RootState, AppDispatch, useAppDispatch,loginActions } from '../../../../libs/public.api'
import { IsTenantAvailableInput,TokenAuthServiceProxy,AuthenticateModel,AuthenticateResultModel } from '../../../../libs/public.api';
import { useSelector } from 'react-redux'

const RdsCompLogin = React.lazy (() => import("rds_components/RdscompLogin"));

const Login = (props: JSX.IntrinsicAttributes | (JSX.IntrinsicAttributes & React.RefAttributes<React.Component<{}, any, any>>)) => {
	const dispatch: any = useAppDispatch();
	const accessToken:any = useSelector((state: RootState) =>state.login.accessToken);
	
		if(accessToken != undefined){
			// dispatch(loginActions.getProfilePicture());
			// dispatch(loginActions.GetSubscriptionExpiringData());
			
		}

	
		const loginHandler = (email:string , password : string)=>{	
		const authenticateModal = new AuthenticateModel();
		authenticateModal.userNameOrEmailAddress = email;
		authenticateModal.password = password;
		authenticateModal.rememberClient = true;
	    dispatch(Authenticate(authenticateModal));				
    }

	
	return(	
		<div  style={{backgroundImage: "url(/body-backgroud.svg)"}}>
			{accessToken!=undefined && <h1>Loggedin</h1>}
		    <div className="align-items-center d-flex justify-content-center login m-auto" style={{width: 900, height: '100%'}} >
		      <div className="container-fluid m-2">
			    <div className="bg-white row rounded-3 " style={{height: 524}}>
			      <div className="col-md-6">
                     <div className="py-4 px-3">
                          <div className="pb-4">
				            <div  className="text-center">
					         <img src="raaghu_text_logo.svg"></img>
					        </div>
				         </div>					 
		                 <RdsCompLogin  onLogin = {loginHandler}/>
	                 </div>
			      </div>
						<div className="col-md-6 order-1 order-sm-2 rounded-end position-relative align-items-center p-0" 
						   style={{  backgroundRepeat: "no-repeat" ,  backgroundColor: "#000" , height : 524}}>
         						
							<video className="video position-relative" autoPlay muted loop style={{width: 442 , height : 524}}>
								<source src = "building_lights.mp4" type="video/mp4"></source>
							</video>
							<img className="position-absolute" style={{zIndex: '3' ,  backgroundSize: "cover" , top: 240 , left:196,width:50, height:50}} src="raaghu_icon.png"></img>
							
							
			            </div>	

			    </div>
		      </div>
		    </div>
		</div>


	)
};

export default Login;