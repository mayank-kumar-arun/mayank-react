import {createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
export interface ValidateTenantState {
    Tenant: any;
    error: string|null;
    tenancyName: string|null;
    status: 'pending' | 'loading' | 'error' | 'success';
    profilePic: any;
    loginInfo: any;
}

export const ValidateTenantInitialState: ValidateTenantState = {    
    Tenant: { result:{} },
    tenancyName: null,
    error: null,
    status: 'pending',
    profilePic: null,
    loginInfo: null
};
const ValidateTenantReducer = createSlice({
    name: 'validateTenant',
    initialState: ValidateTenantInitialState, 
    reducers: {
        ValidateTenantName(state:ValidateTenantState){
            state.status = 'loading'
        },
        ValidateTenantNameSuccess(state:ValidateTenantState, action: PayloadAction<{ ValidatetenantState:ValidateTenantState, tenancyName:string }>) {
            
                state.Tenant = action.payload.ValidatetenantState,
                state.tenancyName = action.payload.tenancyName,
                state.error = null,
                state.status = 'success'       
        },
        ValidateTenantNameFailure(state, action: PayloadAction<{error: string|null}>){
                    state.error = action.payload.error,
                    state.status = 'error'
        },
        getCurrentLoginInformation(state){
            state.status = 'loading'
        },
        getCurrentLoginInformationSuccess(state, action: PayloadAction<{loginInfo:null}>){
            state.loginInfo= action.payload.loginInfo,
            state.error = null,
            state.status = 'success'
        },
        getCurrentLoginInformationFailure(state, action: PayloadAction<{error:null}>){
            state.error = action.payload.error,
            state.status = 'error'
        },
        getProfilePicture(state){
            state.status = 'loading'
        },
        getProfilePictureSuccess(state, action: PayloadAction<{ProfilePictureState:{result:{}}}>){
            state.Tenant= action.payload.ProfilePictureState,
            state.error = null,
            state.status = 'success'
        },
        getProfilePictureFailure(state, action: PayloadAction<{error:null}>){
            state.error = action.payload.error,
            state.status = 'error'
        }
    }
})
export const ValidateTenantActions = ValidateTenantReducer.actions
export default ValidateTenantReducer.reducer