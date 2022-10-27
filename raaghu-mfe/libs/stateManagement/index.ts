import {configureStore} from '@reduxjs/toolkit'
import {ValidateTenantReducer} from './public.api'
import { useDispatch } from 'react-redux'
export const store = configureStore({
    reducer:{validateTenant : ValidateTenantReducer.reducer}
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 