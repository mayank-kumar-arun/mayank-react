import { Tenants } from "./tenant.models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export interface TenantState {
  tenants: any;
  error: string | null;
  status: "pending" | "loading" | "error" | "success";
}

export const tenantInitialState: TenantState = {
  tenants: { items: [] },
  error: null,
  status: "pending",
};

const tenantSlice = createSlice({
  name: "tenant",
  initialState: tenantInitialState,
  reducers: {
    getTenants: (state) => {
      state.status = "loading";
    },
    getTenantSuccess: (state, action: PayloadAction<Tenants>) => {
      (state.status = "success"), (state.tenants = action.payload);
    },
    getTenantFailure: (state, action: PayloadAction<string>) => {
      (state.status = "error"), (state.error = action.payload);
    },
  },
});

export interface EditionsComboboxState {
  editions: any[];
  error: string | null;
  status: "pending" | "loading" | "error" | "success";
}
export const editionComboboxInitialState: EditionsComboboxState = {
  editions: [],
  error: null,
  status: "pending",
};

export const EditionComboboxSlice = createSlice({
  name: "EditionCombobox",
  initialState: editionComboboxInitialState,
  reducers: {
    getEditionComboboxItem: (state) => {
      state.status = "loading";
    },
    getEditionComboboxItemsSuccess: (state, action: PayloadAction<any>) => {
      state.editions = action.payload;
      state.error = null;
      state.status = "success";
    },
    getEditionComboboxItemsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.status = "error";
    },
  },
});
export const tenantReducer = tenantSlice.reducer;
export const tenantActions = tenantSlice.actions;
export const editionComboboxReducer = EditionComboboxSlice.reducer;
export const editionComboboxActions = EditionComboboxSlice.actions;
