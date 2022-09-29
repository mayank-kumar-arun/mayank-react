import {AuthGuard} from '../../../libs/public.api' 

const Rdscomplogin = () => {

	return (   
         <div>
            <AuthGuard></AuthGuard>
			<h3>Login</h3>
			 <p>Login component one</p>
		 </div>
	);
};

export default Rdscomplogin;