import { AuthGuard } from '../../../../libs/public.api'

// import RdsInput from '../../../../../raaghu-elements/src/components/rds-input'
// import RdsButton from '../../../../../raaghu-elements/src/components/rds-button'
import RdsInput from '../../../../../raaghu-elements/src/rds-input'
import RdsButton from '../../../../../raaghu-elements/src/rds-button'

import "./rds-comp-login.scss";
import { useState } from '@storybook/addons';



const RdsCompLogin = () => {

	interface ILoginDetails {
		rememeberMe: boolean,
		UserName: string,
		Password: string,
		userNameInputType: string,
		userPasswordInputType: string
	}

	const LoginDetails: ILoginDetails = {
		rememeberMe: false,
		UserName: '',
		Password: '',
		userNameInputType: 'email',
		userPasswordInputType: 'password'
	}

	interface OtherLoginDetails {
		userNameData: any;
		userPasswordData: any;
		TenantNameData: any;
		TenancyName: string;
		TenantName: string;
	}

	// const onClickHandler = () => {
	// 	// console.log(e.target.value)
	// }
	// const EmailChangeHandler = (v: string | ((prevState: string) => string)) => {
	// 	setTempEmail(v)
	// }
	// const PassChangeHandler = (v: string | ((prevState: string) => string)) => {
	// 	setTempPass(v)
	// }

	// const [tempEmail, setTempEmail] = useState('')
	// const [tempPass, setTempPass] = useState('')


	return (
		<div>
			{/* <AuthGuard></AuthGuard> */}
			<h3 className='heading'>Login</h3>
			<form>
				<div>
					<label >Email: </label>
					<RdsInput
						placeholder='Email'
						inputType='email'
						// onChange={EmailChangeHandler}
					></RdsInput>
				</div>
				<div>
					<label>Password: </label>
					<RdsInput
						placeholder='Password'
						inputType='password'
						// onChange={PassChangeHandler}
					></RdsInput>
				</div>
				{/* <div onClick={onLoginClick}> */}
				<RdsButton
					label='Login'
					colorVariant='primary'
					block={true}
					onClick={undefined}
					// onClick={onClickHandler}
				/>

				{/* <button>login</button> */}
				{/* </div> */}
				{/* <span> surprise </span> */}
				{/* {lol && <span> surprise </span>} */}

			</form>

			{/* <p>Login component one</p> */}
		</div>
	);
};

export default RdsCompLogin;