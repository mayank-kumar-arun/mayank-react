import {AuthGuard} from '../../../libs/public.api' 

const Rdscomplogin = () => {

	return (   
         <div>
            <AuthGuard></AuthGuard>
			 <p>Login component one</p>
		 </div>
	);
};

export default Rdscomplogin;