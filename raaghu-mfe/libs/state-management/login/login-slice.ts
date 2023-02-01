import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AccountServiceProxy, IsTenantAvailableInput} from '../../shared/service-proxies';
import { TokenAuthServiceProxy,AuthenticateModel,AuthenticateResultModel } from '../../shared/public.api';
export interface LoginState {
    // Tenant: any;
    // error: string|undefined|null;
    // tenancyName: string|null;
    // status: 'pending' | 'loading' | 'error' | 'success';
    // profilePic: any;
    // loginInfo: any;
    // tenantId:number|undefined;
    accessToken: string| undefined;
    refreshToken: string | undefined;
    expireDate: number | undefined;
    refreshTokenExpireDate: number | undefined;
    date: number | undefined;
    isAuth: boolean
}
const AccountService = new AccountServiceProxy();
const TokenAuthService = new TokenAuthServiceProxy();
export const LoginInitialState: LoginState = {    
    // Tenant: { result:{} },
    // tenancyName: null,
    // error: null,
    // status: 'pending',
    // profilePic: null,
    // loginInfo: null,
    // tenantId: undefined,
    accessToken: undefined,
    refreshToken: undefined,
    expireDate: undefined,
    refreshTokenExpireDate: undefined,
    date: undefined,
    isAuth: false
};
export const Authenticate = createAsyncThunk('login/Authenticate',
        async(authenticateModal:any)=>{       
            const result =  await TokenAuthService.authenticate(authenticateModal);	
            const obj: {authenticateModal:AuthenticateModel, result: AuthenticateResultModel} = 
            {authenticateModal, result};        
            return obj;}
)
export const ValidateTenantName = createAsyncThunk('tenants/ValidateTenantName',
        async(tenant:any) => {
            tenant = {tenancyName : tenant};
            const response = await AccountService.isTenantAvailable(tenant);  
            const data = response.tenantId;
            const obj:{data:number|undefined,tenant:any} = {data,tenant};
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
 const LoginSlice = createSlice({
    name: 'login',
    initialState: LoginInitialState, 
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
        // getCurrentLoginInformation(state){
        //     state.status = 'loading'
        // },
        // getCurrentLoginInformationSuccess(state, action: PayloadAction<{loginInfo:null}>){
        //     state.loginInfo= action.payload.loginInfo,
        //     state.error = null,
        //     state.status = 'success'
        // },
        // getCurrentLoginInformationFailure(state, action: PayloadAction<{error:null}>){
        //     state.error = action.payload.error,
        //     state.status = 'error'
        // },
    //     getProfilePicture(state){
    //         state.status = 'loading'
    //     },
    //     getProfilePictureSuccess(state, action: PayloadAction<{ProfilePictureState:{result:{}}}>){
    //         state.Tenant= action.payload.ProfilePictureState,
    //         state.error = null,
    //         state.status = 'success'
    //     },
    //     getProfilePictureFailure(state, action: PayloadAction<{error:null}>){
    //         state.error = action.payload.error,
    //         state.status = 'error'
    //     },
    //     GetSubscriptionExpiringData(){}
    },
    extraReducers:(builder) => {
        // builder.addCase(ValidateTenantName.fulfilled,
        //     (state, action) =>{
        //         state.tenantId = action.payload.data,
        //         state.tenancyName = action.payload.tenant.tenancyName,
        //         state.error = null,
        //         state.status = 'success'
        //     })
        // builder.addCase(ValidateTenantName.rejected,
        //     (state,  action) =>{
        //         state.error = action.error.message,
        //             state.status = 'error'
        //     }) 
        // builder.addCase(trial.fulfilled,
        //     (state,action) =>{
        //         state.tenancyName = action.payload;
        //     })
        builder.addCase(Authenticate.fulfilled,
            (state, action) =>{  
                let accessToken = action.payload.result.accessToken;   
                let refreshToken = action.payload.result.refreshToken;        
                state.accessToken = accessToken;
                state.refreshToken = refreshToken;
                if(accessToken){
                    state.isAuth = true
                }
                if(!accessToken){
                    state.isAuth = false
                }
                let tokenExpireDate = action.payload.authenticateModal.rememberClient ? new Date().getTime() + 1000 * action.payload.result.expireInSeconds : undefined;
                console.log(tokenExpireDate)
                state.expireDate = tokenExpireDate;
                state.refreshTokenExpireDate = action.payload.authenticateModal.rememberClient ? new Date().getTime() + 1000 * action.payload.result.refreshTokenExpireInSeconds : undefined;
                if(tokenExpireDate != undefined)
                state.date = Date.now() + tokenExpireDate;
                localStorage.setItem('LoginCredential', JSON.stringify({
                    token: accessToken,
                    refreshToken: refreshToken,
                    expireDate: tokenExpireDate,
                    refreshTokenExpireDate: state.refreshTokenExpireDate,
                    date: state.date,
                    isAuth: state.isAuth
                  }));
            })
    }
});
export const loginReducer = LoginSlice.reducer;
export const loginActions = LoginSlice.actions;