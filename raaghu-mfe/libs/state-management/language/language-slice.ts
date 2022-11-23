import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AccountServiceProxy, SendPasswordResetCodeInput } from '../../shared/service-proxies';
import type { RootState } from '../index'
import { Countries, Language } from './language-models';

export interface LanguagesState {
    languages: Language;
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export interface CountryState {
    countries: Countries;
    error: string | null;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export interface DefaultLanguageState {
    defaultLanguage: string;
}

export const languageInitialState: LanguagesState = {
    languages: { items: [] },
    error: null,
    status: 'pending',
};

export const countryInitialState: CountryState = {
    countries: { languageNames: [], flags: [] },
    error: null,
    status: 'pending',
};



const languageSlice  = createSlice({
    name: 'language',
    initialState: languageInitialState,
    reducers: {
        getLanguages(state){
            
        },
        getLanguageSuccess(state){

        },
        getLanguageFailure(state){

        }
    },
    extraReducers: (builder) => {
        
          
    },
  })

export const languageReducer = languageSlice.reducer;
export const languageActions = languageSlice.actions;




