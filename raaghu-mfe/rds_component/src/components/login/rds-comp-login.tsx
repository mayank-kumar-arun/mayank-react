// import { AuthGuard } from '../../../../libs/public.api'
// import AuthContext from '../../../../../shared/store/auth-context'

// // import RdsInput from '../../../../../raaghu-elements/src/components/rds-input'
// import RdsButton from '../../../../../raaghu-elements/src/components/rds-button'
import RdsInput from '../../../../../raaghu-elements/src/rds-input'
import RdsButton from '../../../../../raaghu-elements/src/rds-button'

import "./rds-comp-login.scss";
// import { useState } from '@storybook/addons';
import { useReducer, useRef, useState } from 'react';



// const RdsCompLogin = () => {

// 	interface ILoginDetails {
// 		rememeberMe: boolean,
// 		UserName: string,
// 		Password: string,
// 		userNameInputType: string,
// 		userPasswordInputType: string
// 	}

// 	const LoginDetails: ILoginDetails = {
// 		rememeberMe: false,
// 		UserName: '',
// 		Password: '',
// 		userNameInputType: 'email',
// 		userPasswordInputType: 'password'
// 	}

// 	interface OtherLoginDetails {
// 		userNameData: any;
// 		userPasswordData: any;
// 		TenantNameData: any;
// 		TenancyName: string;
// 		TenantName: string;
// 	}

// 	const submitHandler = (e: { preventDefault: () => void; }) => {
// 		// console.log(e.target.value)

// 		// if (formIsValid) {
// 		// 	authCtx.onLogin(emailState.value, passwordState.value);
// 		//   } else if (!emailIsValid) {
// 		// 	emailInputRef.current.focus();
// 		//   } else {
// 		// 	passwordInputRef.current.focus();
// 		//   }

// 		e.preventDefault();
// 		console.log('gvhbnj')

// 		console.log(emailInputRef)
// 		console.log(passwordInputRef.current)

// 		const login_details = {
// 			user_email: emailInputRef,
// 			user_pass: passwordInputRef
// 		}

// 		//
// 		/* Validation and API processing can be done here */
// 		//

// 	}

// 	// const EmailChangeHandler = (v: string | ((prevState: string) => string)) => {
// 	// 	setTempEmail(v)
// 	// }
// 	// const PassChangeHandler = (v: string | ((prevState: string) => string)) => {
// 	// 	setTempPass(v)
// 	// }

// 	// const [tempEmail, setTempEmail] = useState('')
// 	// const [tempPass, setTempPass] = useState('')


// 	const emailInputRef = useRef();
// 	const passwordInputRef = useRef();

// 	// const emailReducer = (state: { value: string; }, action: { type: string; val: string | string[]; }) => {
// 	// 	if (action.type === 'USER_INPUT') {
// 	// 		return { value: action.val, isValid: action.val.includes('@') };
// 	// 	}
// 	// 	if (action.type === 'INPUT_BLUR') {
// 	// 		return { value: state.value, isValid: state.value.includes('@') };
// 	// 	}
// 	// 	return { value: '', isValid: false };
// 	// };

// 	// const passwordReducer = (state: { value: string ; }, action: { type: string; val: string }) => {
// 	// 	if (action.type === 'USER_INPUT') {
// 	// 		return { value: action.val, isValid: action.val.trim().length > 6 };
// 	// 	}
// 	// 	if (action.type === 'INPUT_BLUR') {
// 	// 		return { value: state.value, isValid: state.value.trim().length > 6 };
// 	// 	}
// 	// 	return { value: '', isValid: false };
// 	// };

// 	// const [emailState, dispatchEmail] = useReducer(emailReducer, {
// 	// 	value: '',
// 	// 	isValid: false,
// 	// });
// 	// const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
// 	// 	value: ' ',
// 	// 	isValid: false,
// 	// });

// 	return (
// 		<div>
// 			{/* <AuthGuard></AuthGuard> */}
// 			<h3 className='heading'>Login</h3>
// 			<form>
// 				<div>
// 					<label >Email: </label>
// 					<RdsInput
// 						ref={emailInputRef}
// 						placeholder='Email'
// 						inputType='email'
// 						// onChange={undefined}
// 						// onChange={EmailChangeHandler}
// 						// isValid={EmailIsValid}
// 						// value={emailState.value}
// 					></RdsInput>
// 				</div>
// 				<div>
// 					<label>Password: </label>
// 					<RdsInput
// 						ref={passwordInputRef}
// 						placeholder='Password'
// 						inputType='password'
// 						// onChange={undefined}
// 						// onChange={PassChangeHandler}
// 						// value={passwordState.value}
// 					></RdsInput>
// 				</div>
// 				{/* <div onClick={onLoginClick}> */}
// 				<RdsButton
// 					label='Login'
// 					colorVariant='primary'
// 					block={true}
// 					// onClick={undefined}
// 					onClick={submitHandler}
// 				/>

// 				<button 
// 					type='submit'
// 					onClick={submitHandler}>
// 						Login
// 				</button>

// 				{/* <button>login</button> */}
// 				{/* </div> */}
// 				{/* <span> surprise </span> */}
// 				{/* {lol && <span> surprise </span>} */}

// 			</form>

// 			{/* <p>Login component one</p> */}
// 		</div>
// 	);
// };

// export default RdsCompLogin;






//  ---------------------------------------------------------------------------
//  ---------------------------------------------------------------------------

interface RdsCompLoginProps {
        email?: string,
        password?: string
    }


const RdsCompLogin = (props: RdsCompLoginProps) => {

    // const [loginEmailEntry, setLoginEmailEntry] = useState<String>();
    // const [loginPasswordEntry, setPasswordEmailEntry] = useState<String>();


    

    const loginFormId = "loginForm";

    function loginFormSubmitHandler(event: any){

        event.preventDefault();
        console.log(event);
        console.log(event.target[0].value);
        
        const mailValue = event.target[0].value;
        console.log('Email -- ' + mailValue);
        // props.email(mailValue);

        const passValue = event.target[1].value;
        console.log('Password -- ' + passValue);

        // setLoginEmailEntry(event.target[0].value.toString());
        // console.log(loginEmailEntry);
    }


    return (
        <div>
            {/* <AuthGuard></AuthGuard> */}
            <h3 className='heading'>Login</h3>
            <form id={loginFormId} onSubmit={loginFormSubmitHandler}>
                <div>
                    <label >Email: </label>
                    <RdsInput
                        form={loginFormId}
                        // ref={emailInputRef}
                        placeholder='Email'
                        inputType='email'
                    // onChange={undefined}
                    // onChange={EmailChangeHandler}
                    // isValid={EmailIsValid}
                    // value={emailState.value}
                    ></RdsInput>
                </div>
                <div>
                    <label>Password: </label>
                    <RdsInput
                        // ref={passwordInputRef}
                        form={loginFormId}
                        placeholder='Password'
                        inputType='password'
                    // onChange={undefined}
                    // onChange={PassChangeHandler}
                    // value={passwordState.value}
                    ></RdsInput>
                </div>
                {/* <div onClick={onLoginClick}> */}
                <RdsButton
                    type='submit'
                    form={loginFormId}
                    label='Login'
                    colorVariant='primary'
                    block={true}
                    // onClick={undefined}
                    // onClick={submitHandler}
                />

                {/* <button
                    type='submit'
                    onClick={submitHandler}>
                    Login
                </button> */}

                {/* <button>login</button> */}
                {/* </div> */}
                {/* <span> surprise </span> */}
                {/* {lol && <span> surprise </span>} */}

            </form>

            {/* <p>Login component one</p> */}
        </div>
    );

}

export default RdsCompLogin;



