import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AccountServiceProxy, IsTenantAvailableInput} from '../../shared/service-proxies';
export interface ValidateTenantState {
    Tenant: any;
    error: string|undefined|null;
    tenancyName: string|null;
    status: 'pending' | 'loading' | 'error' | 'success';
    profilePic: any;
    loginInfo: any;
}
const AccountService = new AccountServiceProxy();
export const ValidateTenantInitialState: ValidateTenantState = {    
    Tenant: { result:{} },
    tenancyName: null,
    error: null,
    status: 'pending',
    profilePic: null,
    loginInfo: null
};
export const ValidateTenantName = createAsyncThunk('tenants/ValidateTenantName',
        async(tenant:any) => {
            const response = await AccountService.isTenantAvailable(tenant);  
            const data = response.tenantId;
            const obj:{data:number|undefined,tenant:any} = {data,tenant} 
            return obj;
            
           
        }
    
    )
    export const trial = createAsyncThunk('dummy/trial',
        async() => {
            const response = await fetch('https://swapi.dev/api/planets/3/');
            const data = await response.json();
            return data.name;
        }
    )
export const ValidateTenantReducer = createSlice({
    name: 'validateTenant',
    initialState: ValidateTenantInitialState, 
    reducers: {
        // ValidateTenantName(state:ValidateTenantState, action: PayloadAction<{tenancyName: IsTenantAvailableInput}>){
        //     state.status = 'loading'
        // },
        // ValidateTenantNameSuccess(state:ValidateTenantState, action: PayloadAction<{ ValidatetenantState:any, tenancyName:string }>) {
            
        //         state.Tenant = action.payload.ValidatetenantState,
        //         state.tenancyName = action.payload.tenancyName,
        //         state.error = null,
        //         state.status = 'success'       
        // },
        // ValidateTenantNameFailure(state, action: PayloadAction<{error: string|null}>){
        //             state.error = action.payload.error,
        //             state.status = 'error'
        // },
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
        },
        GetSubscriptionExpiringData(){}
    },
    extraReducers:(builder) => {
        builder.addCase(ValidateTenantName.fulfilled,
            (state, action) =>{
                state.Tenant = action.payload.data,
                state.tenancyName = action.payload.tenant.tenancyName,
                state.error = null,
                state.status = 'success'
            })
        builder.addCase(ValidateTenantName.rejected,
            (state,  action) =>{
                state.error = action.error.message,
                    state.status = 'error'
            }) 
        builder.addCase(trial.fulfilled,
            (state,action) =>{
                state.tenancyName = action.payload;
            })
    }
});

export const loginActions = ValidateTenantReducer.actions