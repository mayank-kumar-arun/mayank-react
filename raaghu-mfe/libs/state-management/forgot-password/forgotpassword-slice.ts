import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AccountServiceProxy, SendPasswordResetCodeInput} from '../../shared/service-proxies';
import type { RootState } from '../index'
export interface ForgotPasswordState{
    title: string,
    message: string,
}

export const forgotPasswordInitialState: ForgotPasswordState = {
    title: '',
    message: 'Failed..',
  
}

const AccountService = new AccountServiceProxy();
const email: SendPasswordResetCodeInput = new SendPasswordResetCodeInput();

export const shouldSendPasswordResetCode = createAsyncThunk('sendPasswordResetCode/status',
    async(emailAddress: any) => {
        email.emailAddress = emailAddress;
        const response = await AccountService.sendPasswordResetCode(email);
        console.log(response);
        return response;
    }
)

const forgotPasswordSlice  = createSlice({
    name: 'forgotPassword',
    initialState: forgotPasswordInitialState,
    reducers: {
        getProfilePicture(state){
            state.message = 'loading'
        },
       
    },
    extraReducers: (builder) => {
        builder.addCase(shouldSendPasswordResetCode.fulfilled, (state, action) => {
            if(action.payload === undefined){
                state.message = 'Failed..';
                state.title = 'Error !';
            }
            else{
            state.message = 'Email Sent Successfully..';
            state.title = 'Success !';
            }
        })
        builder.addCase(shouldSendPasswordResetCode.rejected, (state, action) => {
                state.message = 'Failed..';
                state.title = 'Error !';
        })     
          
    },
  })

export const forgotPasswordReducer = forgotPasswordSlice.reducer;
export const forgotPasswordActions = forgotPasswordSlice.actions;
export const message = (state: RootState) => state.persistedReducer.forgotPassword.message