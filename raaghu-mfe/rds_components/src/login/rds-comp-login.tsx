import React,  { useState } from 'react'
import {RdsInput} from '../rds-elements';
import {RdsButton} from '../rds-elements';
import {RdsCheckbox} from '../rds-elements';
import "./rds-comp-login.scss";
import AuthGuard from '../../../libs/shared/AuthGuard'
export interface RdsCompLoginProps {
   onLogin:(email?:string,password?:string) => any
  };


const RdsCompLogin : React.FC<RdsCompLoginProps> = (props:RdsCompLoginProps) => {

	const [email,setEmail] = useState('');
	const [password , setPassword] = useState('');
	const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
	
	const isEmailValid = (email: any) => {
		if (!email || email.length === 0) {
			return false;	  
		}
		return true;
	}
	const isPasswordValid = (password : any) =>{
		if (!password || password.length === 0) {
			return false;
		  }
		  return true;
	}
	const emailhandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		if (!isEmailValid(event.target.value)) {
			setError1('Email is invalid');
		  } else {
			setError1('');
		  }
        setEmail(event.target.value);
    }
	const passwordhandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		if (!isPasswordValid(event.target.value)) {
			setError2('Password is invalid');
		} else {
			setError2('');
		}
		setPassword(event.target.value);
    }
 
	const isFormValid = isPasswordValid(password) && isEmailValid(email)

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
		props.onLogin(email,password)
		setEmail('');
		setPassword('');		
    }
	return (
		
		<div >
			<div style={{textAlign : 'center' , paddingBottom : 48}}>
			<h3 className='heading ' style={{fontWeight: 'bolder'}}>Log in</h3>
			<p style={{fontSize : 13 ,fontWeight: 550 , marginBottom : 5}} >Please Login for an account</p>
			<span style={{fontSize : 13}}>Current Tenant : Not Selected (<a href='#'>Change</a>)</span></div>
			<form onSubmit={handleSubmit}>
				<div>				
					<RdsInput
						label='Email/Username'
						placeholder='Email/Username'
						inputType='email/text'
						onChange={emailhandleChange}
						value = {email}
						name = {'email'}
					></RdsInput>
				    {error1 && <span style={{color: 'red'}}>{error1}</span>}
				</div>

				<div>
					<RdsInput
						label='Password'
						placeholder='Password'
						inputType = 'password'
						onChange = {passwordhandleChange}
						name = {'password'}
						value = {password}
					></RdsInput>
					{error2 && <span style={{color: 'red'}}>{error2}</span>}
				</div>
                <div style = {{display : 'flex' , justifyContent:'space-between', marginBottom : 30}}>
				<RdsCheckbox label = {'Remember me'} checked></RdsCheckbox>
				<a  href='#' style = {{textDecoration : 'none'}}>Forgot password ?</a>

				</div>				
			  <RdsButton
					label = 'Login'
					colorVariant ='primary'
					isDisabled = {!isFormValid}
					block = {true} tooltipTitle={''}
					type = "submit"				
				/>           
			</form>
		</div>
	);
};

export default RdsCompLogin;

