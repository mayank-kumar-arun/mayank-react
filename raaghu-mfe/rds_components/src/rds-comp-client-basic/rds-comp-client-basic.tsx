import React, {useState} from "react";
import { RdsCheckbox, RdsInput, RdsTextArea } from "../rds-elements";

export interface RdsCompClientBasicProps {
 
}

const RdsCompClientBasic = (props:RdsCompClientBasicProps) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
	const [fullname, setFullname] = useState('');
    const [clientUrl, setClientUrl] =useState('');
    const [logoUrl, setLogoUrl] =useState("")

	const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');
    const [error4, setError4] = useState('');
    const [error5, setError5] = useState('');
  
	const isEmailValid = (email: any) => {
		if (!email || email.length === 0) {
			return false;	  
		}
        else if(!(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))){
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

    const isClientUrlValid = (fullname : any) =>{
		if (!fullname || fullname.length === 0) {
			return false;
		  }
		  return true;
	}
    const isLogoValid = (fullname : any) =>{
		if (!fullname || fullname.length === 0) {
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
	const clientUrlhandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		if (!isClientUrlValid(event.target.value)) {
			setError4('Client Url is invalid');
		} else {
			setError4('');
		}
		setClientUrl(event.target.value);
    }
    const logoUrlhandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		if (!isLogoValid(event.target.value)) {
			setError5('Logo Url is invalid');
		} else {
			setError5('');
		}
		setLogoUrl(event.target.value);
    }
    const messagehandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		if (!isMessageValid(event.target.value)) {
			setError3('fullname is invalid');
		} else {
			setError3('');
		}
		setMessage(event.target.value);
    }
    const fullnamehandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		if (!isFullnameValid(event.target.value)) {
			setError2('fullname is invalid');
		} else {
			setError2('');
		}
		setFullname(event.target.value);
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
                <div className="row"> 
                    <div className=" col-6 mt-1 mb-3">				
                        <RdsInput
                            label='Client ID'
                            placeholder='Enter Id'
                            inputType='email'
                            onChange={emailhandleChange}
                            value = {email}
                            name = {'email'}
                        ></RdsInput>
                        {error1 && <span style={{color: 'red'}}>{error1}</span>}
                    </div>

                    <div className="col-6 mt-1 mb-3">
                        <RdsInput
                            label='Client Name'
                            placeholder='Enter Name'
                            inputType = 'text'
                            onChange = {fullnamehandleChange}
                            name = {'clientname'}
                            value = {fullname}
                        ></RdsInput>
                        {error2 && <span style={{color: 'red'}}>{error2}</span>}
                    </div>
                </div>
                <div className=" mb-4">
					<RdsTextArea
						label='Description'
						placeholder='Enter Description'
					    onChange = {messagehandleChange}
						rows ={3}
						value = {message}

					/>
					{error3 && <span style={{color: 'red'}}>{error3}</span>}                                                       
				</div>
                <div className="row"> 
                    <div className=" col-6 mt-1 mb-3">				
                        <RdsInput
                            label='Client Url'
                            placeholder='enter url'
                            inputType='url'
                            onChange={clientUrlhandleChange}
                            value = {clientUrl}
                            name = {'clientUrl'}
                        ></RdsInput>
                        {error1 && <span style={{color: 'red'}}>{error1}</span>}
                    </div>

                    <div className="col-6 mt-1 mb-3">
                        <RdsInput
                            label='Logo Url'
                            placeholder='Enter logo url'
                            inputType = 'url'
                            onChange = {logoUrlhandleChange}
                            name = {'logoUrl'}
                            value = {logoUrl}
                        ></RdsInput>
                        {error2 && <span style={{color: 'red'}}>{error2}</span>}
                    </div>
                </div>
                			
			<RdsCheckbox label="Required Consent" />          
			</form>
		</div>
    </>
  );
};
export default RdsCompClientBasic;
