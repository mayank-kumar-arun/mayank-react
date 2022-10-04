import { AuthGuard } from '../../../../libs/public.api'
import AuthContext from '../../../../../shared/store/auth-context'

// import RdsInput from '../../../../../raaghu-elements/src/components/rds-input'
// import RdsButton from '../../../../../raaghu-elements/src/components/rds-button'
import RdsInput from '../../../../../raaghu-elements/src/rds-input'
import RdsButton from '../../../../../raaghu-elements/src/rds-button'

import "./rds-comp-login.scss";
import { useState } from '@storybook/addons';
import { useReducer, useRef } from 'react';



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

	const submitHandler = () => {
		// console.log(e.target.value)

		// if (formIsValid) {
		// 	authCtx.onLogin(emailState.value, passwordState.value);
		//   } else if (!emailIsValid) {
		// 	emailInputRef.current.focus();
		//   } else {
		// 	passwordInputRef.current.focus();
		//   }

	}

	// const EmailChangeHandler = (v: string | ((prevState: string) => string)) => {
	// 	setTempEmail(v)
	// }
	// const PassChangeHandler = (v: string | ((prevState: string) => string)) => {
	// 	setTempPass(v)
	// }

	// const [tempEmail, setTempEmail] = useState('')
	// const [tempPass, setTempPass] = useState('')


	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const emailReducer = (state: { value: string; }, action: { type: string; val: string | string[]; }) => {
		if (action.type === 'USER_INPUT') {
			return { value: action.val, isValid: action.val.includes('@') };
		}
		if (action.type === 'INPUT_BLUR') {
			return { value: state.value, isValid: state.value.includes('@') };
		}
		return { value: '', isValid: false };
	};

	const passwordReducer = (state: { value: string ; }, action: { type: string; val: string }) => {
		if (action.type === 'USER_INPUT') {
			return { value: action.val, isValid: action.val.trim().length > 6 };
		}
		if (action.type === 'INPUT_BLUR') {
			return { value: state.value, isValid: state.value.trim().length > 6 };
		}
		return { value: '', isValid: false };
	};

	const [emailState, dispatchEmail] = useReducer(emailReducer, {
		value: '',
		isValid: false,
	});
	const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
		value: ' ',
		isValid: false,
	});

	return (
		<div>
			{/* <AuthGuard></AuthGuard> */}
			<h3 className='heading'>Login</h3>
			<form>
				<div>
					<label >Email: </label>
					<RdsInput
						ref={emailInputRef}
						placeholder='Email'
						inputType='email'
						// onChange={undefined}
						// onChange={EmailChangeHandler}
						// isValid={EmailIsValid}
						value={emailState.value}
					></RdsInput>
				</div>
				<div>
					<label>Password: </label>
					<RdsInput
						ref={passwordInputRef}
						placeholder='Password'
						inputType='password'
						// onChange={undefined}
						// onChange={PassChangeHandler}
						value={passwordState.value}
					></RdsInput>
				</div>
				{/* <div onClick={onLoginClick}> */}
				<RdsButton
					label='Login'
					colorVariant='primary'
					block={true}
					// onClick={undefined}
					onClick={submitHandler}
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