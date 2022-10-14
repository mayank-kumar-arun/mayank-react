import React, { useState } from 'react'

// import RdsInput from '../../../../../raaghu-elements/src/components/rds-input'
// import RdsButton from '../../../../../raaghu-elements/src/components/rds-button'
import RdsInput from '../../../../raaghu-elements/src/rds-input';
import RdsButton from '../../../../raaghu-elements/src/rds-button';
import "./rds-comp-login.scss";
export interface RdsCompLoginProps {
    onLogin:(email:string, password:string)=>void
  };


const RdsCompLogin = (props:RdsCompLoginProps) => {

	type Values = {
        email : string,
        password : string,
    }
    const [values,setValues] = useState<Values>({
        email : "",
        password : "",
    });

	const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values);
        props.onLogin(values.email,values.password);
    }

	
	return (
		<div>
			
			<h3 className='heading'>Login</h3>
			<form>
				<div>
					
					<label >Email: </label>
					<RdsInput
						
						placeholder='Email'
						inputType='email'
						changeHandler={handleChange}
						name = {"email"}
						// onChange={undefined}
						// onChange={EmailChangeHandler}
						// isValid={EmailIsValid}
						// value={emailState.value}
					></RdsInput>
				</div>
				<div>
					<label>Password: </label>
					<RdsInput
						
						placeholder='Password'
						inputType='password'
						changeHandler={handleChange}
						name = {"password"}
						
						// onChange={undefined}
						// onChange={PassChangeHandler}
						// value={passwordState.value}
					></RdsInput>
				</div>
				{/* <div onClick={onLoginClick}> */}
				<RdsButton
					label='Login'
					colorVariant='primary'
					block={true} tooltipTitle={''} // onClick={undefined}
					type="submit"					
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