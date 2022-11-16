import React, {useState} from "react";
import {RdsCheckboxGroup, RdsInput, RdsTextArea } from "../rds-elements";

export interface RdsCompApiScopeBasicResourceProps {
    resourceData:any;
}

const RdsCompApiScopeBasicResource = (props:RdsCompApiScopeBasicResourceProps) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
	const [fullname, setFullname] = useState('');

	const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');

    
	const isEmailValid = (email: any) => {
		if (!email || email.length === 0) {
			return false;	  
		}
		return true;
	}
	const isFullnameValid = (fullname : any) =>{
		if (!fullname || fullname.length === 0) {
			return false;
		  }
		  return true;
	}
    const isMessageValid = (fullname : any) =>{
		if (!fullname || fullname.length === 0) {
			return false;
		  }
		  return true;
	}
	const emailhandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        
        if (!isEmailValid(event.target.value)) {
			setError1('Please enter name');
		  } else {
			setError1('');
		  }
        setEmail(event.target.value);
    }
	const fullnamehandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
     
        if (!isFullnameValid(event.target.value)) {
			setError2('Please enter Display Name');
		} else {
			setError2('');
		}
		setFullname(event.target.value);
       
    }
    const messagehandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
       
        if (!isMessageValid(event.target.value)) {
			setError3('Description is empty');
            
		} else {
			setError3('');
		}
		setMessage(event.target.value);
    }
	const isFormValid = isFullnameValid(fullname) && isEmailValid(email) && isMessageValid(message);

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
		//props.onLogin(email,fullname)
		setEmail('');
		setFullname('');
        setMessage(' ');
    }
  return (
    <>
<div >
			
			<form onSubmit={handleSubmit}>
				<div className="mt-1 mb-3">				
					<RdsInput
						label="Name"
						placeholder='Enter name'
						inputType='email'
						onChange={emailhandleChange}
						value = {email}
						name = {'email'}
                        
				></RdsInput>
				    {error1 && <span style={{color: 'red'}}>{error1}</span>}
				</div>

				<div className=" mb-3">
					<RdsInput
						label='Display name'
						placeholder='Enter display name'
						inputType = 'text'
						onChange = {fullnamehandleChange}
                       
						name = {'Displayname'}
						value = {fullname}
					></RdsInput>
					{error2 && <span style={{color: 'red'}}>{error2}</span>}
				</div>
                <div className=" mb-4">
					<RdsTextArea
						label='Description'
						placeholder='Description'
					    onChange = {messagehandleChange}
                       
						rows ={3}
						value = {message}

					/>
					{error3  && <span style={{color: 'red'}}>{error3}</span>}                                                       
				</div>
           <div >
            <RdsCheckboxGroup itemList={props.resourceData.checklist} />
           </div>
			</form>
		</div>
    </>
  );
};
export default RdsCompApiScopeBasicResource;
