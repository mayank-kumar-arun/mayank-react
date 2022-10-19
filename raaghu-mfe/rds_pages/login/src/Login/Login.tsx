import React from "react";
import ReactPlayer from "react-player";
// import RdsCompLogin from '../../../../rds_components/src/login/rds-comp-login'
const RdsCompLogin = React.lazy (() => import("rds_components/RdscompLogin"));

// export interface Loginprops  {
//   onLogin : {email : string  , password : string}
// }
const Login = (props: JSX.IntrinsicAttributes | (JSX.IntrinsicAttributes & React.RefAttributes<React.Component<{}, any, any>>)) => {

	const loginHandler =(email?:string , password? : string)=>{
        console.log(email);
		console.log(password);     
    }

	
	return(	
		<div  style={{backgroundImage: "url(/body-backgroud.svg)"}}>
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