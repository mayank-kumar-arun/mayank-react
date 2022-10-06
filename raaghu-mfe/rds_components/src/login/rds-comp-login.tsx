import React from 'react';

import RdsInput from '../../../../raaghu-elements/src/rds-input'
import RdsButton from '../../../../raaghu-elements/src/rds-button'

import "./rds-comp-login.scss"; 



interface RdsCompLoginProps {
        email?: string,
        password?: string
    }


const RdsCompLogin = (props: RdsCompLoginProps) => {    

    const loginFormId = "loginForm";

    function loginFormSubmitHandler(event: any){

        event.preventDefault();
        console.log(event);
        console.log(event.target[0].value);
        
        const mailValue = event.target[0].value;
        console.log('Email -- ' + mailValue);

        const passValue = event.target[1].value;
        console.log('Password -- ' + passValue);
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
                        placeholder='Email'
                        inputType='email'
                    ></RdsInput>
                </div>
                <div>
                    <label>Password: </label>
                    <RdsInput
                        form={loginFormId}
                        placeholder='Password'
                        inputType='password'
                    ></RdsInput>
                </div>
                <RdsButton
                    type='submit'
                    form={loginFormId}
                    label='Login'
                    colorVariant='primary'
                    block={true}
                />

            </form>

        </div>
    );

}

export default RdsCompLogin;



