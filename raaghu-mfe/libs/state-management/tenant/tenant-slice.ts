import { Tenants } from "./tenant.models";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../index'

export interface TenantState {
    tenants: any;
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const tenantInitialState: TenantState = {
    tenants: { items: [] },
    error: null,
    status: 'pending',
};

const tenantSlice = createSlice({
    name: 'tenant',
    initialState: tenantInitialState,
    reducers: {
        getTenants: (state) => {
            state.status = 'loading'
        },
        getTenantSuccess: (state, action: PayloadAction<Tenants>) => {
            state.status = 'success',
            state.tenants = action.payload
        },
        getTenantFailure: (state, action: PayloadAction<string>) => {
            state.status = 'error',
            state.error = action.payload
        },
    },
  });

export const tenantReducer = tenantSlice.reducer;
export const tenantActions = tenantSlice.actions;
