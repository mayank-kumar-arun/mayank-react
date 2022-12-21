import React, {useState} from "react";
import { RdsButton, RdsInput } from "../rds-elements";

export interface RdsCompPasswordSettingProps {
 
}

const RdsCompPasswordSetting = (props:RdsCompPasswordSettingProps) => {
    const [curPass, setCurPass] = useState('');
    const [newPass, setNewPass] = useState('');
	const [curNewPass, setCurNewPass] = useState('');

	const [error1, setError1] = useState('');
    const [error2, setError2] = useState('');
    const [error3, setError3] = useState('');
	
  
	const isCurPassValid = (curPass: any) => {
		if (!curPass || curPass.length <=8) {
			return false;	  
		}
		return true;
	}
	const isNewPassValid = (newPass : any) =>{
		if (!newPass || newPass.length<=8) {
			return false;
		  }
		  return true;
	}
	const isCurNewPassValid = (curNewPass : any) =>{
		if ((!curNewPass || curNewPass.length <=8)) {
			return false;
		  }else if(newPass!=curNewPass) {
			return false;
		  }
		  return true;
	}
   
	const curPasshandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		if (!isCurPassValid(event.target.value)) {
			setError1('Current Password is invalid');
		  } else {
			setError1('');
		  }
        setCurPass(event.target.value);
    }
	const newPasshandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		if (!isNewPassValid(event.target.value)) {
			setError2('New passowrd is invalid');
		} else {
			setError2('');
		}
		setNewPass(event.target.value);
    }

	const curNewPasshandleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
	
		if (newPass != curNewPass) {
			setError3( "Password mismatch found");
		} else {
			setError3('')
		}
		setCurNewPass(event.target.value);
    }
    
	const isFormValid = isCurNewPassValid(curNewPass) && isCurPassValid(curPass) && isNewPassValid(newPass);

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
		setCurPass('');
	    setNewPass(' ');
		setCurNewPass('');
    }
  return (
    <>
<div >
			
			<form onSubmit={handleSubmit}>
				<div className="fw-normal mt-1 mb-3">				
					<RdsInput
						label='Current password '
						redAsteriskPresent={true}
						placeholder='Current password '
						inputType='password'
						onChange={curPasshandleChange}
						
						value = {curPass}
						name = {'curPass'}
					></RdsInput>
				    {error1 && <span style={{color: 'red'}}>{error1}</span>}
				</div>
                <div className=" fw-normal mb-3">
					<RdsInput
						label='New password'
						redAsteriskPresent={true}
						placeholder='New password'
						inputType='password'
						onChange = {newPasshandleChange}
						name = {'newPass'}
						value = {newPass}
					></RdsInput>
					{error2 && <span style={{color: 'red'}}>{error2}</span>}
				</div>
				<div className=" fw-normal mb-3">
					<RdsInput
						label='Confirm new password'
						redAsteriskPresent={true}
						placeholder='Confirm new password'
						inputType='password'
						onChange = {curNewPasshandleChange}
						name = {'curNewPass'}
						value = {curNewPass}
					></RdsInput>
					{error3 && <span style={{color: 'red'}}>{error3}</span>}
				</div>
				
             <div>
				<h5 className="fw-bolder">Where you are logged in</h5>
				<p className="fw-normal">We wll alert you via olivia@rdssysteminc.com if there is any unusual activity on your account.</p>
			 </div>
                			
			 <div className="row fixed-bottom m-3">
            <div className="col-2">
            <RdsButton
              label="Cancel"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="submit"
              outlineButton={true}
            />
            </div>
            <div className="col-2">
            <RdsButton
              label="Save"
              colorVariant="primary"
              isDisabled={!isFormValid}
              block={true}
              tooltipTitle={""}
              type="submit"
            />
             </div>
          </div>          
			</form>
		</div>
    </>
  );
};
export default RdsCompPasswordSetting;
